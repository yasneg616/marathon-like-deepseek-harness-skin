// Visual positions are continuous; provider selections remain advertised enum IDs.
const maxKinds = ['tremor', 'afterimage', 'rupture'];

function createMaxEpisode(random = Math.random) {
  let selected = null, previousMode;
  return {
    update(amount, mode = 'random') {
      if (!(amount > 0)) { selected = null; previousMode = mode; return null; }
      if (selected === null || mode !== previousMode) {
        selected = mode === 'random'
          ? maxKinds[Math.min(2, Math.max(0, Math.floor(random() * 3)))]
          : maxKinds.includes(mode) ? mode : 'tremor';
      }
      previousMode = mode;
      return selected;
    }
  };
}

function effortVisual(levels, value) {
  const end = Math.max(0, levels.length - 1), number = Number(value);
  const index = Number.isFinite(number) ? Math.max(0, Math.min(end, number)) : 0;
  const nearest = Math.round(index), lower = Math.floor(index), upper = Math.ceil(index);
  const label = lower === upper ? levels[lower]?.name : `${levels[lower]?.name} → ${levels[upper]?.name}`;
  const max = levels.findIndex(level => String(level.id ?? '').toLowerCase() === 'max');
  const high = levels.findIndex(level => String(level.id ?? '').toLowerCase() === 'high');
  const start = high >= 0 && high < max ? high : Math.max(0, max - 1);
  const progress = max < 0 ? 0 : max === start ? (index === max ? 1 : 0)
    : Math.max(0, Math.min(1, (index - start) / (max - start)));
  return { index, nearest, position: end ? index / end : 1, label,
    amount: progress * progress * (3 - 2 * progress) };
}

function selectionIdentity(current) {
  return JSON.stringify([current?.provider, current?.model, current?.reasoningEffort]);
}

function createMaxBerserkRuntime() {
const highPosition = .667;
const thirdRoundStorageKey = 'harness-motion-gallery:feedback:r3:v1';
const berserkCandidates = [
  { id: '11-H', kind: 'tremor', name: '同频震颤', code: 'SYNCHRONIZED / TREMBLE',
    note: '轨道和滑块一起震颤，错开的双层重影逐渐变浓。', detail: '整体抖动 / 短距离重影 / 紧绷蓄力' },
  { id: '11-I', kind: 'afterimage', name: '残像追赶', code: 'AFTERIMAGE / RUSH',
    note: '滑块拉出多层延迟残像，速度线随着充能逐渐展开。', detail: '长距离拖影 / 多层残像 / 高速失控' },
  { id: '11-J', kind: 'rupture', name: '错帧暴走', code: 'FRAME OFFSET / BERSERK',
    note: '轨道和滑块分片错位，叠出漫画式的震动重影。', detail: '分片震动 / 错位重影 / 撕裂爆发' },
];

function clampPosition(value) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.max(0, Math.min(1, number)) : 0;
}

function motionAmount(position) {
  const progress = Math.max(0, (clampPosition(position) - highPosition) / (1 - highPosition));
  return progress * progress * (3 - 2 * progress);
}

function positionLabel(position) {
  const p = clampPosition(position);
  if (p < .0005) return 'LOW';
  if (p < 1 / 3 - .0005) return 'LOW → MED';
  if (p <= 1 / 3 + .0005) return 'MED';
  if (p < highPosition - .0005) return 'MED → HIGH';
  if (p <= highPosition + .0005) return 'HIGH';
  return p < .9995 ? 'HIGH → MAX' : 'MAX';
}

function normalizeThirdRound(raw) {
  const result = { schema: 3, scores: {}, notes: {}, max: '', overall: '' };
  if (!raw || typeof raw !== 'object') return result;
  for (const candidate of berserkCandidates) {
    const score = raw.scores?.[candidate.id];
    if (Number.isInteger(score) && score >= 1 && score <= 5) result.scores[candidate.id] = score;
    if (typeof raw.notes?.[candidate.id] === 'string') result.notes[candidate.id] = raw.notes[candidate.id].slice(0, 2000);
  }
  if (berserkCandidates.some(candidate => candidate.id === raw.max)) result.max = raw.max;
  if (typeof raw.overall === 'string') result.overall = raw.overall.slice(0, 4000);
  return result;
}

function thirdRoundText(raw, preferences = { speed: 1, intensity: 1.4 }) {
  const result = normalizeThirdRound(raw);
  const intensity = { 1: '标准', 1.4: '增强', 1.8: '极强' }[preferences.intensity] || '增强';
  return ['Harness 第三轮 Max 动效打分表', '版本：3.1 / 连续滑块 / High → Max 渐变 / 震动重影',
    '已确认：第二轮 10 项动效均为 5/5，继续保留；01 开屏保持当前版本。',
    '本轮只比较 Max。第二轮 11-D/E/F/G 全部为 1/5，无首选。',
    '评分：1 不想使用 / 2 不喜欢 / 3 可接受 / 4 喜欢 / 5 非常喜欢',
    `播放速度：${preferences.speed}×（最终节奏：1×）`, `抖动幅度：${intensity}`, `Max 首选：${result.max || '____'}`, '',
    '第三轮定稿：H/I/J 均获 5 分；去掉暴走强度仪表，重影跟随项目调色盘。',
    `菜单默认随机三选一；单次蓄力保持同一方案，允许连续重复。当前调色盘：${preferences.palette || 'acid'}`, '',
    ...berserkCandidates.flatMap(candidate => [`${candidate.id} ${candidate.name}　评分：${result.scores[candidate.id] || '__'}/5`,
      `  方案：${candidate.note}`, `  备注：${result.notes[candidate.id] || '________________'}`, '']),
    `整体建议：${result.overall || '________________'}`, '',
    '可直接回复方案编号、幅度，或发送这份填好的文件。'].join('\r\n');
}


const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const controllers = new Set(), owners = new WeakMap();
let paused = false;
const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    const owner = owners.get(entry.target);
    if (owner) { owner.visible = entry.isIntersecting; owner.sync(); }
  }
}, { threshold: 0 });
const noise = (t, seed = 0) => Math.sin(t * 2.13 + seed * 17.37) * .58 + Math.sin(t * 3.71 + seed * 5.19) * .42;
const fract = value => value - Math.floor(value);
const blend = (a, b, p) => '#' + [1, 3, 5].map(i => Math.round(parseInt(a.slice(i, i + 2), 16) * (1 - p) + parseInt(b.slice(i, i + 2), 16) * p).toString(16).padStart(2, '0')).join('');
const rgba = (hex, alpha) => `rgba(${[1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16)).join(',')},${alpha})`;

function berserkMarkup(label, position = 1) {
  return `<div class="berserk-surface"><div class="berserk-heading"><span>REASONING / CONTINUOUS</span><b class="berserk-value">MAX</b></div>
    <div class="berserk-rail"><input type="range" min="0" max="100" step="0.1" value="${clampPosition(position) * 100}" aria-label="${label}" aria-describedby="continuous-guide"></div>
    <div class="berserk-labels" aria-hidden="true"><span>LOW</span><span>MED</span><span>HIGH</span><span>MAX</span></div>
    <div class="berserk-stage"><span class="berserk-status">MAX / 持续暴走</span><output class="berserk-position" aria-live="off">位置 100.0%</output></div></div>`;
}

function attachBerserk(host, kind, preferences = {}) {
  const surface = host.matches('.berserk-surface') ? host : host.querySelector('.berserk-surface');
  const input = surface.querySelector('input[type=range]'), canvas = document.createElement('canvas');
  canvas.className = 'berserk-canvas'; canvas.setAttribute('aria-hidden', 'true');
  (preferences.canvasHost || surface).prepend(canvas);
  const ctx = canvas.getContext('2d');
  if (!ctx) { canvas.remove(); surface.dataset.motionState = 'unavailable'; return { setPosition() {}, sweep() {}, configure() {}, dispose() {} }; }
  const minimum = Number(input.min) || 0, maximum = Number(input.max), span = maximum - minimum;
  let options = { ...preferences }, mode = kind, activeKind = 'tremor', announced = null;
  let width = 0, height = 0, rail = {}, frame = 0, last = 0, time = 0, count = 0;
  let alive = true, position = span ? clampPosition((input.value - minimum) / span) : 1, sweepElapsed = null;
  let speed = preferences.speed || 1, intensity = preferences.intensity || 1.4;
  let motion = preferences.motion || 'full', colors = {};
  const episode = createMaxEpisode(preferences.random);
  const controller = { visible: false, sync, setPosition, sweep, configure, dispose };
  const readout = preferences.readout || surface.querySelector('.berserk-value');
  controllers.add(controller); owners.set(host, controller); observer.observe(host);
  const amountAt = () => clampPosition(options.amountAt ? options.amountAt(position) : motionAmount(position));
  const minimal = () => reduced.matches || motion !== 'full';
  const mainTint = amount => blend(colors.accent, colors.ink, amount * .35);

  function readPalette() {
    const style = getComputedStyle(surface);
    const fallback = { accent: '#D5FF00', signal: '#7957FF', surface: '#0C100F', ink: '#EDEFE7', muted: '#ABB0A9', rail: '#6E746D' };
    for (const role of Object.keys(fallback)) {
      const value = style.getPropertyValue(`--max-${role}`).trim();
      colors[role] = /^#[0-9a-f]{6}$/i.test(value) ? value : fallback[role];
      canvas.dataset[role] = colors[role];
    }
  }
  function fit() {
    if (!alive) return;
    const bounds = surface.getBoundingClientRect(), range = input.getBoundingClientRect();
    width = Math.max(1, bounds.width); height = Math.max(1, bounds.height);
    const ratio = Math.min(2, devicePixelRatio || 1);
    canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    rail = { left: range.left - bounds.left + 9, right: range.right - bounds.left - 9,
      y: range.top - bounds.top + range.height / 2 };
    draw();
  }
  const resize = new ResizeObserver(fit); resize.observe(surface);
  function path(points, tint, alpha = 1, thickness = 1) {
    ctx.globalAlpha = Math.max(0, Math.min(1, alpha)); ctx.strokeStyle = tint; ctx.lineWidth = thickness;
    ctx.beginPath(); points.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.stroke();
  }
  function rect(x, y, w, h, tint, alpha = 1, solid = false) {
    ctx.globalAlpha = Math.max(0, Math.min(1, alpha)); ctx.fillStyle = tint; ctx.strokeStyle = tint; ctx.lineWidth = 1.4;
    if (solid) ctx.fillRect(x, y, w, h); else ctx.strokeRect(x, y, w, h);
  }
  function track(dx, dy, tint, alpha, ghost = false) {
    const { left, right, y } = rail, x = left + (right - left) * position;
    path([[left + dx, y + dy], [x + dx, y + dy]], tint, alpha, ghost ? 1.2 : 2.5);
    rect(x - 8 + dx, y - 9 + dy, 16, 18, tint, alpha, !ghost);
    if (!ghost) rect(x - 3 + dx, y - 4 + dy, 6, 8, colors.surface, 1, true);
  }
  function tremor(amount) {
    const gain = amount * intensity;
    for (let i = 3; i > 0; i--) {
      const dx = noise(time * 17 - i * .6, i) * (5 + i * 3) * gain;
      const dy = noise(time * 19 - i * .6, i + 4) * (2 + i * 2) * gain;
      track(dx, dy, i % 2 ? colors.accent : colors.signal, amount * (.12 + i * .07), true);
    }
    track(noise(time * 19, 2) * 3.8 * gain, noise(time * 21, 1) * 2.8 * gain, mainTint(amount), 1);
    const x = rail.left + (rail.right - rail.left) * position;
    for (const side of [-1, 1]) {
      const length = (10 + noise(time * 9, side) * 3) * gain;
      path([[x + side * (14 + gain * 3), rail.y - 15], [x + side * (14 + gain * 3 + length), rail.y - 21]], colors.accent, amount * .7, 2);
      path([[x + side * (15 + gain * 2), rail.y + 15], [x + side * (15 + gain * 2 + length), rail.y + 21]], colors.signal, amount * .45);
    }
  }
  function afterimage(amount) {
    const gain = amount * intensity, x = rail.left + (rail.right - rail.left) * position;
    for (let i = 6; i >= 1; i--) {
      const dx = -i * 7.2 * gain + noise(time * 15 - i * .65, i) * 7 * gain;
      const dy = noise(time * 16 - i * .65, i + 5) * (3 + i * 1.5) * gain;
      rect(x - 8 + dx, rail.y - 9 + dy, 16, 18, i % 2 ? colors.accent : colors.signal, amount * (.32 - i * .035));
      path([[Math.max(rail.left, x - 92 * gain) + dx, rail.y + dy], [x - 11 + dx, rail.y + dy]], colors.accent, amount * (.28 - i * .025));
    }
    for (let i = 0; i < 8; i++) {
      const p = fract(time * .8 + i * .157), y = rail.y + (i - 3.5) * 6 * gain;
      const start = Math.max(rail.left, x - (35 + p * 110) * gain);
      path([[start, y], [Math.min(x - 15, start + (10 + p * 33) * gain), y]], i % 3 ? colors.accent : colors.signal, amount * (.16 + p * .22), i % 3 ? 1 : 2);
    }
    track(noise(time * 18, 4) * 6 * gain, noise(time * 18, 3) * 3.5 * gain, mainTint(amount), 1);
  }
  function rupture(amount) {
    const gain = amount * intensity;
    for (const i of [-1, 1]) track(i * 11 * gain + noise(time * 16, i) * 5 * gain,
      i * 8 * gain, i < 0 ? colors.accent : colors.signal, .3 * amount, true);
    for (let band = 0; band < 5; band++) {
      const dy = (band - 2) * 5;
      ctx.save(); ctx.beginPath(); ctx.rect(0, rail.y + dy - 2.5, width, 5); ctx.clip();
      track(noise(time * 19, band + 10) * (7 + Math.abs(band - 2) * 5) * gain,
        noise(time * 11, band) * gain, band % 2 ? colors.signal : mainTint(amount), 1);
      ctx.restore();
    }
    const x = rail.left + (rail.right - rail.left) * position;
    for (let i = 0; i < 6; i++) {
      const p = fract(time * .55 + i * .173), sign = i % 2 ? -1 : 1;
      const px = x - (18 + p * 110) * gain, y = rail.y + sign * (16 + i * 3) * gain;
      path([[px, y], [px + (10 + i * 3) * gain, y - sign * 6 * gain]], i % 2 ? colors.signal : colors.accent, amount * (.22 + .3 * (1 - p)), 1.5);
    }
  }
  function draw() {
    if (!width || !alive) return;
    ctx.clearRect(0, 0, width, height);
    const { left, right, y } = rail, amount = amountAt();
    path([[left, y], [right, y]], colors.rail, 1, 2);
    for (const p of options.ticks || [0, 1 / 3, highPosition, 1]) {
      const x = left + (right - left) * p;
      path([[x, y - 4], [x, y + 4]], colors.muted, .9);
    }
    if (!amount || minimal()) track(0, 0, colors.accent, 1);
    else {
      ctx.save(); ctx.beginPath(); ctx.rect(2, y - 48, width - 4, 96); ctx.clip();
      ({ tremor, afterimage, rupture }[activeKind] || tremor)(amount); ctx.restore();
    }
    const gain = minimal() ? 0 : amount * intensity, shake = noise(time * 18, 8) * gain;
    const offsets = activeKind === 'afterimage' ? [[-7, 3], [-14, -3], [-22, 2]] : activeKind === 'rupture' ? [[-9, -4], [11, 4], [-5, 5]] : [[-6, -2], [7, 2], [-2, 4]];
    if (readout) {
      readout.style.textShadow = gain ? offsets.map(([x, y], i) => `${(x * gain + shake * 2).toFixed(2)}px ${(y * gain).toFixed(2)}px 0 ${rgba(i % 2 ? colors.signal : colors.accent, (amount * (i === 2 ? .18 : .34)).toFixed(3))}`).join(',') : 'none';
      readout.style.transform = gain ? `translate(${shake.toFixed(2)}px,${(noise(time * 17, 9) * gain).toFixed(2)}px)` : 'none';
    }
    canvas.dataset.frame = String(++count); canvas.dataset.phase = time.toFixed(3);
    canvas.dataset.amount = amount.toFixed(5);
  }
  function updateUI() {
    const amount = amountAt(), label = options.labelAt ? options.labelAt(position) : positionLabel(position);
    const chosen = episode.update(amount, mode); activeKind = chosen || 'tremor';
    surface.dataset.variant = chosen || 'none';
    if (chosen !== announced) {
      announced = chosen;
      host.dispatchEvent(new CustomEvent('berserk-variant', { bubbles: true, detail: chosen }));
    }
    if (options.manageInput !== false) {
      input.value = (minimum + position * span).toFixed(3);
      input.setAttribute('aria-valuetext', `位置 ${(position * 100).toFixed(1)}%，${label.replaceAll('→', '到')}`);
    }
    if (readout && options.manageReadout !== false) { readout.textContent = label; readout.style.fontSize = `${12 + amount * 5}px`; }
    const output = surface.querySelector('.berserk-position'), status = surface.querySelector('.berserk-status');
    if (output) output.textContent = `位置 ${(position * 100).toFixed(1)}%`;
    if (status) status.textContent = amount === 0 ? '稳定 / 尚未蓄力' : amount > .9995 ? 'MAX / 持续暴走' : 'HIGH → MAX / 逐渐蓄力';
    surface.dataset.position = position.toFixed(5); surface.dataset.charge = amount.toFixed(5);
  }
  function stop() { if (frame) cancelAnimationFrame(frame); frame = 0; last = 0; }
  function isRunning() { return alive && !paused && !minimal() && !document.hidden && controller.visible && (amountAt() > 0 || sweepElapsed !== null); }
  function tick(now) {
    frame = 0;
    if (!isRunning()) return;
    if (last && now - last < 1000 / 40) { frame = requestAnimationFrame(tick); return; }
    const delta = last ? Math.min(.08, (now - last) / 1000) * speed : 0;
    last = now; time += delta;
    if (sweepElapsed !== null) {
      sweepElapsed += delta;
      const p = Math.min(1, sweepElapsed / 3.6);
      position = highPosition + (1 - highPosition) * p; updateUI();
      if (p >= 1) sweepElapsed = null;
      host.dispatchEvent(new CustomEvent('berserk-progress', { bubbles: true, detail: { position, complete: p >= 1 } }));
    }
    draw(); frame = requestAnimationFrame(tick);
  }
  function sync() {
    stop();
    surface.dataset.motionState = minimal() ? 'reduced' : paused ? 'paused' : document.hidden || !controller.visible ? 'suspended' : amountAt() > 0 || sweepElapsed !== null ? 'active' : 'idle';
    if (isRunning()) frame = requestAnimationFrame(tick);
    if (minimal()) draw();
  }
  function setPosition(value, notify = true) {
    position = clampPosition(value); sweepElapsed = null; updateUI(); draw();
    if (!frame || !isRunning()) sync();
    if (notify) host.dispatchEvent(new CustomEvent('berserk-position', { bubbles: true, detail: position }));
  }
  function sweep() {
    if (minimal()) { setPosition(1); return; }
    position = highPosition; sweepElapsed = 0; updateUI(); draw(); sync();
  }
  function onInput() { setPosition(span ? (Number(input.value) - minimum) / span : 1); }
  input.addEventListener('input', onInput);
  function configure(next) {
    options = { ...options, ...next };
    if ([.5, 1, 1.5].includes(Number(next.speed))) speed = Number(next.speed);
    if ([1, 1.4, 1.8].includes(Number(next.intensity))) intensity = Number(next.intensity);
    if (next.motion) motion = next.motion;
    if (next.kind) mode = next.kind;
    readPalette(); updateUI(); fit(); sync();
  }
  function dispose() {
    if (!alive) return;
    alive = false; stop(); resize.disconnect(); observer.unobserve(host); owners.delete(host); controllers.delete(controller);
    input.removeEventListener('input', onInput); canvas.remove(); surface.dataset.motionState = 'disposed';
    if (readout) { readout.style.textShadow = 'none'; readout.style.transform = 'none'; }
  }
  readPalette(); updateUI(); fit(); sync();
  return controller;
}

function pauseBerserk(value) { paused = !!value; for (const controller of controllers) controller.sync(); }
function configureBerserk(preferences) { for (const controller of controllers) controller.configure(preferences); }
function disposeBerserk() { for (const controller of [...controllers]) controller.dispose(); }
function syncControllers() { for (const controller of controllers) controller.sync(); }
function disposeBerserkRuntime() {
  disposeBerserk(); observer.disconnect();
  document.removeEventListener('visibilitychange', syncControllers); reduced.removeEventListener('change', syncControllers);
  window.removeEventListener('pagehide', disposeBerserkRuntime);
}
document.addEventListener('visibilitychange', syncControllers);
reduced.addEventListener('change', syncControllers);
window.addEventListener('pagehide', disposeBerserkRuntime);

return { attachBerserk, dispose: disposeBerserkRuntime };
}
