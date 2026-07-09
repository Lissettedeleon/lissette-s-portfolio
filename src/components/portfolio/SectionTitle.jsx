import React from "react";
import { motion } from "framer-motion";

export default function SectionTitle({ eyebrow, children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`border-t-2 border-cream pt-4 ${className}`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-2xl font-bold tracking-tight text-cream sm:text-3xl">
          {children}
        </h2>
        {eyebrow && (
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-rose-dusty">
            {eyebrow}
          </p>
        )}
      </div>
    </motion.div>
  );
}
