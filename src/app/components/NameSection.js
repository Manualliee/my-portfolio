import { motion } from "motion/react";
import React from "react";

const NameSection = React.forwardRef(({ showName, showArrow, atTop }, ref) => (
  <div
    ref={ref}
    style={{
      height: "100vh",
      position: "relative",
    }}
  >
    {showName && (
      <motion.div
        className="absolute inset-0 flex justify-evenly items-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="w-2xl h-85">
          <h1 className="h-full flex flex-col justify-evenly text-6xl font-bold">
            {/* Manuel */}
            <div className="flex items-center self-start">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0 }}
                className="text-accent"
              >
                M
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 3 }}
              >
                anuel
              </motion.span>
            </div>
            {/* Francisco */}
            <div className="flex items-center self-center">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 2 }}
                className="text-accent"
              >
                F
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 3 }}
              >
                rancisco
              </motion.span>
            </div>
            {/* Venegas */}
            <div className="flex items-center self-end">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="text-accent"
              >
                V
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 3 }}
              >
                enegas
              </motion.span>
            </div>
          </h1>
        </div>
      </motion.div>
    )}
    {showArrow && atTop && (
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 bottom-16 z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 12, 0] }}
        transition={{
          opacity: { duration: 1.2 },
          y: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.svg
            key={i}
            width="40"
            height="20"
            viewBox="0 0 24 12"
            fill="none"
            className="mb-[-8px] last:mb-0"
            initial={{ opacity: 0.3, stroke: "#fff" }}
            animate={{
              opacity: [0.3, 1, 0.3],
              stroke: ["#fff", "var(--color-accent)", "var(--color-accent)"],
            }}
            transition={{
              duration: 1,
              delay: i * 0.3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <path
              d="M6 4L12 10L18 4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        ))}
      </motion.div>
    )}
  </div>
));
NameSection.displayName = "NameSection";
export default NameSection;
