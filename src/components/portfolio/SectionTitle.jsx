import React from "react";
import { motion } from "framer-motion";

export default function SectionTitle({ eyebrow, children, className = "" }) {
  const words = String(children).split(" ");
  return (
    <div className={className}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 text-xs uppercase tracking-[0.35em] text-rose-dusty"
        >
          {eyebrow}
        </motion.p>
      )}
      <h2
        className="font-serif-display italic text-cream leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl"
        aria-label={String(children)}
      >
        {words.map((w, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom" aria-hidden="true">
            <motion.span
              className="inline-block"
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {w}&nbsp;
            </motion.span>
          </span>
        ))}
      </h2>
    </div>
  );
}