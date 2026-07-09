import React, { useState } from "react";
import { CheckCircle2, XCircle, RotateCcw, Trophy } from "lucide-react";

export default function Quiz({ questions }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[current];

  function handleAnswer(i) {
    if (selected !== null) return;
    setSelected(i);
    if (i === q.answer) setScore((s) => s + 1);
  }

  function handleNext() {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      setDone(true);
    }
  }

  function handleRestart() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  }

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-gold/20 bg-noir/40 px-6 py-10 text-center">
        <Trophy className="h-10 w-10 text-gold" />
        <p className="font-serif-display text-2xl italic text-cream">
          You scored {score} / {questions.length}
        </p>
        <button
          onClick={handleRestart}
          className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 text-sm font-semibold text-gold hover:bg-gold/10"
        >
          <RotateCcw className="h-4 w-4" /> Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.15em] text-rose-dusty">
        <span>Question {current + 1} of {questions.length}</span>
        <span>Score: {score}</span>
      </div>

      <p className="mt-3 text-lg text-cream">{q.question}</p>

      <div className="mt-4 space-y-2">
        {q.options.map((opt, i) => {
          const isSelected = selected === i;
          const isCorrect = i === q.answer;
          let style = "border-gold/20 bg-noir/40 text-cream/80 hover:border-gold/50";
          if (selected !== null) {
            if (isCorrect) style = "border-emerald-400/40 bg-emerald-400/10 text-emerald-200";
            else if (isSelected) style = "border-red-400/40 bg-red-400/10 text-red-200";
            else style = "border-gold/10 bg-noir/20 text-cream/40";
          }
          return (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              disabled={selected !== null}
              className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition-colors ${style}`}
            >
              {opt}
              {selected !== null && isCorrect && <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" />}
              {selected !== null && isSelected && !isCorrect && <XCircle className="h-4 w-4 shrink-0 text-red-300" />}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div className="mt-4 rounded-xl border border-rose-dusty/25 bg-rose-dusty/5 px-4 py-3 text-sm text-cream/80">
          💡 {q.explanation}
        </div>
      )}

      {selected !== null && (
        <button
          onClick={handleNext}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-noir hover:opacity-90"
        >
          {current + 1 < questions.length ? "Next Question" : "See Results"}
        </button>
      )}
    </div>
  );
}
