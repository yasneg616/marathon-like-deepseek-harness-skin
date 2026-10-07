window.__ModuleLoader__.load({
  id: 'dsh-industrial-acid-skin',
  factory: (require) => {
    const React = require('react');
    const { createPortal } = require('react-dom');
    const h = React.createElement;
    const ID = 'dsh-industrial-acid-skin';
    const CSS = "__SKIN_CSS__";
    const MASTHEAD = "__MASTHEAD_SVG__";
    const SYMBOL = "__SYMBOL_SVG__";
    /*__WORKSPACE_CORE__*/
    /*__MOTION_CORE__*/
    /*__SHELL_CORE__*/
    /*__MODEL_CORE__*/
    const PREF = `${ID}:canvas`;
    const PALETTE_PREF = `${ID}:palettes`;
    const MOTION_PREF = `${ID}:motion`;
    const NS = 'industrial.acid';
    /*__PALETTE_CORE__*/
    /*__TOKEN_ACTIVITY_CORE__*/
    const dictionaries = {
      zh: { 'workspace': '工作区', 'none': '未选择工作区', 'plugins': '插件', 'settings': '设置', 'canvas': '皮肤外观', 'canvas.description': '白天与黑天切换整套皮肤；跟随应用使用原有外观设置。', 'paper': '白天', 'night': '黑天', 'adaptive': '跟随应用', 'local': '本地工作区', 'palette': '调色盘', 'palette.description': '调整即生效，白天与黑天分别保存。', 'accent': '酸性色', 'signal': '交互色', 'surface': '阅读背景', 'text': '正文色', 'acid': '经典酸性', 'orange': '工业橙', 'polar': '极地信号', 'reset': '恢复默认', 'contrast': '正文对比度', 'adjusted': '已增强正文对比度，实际颜色', 'hex': 'HEX 色值', 'motion': '动效', 'full': '完整', 'quiet': '克制', 'off': '停止' },
      en: { 'workspace': 'WORKSPACE', 'none': 'No workspace selected', 'plugins': 'Plugins', 'settings': 'Settings', 'canvas': 'Skin appearance', 'canvas.description': 'Day and night switch the entire skin. Follow app uses the existing appearance setting.', 'paper': 'Day', 'night': 'Night', 'adaptive': 'Follow app', 'local': 'LOCAL WORKSPACE', 'palette': 'Palette', 'palette.description': 'Updates immediately. Day and night palettes are saved separately.', 'accent': 'Acid accent', 'signal': 'Interaction', 'surface': 'Reading canvas', 'text': 'Text', 'acid': 'Classic acid', 'orange': 'Industrial orange', 'polar': 'Polar signal', 'reset': 'Reset palette', 'contrast': 'Text contrast', 'adjusted': 'Text contrast enhanced; effective color', 'hex': 'HEX color', 'motion': 'Motion', 'full': 'Full', 'quiet': 'Quiet', 'off': 'Off' }
    };

    // Semantic statuses are intentionally owned by the original application.
    function tokenOverrides(canvas, inputPalettes) {
      const palettes = normalizePalettes(inputPalettes);
      const day = makeScheme('day', palettes.day), night = makeScheme('night', palettes.night);
      const pair = (light, dark = light) => canvas === 'night' ? { light: dark, dark } : { light, dark: canvas === 'adaptive' ? dark : light };
      const result = {};
      for (const [name, light] of Object.entries(day.tokens)) result[name] = pair(light, night.tokens[name]);
      result['--dsw-radius-xs'] = pair('1px');
      for (const key of ['sm', 'md', 'lg', 'xl', 'panel']) result[`--dsw-radius-${key}`] = pair('2px');
      result['--dsw-elevation-prominent'] = pair('4px 4px 0 #121711');
      result['--dsw-specific-input-major-shadow'] = pair('none');
      return result;
    }

    function workspaceContext(items, current) {
      const index = items.findIndex(item => item.sessionIds?.includes(current));
      return index < 0 ? null : { index: index + 1, workspaceId: items[index].workspaceId, title: items[index].title || items[index].name || items[index].path?.split(/[\\/]/).filter(Boolean).at(-1) || '' };
    }

    function apply(ctx, config = {}) {
      let preferences = { canvas: normalizeCanvas(config.canvas), palettes: normalizePalettes(), motion: 'full' };
      try {
        const stored = localStorage.getItem(PREF);
        if (['paper', 'night', 'adaptive'].includes(stored)) preferences.canvas = stored;
      } catch { /* Storage can be unavailable in a private browser context. */ }
      try { preferences.palettes = normalizePalettes(JSON.parse(localStorage.getItem(PALETTE_PREF))); } catch { /* Recover a malformed palette with safe defaults. */ }
      try { const storedMotion=localStorage.getItem(MOTION_PREF);if(['full','quiet','off'].includes(storedMotion))preferences.motion=storedMotion; } catch {}
      const reduce=window.matchMedia?.('(prefers-reduced-motion: reduce)');
      const getMotion=()=>reduce?.matches?'off':preferences.motion;
      let motionController;
      const height = Number.isFinite(config.mastheadHeight) ? Math.max(96, Math.min(260, config.mastheadHeight)) : 128;
      let refreshTokens, ownedStyle;
      const listeners = new Set();
      const themeSnapshot = () => ctx.theme.getTheme();
      let view = { ...preferences, effectiveMotion: getMotion(), mode: resolveMode(preferences.canvas, themeSnapshot().active.colorScheme) };
      const subscribe = listener => { listeners.add(listener); return () => listeners.delete(listener); };
      const getSnapshot = () => view;
      const useAppearance = () => React.useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

      function syncAppearance(snapshot = themeSnapshot()) {
        const mode = resolveMode(preferences.canvas, snapshot.active.colorScheme);
        const scheme = makeScheme(mode, preferences.palettes[mode]);
        if (ownedStyle) {
          ownedStyle.textContent = CSS + '\nhtml[data-industrial-acid]{' + Object.entries(scheme.variables).map(([key, value]) => `${key}:${value}`).join(';') + '}';
          document.documentElement.setAttribute('data-industrial-canvas', preferences.canvas);
          document.documentElement.setAttribute('data-industrial-mode', mode);
          document.documentElement.setAttribute('data-industrial-motion',getMotion());
          if(getMotion()==='off')motionController?.cancel();
        }
        if (view.canvas !== preferences.canvas || view.palettes !== preferences.palettes || view.mode !== mode || view.motion !== preferences.motion || view.effectiveMotion !== getMotion()) {
          view = { ...preferences, mode, effectiveMotion: getMotion() };
          for (const listener of listeners) listener();
        }
      }
      function updateAppearance(next) {
        const updated = { canvas: normalizeCanvas(next.canvas ?? preferences.canvas), palettes: normalizePalettes(next.palettes ?? preferences.palettes), motion: ['full','quiet','off'].includes(next.motion)?next.motion:preferences.motion };
        if (JSON.stringify(updated) === JSON.stringify(preferences)) return;
        preferences = updated;
        try {
          localStorage.setItem(PREF, preferences.canvas);
          localStorage.setItem(PALETTE_PREF, JSON.stringify(preferences.palettes));
          localStorage.setItem(MOTION_PREF, preferences.motion);
        } catch { /* Changes remain usable in this session if storage is blocked. */ }
        refreshTokens?.();
      }

      const activityStore = createTokenActivityStore(ctx);
      ctx.effect(() => ctx.locale.register(NS, { zh:{...dictionaries.zh,...MODEL_DICTIONARIES.zh,...ACTIVITY_DICTIONARIES.zh}, en:{...dictionaries.en,...MODEL_DICTIONARIES.en,...ACTIVITY_DICTIONARIES.en} }), `${ID}: locale`);
      ctx.effect(() => {
        const root = document.documentElement;
        const previous = { enabled: root.getAttribute('data-industrial-acid'), canvas: root.getAttribute('data-industrial-canvas'), mode: root.getAttribute('data-industrial-mode'), shell: root.getAttribute('data-industrial-shell'), motion: root.getAttribute('data-industrial-motion'), motionSet: root.getAttribute('data-industrial-motion-set'), height: root.style.getPropertyValue('--acid-header-max'), priority: root.style.getPropertyPriority('--acid-header-max') };
        const style = document.createElement('style');
        style.dataset.pluginCss = `${ID}/skin.css`;
        style.dataset.plugin = ID;
        ownedStyle = style;
        root.setAttribute('data-industrial-acid', '');root.setAttribute('data-industrial-shell','planar-v2');root.setAttribute('data-industrial-motion-set','accepted-r3');
        syncAppearance();
        root.style.setProperty('--acid-header-max', `${height}px`);
        document.head.appendChild(style);
        return () => {
          style.remove();
          ownedStyle = undefined;
          for (const [key, value] of [['data-industrial-acid', previous.enabled], ['data-industrial-canvas', previous.canvas], ['data-industrial-mode', previous.mode], ['data-industrial-shell', previous.shell], ['data-industrial-motion', previous.motion], ['data-industrial-motion-set', previous.motionSet]]) {
            if (value === null) root.removeAttribute(key); else root.setAttribute(key, value);
          }
          if (previous.height) root.style.setProperty('--acid-header-max', previous.height, previous.priority); else root.style.removeProperty('--acid-header-max');
        };
      }, `${ID}: owned stylesheet and root attributes`);
      ctx.on('theme/change', syncAppearance);
      ctx.effect(() => {
        const onStorage = event => {
          if (event.key !== PREF && event.key !== PALETTE_PREF && event.key !== MOTION_PREF && event.key !== null) return;
          try {
            preferences = { canvas: normalizeCanvas(localStorage.getItem(PREF) ?? config.canvas), palettes: normalizePalettes(JSON.parse(localStorage.getItem(PALETTE_PREF))), motion: ['full','quiet','off'].includes(localStorage.getItem(MOTION_PREF))?localStorage.getItem(MOTION_PREF):'full' };
            refreshTokens?.();
          } catch { /* Keep the last usable colors after malformed external data. */ }
        };
        window.addEventListener('storage', onStorage);
        return () => { window.removeEventListener('storage', onStorage); listeners.clear(); };
      }, `${ID}: palette storage subscription`);
      ctx.effect(() => {
        let dispose = ctx.theme.overrideTokens(ID, tokenOverrides(preferences.canvas, preferences.palettes));
        refreshTokens = () => {
          const next = ctx.theme.overrideTokens(ID, tokenOverrides(preferences.canvas, preferences.palettes));
          dispose();
          dispose = next;
          syncAppearance();
        };
        return () => { refreshTokens = undefined; dispose(); };
      }, `${ID}: theme layer`);

      function ModeIcon({ value }) {
        const paths = { paper: 'M8 1v2m0 10v2M1 8h2m10 0h2M3 3l1.4 1.4m7.2 7.2L13 13M3 13l1.4-1.4M11.6 4.4 13 3', night: 'M12.8 10.5A5.7 5.7 0 0 1 5.5 3.2 5.7 5.7 0 1 0 12.8 10.5Z', adaptive: 'M2 2h12v9H2ZM5 14h6m-3-3v3' };
        return h('svg', { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'none', stroke: 'currentColor', strokeWidth: 1.3, 'aria-hidden': true }, value === 'paper' ? h('circle', { cx: 8, cy: 8, r: 3 }) : null, h('path', { d: paths[value] }));
      }
      function AppearanceFooter({ wide, t }) {
        const state = useAppearance();const [paletteOpen,setPaletteOpen]=React.useState(false);
        return h('div', { className: 'acid-footer' }, h(TokenActivity, { wide, t, store: activityStore, useAppearance }),
          h('div', { className: `acid-mode-switch${wide ? '' : ' acid-mode-switch-rail'}`, role: 'group', 'aria-label': t('canvas') },
            ...['paper', 'night', 'adaptive'].map(value => h('button', { key: value, type: 'button', 'data-appearance-option': value, title: t(value), 'aria-label': t(value), 'aria-pressed': state.canvas === value, onClick: () => updateAppearance({ canvas: value }) }, h(ModeIcon, { value }), wide ? h('span', null, t(value)) : null))),
          h('button',{type:'button',className:'acid-palette-shortcut',onClick:()=>setPaletteOpen(true),'aria-label':t('palette')},h('span',{className:'acid-palette-swatch','aria-hidden':true}),wide?t('palette'):null,wide?h('span',{'aria-hidden':true},'↗'):null),
          paletteOpen?h(NativeDialog,{title:t('palette'),onClose:()=>setPaletteOpen(false)},h(CanvasRow,{t,prefix:'acid-dialog'})):null); 
      }
      function ColorField({ field, value, t, onColor, prefix='acid' }) {
        const [draft, setDraft] = React.useState(value);
        React.useEffect(() => setDraft(value), [value]);
        const valid = /^#[0-9a-f]{6}$/i.test(draft);
        const commit = () => { if (valid) onColor(draft.toUpperCase()); else setDraft(value); };
        return h('div', { className: 'acid-color-field' },
          h('label', { htmlFor: `${prefix}-color-${field}` }, t(field)),
          h('div', { className: 'acid-color-inputs' },
            h('input', { type: 'color', id: `${prefix}-color-${field}`, value, onInput: event => onColor(event.target.value) }),
            h('input', { type: 'text', id: `${prefix}-hex-${field}`, 'aria-label': `${t(field)} ${t('hex')}`, value: draft, maxLength: 7, spellCheck: false, autoComplete: 'off', 'aria-invalid': !valid, onChange: event => {
              setDraft(event.target.value);
              if (/^#[0-9a-f]{6}$/i.test(event.target.value)) onColor(event.target.value.toUpperCase());
            }, onBlur: commit, onKeyDown: event => { if (event.key === 'Enter') { commit(); event.currentTarget.blur(); } else if (event.key === 'Escape') setDraft(value); } })));
      }
      function CanvasRow({ t, prefix='acid' }) {
        const state = useAppearance(), palette = state.palettes[state.mode], scheme = makeScheme(state.mode, palette);
        const setPalette = colors => updateAppearance({ palettes: { ...state.palettes, [state.mode]: colors } });
        return h('section', { className: 'acid-appearance-settings', 'aria-label': t('palette') },
          h('div', { className: 'acid-setting-row' },
            h('div', null, h('label', { htmlFor: `${prefix}-canvas` }, t('canvas')), h('p', null, t('canvas.description'))),
            h('select', { id: `${prefix}-canvas`, value: state.canvas, onChange: event => updateAppearance({ canvas: event.target.value }) }, ...['paper', 'night', 'adaptive'].map(value => h('option', { key: value, value }, t(value))))),
          h('div', { className: 'acid-setting-row' },h('label',{htmlFor:`${prefix}-motion`},t('motion')),h('select',{id:`${prefix}-motion`,value:state.motion,onChange:event=>updateAppearance({motion:event.target.value})},...['full','quiet','off'].map(value=>h('option',{key:value,value},t(value))))),
          h('div', { className: 'acid-palette-head' }, h('div', null, h('strong', null, `${t(state.mode === 'day' ? 'paper' : 'night')} / ${t('palette')}`), h('p', null, t('palette.description'))), h('button', { type: 'button', 'data-palette-reset': true, onClick: () => setPalette(DEFAULT_PALETTES[state.mode]) }, t('reset'))),
          h('div', { className: 'acid-palette-presets', role: 'group', 'aria-label': t('palette') }, ...Object.entries(PALETTE_PRESETS).map(([key, colors]) => h('button', { key, type: 'button', 'data-palette-preset': key, 'aria-pressed': JSON.stringify(palette) === JSON.stringify(colors[state.mode]), onClick: () => setPalette(colors[state.mode]) }, h('span', { className: 'acid-preset-dot', style: { background: colors[state.mode].accent }, 'aria-hidden': true }), t(key)))),
          h('div', { className: 'acid-palette-fields' }, ...['accent', 'signal', 'surface', 'text'].map(field => h(ColorField, { key: field, field, prefix, value: palette[field], t, onColor: color => setPalette({ ...palette, [field]: color }) }))),
          h('div', { className: 'acid-palette-preview', style: { background: palette.surface, color: scheme.text }, 'aria-hidden': true }, h('strong', null, 'Aa / 0123'), h('span', { style: { background: palette.accent, color: scheme.variables['--acid-accent-fore'] } }, 'DS'), h('span', { style: { background: palette.signal, color: scheme.variables['--acid-blue-fore'] } }, '01')),
          h('p', { className: 'acid-contrast-note', role: 'status', 'aria-live': 'polite' }, `${t('contrast')} ${scheme.contrast.toFixed(1)}:1`, scheme.adjusted ? ` · ${t('adjusted')} ${scheme.text}` : ''),
          h(TokenActivitySettings, { t, store: activityStore, prefix }));
      }

      ctx.effect(installComposerMenuClearance,`${ID}: native composer menu clearance`);
      ctx.effect(()=>{motionController=installSkinMotion(getMotion);const onReduce=()=>syncAppearance();reduce?.addEventListener('change',onReduce);return()=>{reduce?.removeEventListener('change',onReduce);motionController.dispose();motionController=undefined;for(const row of document.querySelectorAll('[data-acid-ordinal]'))row.removeAttribute('data-acid-ordinal');};},`${ID}: retractable motion`);
      ctx.effect(()=>{if(getMotion()==='off')return;const intro=document.createElement('div');intro.className='acid-intro';intro.setAttribute('aria-hidden','true');intro.innerHTML='<div class=acid-intro-name>DEEPSEEK<span>HARNESS</span></div><div class=acid-intro-bar></div>';document.body.append(intro);const timer=setTimeout(()=>intro.remove(),1250);return()=>{clearTimeout(timer);intro.remove();};},`${ID}: opening sequence`);
      const register = (name, id, Component, extra = {}) => ctx.slots.inject(name, () => ctx.slots.register({ name, id, locale: NS, ...extra }, Component));
      register('shell.overlay', 'industrial.masthead', props=>h(Masthead,{...props,useAppearance,getMotion,motion:()=>motionController,toggleSidebar:()=>ctx.layout.toggleSidebar(),goHome:()=>ctx.layout.selectPanel(null),pickWorkspace:id=>ctx.uiWorkspace.openWorkspace(id).catch(()=>{})}), { order: -1000 });
      register('conversation.hero.brand.mark', 'industrial.hero', HeroMark, { priority: -50 });
      register('sidebar.footer.action', 'industrial.signature', AppearanceFooter, { order: 1000 });
      register('settings.header', 'industrial.settings-header', SettingsHeader, { priority: -50 });
      register('settings.general.item', 'industrial.canvas', CanvasRow, { order: 12 });
      installModelControls(ctx, useAppearance);
    }

    return { inject: ['slots', 'locale', 'theme', 'layout', 'uiWorkspace', 'connection'], apply, tokenOverrides, workspaceContext, formatWorkspaceIndex, normalizePalettes, normalizeCanvas, resolveMode, makeScheme, contrast, DEFAULT_PALETTES, PALETTE_PRESETS, modelControlSnapshot, effortSelection, modelPopoverPlacement, effortVisual, selectionIdentity, createMaxEpisode, acceptedDuration, ACCEPTED_MOTION };
  }
});
