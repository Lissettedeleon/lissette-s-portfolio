import React, { useMemo, useState } from "react";
import { ShieldAlert, ShieldCheck, AlertTriangle, ScanSearch, FileText } from "lucide-react";

const SAMPLE_TEXT = `# .env example (all values below are fake placeholders)
aws_secret_access_key = "AKIANOTREALEXAMPLE99"
DATABASE_URL=postgres://demoadmin:demopass@db.example.com:5432/prod
api_key: "sk_test_NOTAREALKEY0000example"

const githubToken = "ghp_NOTAREALTOKEN0000000000000000example";
const slackToken = "xoxb-NOTREAL-0000000000-example";

password = "correcthorsebatterystaple123"

-----BEGIN RSA PRIVATE KEY-----
NOTAREALKEYNOTAREALKEYNOTAREALKEYEXAMPLE
-----END RSA PRIVATE KEY-----`;

const RULES = [
  {
    type: "AWS Access Key ID",
    severity: "Critical",
    regex: /AKIA[0-9A-Z]{16}/g,
    tip: "Revoke this key in IAM immediately and issue a new one.",
  },
  {
    type: "AWS Secret Key",
    severity: "Critical",
    regex: /(?:aws_secret|secret_access_key)\s*[:=]\s*['"]?([A-Za-z0-9/+=]{40})['"]?/gi,
    tip: "Rotate this AWS secret key and audit recent account activity.",
  },
  {
    type: "Private Key Block",
    severity: "Critical",
    regex: /-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----/g,
    tip: "Revoke and reissue this key pair — never commit private keys to source.",
  },
  {
    type: "DB Connection String",
    severity: "Critical",
    regex: /[a-z][a-z0-9+.-]*:\/\/[^\s:@/]+:[^\s:@/]+@[^\s/]+/gi,
    tip: "Move the connection string to environment variables and rotate the DB password.",
  },
  {
    type: "GitHub Token",
    severity: "Warning",
    regex: /gh[ps]_[A-Za-z0-9]{36}|github_pat_[A-Za-z0-9_]{20,}/g,
    tip: "Revoke this token in GitHub Settings → Developer settings → Tokens.",
  },
  {
    type: "Slack Token",
    severity: "Warning",
    regex: /xox[baprs]-[0-9A-Za-z-]{10,}/g,
    tip: "Revoke this token in the Slack app management console.",
  },
  {
    type: "JWT",
    severity: "Warning",
    regex: /eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/g,
    tip: "Treat as compromised if exposed — invalidate the session and rotate signing secrets.",
  },
  {
    type: "Generic API Key",
    severity: "Warning",
    regex: /api[_-]?key\s*[:=]\s*['"]?([A-Za-z0-9_\-]{20,})['"]?/gi,
    tip: "Move this API key to a secrets manager or .env file excluded from git.",
  },
  {
    type: "Generic Secret Assignment",
    severity: "Warning",
    regex: /(secret|password|token|key)\s*[:=]\s*['"]([^'"]{12,})['"]/gi,
    tip: "Avoid hardcoding credentials — load from environment variables instead.",
  },
];

const SEVERITY_STYLE = {
  Critical: { color: "#ef4444", bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.3)" },
  Warning: { color: "#eab308", bg: "rgba(234,179,8,0.08)", border: "rgba(234,179,8,0.3)" },
};

function maskSecret(value) {
  if (value.length <= 8) return "•".repeat(value.length);
  return `${value.slice(0, 4)}${"•".repeat(Math.min(value.length - 8, 12))}${value.slice(-4)}`;
}

function scan(text) {
  const lines = text.split("\n");
  const findings = [];

  lines.forEach((line, idx) => {
    RULES.forEach((rule) => {
      const re = new RegExp(rule.regex.source, rule.regex.flags);
      let match;
      while ((match = re.exec(line)) !== null) {
        const matched = match[0];
        findings.push({
          type: rule.type,
          severity: rule.severity,
          line: idx + 1,
          masked: maskSecret(matched),
          tip: rule.tip,
        });
        if (!re.global) break;
      }
    });
  });

  return findings;
}

const REMEDIATION_MAP = {
  "AWS Access Key ID": "Rotate this AWS key immediately and audit IAM access logs.",
  "AWS Secret Key": "Rotate this AWS key immediately and audit IAM access logs.",
  "Private Key Block": "Revoke and reissue affected key pairs.",
  "DB Connection String": "Move credentials to a secrets manager and rotate the DB password.",
  "GitHub Token": "Revoke the token in GitHub settings and reissue scoped tokens.",
  "Slack Token": "Revoke the token in Slack app management.",
  "JWT": "Invalidate the session and rotate signing secrets.",
  "Generic API Key": "Move secrets out of source code and into environment variables.",
  "Generic Secret Assignment": "Add a .env file (excluded via .gitignore) for all credentials.",
};

export default function SecretScanner() {
  const [input, setInput] = useState("");
  const [hasScanned, setHasScanned] = useState(false);

  const findings = useMemo(() => scan(input), [input]);

  const criticalCount = findings.filter((f) => f.severity === "Critical").length;
  const warningCount = findings.filter((f) => f.severity === "Warning").length;

  const checklist = useMemo(() => {
    const items = new Set();
    findings.forEach((f) => items.add(REMEDIATION_MAP[f.type]));
    if (findings.length > 0) items.add("Add .env (and any secret files) to .gitignore.");
    return Array.from(items);
  }, [findings]);

  function handleScan() {
    setHasScanned(true);
  }

  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          if (hasScanned) setHasScanned(false);
        }}
        placeholder="Paste code, .env content, or config text to scan…"
        rows={8}
        className="w-full resize-y rounded-xl border border-gold/20 bg-noir/60 px-4 py-3 font-mono text-sm text-cream outline-none focus:border-gold/60"
      />

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          onClick={handleScan}
          disabled={!input.trim()}
          className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-noir transition-opacity hover:opacity-90 disabled:opacity-40"
        >
          <ScanSearch className="h-4 w-4" /> Scan for Secrets
        </button>
        <button
          onClick={() => {
            setInput(SAMPLE_TEXT);
            setHasScanned(false);
          }}
          className="inline-flex items-center gap-2 rounded-full border border-rose-dusty/50 px-5 py-2.5 text-sm font-semibold text-rose-dusty transition-colors hover:bg-rose-dusty/10"
        >
          <FileText className="h-4 w-4" /> Load Sample
        </button>
      </div>
      <p className="mt-2 text-xs text-cream/40">Runs entirely in your browser — nothing is sent or stored.</p>

      {hasScanned && (
        <div className="mt-6">
          {findings.length === 0 ? (
            <div className="flex items-center gap-3 rounded-xl border border-emerald-400/30 bg-emerald-400/5 px-4 py-3 text-sm text-emerald-300">
              <ShieldCheck className="h-5 w-5 shrink-0" />
              No secrets detected.
            </div>
          ) : (
            <>
              <div className="flex flex-wrap items-center gap-3 rounded-xl border border-gold/20 bg-noir/40 px-4 py-3 text-sm text-cream/80">
                <ShieldAlert className="h-5 w-5 text-rose-dusty" />
                <span className="font-semibold text-cream">{findings.length} finding{findings.length !== 1 ? "s" : ""}</span>
                {criticalCount > 0 && (
                  <span className="rounded-full px-2.5 py-0.5 text-xs font-medium" style={{ color: SEVERITY_STYLE.Critical.color, background: SEVERITY_STYLE.Critical.bg }}>
                    {criticalCount} Critical
                  </span>
                )}
                {warningCount > 0 && (
                  <span className="rounded-full px-2.5 py-0.5 text-xs font-medium" style={{ color: SEVERITY_STYLE.Warning.color, background: SEVERITY_STYLE.Warning.bg }}>
                    {warningCount} Warning
                  </span>
                )}
              </div>

              <div className="mt-4 space-y-2">
                {findings.map((f, i) => {
                  const style = SEVERITY_STYLE[f.severity];
                  return (
                    <div
                      key={i}
                      className="rounded-xl border px-4 py-3"
                      style={{ borderColor: style.border, background: style.bg }}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 shrink-0" style={{ color: style.color }} />
                          <span className="text-sm font-semibold text-cream">{f.type}</span>
                          <span className="text-xs text-cream/45">Line {f.line}</span>
                        </div>
                        <span className="rounded-full px-2.5 py-0.5 text-xs font-medium" style={{ color: style.color, background: "rgba(0,0,0,0.2)" }}>
                          {f.severity}
                        </span>
                      </div>
                      <p className="mt-2 font-mono text-xs text-cream/70">{f.masked}</p>
                      <p className="mt-1 text-xs text-cream/55">💡 {f.tip}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-xl border border-rose-dusty/25 bg-rose-dusty/5 px-4 py-4">
                <h4 className="text-sm font-semibold text-cream">Remediation Checklist</h4>
                <ul className="mt-2 space-y-1.5">
                  {checklist.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-cream/75">
                      <span className="mt-0.5 text-rose-dusty">▸</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
