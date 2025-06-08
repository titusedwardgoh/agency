"use client";
import { motion } from "framer-motion";

export default function MotionDown({
  children,
  className = "",
  delay = 0.2,
  duration = 0.8,
  y = 30,                // magnitude of offset
  reserveSpace = true,
  reservedHeight = 0,
}) {
  return (
    <div style={{ paddingBottom: reserveSpace ? reservedHeight : 0 }}>
      <motion.div
        initial={{ opacity: 0, y: -y }}    // start *above* by y px
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
