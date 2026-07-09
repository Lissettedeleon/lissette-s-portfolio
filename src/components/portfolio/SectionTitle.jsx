import React from "react";
import { motion } from "framer-motion";

export default function SectionTitle({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10 flex items-center gap-4"
    >
      <span className="text-gold">✦</span>
      <h2 className="text-3xl font-bold tracking-tight text-cream sm:text-4xl">{children}</h2>
      <span className="gold-divider mt-1 flex-1" />
    </motion.div>
  );
}
