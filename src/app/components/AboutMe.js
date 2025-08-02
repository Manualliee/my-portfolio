import { motion } from "motion/react";

export default function AboutMe() {
  return (
    <motion.section
      className="flex justify-start items-center min-h-[60vh] w-full"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ amount: 0.5 }}
    >
      <div className="max-w-2xl text-left text-lg p-8 shadow-lg">
        <h2 className="text-5xl font-bold mb-4 text-accent">Who Am I?</h2>
        <p className="text-2xl leading-10">
          Hi, I’m Manuel—a self-taught and passionate frontend developer. I love
          bringing ideas to life with code, and I’m always exploring new ways to
          make web experiences more interactive and engaging (like the 3D skills
          sphere above!). I’m eager to join a team where I can learn, grow, and
          contribute as a developer. Let’s build something great together!
        </p>
      </div>
    </motion.section>
  );
}
