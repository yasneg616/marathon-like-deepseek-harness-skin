const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');
const load = () => import('../src/token-activity-core.js');
const event = (seq, time, input, output, extra = {}) => ({ seq, time, type: 'assistant/message', data: { usage: { inputTokens: input, outputTokens: output, ...extra } } });

test('three strictly increasing limits create four bands, with exact boundaries staying in the lower band', async () => {
  const { tokenActivityLevel, normalizeTokenThresholds, validTokenThresholds } = await load();
  const limits = [1000000, 10000000, 50000000];
  for (const [total, level] of [[0,0], [1,1], [1000000,1], [1000001,2], [10000000,2], [10000001,3], [50000000,3], [50000001,4]]) assert.equal(tokenActivityLevel(total, limits), level);
  for (const invalid of [[1,1,2], [3,2,1], [0,2,3], [1.5,2,3], [1,2,Infinity], [1,2], null]) {
    assert.equal(validTokenThresholds(invalid), false); assert.deepEqual(normalizeTokenThresholds(invalid), limits);
  }
});

test('126 daily cells follow Monday columns across year, leap-day and Beijing midnight', async () => {
  const { tokenActivityCalendar, tokenDayKey } = await load();
  for (const now of [Date.UTC(2024,1,29,15,59), Date.UTC(2025,11,31,16), Date.UTC(2026,9,7)]) {
    const days = tokenActivityCalendar(now);
    assert.equal(days.length, 126); assert.equal(new Date(`${days[0].date}T12:00Z`).getUTCDay(), 1);
    assert.equal(days.filter(day => day.today).length, 1); assert.equal(new Set(days.map(day => day.date)).size, 126);
    assert.ok(days.at(-1).date >= tokenDayKey(now));
  }
  assert.equal(tokenDayKey(Date.UTC(2026,9,6,15,59,59)), '2026-10-06');
  assert.equal(tokenDayKey(Date.UTC(2026,9,6,16)), '2026-10-07');
});

test('fold counts input plus output once, excludes inherited forks and tracks missing usage', async () => {
  const { foldTokenActivity } = await load();
  const time = Date.UTC(2026,9,6,16);
  const events = [event(0,time,900,800), { seq:1,time,type:'llm/chunk',data:{usage:{inputTokens:999,outputTokens:999}} },
    event(2,time,100,20,{cacheReadTokens:80,cacheWriteTokens:10,reasoningTokens:15,totalTokens:210}), event(3,time,200,30), event(4,time,-1,30),
    { seq:5,time,type:'assistant/message',data:{} }, event(6,time,1,NaN)];
  assert.deepEqual(foldTokenActivity(events,2).get('2026-10-07'), { input:390,output:50,requests:2,missingUsage:3 });
});

test('Host includes all workspaces and subagents, releases observations, and reports partial failure', async () => {
  const { createTokenActivityAggregator } = await import('../src/token-activity-host.js');
  const today = Date.now(); let closed = 0, read = 0, revision = 'one', liveCursor = 1;
  const records = [{header:{id:'a',cwd:'alpha'},live:false}, {header:{id:'b',cwd:'beta',origin:'subagent'},live:true}, {header:{id:'bad'},live:false}];
  const ctx = { get:()=>({stat:async()=>({revision})}), sessionQuery:{
    listSessions:async()=>records,
    observeSession:async(id)=>{
      read++; if(id==='bad')throw new Error('unreadable');
      return {source:id==='a'?'prepared':'live',cursor:liveCursor,inheritedEventCount:id==='b'?1:0,
        events:id==='a'?[event(0,today,100,10)]:[event(0,today,100,10),event(1,today,200,20)], [Symbol.dispose](){closed++;}};
    }
  }};
  const aggregator = createTokenActivityAggregator(ctx), first = await aggregator.snapshot();
  const todayRow = first.days.find(day=>day.today);
  assert.equal(todayRow.input,300); assert.equal(todayRow.output,30); assert.equal(first.failedSessions,1);
  assert.equal(first.sessions,3); assert.equal(closed,2); assert.equal(read,3);
  await aggregator.snapshot(); assert.equal(read,5); assert.equal(closed,3);
  revision='two'; liveCursor=2; await aggregator.snapshot(); assert.equal(read,8); assert.equal(closed,5);
  assert.ok(!JSON.stringify(first).includes('alpha')); assert.ok(!JSON.stringify(first).includes('beta'));
});

test('Host registers an authenticated shared API route and correlates the RPC response', async () => {
  const { installTokenActivityHost } = await import('../src/token-activity-host.js');
  let route;
  const ctx = { effect:fn=>fn(),sessionQuery:{listSessions:async()=>[]},connection:{fetch:{register:value=>{route=value;}}} };
  installTokenActivityHost(ctx);
  assert.equal(route.path, '/api/industrial-acid/token-activity');
  assert.deepEqual(route.methods, ['POST']);
  const request = body => new Request('http://127.0.0.1'+route.path,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(body)});
  const response = await route.fetch(request({type:'client-request',rpcId:'test-id',method:'industrial-acid/token-activity',payload:{}}));
  const result = await response.json();
  assert.equal(result.rpcId,'test-id'); assert.equal(result.type,'server-response'); assert.equal(result.result.ok,true);
  assert.equal(result.result.value.days.length,126); assert.equal(response.headers.get('cache-control'),'private, no-store');
  assert.equal((await route.fetch(request({type:'client-request',rpcId:'test-id',method:'industrial-acid/token-activity',payload:{path:'private'}}))).status,400);
});

test('Client cancels polling, connection subscriptions and pending requests when plugin is withdrawn', () => {
  const source = fs.readFileSync(path.join(__dirname,'../src/token-activity.js'),'utf8');
  const listeners = new Map(), documentListeners = new Map(), effects = [], intervals = new Set();
  let unsubscribe = 0, pendingSignal;
  const sandbox = { ID:'skin', React:{}, h(){}, normalizeTokenThresholds:()=>[1,2,3],validTokenThresholds:()=>true,AbortController,
    localStorage:{getItem:()=>null,setItem(){}}, window:{addEventListener:(key,fn)=>listeners.set(key,fn),removeEventListener:key=>listeners.delete(key)},
    document:{visibilityState:'visible',addEventListener:(key,fn)=>documentListeners.set(key,fn),removeEventListener:key=>documentListeners.delete(key)},
    setInterval:fn=>{intervals.add(fn);return fn;},clearInterval:fn=>intervals.delete(fn),
    ctx:{effect:fn=>effects.push(fn()),connection:{generation:{subscribe:()=>()=>unsubscribe++},rpc:{call:(_channel,_endpoint,_payload,signal)=>{pendingSignal=signal;return new Promise(()=>{});}}}}
  };
  vm.runInNewContext(source+'\ncreateTokenActivityStore(ctx);',sandbox);
  assert.equal(intervals.size,1); assert.equal(pendingSignal.aborted,false);
  effects.reverse().forEach(fn=>fn());
  assert.equal(intervals.size,0); assert.equal(listeners.size,0); assert.equal(documentListeners.size,0);
  assert.equal(pendingSignal.aborted,true); assert.equal(unsubscribe,1);
});
