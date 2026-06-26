import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[11000] flex flex-col items-center justify-center bg-noir"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <svg width="120" height="120" viewBox="0 0 120 120" className="overflow-visible">
              <motion.circle
                cx="60" cy="60" r="54" fill="none" stroke="#d4a853" strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0.4 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
                style={{ rotate: -90, transformOrigin: "center" }}
              />
              <text x="60" y="78" textAnchor="middle" className="font-serif-display"
                style={{ fontSize: 52, fontStyle: "italic", fill: "#d4a853" }}>
                LD
              </text>
            </svg>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 0.6 }}
            className="mt-6 text-xs uppercase tracking-[0.4em] text-cream/60"
          >
            Lissette De Leon
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}