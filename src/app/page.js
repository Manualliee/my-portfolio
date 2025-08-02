"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";

export default function Home() {
  const [showName, setShowName] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const nameTimer = setTimeout(() => setShowName(true), 3000);
    return () => clearTimeout(nameTimer);
  }, []);

  useEffect(() => {
    if (showName) {
      const arrowTimer = setTimeout(() => setShowArrow(true), 1200);
      return () => clearTimeout(arrowTimer);
    }
  }, [showName]);

  return (
    <main className="relative w-full">
      {/* Intro section fills the first viewport */}
      <div
        style={{
          height: "100vh",
          position: "relative",
        }}
      >
        {showName && (
          <motion.div
            className="absolute inset-0 flex justify-center items-center z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <span className="text-6xl font-bold text-foreground">
              Manuel F. Venegas
            </span>
          </motion.div>
        )}
        {showArrow && (
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 bottom-16 z-10 flex justify-center"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: [0, 12, 0] }}
            transition={{
              opacity: { duration: 1.2 },
              y: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 16V4M12 16L6 10M12 16L18 10"
                stroke="var(--color-accent)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        )}
      </div>

      <section>
        <AboutMe />
      </section>
      {/* Skills section below, scroll to see */}
      <section className="flex justify-center items-center min-h-[100vh]">
        <Skills />
      </section>
    </main>
  );
}
