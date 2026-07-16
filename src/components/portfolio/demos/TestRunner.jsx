import React, { useRef, useState } from "react";

// A miniature QA automation demo: run a test suite against a checkout
// function that has a real floating-point bug, then apply the fix and re-run.

const BUGGY = `function checkoutTotal(items, taxRate) {
  let subtotal = 0;
  for (const item of items) {
    subtotal += item.price * item.qty;
  }
  return subtotal + subtotal * taxRate; // ⚠ floating-point drift
}`;

const FIXED = `function checkoutTotal(items, taxRate) {
  let cents = 0;
  for (const item of items) {
    cents += Math.round(item.price * 100) * item.qty;
  }
  const total = cents + Math.round(cents * taxRate);
  return total / 100; // ✓ integer math, then convert
}`;

function buggyTotal(items, taxRate) {
  let subtotal = 0;
  for (const item of items) subtotal += item.price * item.qty;
  return subtotal + subtotal * taxRate;
}

function fixedTotal(items, taxRate) {
  let cents = 0;
  for (const item of items) cents += Math.round(item.price * 100) * item.qty;
  const total = cents + Math.round(cents * taxRate);
  return total / 100;
}

const TESTS = [
  { name: "empty cart returns 0", items: [], tax: 0.08, expect: 0 },
  { name: "single item, no tax", items: [{ price: 5, qty: 1 }], tax: 0, expect: 5 },
  { name: "single item with tax", items: [{ price: 10, qty: 1 }], tax: 0.1, expect: 11 },
  { name: "multiple quantities", items: [{ price: 2.5, qty: 4 }], tax: 0, expect: 10 },
  { name: "two items with tax", items: [{ price: 3, qty: 2 }, { price: 4, qty: 1 }], tax: 0.05, expect: 10.5 },
  { name: "decimal prices stay exact", items: [{ price: 0.1, qty: 1 }, { price: 0.2, qty: 1 }], tax: 0, expect: 0.3 },
  { name: "tax on decimal subtotal", items: [{ price: 19.99, qty: 3 }], tax: 0.0825, expect: 64.92 },
];

export default function TestRunner() {
  const [fixed, setFixed] = useState(false);
  const [results, setResults] = useState({});
  const [running, setRunning] = useState(false);
  const cancelRef = useRef(false);

  async function run(useFixed) {
    if (running) return;
    setRunning(true);
    cancelRef.current = false;
    setResults({});
    const fn = useFixed ? fixedTotal : buggyTotal;
    for (let i = 0; i < TESTS.length; i++) {
      if (cancelRef.current) break;
      const t = TESTS[i];
      setResults((r) => ({ ...r, [i]: { state: "running" } }));
      await new Promise((res) => setTimeout(res, 320));
      const actual = fn(t.items, t.tax);
      const rounded = Math.round(actual * 100) / 100;
      const pass = rounded === t.expect && actual === rounded;
      setResults((r) => ({
        ...r,
        [i]: { state: pass ? "pass" : "fail", actual, ms: 2 + ((i * 7) % 9) },
      }));
    }
    setRunning(false);
  }

  const done = Object.values(results).filter((r) => r.state === "pass" || r.state === "fail");
  const passed = done.filter((r) => r.state === "pass").length;
  const failed = done.filter((r) => r.state === "fail").length;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* code under test */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-rose-dusty">Code under test</p>
          <label className="flex cursor-pointer items-center gap-2 font-mono text-xs text-cream/70">
            <input
              type="checkbox"
              checked={fixed}
              disabled={running}
              onChange={(e) => { setFixed(e.target.checked); setResults({}); }}
              className="h-4 w-4 accent-[#2e6b4f]"
            />
            apply fix
          </label>
        </div>
        <pre className="overflow-x-auto rounded-md border border-cream/15 bg-white p-4 font-mono text-[12.5px] leading-relaxed text-cream/85">
          {fixed ? FIXED : BUGGY}
        </pre>
        <button
          onClick={() => run(fixed)}
          disabled={running}
          className="mt-4 rounded-md bg-cream px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-85 disabled:opacity-50"
        >
          {running ? "Running…" : "Run test suite"}
        </button>
      </div>

      {/* results */}
      <div>
        <div className="mb-3 flex items-baseline justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-rose-dusty">Results</p>
          {done.length > 0 && (
            <p className="font-mono text-xs">
              <span className="text-gold">{passed} passed</span>
              {failed > 0 && <span className="text-[#a4383f]"> · {failed} failed</span>}
            </p>
          )}
        </div>
        <ul className="divide-y divide-cream/10 rounded-md border border-cream/15 bg-white">
          {TESTS.map((t, i) => {
            const r = results[i];
            return (
              <li key={t.name} className="px-4 py-2.5 font-mono text-[12.5px]">
                <div className="flex items-center gap-3">
                  <span className="w-4 text-center">
                    {!r ? <span className="text-cream/25">·</span>
                      : r.state === "running" ? <span className="inline-block h-3 w-3 animate-spin rounded-full border-[1.5px] border-cream/30 border-t-cream" />
                      : r.state === "pass" ? <span className="text-gold">✓</span>
                      : <span className="text-[#a4383f]">✗</span>}
                  </span>
                  <span className={r?.state === "fail" ? "text-[#a4383f]" : "text-cream/75"}>{t.name}</span>
                  {r?.ms !== undefined && <span className="ml-auto text-cream/35">{r.ms}ms</span>}
                </div>
                {r?.state === "fail" && (
                  <p className="mt-1 pl-7 text-[11.5px] text-cream/55">
                    expected <span className="text-cream">{t.expect}</span> · got{" "}
                    <span className="text-[#a4383f]">{String(r.actual)}</span>
                  </p>
                )}
              </li>
            );
          })}
        </ul>
        {failed > 0 && !running && (
          <p className="mt-3 text-[13px] leading-relaxed text-cream/60">
            Classic floating-point bug — 0.1 + 0.2 ≠ 0.3 in JavaScript. Tick{" "}
            <span className="font-mono text-cream">apply fix</span> and re-run.
          </p>
        )}
      </div>
    </div>
  );
}
