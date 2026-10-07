import { foldTokenActivity, tokenActivityCalendar, TOKEN_ACTIVITY_ZONE } from './token-activity-core.js';

// The query seam handles compression, migrations, live logs and exact fork cuts.
// Only daily counters cross the connection; no messages or paths are returned.
export function createTokenActivityAggregator(ctx) {
  const cache = new Map();
  let pending;
  async function snapshot(signal) {
    const records = await ctx.sessionQuery.listSessions(signal);
    const present = new Set(records.map(record => record.header.id));
    for (const id of cache.keys()) if (!present.has(id)) cache.delete(id);
    let failedSessions = 0, cursor = 0;
    const persistence = ctx.get?.('sessionPersistence');
    async function worker() {
      while (cursor < records.length) {
        const record = records[cursor++], id = record.header.id;
        signal?.throwIfAborted();
        try {
          let revision;
          if (!record.live && persistence) revision = (await persistence.stat(id, signal))?.revision;
          if (!record.live && revision !== undefined && cache.get(id)?.revision === revision) continue;
          const observation = await ctx.sessionQuery.observeSession(id, { projectionMode: 'none', ...(signal ? { signal } : {}) });
          try {
            const prior = cache.get(id);
            if (observation.source === 'live' && prior?.source === 'live' && prior.cursor === observation.cursor) continue;
            cache.set(id, { revision, source: observation.source, cursor: observation.cursor,
              days: foldTokenActivity(observation.events, observation.inheritedEventCount, TOKEN_ACTIVITY_ZONE) });
          } finally { observation[Symbol.dispose](); }
        } catch (error) {
          signal?.throwIfAborted();
          cache.delete(id); failedSessions++;
        }
      }
    }
    await Promise.all([worker(), worker()]);
    const now = Date.now(), calendar = tokenActivityCalendar(now), totals = new Map();
    for (const entry of cache.values()) for (const [key, day] of entry.days) {
      const sum = totals.get(key) ?? { input: 0, output: 0, requests: 0, missingUsage: 0 };
      for (const field of Object.keys(sum)) sum[field] += day[field];
      totals.set(key, sum);
    }
    return { generatedAt: now, timeZone: TOKEN_ACTIVITY_ZONE, sessions: records.length, failedSessions,
      days: calendar.map(day => ({ ...day, ...(totals.get(day.date) ?? { input: 0, output: 0, requests: 0, missingUsage: 0 }) })) };
  }
  return { snapshot(signal) {
    // Share one bounded scan when multiple application windows poll together.
    if (!pending) pending = snapshot(signal).finally(() => { pending = undefined; });
    return pending;
  }, clear() { cache.clear(); } };
}

export function installTokenActivityHost(ctx) {
  const aggregator = createTokenActivityAggregator(ctx);
  ctx.effect(() => () => aggregator.clear(), 'industrial-acid: token counters');
  // Shared /api exact routes precede the static page carrier and retain its
  // authentication fence. A separate prefix can be shadowed by that carrier.
  ctx.connection.fetch.register({ path: '/api/industrial-acid/token-activity', methods: ['POST'], requestBody: 'buffered', async fetch(request) {
    let message;
    try { message = await request.json(); } catch { return new Response('Invalid JSON', { status: 400 }); }
    const payload = message?.payload;
    if (message?.type !== 'client-request' || typeof message.rpcId !== 'string' || message.rpcId.length > 128 || message.method !== 'industrial-acid/token-activity'
        || payload === null || typeof payload !== 'object' || Array.isArray(payload) || Object.keys(payload).length) return new Response('Invalid request', { status: 400 });
    let result;
    try { result = { ok: true, value: await aggregator.snapshot(request.signal) }; }
    catch { result = { ok: false, error: { code: 'industrial-acid/unavailable', message: 'Token activity is unavailable.', details: {} } }; }
    return new Response(JSON.stringify({ type: 'server-response', rpcId: message.rpcId, result }), { headers: { 'Content-Type': 'application/json', 'Cache-Control': 'private, no-store' } });
  } });
}
