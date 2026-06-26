import React, { useState } from "react";
import { Search, CheckCircle2, AlertTriangle, Zap } from "lucide-react";

const KEYWORDS = ["login", "verify", "account", "bank", "secure", "update", "confirm", "password", "signin", "paypal", "amazon", "apple", "netflix", "microsoft"];
const BAD_TLDS = [".xyz", ".tk", ".ml", ".ga", ".cf", ".gq", ".zip", ".mov"];

function scan(raw) {
  const url = raw.trim();
  let host = url;
  try {
    host = new URL(url.includes("://") ? url : `http://${url}`).hostname;
  } catch { /* keep raw */ }

  const checks = [];
  let score = 0;

  const https = /^https:\/\//i.test(url);
  checks.push({ ok: https, level: https ? "good" : "bad", text: https ? "Uses secure HTTPS" : "No HTTPS — connection not encrypted" });
  if (!https) score += 25;

  const found = KEYWORDS.filter((k) => url.toLowerCase().includes(k));
  const manyKw = found.length > 2;
  checks.push({ ok: !manyKw, level: manyKw ? "bad" : found.length ? "warn" : "good", text: found.length ? `Suspicious keywords: ${found.join(", ")}` : "No suspicious keywords" });
  if (manyKw) score += 30;

  const isIp = /^\d{1,3}(\.\d{1,3}){3}$/.test(host);
  checks.push({ ok: !isIp, level: isIp ? "bad" : "good", text: isIp ? "Uses raw IP address instead of a domain" : "Uses a proper domain name" });
  if (isIp) score += 35;

  const subs = Math.max(0, host.split(".").length - 2);
  const manySubs = subs > 2;
  checks.push({ ok: !manySubs, level: manySubs ? "bad" : "good", text: `${subs} subdomain${subs === 1 ? "" : "s"}${manySubs ? " — excessive" : ""}` });
  if (manySubs) score += 20;

  const badTld = BAD_TLDS.find((t) => host.toLowerCase().endsWith(t));
  checks.push({ ok: !badTld, level: badTld ? "bad" : "good", text: badTld ? `Suspicious TLD (${badTld})` : "Common, trusted TLD" });
  if (badTld) score += 25;

  const long = url.length > 100;
  checks.push({ ok: !long, level: long ? "warn" : "good", text: long ? "Unusually long URL (100+ chars)" : "Reasonable URL length" });
  if (long) score += 15;

  score = Math.min(100, score);
  const label = score < 40 ? "Low" : score <= 70 ? "Medium" : "High";
  const color = score < 40 ? "#22c55e" : score <= 70 ? "#eab308" : "#ef4444";
  return { checks, score, label, color };
}

const ICONS = { good: CheckCircle2, bad: AlertTriangle, warn: Zap };
const COLORS = { good: "text-emerald-400", bad: "text-red-400", warn: "text-yellow-400" };

export default function PhishingDetector() {
  const [url, setUrl] = useState("");
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState(null);

  const run = () => {
    if (!url.trim()) return;
    setScanning(true);
    setResult(null);
    setTimeout(() => {
      setResult(scan(url));
      setScanning(false);
    }, 800);
  };

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && run()}
          placeholder="https://example.com/login…"
          className="flex-1 rounded-xl border border-gold/20 bg-noir/60 px-4 py-3 font-mono text-sm text-cream outline-none focus:border-gold/60"
        />
        <button
          onClick={run}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-noir hover:opacity-90"
        >
          <Search className="h-4 w-4" /> Scan
        </button>
      </div>

      {scanning && (
        <div className="mt-5 overflow-hidden rounded-xl border border-gold/20 bg-noir/60 p-4 font-mono text-xs text-gold/80">
          <p className="animate-pulse">▸ Inspecting packets… resolving host… matching threat signatures…</p>
        </div>
      )}

      {result && (
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <span className="text-sm text-cream/70">Risk Score</span>
            <span className="font-mono text-lg font-bold" style={{ color: result.color }}>
              {result.score}% · {result.label}
            </span>
          </div>
          <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-cream/10">
            <div className="h-full rounded-full transition-all duration-700" style={{ width: `${result.score}%`, background: result.color }} />
          </div>

          <ul className="mt-5 space-y-2">
            {result.checks.map((c, i) => {
              const Icon = ICONS[c.level];
              return (
                <li key={i} className="flex items-start gap-3 rounded-lg border border-cream/10 bg-noir/40 px-3 py-2 text-sm">
                  <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${COLORS[c.level]}`} />
                  <span className="text-cream/75">{c.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <p className="mt-4 text-xs italic text-cream/40">
        Educational tool — results are heuristic, not definitive.
      </p>
    </div>
  );
}