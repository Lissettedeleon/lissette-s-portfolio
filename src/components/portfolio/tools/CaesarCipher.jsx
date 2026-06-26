import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";

const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function shiftText(text, key, decrypt = false) {
  const k = ((decrypt ? -key : key) % 26 + 26) % 26;
  return text.replace(/[a-z]/gi, (c) => {
    const base = c <= "Z" ? 65 : 97;
    return String.fromCharCode(((c.charCodeAt(0) - base + k) % 26) + base);
  });
}

export default function CaesarCipher() {
  const [input, setInput] = useState("");
  const [key, setKey] = useState(3);
  const [output, setOutput] = useState("");

  return (
    <div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-rose-dusty">Plaintext</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text…"
            rows={5}
            className="w-full resize-none rounded-xl border border-gold/20 bg-noir/60 px-4 py-3 text-cream outline-none focus:border-gold/60"
          />
        </div>

        <div className="flex flex-col justify-center gap-4">
          <div>
            <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.15em] text-rose-dusty">
              <span>Shift Key</span>
              <span className="font-mono text-base text-gold">{key}</span>
            </div>
            <Slider value={[key]} min={1} max={25} step={1} onValueChange={(v) => setKey(v[0])} />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setOutput(shiftText(input, key, false))}
              className="flex-1 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-noir hover:opacity-90"
            >
              Encrypt
            </button>
            <button
              onClick={() => setOutput(shiftText(input, key, true))}
              className="flex-1 rounded-full border border-rose-dusty/50 px-4 py-2 text-sm font-semibold text-rose-dusty hover:bg-rose-dusty/10"
            >
              Decrypt
            </button>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-rose-dusty">Output</label>
          <textarea
            value={output}
            readOnly
            placeholder="Result…"
            rows={5}
            className="w-full resize-none rounded-xl border border-gold/20 bg-noir/40 px-4 py-3 font-mono text-gold outline-none"
          />
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <div className="flex min-w-max gap-1">
          {ALPHA.map((c, i) => {
            const shifted = ALPHA[(i + key) % 26];
            return (
              <div key={c} className="flex flex-col items-center gap-1 text-xs">
                <span className="text-cream/40">{c}</span>
                <span className="text-cream/20">↓</span>
                <span className="flex h-7 w-7 items-center justify-center rounded border border-gold/30 bg-gold/10 font-mono text-gold">
                  {shifted}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}