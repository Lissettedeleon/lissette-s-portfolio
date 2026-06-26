import React, { useMemo, useState } from "react";
import { Eye, EyeOff, Check, X } from "lucide-react";

const LEVELS = [
  { label: "Very Weak", color: "#ef4444" },
  { label: "Weak", color: "#f97316" },
  { label: "Fair", color: "#eab308" },
  { label: "Strong", color: "#22c55e" },
  { label: "Very Strong", color: "#d4a853" },
];

function analyze(pw) {
  const checks = {
    len8: pw.length >= 8,
    upper: /[A-Z]/.test(pw),
    lower: /[a-z]/.test(pw),
    digit: /[0-9]/.test(pw),
    special: /[^A-Za-z0-9]/.test(pw),
    len16: pw.length >= 16,
  };
  let charset = 0;
  if (checks.lower) charset += 26;
  if (checks.upper) charset += 26;
  if (checks.digit) charset += 10;
  if (checks.special) charset += 32;
  const entropy = pw.length > 0 && charset > 0 ? Math.log2(Math.pow(charset, pw.length)) : 0;
  let level = 0;
  if (entropy > 28) level = 1;
  if (entropy > 50) level = 2;
  if (entropy > 70) level = 3;
  if (entropy > 100) level = 4;
  return { checks, entropy, level };
}

const CRITERIA = [
  ["len8", "8+ characters"],
  ["upper", "Uppercase"],
  ["lower", "Lowercase"],
  ["digit", "Number"],
  ["special", "Special char"],
  ["len16", "16+ chars"],
];

export default function PasswordAnalyzer() {
  const [pw, setPw] = useState("");
  const [show, setShow] = useState(false);
  const { checks, entropy, level } = useMemo(() => analyze(pw), [pw]);
  const current = LEVELS[level];

  const tip = useMemo(() => {
    if (!pw) return "";
    if (!checks.len16) return "Length beats complexity — aim for 16+ characters or a passphrase.";
    if (!checks.special) return "Add a special character to expand the keyspace.";
    if (!checks.digit) return "Mix in numbers to raise entropy.";
    return "Excellent — this password has strong entropy.";
  }, [pw, checks]);

  return (
    <div>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          placeholder="Type a password to analyze…"
          className="w-full rounded-xl border border-gold/20 bg-noir/60 px-4 py-3 pr-12 text-cream outline-none focus:border-gold/60"
        />
        <button
          onClick={() => setShow((s) => !s)}
          aria-label={show ? "Hide password" : "Show password"}
          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center text-cream/60 hover:text-gold"
        >
          {show ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      </div>

      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-cream/10">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${pw ? ((level + 1) / 5) * 100 : 0}%`, background: current.color }}
        />
      </div>
      <div className="mt-2 flex items-center justify-between text-sm">
        <span style={{ color: current.color }} className="font-semibold">{pw ? current.label : "—"}</span>
        <span className="font-mono text-xs text-cream/60">{entropy.toFixed(1)} bits</span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {CRITERIA.map(([key, label]) => {
          const ok = checks[key];
          return (
            <div key={key} className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-xs ${ok ? "border-emerald-400/30 text-emerald-300" : "border-cream/10 text-cream/45"}`}>
              {ok ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
              {label}
            </div>
          );
        })}
      </div>

      {pw && (
        <div className="mt-5 rounded-xl border border-rose-dusty/25 bg-rose-dusty/5 px-4 py-3 text-sm text-cream/80">
          💡 {tip}
        </div>
      )}
    </div>
  );
}