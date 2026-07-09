import React from "react";
import { motion } from "framer-motion";

export default function SectionTitle({ eyebrow, children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {eyebrow && (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-cream sm:text-5xl">
        {children}
      </h2>
    </motion.div>
  );
}
