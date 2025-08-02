import { motion } from "motion/react";
import SkillsCloud from "./SkillsCloud";

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ amount: 0.5 }} // triggers when 50% in view
    >
      <span className="text-lg font-bold">Skills:</span>
      <SkillsCloud />
    </motion.div>
  );
}
