"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

const DOT_COUNT = 100;

function randomColor() {
  // Mostly white, some accent green
  return Math.random() < 0.8 ? "#fff" : "var(--color-accent)";
}

function generateDots() {
  return Array.from({ length: DOT_COUNT }).map(() => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: 1 + Math.random() * 2.5, // smaller, more star-like
    delay: Math.random() * 2,
    color: randomColor(),
    duration: 1 + Math.random() * 1.5, // random strobe speed
  }));
}

export default function AnimatedDots() {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    setDots(generateDots());
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.2, scale: 1 }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: `${dot.top}%`,
            left: `${dot.left}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            borderRadius: "50%",
            background: dot.color,
            boxShadow: `0 0 6px 2px ${dot.color}`,
            filter: "blur(0.5px)",
          }}
        />
      ))}
    </div>
  );
}
