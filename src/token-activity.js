const ACTIVITY_PREF = `${ID}:token-thresholds`;
const ACTIVITY_DICTIONARIES = {
  zh: { 'activity.title':'TOKEN 活动', 'activity.today':'今日', 'activity.settings':'每日 token 界限', 'activity.description':'整个应用 · 所有会话的输入 + 输出 · 北京时间每日归零。每超过一个界限，切换一种调色盘颜色。', 'activity.limit':'界限', 'activity.invalid':'请输入三个递增的正整数。', 'activity.save':'保存界限', 'activity.reset':'恢复 100万 / 1000万 / 5000万', 'activity.loading':'正在读取用量…', 'activity.unavailable':'用量暂不可用', 'activity.stale':'连接中断 · 显示上次记录', 'activity.partial':'部分会话未能读取', 'activity.missing':'部分请求未报告用量', 'activity.input':'输入', 'activity.output':'输出', 'activity.total':'总量', 'activity.empty':'无已记录用量', 'activity.future':'尚未到来', 'activity.low':'低', 'activity.high':'高', 'activity.range':'最近 18 周 · 一格一天', 'activity.scope':'含缓存输入与推理输出，不重复叠加；仅统计应用记录的提供方用量。' },
  en: { 'activity.title':'TOKEN ACTIVITY', 'activity.today':'Today', 'activity.settings':'Daily token thresholds', 'activity.description':'All application sessions · input + output · days reset at midnight Beijing time. Each exceeded threshold selects the next palette color.', 'activity.limit':'Threshold', 'activity.invalid':'Enter three increasing positive integers.', 'activity.save':'Save thresholds', 'activity.reset':'Reset 1M / 10M / 50M', 'activity.loading':'Reading usage…', 'activity.unavailable':'Usage unavailable', 'activity.stale':'Disconnected · last recorded usage', 'activity.partial':'Some sessions could not be read', 'activity.missing':'Some requests did not report usage', 'activity.input':'Input', 'activity.output':'Output', 'activity.total':'Total', 'activity.empty':'No recorded usage', 'activity.future':'Future day', 'activity.low':'Low', 'activity.high':'High', 'activity.range':'Last 18 weeks · one day per square', 'activity.scope':'Includes cached input and reasoning output without adding them twice. Counts provider usage recorded by the application.' }
};

function createTokenActivityStore(ctx) {
  let thresholds;
  try { thresholds = normalizeTokenThresholds(JSON.parse(localStorage.getItem(ACTIVITY_PREF))); } catch { thresholds = normalizeTokenThresholds(); }
  let view = { thresholds, status: 'loading', data: null }, disposed = false, timer, controller, inFlight;
  const listeners = new Set();
  const publish = next => { if (disposed) return; view = { ...view, ...next }; for (const listener of listeners) listener(); };
  const read = async () => {
    if (disposed || document.visibilityState === 'hidden') return;
    if (inFlight) return inFlight;
    if (!ctx.connection?.rpc?.call) { publish({ status: 'unavailable' }); return; }
    controller = new AbortController();
    inFlight = (async () => {
      try {
        const result = await ctx.connection.rpc.call('/api', 'industrial-acid/token-activity', {}, controller.signal);
        if (!result.ok || !Array.isArray(result.value?.days)) throw new Error('unavailable');
        publish({ data: result.value, status: result.value.failedSessions ? 'partial' : 'ready' });
      } catch { publish({ status: view.data ? 'stale' : 'unavailable' }); }
      finally { inFlight = undefined; controller = undefined; }
    })();
    return inFlight;
  };
  const onStorage = event => {
    if (event.key !== ACTIVITY_PREF && event.key !== null) return;
    try { publish({ thresholds: normalizeTokenThresholds(JSON.parse(localStorage.getItem(ACTIVITY_PREF))) }); } catch {}
  };
  const onVisible = () => { if (document.visibilityState !== 'hidden') read(); };
  ctx.effect(() => {
    window.addEventListener('storage', onStorage); document.addEventListener('visibilitychange', onVisible);
    const disconnect = ctx.connection?.generation?.subscribe(onVisible);
    if (ctx.connection?.rpc?.call) { read(); timer = setInterval(read, 15000); }
    else publish({ status: 'unavailable' });
    return () => { disposed = true; if (timer !== undefined) clearInterval(timer); controller?.abort(); disconnect?.(); listeners.clear(); window.removeEventListener('storage', onStorage); document.removeEventListener('visibilitychange', onVisible); };
  }, `${ID}: daily token activity`);
  return {
    subscribe(listener) { listeners.add(listener); return () => listeners.delete(listener); }, getSnapshot: () => view, refresh: read,
    setThresholds(value) {
      if (!validTokenThresholds(value)) return false;
      try { localStorage.setItem(ACTIVITY_PREF, JSON.stringify(value)); } catch {}
      publish({ thresholds: [...value] }); return true;
    }
  };
}
function compactTokens(value) {
  return value >= 1000000 ? `${Number((value / 1000000).toFixed(2))}M` : value >= 1000 ? `${Number((value / 1000).toFixed(1))}K` : String(value);
}
function tokenActivityRange(level, limits) {
  return level === 1 ? `≤ ${compactTokens(limits[0])}` : level === 4 ? `> ${compactTokens(limits[2])}` : `> ${compactTokens(limits[level - 2])} · ≤ ${compactTokens(limits[level - 1])}`;
}
function TokenActivitySettings({ t, store, prefix = 'acid' }) {
  const state = React.useSyncExternalStore(store.subscribe, store.getSnapshot, store.getSnapshot);
  const [draft, setDraft] = React.useState(state.thresholds.map(String));
  React.useEffect(() => setDraft(state.thresholds.map(String)), [state.thresholds]);
  const values = draft.map(value => /^\d+$/.test(value) ? Number(value) : NaN), valid = validTokenThresholds(values);
  return h('section', { className: 'acid-token-settings', 'aria-label': t('activity.settings') },
    h('h3', null, t('activity.settings')), h('p', null, t('activity.description')),
    h('div', { className: 'acid-token-thresholds' }, ...draft.map((value, i) => h('div', { key: i },
      h('label', { htmlFor: `${prefix}-token-limit-${i}` }, `${t('activity.limit')} ${i + 1}`),
      h('input', { id: `${prefix}-token-limit-${i}`, type: 'number', min: 1, step: 1, inputMode: 'numeric', value, 'data-token-limit': i, 'aria-invalid': !valid, onChange: event => setDraft(draft.map((old, n) => n === i ? event.target.value : old)) })))),
    h('div', { className: 'acid-token-settings-actions' }, h('button', { type: 'button', disabled: !valid, 'data-token-save': true, onClick: () => store.setThresholds(values) }, t('activity.save')),
      h('button', { type: 'button', 'data-token-reset': true, onClick: () => store.setThresholds(TOKEN_ACTIVITY_DEFAULTS) }, t('activity.reset'))),
    !valid ? h('p', { className: 'acid-token-error', role: 'alert' }, t('activity.invalid')) : null,
    h('p', { className: 'acid-token-scope' }, t('activity.scope')));
}
function TokenActivity({ wide, t, store, useAppearance }) {
  const state = React.useSyncExternalStore(store.subscribe, store.getSnapshot, store.getSnapshot), appearance = useAppearance();
  const [settingsOpen, setSettingsOpen] = React.useState(false), [hovered, setHovered] = React.useState(null);
  const palette = appearance.palettes[appearance.mode], colors = [palette.surface, palette.text, palette.signal, palette.accent];
  const calendar = tokenActivityCalendar(), records = new Map(state.data?.days.map(day => [day.date, day]) ?? []);
  const days = calendar.map(day => ({ ...(records.get(day.date) ?? { input: 0, output: 0, missingUsage: 0 }), ...day }));
  const today = days.find(day => day.today), available = !!state.data;
  const dayLabel = day => `${day.date} · ${day.future ? t('activity.future') : !available ? t('activity.unavailable') : `${t('activity.total')} ${(day.input + day.output).toLocaleString()} token · ${t('activity.input')} ${day.input.toLocaleString()} · ${t('activity.output')} ${day.output.toLocaleString()}${day.missingUsage ? ` · ${t('activity.missing')}` : ''}`}`;
  const total = available ? compactTokens(today.input + today.output) : '—';
  const warning = ['loading','unavailable','partial','stale'].includes(state.status) ? t(`activity.${state.status}`) : today.missingUsage ? t('activity.missing') : null;
  const months = days.filter((day, i) => i % 7 === 0).map((day, i, all) => i === 0 || day.date.slice(0, 7) !== all[i - 1].date.slice(0, 7) ? `${Number(day.date.slice(5, 7))}月` : '');
  return h('section', { className: `acid-token-activity${wide ? '' : ' acid-token-rail'}`, 'aria-label': t('activity.title'), 'data-token-status': state.status,
    style: Object.fromEntries(colors.map((color, i) => [`--acid-token-color-${i + 1}`, color])) },
    wide ? h('div', { className: 'acid-token-heading' }, h('span', null, t('activity.title')), h('strong', { title: dayLabel(today) }, `${t('activity.today')} ${total}`),
      h('button', { type: 'button', className: 'acid-token-config', 'aria-label': t('activity.settings'), title: t('activity.settings'), onClick: () => setSettingsOpen(true) }, '⚙')) :
      h('button', { type: 'button', className: 'acid-token-rail-button', title: `${t('activity.today')} ${total} token`, 'aria-label': `${t('activity.settings')} · ${t('activity.today')} ${total} token`, onClick: () => setSettingsOpen(true) }, h('span', { 'data-token-level': available ? tokenActivityLevel(today.input + today.output, state.thresholds) : 0 }), h('small', null, total)),
    wide ? h('div', { className: 'acid-token-chart', onMouseLeave: () => setHovered(null) },
      h('div', { className: 'acid-token-months', 'aria-hidden': true }, ...months.map((month, i) => h('span', { key: i }, month))),
      h('div', { className: 'acid-token-grid', role: 'group', 'aria-label': t('activity.range') }, ...days.map(day => h('button', { key: day.date, type: 'button', className: 'acid-token-cell', 'data-token-date': day.date,
        'data-token-level': available ? tokenActivityLevel(day.input + day.output, state.thresholds) : 0, 'data-token-today': day.today, 'data-token-future': day.future,
        'aria-label': dayLabel(day), title: dayLabel(day), disabled: day.future, onMouseEnter: () => setHovered(day), onFocus: () => setHovered(day), onBlur: () => setHovered(null), onClick: () => setHovered(day) }))),
      hovered ? h('div', { className: 'acid-token-tooltip', role: 'tooltip' }, h('strong', null, hovered.date),
        h('span', null, !available ? t('activity.unavailable') : `${t('activity.input')} ${hovered.input.toLocaleString()} · ${t('activity.output')} ${hovered.output.toLocaleString()}`),
        h('b', null, available ? `${(hovered.input + hovered.output).toLocaleString()} token` : '—'), hovered.missingUsage ? h('span', null, t('activity.missing')) : null) : null) : null,
    wide ? h('div', { className: 'acid-token-legend', title: t('activity.description') }, h('span', null, warning ?? `${t('activity.range')}`), h('span', { className: 'acid-token-scale' }, t('activity.low'), ...colors.map((color, i) => h('i', { key: i, style: { background: color }, title: `${tokenActivityRange(i + 1, state.thresholds)} token` })), t('activity.high'))) : null,
    settingsOpen ? h(NativeDialog, { title: t('activity.settings'), onClose: () => setSettingsOpen(false), className: 'acid-token-dialog' }, h(TokenActivitySettings, { t, store, prefix: 'acid-token-dialog' })) : null);
}
