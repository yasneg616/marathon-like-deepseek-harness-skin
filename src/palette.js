const DEFAULT_PALETTES = {
  day: { accent: '#D5FF00', signal: '#5234EC', surface: '#F0F1E8', text: '#111511' },
  night: { accent: '#D5FF00', signal: '#7957FF', surface: '#0C100F', text: '#EDEFE7' }
};
const PALETTE_PRESETS = {
  acid: DEFAULT_PALETTES,
  orange: {
    day: { accent: '#FF953D', signal: '#075BC7', surface: '#F4F0E7', text: '#211A14' },
    night: { accent: '#FF953D', signal: '#326CFF', surface: '#191613', text: '#F1EBE1' }
  },
  polar: {
    day: { accent: '#72E8ED', signal: '#6734DB', surface: '#EDF3F2', text: '#142024' },
    night: { accent: '#72E8ED', signal: '#8058EB', surface: '#10191F', text: '#E7EFF2' }
  }
};
function normalizeHex(value, fallback) {
  return typeof value === 'string' && /^#[0-9a-f]{6}$/i.test(value) ? value.toUpperCase() : fallback;
}
function normalizePalettes(value) {
  return Object.fromEntries(['day', 'night'].map(mode => [mode, Object.fromEntries(
    Object.entries(DEFAULT_PALETTES[mode]).map(([key, fallback]) => [key, normalizeHex(value?.[mode]?.[key], fallback)])
  )]));
}
function normalizeCanvas(value) { return ['paper', 'night', 'adaptive'].includes(value) ? value : 'paper'; }
function resolveMode(canvas, nativeScheme = 'light') {
  return canvas === 'night' || (canvas === 'adaptive' && nativeScheme === 'dark') ? 'night' : 'day';
}
function rgb(hex) { return [1, 3, 5].map(start => parseInt(hex.slice(start, start + 2), 16)); }
function mix(left, right, amount) {
  const a = rgb(left), b = rgb(right);
  return '#' + a.map((v, i) => Math.round(v + (b[i] - v) * amount).toString(16).padStart(2, '0')).join('').toUpperCase();
}
function luminance(hex) {
  const c = rgb(hex).map(v => v / 255).map(v => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4);
  return c[0] * .2126 + c[1] * .7152 + c[2] * .0722;
}
function contrast(a, b) { const x = luminance(a), y = luminance(b); return (Math.max(x, y) + .05) / (Math.min(x, y) + .05); }
function foreground(background) {
  const choices = ['#121711', '#F7F7F0'];
  choices.sort((a, b) => contrast(b, background) - contrast(a, background));
  if (contrast(choices[0], background) >= 4.5) return choices[0];
  return contrast('#000000', background) >= contrast('#FFFFFF', background) ? '#000000' : '#FFFFFF';
}
function safeSurface(base, target, amount) {
  const ink = contrast('#000000', base) >= contrast('#FFFFFF', base) ? '#000000' : '#FFFFFF';
  const minimum = Math.min(4.6, contrast(ink, base));
  // Midtone user colors can have little spare contrast. Limit the surface tint
  // so one readable foreground remains available across cards and hover states.
  for (let step = 100; step >= 0; step--) {
    const candidate = mix(base, target, amount * step / 100);
    if (contrast(ink, candidate) >= minimum) return candidate;
  }
  return base;
}
function readable(color, backgrounds, minimum = 4.6) {
  const score = value => Math.min(...backgrounds.map(bg => contrast(value, bg)));
  if (score(color) >= minimum) return color;
  const target = score('#000000') >= score('#FFFFFF') ? '#000000' : '#FFFFFF';
  // Choose the closest safe tone of the requested color, retaining its hue.
  for (let step = 1; step <= 100; step++) {
    const candidate = mix(color, target, step / 100);
    if (score(candidate) >= minimum) return candidate;
  }
  return target;
}
function makeScheme(mode, palette) {
  const night = mode === 'night', base = palette.surface;
  const panel = safeSurface(base, '#FFFFFF', night ? .045 : .5);
  const tone = foreground(base);
  const chip = safeSurface(base, tone, night ? .105 : .075);
  const hover = safeSurface(base, tone, .10), solidHover = safeSurface(base, tone, .14);
  const surfaces = [base, panel, chip, hover, solidHover];
  const text = readable(palette.text, surfaces);
  const secondary = readable(mix(text, base, .24), surfaces);
  const tertiary = readable(mix(text, base, .36), surfaces);
  const signalForeground = foreground(palette.signal), accentForeground = foreground(palette.accent);
  const link = readable(palette.signal, surfaces);
  const sidebar = night ? safeSurface(base, '#FFFFFF', .025) : palette.accent;
  const sidebarHover = safeSurface(sidebar, foreground(sidebar), .08);
  const sidebarText = readable(night ? text : accentForeground, [sidebar, sidebarHover]);
  const sidebarSecondary = readable(mix(sidebarText, sidebar, .2), [sidebar, sidebarHover]);
  const sidebarTertiary = readable(mix(sidebarText, sidebar, .32), [sidebar, sidebarHover]);
  const sidebarActive = night ? mix(sidebar, palette.signal, .24) : palette.signal;
  const sidebarActiveText = night ? readable(palette.accent, [sidebarActive]) : signalForeground;
  const masthead = night ? mix(base, '#000000', .2) : palette.accent;
  const mastheadText = night ? readable(palette.accent, [masthead]) : accentForeground;
  const context = night ? mix(base, palette.signal, .14) : palette.signal;
  const contextText = night ? readable(text, [context]) : signalForeground;
  const border = mix(text, base, night ? .5 : .65);
  const tokens = {
    '--dsw-alias-bg-base': base,
    '--dsw-alias-bg-layer-1': panel, '--dsw-alias-bg-layer-2': base, '--dsw-alias-bg-layer-3': chip,
    '--dsw-alias-bg-overlay': panel, '--dsw-alias-bg-module-platform': chip,
    '--dsw-specific-input-major': panel, '--dsw-specific-menu': panel, '--dsw-menu-surface-fill': panel,
    '--dsw-alias-menu-group-header-fill': panel, '--dsw-specific-selector': chip,
    '--dsw-alias-markdown-inline-code': chip, '--dsw-alias-link': link,
    '--dsw-alias-label-primary': text, '--dsw-alias-label-primary-dimmed': text,
    '--dsw-alias-label-primary-foreground': signalForeground,
    '--dsw-alias-label-secondary': secondary, '--dsw-alias-label-tertiary': tertiary,
    '--dsw-alias-label-caption': tertiary, '--dsw-alias-label-quaternary': tertiary,
    '--dsw-alias-label-dimmed': tertiary, '--dsw-alias-menu-icon': secondary,
    '--dsw-alias-border-l1': border, '--dsw-alias-border-l2': border,
    '--dsw-alias-border-l3': readable(mix(text, base, .45), [base, panel], 3.1),
    '--dsw-alias-border-l4': night ? mix(text, base, .34) : text,
    '--dsw-alias-interactive-bg-hover': hover, '--dsw-alias-interactive-bg-hover-solid': solidHover,
    '--dsw-alias-button-floating-fill': panel, '--dsw-alias-button-floating-hover': hover,
    '--dsw-alias-button-elevated-fill': chip,
    '--dsw-alias-button-primary-fill': palette.signal, '--dsw-alias-button-info-fill': palette.signal,
    '--dsw-alias-button-info-hover': safeSurface(palette.signal, signalForeground, .08),
    '--dsw-alias-brand-primary': palette.signal,
    '--dsw-alias-brand-primary-new-colorprimary-new-color': palette.signal,
    '--dsw-alias-state-business-primary': link,
    '--dsw-alias-state-business-tertiary': mix(base, palette.signal, .16),
    '--dsw-focus-ring-color': readable(palette.signal, surfaces, 3.1),
    '--dsw-specific-sidebar-fill': sidebar,
    '--dsw-alias-scrollbar-bg-l1': border, '--dsw-alias-scrollbar-bg-l2': border,
    '--dsw-alias-scrollbar-hover-l1': secondary, '--dsw-alias-scrollbar-hover-l2': secondary
  };
  const variables = {
    '--acid-lime': palette.accent, '--acid-blue': palette.signal,
    '--acid-palette-surface': palette.surface, '--acid-palette-text': palette.text,
    '--acid-accent-fore': accentForeground, '--acid-blue-fore': signalForeground,
    '--acid-accent-display': readable(palette.accent, surfaces, 3.1),
    '--acid-masthead-bg': masthead, '--acid-masthead-fore': mastheadText,
    '--acid-context-bg': context, '--acid-context-fore': contextText,
    '--acid-context-number': night ? readable(palette.accent, [context]) : contextText,
    '--acid-sidebar-bg': sidebar, '--acid-sidebar-fore': sidebarText,
    '--acid-sidebar-secondary': sidebarSecondary, '--acid-sidebar-tertiary': sidebarTertiary,
    '--acid-sidebar-hover': sidebarHover, '--acid-sidebar-active': sidebarActive,
    '--acid-sidebar-active-fore': sidebarActiveText,
    '--acid-sidebar-rule': readable(mix(sidebarText, sidebar, .45), [sidebar], 3.1),
    '--acid-sidebar-new-bg': night ? palette.accent : '#121711',
    '--acid-sidebar-new-fore': night ? accentForeground : readable(palette.accent, ['#121711']),
    '--acid-sidebar-signature': night ? readable(palette.accent, [sidebar]) : sidebarText,
    '--acid-settings-nav-bg': night ? sidebar : palette.signal,
    '--acid-settings-nav-fore': night ? sidebarText : readable(signalForeground, [palette.signal, safeSurface(palette.signal, signalForeground, .1)]),
    '--acid-settings-nav-hover': night ? sidebarHover : safeSurface(palette.signal, signalForeground, .1)
  };
  return { mode, palette, text, tokens, variables, contrast: contrast(text, base), adjusted: text !== palette.text };
}
