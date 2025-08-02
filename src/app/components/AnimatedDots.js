"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

const DOT_COUNT = 100;
const SHOOTING_STAR_COUNT = 20;

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

function generateShootingStars() {
  return Array.from({ length: SHOOTING_STAR_COUNT }).map(() => {
    const angle = -30 + Math.random() * 60; // -30° to +30°
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const length = 60 + Math.random() * 60; // 60-120px (longer)
    const duration = 1.2 + Math.random() * 0.8;
    const delay = Math.random() * 6;
    const opacity = 0.35 + Math.random() * 0.3; // 0.35-0.65 (slightly brighter)
    const thickness = 1.2 + Math.random() * 1.3; // 1.2-2.5px (thicker)
    return {
      startX,
      startY,
      length,
      duration,
      delay,
      angle,
      opacity,
      thickness,
    };
  });
}

export default function AnimatedDots() {
  const [dots, setDots] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  useEffect(() => {
    setDots(generateDots());
    setShootingStars(generateShootingStars());
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Dots/stars */}
      {dots.map((dot, i) => (
        <motion.div
          key={`dot-${i}`}
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
      {/* Shooting stars */}
      {shootingStars.map((star, i) => {
        const dx = star.length * Math.cos((star.angle * Math.PI) / 180);
        const dy = star.length * Math.sin((star.angle * Math.PI) / 180);

        const isRightward = dx >= 0;
        const gradient = isRightward
          ? "linear-gradient(90deg, rgba(255,255,255,0), #fff)"
          : "linear-gradient(270deg, rgba(255,255,255,0), #fff)";

        return (
          <motion.div
            key={`shooting-star-${i}`}
            initial={{
              opacity: 0,
              x: 0,
              y: 0,
            }}
            animate={{
              opacity: [0, star.opacity, 0],
              x: dx,
              y: dy,
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              top: `${star.startY}%`,
              left: `${star.startX}%`,
              width: `${star.length}px`,
              height: `${star.thickness}px`,
              background: gradient,
              borderRadius: "2px",
              pointerEvents: "none",
              zIndex: 1,
              filter: "blur(0.5px)",
            }}
          />
        );
      })}
    </div>
  );
}
