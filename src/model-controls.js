// The native per-session directory owns the catalog and durable selection.
const MODEL_DICTIONARIES = {
  zh: { 'models.title':'模型与思考', 'models.model':'模型选择', 'models.effort':'思考强度', 'models.search':'搜索已配置模型',
    'models.default':'Default', 'models.choose':'选择模型', 'models.loading':'正在加载模型…', 'models.empty':'没有匹配的模型',
    'models.none':'当前模型未提供推理等级。', 'models.unavailable':'当前保存的等级已不可用，请选择一个支持的等级。',
    'models.partial':'部分提供方加载失败，已加载的模型仍可选择。', 'models.close':'关闭模型选择', 'models.retry':'重试',
    'models.saving':'正在保存选择…', 'models.next':'应用于下一条消息', 'models.inUse':'会话正由其他连接使用，请稍后重试。' },
  en: { 'models.title':'Model & reasoning', 'models.model':'Model', 'models.effort':'Reasoning effort', 'models.search':'Search configured models',
    'models.default':'Default', 'models.choose':'Select model', 'models.loading':'Loading models…', 'models.empty':'No matching models',
    'models.none':'This model provides no reasoning levels.', 'models.unavailable':'The saved level is unavailable. Choose a supported level.',
    'models.partial':'Some providers failed to load. Loaded models remain available.', 'models.close':'Close model selection', 'models.retry':'Retry',
    'models.saving':'Saving selection…', 'models.next':'Applies to the next message', 'models.inUse':'This session is in use by another connection. Try again later.' }
};

function modelControlSnapshot(state, defaultLabel = 'Default') {
  const current = state.current;
  const group = state.groups.find(item => item.id === current?.provider);
  const model = group?.models.find(item => item.id === current?.model);
  const reasoning = model?.reasoning;
  const effort = current?.reasoningEffort ?? reasoning?.defaultEffort;
  const levels = reasoning ? [
    ...(reasoning.defaultEffort === undefined ? [{ id: undefined, name: defaultLabel }] : []),
    ...reasoning.efforts
  ] : [];
  return { group, model, effort, levels, index: levels.findIndex(level => level.id === effort),
    modelLabel: model?.name ?? (current ? `${current.provider}/${current.model}` : ''),
    effortLabel: levels.find(level => level.id === effort)?.name ?? state.retainedEffort ?? effort,
    max: typeof effort === 'string' && effort.toLowerCase() === 'max' };
}

function effortSelection(current, level) {
  if (!current || !level) return;
  return { provider: current.provider, model: current.model,
    ...(level.id === undefined ? {} : { reasoningEffort: level.id }) };
}

function modelPopoverPlacement(anchor, panel, viewport, inset = 12) {
  const margin = 12, gap = 8;
  const width = Math.min(520, viewport.width - margin * 2);
  const above = Math.max(0, anchor.top - inset - gap);
  const below = Math.max(0, viewport.height - anchor.bottom - margin - gap);
  const useAbove = above >= Math.min(panel.height, 320) || above >= below;
  const maxHeight = Math.max(80, useAbove ? above : below);
  const height = Math.min(panel.height, maxHeight);
  return { width, maxHeight, left: Math.max(margin, Math.min(anchor.right - width, viewport.width - width - margin)),
    top: useAbove ? Math.max(inset, anchor.top - gap - height) : anchor.bottom + gap };
}

function ModelGlyph({ kind = 'model' }) {
  if (kind === 'effort') return h('span', { className: 'acid-reason-bars', 'aria-hidden': true }, ...[0,1,2].map(i => h('i', { key: i })));
  return h('svg', { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'none', stroke: 'currentColor', strokeWidth: 1.2, 'aria-hidden': true },
    h('path', { d: kind === 'chevron' ? 'M4 6l4 4 4-4' : 'M8 1l6 3.5v7L8 15l-6-3.5v-7L8 1Zm0 7L2 4.5M8 8l6-3.5M8 8v7' }));
}

function ReasonEnergy({ motion, appearance, levels, position, readout, compact = false }) {
  const owner = React.useRef(null), instance = React.useRef(null);
  const signature = JSON.stringify(levels?.map(level => [level.id, level.name]) ?? []);
  const scheme = makeScheme(appearance.mode, appearance.palettes[appearance.mode]);
  const paletteVariables = {
    '--max-accent': scheme.variables['--acid-accent-display'], '--max-signal': scheme.tokens['--dsw-alias-link'],
    '--max-surface': scheme.palette.surface, '--max-ink': scheme.text,
    '--max-muted': scheme.tokens['--dsw-alias-label-tertiary'], '--max-rail': scheme.tokens['--dsw-alias-border-l3']
  };
  function options() { return { motion, speed: 1, intensity: 1.4, canvasHost: owner.current,
    readout: readout.current, manageInput: false, manageReadout: false,
    ticks: levels.map((_, i) => levels.length > 1 ? i / (levels.length - 1) : 1),
    amountAt: p => effortVisual(levels, p * Math.max(0, levels.length - 1)).amount,
    labelAt: p => effortVisual(levels, p * Math.max(0, levels.length - 1)).label }; }
  React.useLayoutEffect(() => {
    if (compact || !owner.current) return;
    const runtime = createMaxBerserkRuntime();
    const controller = runtime.attachBerserk(owner.current.parentElement, 'random', options());
    instance.current = controller;
    return () => { runtime.dispose(); instance.current = null; };
  }, [compact, signature]);
  React.useLayoutEffect(() => {
    if (compact || !owner.current || !instance.current) return;
    const surface = owner.current.parentElement;
    for (const [key, value] of Object.entries(paletteVariables)) surface.style.setProperty(key, value);
    instance.current.configure(options()); instance.current.setPosition(position, false);
  }, [compact, signature, position, motion, ...Object.values(paletteVariables)]);
  return compact ? null : h('span', { ref: owner, className: 'acid-max-canvas-owner', 'aria-hidden': true });
}

function IndustrialModelControls({ locked, available, directory, load, select, t, useAppearance }) {
  const state = React.useSyncExternalStore(fn => directory.subscribe(fn), () => directory.getSnapshot());
  const appearance = useAppearance(), motion = appearance.effectiveMotion;
  const accent = appearance.palettes[appearance.mode].accent;
  const snapshot = modelControlSnapshot(state, t('models.default'));
  const busy = state.pending !== null, disabled = locked || !available || busy;
  const [open, setOpen] = React.useState(false), [query, setQuery] = React.useState('');
  const [position, setPosition] = React.useState(null), [error, setError] = React.useState('');
  const [draft, setDraft] = React.useState(null), [impact, setImpact] = React.useState(false);
  const anchor = React.useRef(null), panel = React.useRef(null), search = React.useRef(null), range = React.useRef(null), readout = React.useRef(null);
  const trigger = React.useRef(null), modelButton = React.useRef(null), effortButton = React.useRef(null);
  const dragging = React.useRef(false), pending = React.useRef(false), mounted = React.useRef(true), impactTimer = React.useRef(null);
  const intent = React.useRef('model'), id = React.useId();
  const visual = effortVisual(snapshot.levels, draft ?? Math.max(0, snapshot.index));
  const shownIndex = visual.index, shownLevel = snapshot.levels[visual.nearest];
  const max = visual.amount > .9995;
  const label = snapshot.index < 0 && draft === null ? snapshot.effortLabel : visual.label;
  const expectedSelection = React.useRef(null), previousSelection = React.useRef(selectionIdentity(state.current));
  const levelsSignature = JSON.stringify(snapshot.levels.map(level => [level.id, level.name]));
  const previousLevels = React.useRef(levelsSignature);
  React.useEffect(() => {
    const identity = selectionIdentity(state.current);
    if (identity !== previousSelection.current || levelsSignature !== previousLevels.current) {
      if (identity !== expectedSelection.current || levelsSignature !== previousLevels.current) setDraft(null);
      previousSelection.current = identity; previousLevels.current = levelsSignature;
      if (identity === expectedSelection.current) expectedSelection.current = null;
    }
  }, [state.current?.provider, state.current?.model, state.current?.reasoningEffort, levelsSignature]);
  React.useEffect(() => { mounted.current = true; return () => { mounted.current = false; clearTimeout(impactTimer.current); }; }, []);
  React.useEffect(() => { setDraft(null); setOpen(false); setQuery(''); setError(''); }, [directory]);
  React.useEffect(() => { if (disabled) { setOpen(false); dragging.current = false; } }, [locked, available]);
  function close(restore = false) {
    const finish=()=>{if(!mounted.current)return;setOpen(false);setDraft(null);setQuery('');dragging.current=false;if(restore)trigger.current?.focus({preventScroll:true});};
    if(panel.current&&activeAcceptedMotion)activeAcceptedMotion.closeSurface(panel.current,finish,'menu');else finish();
  }
  function flash() { clearTimeout(impactTimer.current); setImpact(true); impactTimer.current = setTimeout(() => { if (mounted.current) setImpact(false); }, 750); }
  React.useEffect(() => {
    if (!open) return;
    const outside = event => { if (!anchor.current?.contains(event.target) && !panel.current?.contains(event.target)) close(); };
    document.addEventListener('pointerdown', outside); document.addEventListener('focusin', outside);
    return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('focusin', outside); };
  }, [open]);
  React.useLayoutEffect(() => {
    if (!open || !panel.current || !anchor.current) return;
    function place() {
      const inset = Math.max(12, (document.querySelector('.acid-masthead')?.getBoundingClientRect().bottom ?? 0) + 8);
      const placement = modelPopoverPlacement(anchor.current.getBoundingClientRect(), { height: panel.current.scrollHeight }, { width: innerWidth, height: innerHeight }, inset);
      const list = panel.current.querySelector('.acid-model-list');
      const rest = panel.current.scrollHeight - (list?.offsetHeight ?? 0);
      setPosition({ ...placement, '--acid-model-list-height': `${Math.max(58, Math.min(176, placement.maxHeight - rest - 2))}px` });
    }
    place(); const observer = new ResizeObserver(place); observer.observe(panel.current); observer.observe(anchor.current);
    window.addEventListener('resize', place); window.addEventListener('scroll', place, true);
    const focus = requestAnimationFrame(() => (intent.current === 'effort' ? range.current : search.current)?.focus());
    return () => { observer.disconnect(); window.removeEventListener('resize', place); window.removeEventListener('scroll', place, true); cancelAnimationFrame(focus); };
  }, [open]);
  React.useLayoutEffect(() => {
    if (!open || !position || intent.current !== 'effort') return;
    const frame = requestAnimationFrame(() => range.current?.closest('.acid-reason-slider')?.scrollIntoView({ block: 'nearest' }));
    return () => cancelAnimationFrame(frame);
  }, [open, position?.maxHeight]);
  function toggle(which, element) {
    trigger.current = element; intent.current = which;
    if(panel.current?.dataset.acidClosing){activeAcceptedMotion?.reopenSurface(panel.current);return;}
    if (open && element === document.activeElement && panel.current) { close(); return; }
    if (disabled) return;
    setPosition(null); setOpen(true); setError(''); load();
  }
  async function submit(selection, closeModel = false, keepPosition = false) {
    if (!selection || disabled || pending.current) return;
    pending.current = true; setError('');
    expectedSelection.current = selectionIdentity(selection);
    let accepted = false;
    try {
      const result = await select(selection);
      if (!mounted.current) return;
      if (result && !result.ok) setError(result.error.code === 'session/writer-held' ? t('models.inUse') : result.error.code + ': ' + result.error.message);
      else { accepted = true; if (closeModel) close(true); }
    } catch (failure) { if (mounted.current) setError(String(failure.message ?? failure)); }
    finally {
      pending.current = false;
      if (!accepted) expectedSelection.current = null;
      if (mounted.current && (!accepted || !keepPosition)) setDraft(null);
    }
  }
  function commitEffort(value) {
    const visual = effortVisual(snapshot.levels, value), level = snapshot.levels[visual.nearest];
    if (pending.current) return;
    if (!level || disabled) { setDraft(null); return; }
    setDraft(visual.index);
    if (visual.nearest === snapshot.index) return;
    if (String(level.id ?? '').toLowerCase() === 'max') flash();
    submit(effortSelection(state.current, level), false, true);
  }
  const modelLabel = snapshot.modelLabel || t(state.status === 'loading' ? 'models.loading' : 'models.choose');
  const modelRows = state.groups.flatMap(group => group.models.map(model => ({ group, model })))
    .filter(({ group, model }) => `${group.name} ${model.name} ${model.id}`.toLowerCase().includes(query.trim().toLowerCase()));
  function onKey(event) {
    if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); close(true); }
    else if (event.key === 'ArrowDown' && event.target === search.current) { event.preventDefault(); panel.current.querySelector('[role=option]')?.focus(); }
    else if (event.target.getAttribute('role') === 'option' && ['ArrowDown','ArrowUp','Home','End'].includes(event.key)) {
      event.preventDefault(); const options = [...panel.current.querySelectorAll('[role=option]')], at = options.indexOf(event.target);
      options[event.key === 'Home' ? 0 : event.key === 'End' ? options.length-1 : (at + (event.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length]?.focus();
    } else if (event.key === 'Tab') {
      const controls = [...panel.current.querySelectorAll('button:not(:disabled),input:not(:disabled)')];
      if (event.shiftKey && event.target === controls[0] || !event.shiftKey && event.target === controls.at(-1)) { event.preventDefault(); close(true); }
    }
  }
  const modal = open ? h('section', { ref: panel, id, role: 'dialog', 'aria-label': t('models.title'), 'aria-modal': false,
    className: 'acid-model-popover', onKeyDown: onKey,
    style: position ? { ...position, visibility: 'visible' } : { visibility: 'hidden', top: 0, left: 0 } },
    h('header', { className: 'acid-model-popover-head' }, h('span', null, 'MODEL / REASONING'), h('h2', null, t('models.title')),
      h('button', { type:'button', className:'acid-model-close', onClick:()=>close(true), 'aria-label': t('models.close') }, '×')),
    h('label', { className: 'acid-model-section', htmlFor: `${id}-search` }, h('span', null, '01'), t('models.model')),
    h('input', { ref: search, id: `${id}-search`, type: 'search', className: 'acid-model-search', value: query,
      placeholder: t('models.search'), autoComplete: 'off', onChange: event => setQuery(event.target.value) }),
    h('div', { role: 'listbox', 'aria-label': t('models.model'), className: 'acid-model-list' },
      ...modelRows.map(({group,model}) => {
        const selected = group.id === state.current?.provider && model.id === state.current?.model;
        return h('button', { key: JSON.stringify([group.id,model.id]), type: 'button', role: 'option', 'aria-selected': selected,
          disabled: busy || locked, className: 'acid-model-option', onClick: () => selected ? close(true) : submit({ provider: group.id, model: model.id,
            ...(model.reasoning?.defaultEffort === undefined ? {} : { reasoningEffort: model.reasoning.defaultEffort }) }, true) },
          h('span', {className:'acid-model-option-copy'}, h('strong', null, model.name), h('small', null, group.name ?? group.id)), selected ? h('span', {className:'acid-model-check','aria-hidden':true}, '✓') : null);
      }), modelRows.length === 0 ? h('p', null, t(state.status === 'loading' ? 'models.loading' : 'models.empty')) : null),
    state.failures.length ? h('p', { className:'acid-model-notice', role:'status' }, t('models.partial')) : null,
    h('div', { className: 'acid-model-section' }, h('span', null, '02'), t('models.effort'), h('output', { ref:readout, className:'acid-max-value', htmlFor:`${id}-range`, 'aria-live':'polite' }, label ?? t('models.none'))),
    snapshot.levels.length ? h('div', { className: 'acid-reason-slider berserk-surface', 'data-max': max ? '' : undefined, 'data-impact': impact ? '' : undefined,
      style: { '--reason-fill': `${Math.max(0,shownIndex) / Math.max(1,snapshot.levels.length-1) * 100}%` } },
      h(ReasonEnergy, { motion, appearance, levels:snapshot.levels, position:visual.position, readout }), h('div', { className:'acid-reason-slices', 'aria-hidden':true }),
      h('div', { className:'acid-reason-rail' }, h('div', { className:'acid-reason-track','aria-hidden':true }), h('div', { className:'acid-reason-flow','aria-hidden':true }),
        h('div', { className:'acid-reason-ghost','aria-hidden':true }),
        h('input', { ref: range, id:`${id}-range`, type:'range', min:0, max:Math.max(0,snapshot.levels.length-1), step:0.01,
          value:Math.max(0,shownIndex), disabled:disabled || snapshot.levels.length < 2,
          'aria-label':t('models.effort'), 'aria-valuetext':label ?? '',
          onPointerDown:event=>{dragging.current=true;event.currentTarget.setPointerCapture(event.pointerId);},
          onChange:event=>{const value=Number(event.target.value);setDraft(value);if(!dragging.current)commitEffort(value);},
          onPointerUp:event=>{dragging.current=false;commitEffort(event.currentTarget.value);},
          onKeyUp:event=>{if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End','PageUp','PageDown'].includes(event.key))commitEffort(event.currentTarget.value);},
          onPointerCancel:()=>{dragging.current=false;setDraft(null);},
          onBlur:event=>{if(dragging.current){dragging.current=false;commitEffort(event.currentTarget.value);}} })),
      h('div', { className:'acid-reason-levels', 'aria-hidden':true }, ...snapshot.levels.map((level,i)=>h('span',{key:level.id??'default','data-current':i===visual.nearest?'':undefined},level.name))))
      : h('p', { className:'acid-model-notice' }, t('models.none')),
    snapshot.index < 0 && snapshot.levels.length ? h('p',{className:'acid-model-notice'},t('models.unavailable')) : null,
    (error || state.error) ? h('div', { className:'acid-model-error', role:'alert' }, error || state.error,
      h('button',{type:'button',disabled:busy,onClick:()=>{setError('');load();}},t('models.retry'))) : null,
    h('footer', { className:'acid-model-note', role:'status' }, busy ? t('models.saving') : t('models.next'))) : null;
  return h('div', { ref: anchor, className:'acid-model-controls', 'data-model-provider':state.current?.provider,
    'data-model-id':state.current?.model, 'data-model-effort':snapshot.effort, 'data-model-status':state.status, 'data-energy-motion':motion },
    h('button', { ref:modelButton, type:'button', className:'acid-model-trigger', disabled,
      'aria-label':`${t('models.model')}：${modelLabel}`, title:modelLabel, 'aria-expanded':open, 'aria-controls':open?id:undefined,
      onClick:event=>toggle('model',event.currentTarget) }, h(ModelGlyph), h('span',{className:'acid-model-name'},modelLabel), h(ModelGlyph,{kind:'chevron'})),
    snapshot.effortLabel !== undefined ? h('button', { ref:effortButton, type:'button', className:'acid-effort-trigger', disabled,
      'data-max':snapshot.max?'':undefined, 'aria-label':`${t('models.effort')}：${snapshot.effortLabel}`, 'aria-expanded':open, 'aria-controls':open?id:undefined,
      onClick:event=>toggle('effort',event.currentTarget) }, null,
      h(ModelGlyph,{kind:'effort'}),h('span',null,snapshot.effortLabel),h(ModelGlyph,{kind:'chevron'})) : null,
    modal ? createPortal(modal, document.body) : null);
}

function installModelControls(ctx, useAppearance) {
  if (typeof ctx.inject !== 'function') return;
  ctx.inject(['modelDirectories','sessions','remote','remote.session'], scope => {
    scope.slots.inject('conversation.input.model', () => scope.slots.register({
      name:'conversation.input.model', id:'industrial.model-controls', locale:'industrial.acid', priority:-100,
      inject:sessionId => {
        const directory = scope.modelDirectories.directoryFor(sessionId);
        const available = scope.sessions.subagentAddress(sessionId) === undefined;
        return { available, directory:directory.store, useAppearance,
          load:()=>{if(available)directory.load().catch(()=>{});},
          select:selection=>available?directory.select(selection):Promise.resolve(undefined) };
      }
    }, IndustrialModelControls));
  });
}
