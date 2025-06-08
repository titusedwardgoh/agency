"use client";
import { motion } from "framer-motion";

export default function MotionUp({
  children,
  className = "",
  delay = 0.2,
  duration = 0.8,
  y = 30,
  reserveSpace = true, // new prop to control reserved space
  reservedHeight = 0, // in pixels, approx height of y offset
}) {
  return (
    <div style={{ paddingBottom: reserveSpace ? reservedHeight : 0 }}>
      <motion.div
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration, delay }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
