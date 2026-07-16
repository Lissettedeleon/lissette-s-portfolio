import React, { useEffect, useRef, useState } from "react";

const ALGOS = {
  Bubble: async function* (a) {
    const arr = [...a];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        yield { arr: [...arr], active: [j, j + 1] };
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          yield { arr: [...arr], active: [j, j + 1] };
        }
      }
    }
    yield { arr: [...arr], active: [] };
  },
  Insertion: async function* (a) {
    const arr = [...a];
    for (let i = 1; i < arr.length; i++) {
      let j = i;
      while (j > 0 && arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        yield { arr: [...arr], active: [j - 1, j] };
        j--;
      }
    }
    yield { arr: [...arr], active: [] };
  },
  Selection: async function* (a) {
    const arr = [...a];
    for (let i = 0; i < arr.length; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        yield { arr: [...arr], active: [min, j] };
        if (arr[j] < arr[min]) min = j;
      }
      if (min !== i) {
        [arr[i], arr[min]] = [arr[min], arr[i]];
        yield { arr: [...arr], active: [i, min] };
      }
    }
    yield { arr: [...arr], active: [] };
  },
};

const COMPLEXITY = {
  Bubble: "O(n²) time · O(1) space",
  Insertion: "O(n²) time · O(1) space · fast on nearly-sorted data",
  Selection: "O(n²) time · O(1) space · minimal swaps",
};

function randomBars(n = 28) {
  return Array.from({ length: n }, () => 12 + Math.floor(Math.random() * 88));
}

export default function SortingVisualizer() {
  const [bars, setBars] = useState(() => randomBars());
  const [active, setActive] = useState([]);
  const [algo, setAlgo] = useState("Bubble");
  const [running, setRunning] = useState(false);
  const cancelRef = useRef(false);

  useEffect(() => () => { cancelRef.current = true; }, []);

  async function run() {
    if (running) return;
    setRunning(true);
    cancelRef.current = false;
    for await (const step of ALGOS[algo](bars)) {
      if (cancelRef.current) break;
      setBars(step.arr);
      setActive(step.active);
      await new Promise((r) => setTimeout(r, 24));
    }
    setActive([]);
    setRunning(false);
  }

  function shuffle() {
    cancelRef.current = true;
    setRunning(false);
    setBars(randomBars());
    setActive([]);
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        {Object.keys(ALGOS).map((k) => (
          <button
            key={k}
            onClick={() => !running && setAlgo(k)}
            disabled={running}
            className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors disabled:opacity-50 ${
              algo === k ? "bg-cream text-white" : "border border-cream/25 text-cream/75 hover:border-cream/50"
            }`}
          >
            {k} Sort
          </button>
        ))}
        <span className="ml-auto flex gap-3">
          <button onClick={shuffle}
            className="text-sm font-semibold text-cream underline decoration-cream/30 decoration-2 underline-offset-[6px] hover:decoration-cream">
            Shuffle
          </button>
          <button onClick={run} disabled={running}
            className="text-sm font-semibold text-gold underline decoration-gold/40 decoration-2 underline-offset-[6px] hover:decoration-gold disabled:opacity-50">
            {running ? "Sorting…" : "Sort"}
          </button>
        </span>
      </div>

      <div className="mt-5 flex h-44 items-end gap-[3px] rounded-md border border-cream/15 bg-white p-3 sm:h-52">
        {bars.map((h, i) => (
          <div
            key={i}
            style={{ height: `${h}%` }}
            className={`flex-1 rounded-sm transition-[height] duration-75 ${
              active.includes(i) ? "bg-gold" : "bg-cream/75"
            }`}
          />
        ))}
      </div>

      <p className="mt-3 font-mono text-xs text-rose-dusty">{COMPLEXITY[algo]}</p>
    </div>
  );
}
