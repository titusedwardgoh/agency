"use client";
import { motion } from "framer-motion";

export default function MotionRight({
  children,
  className = "",
  delay = 0.2,
  duration = 0.8,
  x = 30,                // magnitude of horizontal offset
  reserveSpace = true,
  reservedWidth = 0,
}) {
  return (
    <div style={{ paddingLeft: reserveSpace ? reservedWidth : 0 }}>
      <motion.div
        initial={{ opacity: 0, x: x }}    // start *right* by x px
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration, delay }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}