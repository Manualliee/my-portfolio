import { motion } from "motion/react";
import Image from "next/image";
import photo from "@/../public/assets/photo.jpg";

export default function AboutMe() {
  return (
    <motion.section
      className="flex flex-col md:flex-row justify-evenly items-center min-h-[60vh] w-full"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ amount: 0.5 }}
    >
      <div className="max-w-2xl text-left text-lg p-8 shadow-lg">
        <h2 className="mb-4">Who Am I?</h2>
        <p>
          I&#39;m Manuel—a self-driven and passionate frontend developer. I love
          bringing ideas to life with code, and I&#39;m always exploring new
          ways to make web experiences more interactive and engaging. I&#39;m
          eager to join a team where I can learn, grow, and contribute as a
          developer. Let&#39;s build something great together!
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="group relative w-64 h-64 flex justify-center items-center"
      >
        {/* Glow effect */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none transition-all duration-300 opacity-0 group-hover:opacity-100"
          style={{
            boxShadow: "0 0 64px 16px rgba(22, 219, 101, 0.45)",
            zIndex: 0,
          }}
        />
        {/* Circular image wrapper */}
        <div className="rounded-full w-64 h-64 overflow-hidden shadow-lg flex justify-center items-center relative z-10">
          <a
            href="https://www.linkedin.com/in/manuel-francisco-venegas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
            title="Visit my LinkedIn profile"
          >
            <Image
              src={photo}
              alt="Manuel's Photo"
              width={256}
              height={256}
              className="object-cover w-64 h-64 transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}
