import React, { useRef, useState } from "react";

// Interactive cloud request simulator: watch a request travel through a
// serverless architecture, with cache hits and failure handling.

const NODES = [
  { key: "client", label: "Client", sub: "browser" },
  { key: "gateway", label: "API Gateway", sub: "routing · cache" },
  { key: "auth", label: "Auth Lambda", sub: "verify token" },
  { key: "service", label: "Service Lambda", sub: "business logic" },
  { key: "db", label: "DynamoDB", sub: "data" },
];

export default function CloudSimulator() {
  const [cache, setCache] = useState(false);
  const [dbUp, setDbUp] = useState(true);
  const [activeNode, setActiveNode] = useState(null);
  const [log, setLog] = useState([]);
  const [running, setRunning] = useState(false);
  const cancelRef = useRef(false);

  function addLog(line, tone = "normal") {
    setLog((l) => [...l, { line, tone }]);
  }

  async function step(nodeKey, ms) {
    setActiveNode(nodeKey);
    await new Promise((r) => setTimeout(r, ms));
  }

  async function send() {
    if (running) return;
    setRunning(true);
    cancelRef.current = false;
    setLog([]);
    addLog("GET /api/orders");

    await step("client", 350);
    await step("gateway", 400);

    if (cache) {
      addLog("API Gateway → cache HIT · 4ms", "good");
      await step("client", 350);
      addLog("← 200 OK · total 9ms (served from cache)", "good");
      setActiveNode(null);
      setRunning(false);
      return;
    }
    addLog("API Gateway → cache MISS · route to auth · 12ms");

    await step("auth", 420);
    addLog("Auth Lambda → token valid · 38ms", "good");

    await step("service", 420);
    addLog("Service Lambda → query orders · 21ms");

    await step("db", 450);
    if (!dbUp) {
      addLog("DynamoDB → connection timeout", "bad");
      for (let i = 1; i <= 2; i++) {
        await step("service", 380);
        addLog(`Service Lambda → retry ${i}/2 with backoff…`);
        await step("db", 380);
        addLog("DynamoDB → still unavailable", "bad");
      }
      await step("gateway", 350);
      await step("client", 350);
      addLog("← 503 Service Unavailable · graceful error returned to user", "bad");
      addLog("alert → on-call notified · request logged for replay", "warn");
    } else {
      addLog("DynamoDB → 12 items · 9ms", "good");
      await step("service", 380);
      await step("gateway", 350);
      await step("client", 350);
      addLog(`← 200 OK · total ${cache ? 9 : 94}ms`, "good");
    }
    setActiveNode(null);
    setRunning(false);
  }

  return (
    <div>
      {/* controls */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <button
          onClick={send}
          disabled={running}
          className="rounded-md bg-cream px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-85 disabled:opacity-50"
        >
          {running ? "Request in flight…" : "Send request"}
        </button>
        <label className="flex cursor-pointer items-center gap-2 font-mono text-xs text-cream/70">
          <input type="checkbox" checked={cache} disabled={running}
            onChange={(e) => setCache(e.target.checked)} className="h-4 w-4 accent-[#2e6b4f]" />
          edge cache
        </label>
        <label className="flex cursor-pointer items-center gap-2 font-mono text-xs text-cream/70">
          <input type="checkbox" checked={dbUp} disabled={running}
            onChange={(e) => setDbUp(e.target.checked)} className="h-4 w-4 accent-[#2e6b4f]" />
          database online
        </label>
      </div>

      {/* architecture */}
      <div className="mt-5 flex flex-wrap items-center gap-y-3 rounded-md border border-cream/15 bg-white p-4">
        {NODES.map((n, i) => (
          <React.Fragment key={n.key}>
            <div
              className={`rounded-md border px-3.5 py-2 text-center transition-all duration-200 ${
                activeNode === n.key
                  ? "scale-105 border-gold bg-gold/10 shadow-[0_0_0_3px_rgba(46,107,79,0.15)]"
                  : "border-cream/20"
              } ${n.key === "db" && !dbUp ? "opacity-40" : ""}`}
            >
              <p className="font-mono text-xs font-semibold text-cream">{n.label}</p>
              <p className="font-mono text-[10px] text-cream/45">{n.key === "db" && !dbUp ? "offline" : n.sub}</p>
            </div>
            {i < NODES.length - 1 && (
              <svg width="30" height="10" className="mx-1 shrink-0" aria-hidden="true">
                <line x1="0" y1="5" x2="22" y2="5" stroke="#182420" strokeWidth="1.2" className={running ? "flow-line" : ""} strokeDasharray="6 6" />
                <path d="M22 1 L29 5 L22 9 Z" fill="#182420" />
              </svg>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* request log */}
      <div className="mt-4 h-44 overflow-y-auto rounded-md border border-cream/15 bg-white p-4 font-mono text-[12px] leading-relaxed">
        {log.length === 0 ? (
          <p className="text-cream/35">Request log — press "Send request". Try turning the database off, or the cache on.</p>
        ) : (
          log.map((l, i) => (
            <p key={i} className={
              l.tone === "good" ? "text-gold"
              : l.tone === "bad" ? "text-[#a4383f]"
              : l.tone === "warn" ? "text-[#8a6d2f]"
              : "text-cream/70"
            }>
              {l.line}
            </p>
          ))
        )}
      </div>
    </div>
  );
}
