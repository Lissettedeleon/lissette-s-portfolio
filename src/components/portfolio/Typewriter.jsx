import React, { useEffect, useState } from "react";

export default function Typewriter({ words, className = "" }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 1400);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      const variance = Math.random() * 70;
      const speed = deleting ? 40 + variance / 2 : 70 + variance;
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      }, speed);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-gold align-middle" style={{ height: "1em" }} />
    </span>
  );
}