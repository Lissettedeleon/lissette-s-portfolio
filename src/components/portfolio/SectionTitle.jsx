import React from "react";
import { motion } from "framer-motion";

export default function SectionTitle({ kicker, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      {kicker && (
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-rose-dusty">{kicker}</p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-cream sm:text-4xl">{children}</h2>
    </motion.div>
  );
}
