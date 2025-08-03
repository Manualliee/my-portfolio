import { motion } from "motion/react";
import SkillsCloud from "./SkillsCloud";

export default function Skills() {
  return (
    <motion.section
      className="w-full min-h-[60vh] py-12"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ amount: 0.5 }}
    >
      <div className="max-w-5xl px-4 flex flex-col justify-center items-center gap-20">
        <h2>What Can I do?</h2>
        <div className="flex justify-center items-center w-full h-full">
          <SkillsCloud />
        </div>
      </div>
    </motion.section>
  );
}
