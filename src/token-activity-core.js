export const TOKEN_ACTIVITY_DEFAULTS = [1000000, 10000000, 50000000];
export const TOKEN_ACTIVITY_ZONE = 'Asia/Shanghai';
export const TOKEN_ACTIVITY_WEEKS = 18;

export function validTokenThresholds(value) {
  return Array.isArray(value) && value.length === 3 && value.every(n => Number.isSafeInteger(n) && n > 0)
    && value[0] < value[1] && value[1] < value[2];
}
export function normalizeTokenThresholds(value) {
  return validTokenThresholds(value) ? [...value] : [...TOKEN_ACTIVITY_DEFAULTS];
}
// Zero is an empty day. A boundary changes color only after it is exceeded.
export function tokenActivityLevel(total, thresholds) {
  if (!Number.isFinite(total) || total <= 0) return 0;
  return 1 + normalizeTokenThresholds(thresholds).filter(limit => total > limit).length;
}
export function tokenDayKey(time, zone = TOKEN_ACTIVITY_ZONE) {
  const parts = new Intl.DateTimeFormat('en', { timeZone: zone, year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(time);
  const get = type => parts.find(part => part.type === type).value;
  return `${get('year')}-${get('month')}-${get('day')}`;
}
export function tokenActivityCalendar(now = Date.now(), weeks = TOKEN_ACTIVITY_WEEKS, zone = TOKEN_ACTIVITY_ZONE) {
  const today = tokenDayKey(now, zone), date = new Date(`${today}T12:00:00Z`);
  const mondayOffset = (date.getUTCDay() + 6) % 7;
  date.setUTCDate(date.getUTCDate() - mondayOffset - (weeks - 1) * 7);
  return Array.from({ length: weeks * 7 }, (_, i) => {
    const day = new Date(date); day.setUTCDate(day.getUTCDate() + i);
    const key = day.toISOString().slice(0, 10);
    return { date: key, today: key === today, future: key > today, weekday: i % 7 };
  });
}
export function foldTokenActivity(events, inheritedEventCount = 0, zone = TOKEN_ACTIVITY_ZONE) {
  const days = new Map(), format = new Intl.DateTimeFormat('en', { timeZone: zone, year: 'numeric', month: '2-digit', day: '2-digit' });
  for (const event of events) {
    if (event.seq < inheritedEventCount || event.type !== 'assistant/message' || !Number.isFinite(event.time)) continue;
    const usage = event.data?.usage;
    // Harness uses disjoint ordinary/cache-read/cache-write input buckets.
    // Reasoning is already part of outputTokens; totalTokens is informational.
    const valid = usage && [usage.inputTokens, usage.outputTokens, usage.cacheReadTokens ?? 0, usage.cacheWriteTokens ?? 0].every(n => Number.isSafeInteger(n) && n >= 0);
    const parts = format.formatToParts(event.time), get = type => parts.find(part => part.type === type).value;
    const key = `${get('year')}-${get('month')}-${get('day')}`;
    const day = days.get(key) ?? { input: 0, output: 0, requests: 0, missingUsage: 0 };
    if (valid) { day.input += usage.inputTokens + (usage.cacheReadTokens ?? 0) + (usage.cacheWriteTokens ?? 0); day.output += usage.outputTokens; day.requests++; }
    else day.missingUsage++;
    days.set(key, day);
  }
  return days;
}
