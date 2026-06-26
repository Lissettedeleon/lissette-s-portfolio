import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed left-0 top-0 z-[10000] h-[3px] w-full"
    >
      <div className="h-full w-full" style={{ background: "linear-gradient(90deg,#d4a853,#d4847a)" }} />
    </motion.div>
  );
}