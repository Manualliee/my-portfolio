import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ amount: 0.5, once: false }}
      className="w-full h-90 rounded-2xl bg-foreground/10 backdrop-blur-md border border-foreground/20 shadow-lg flex flex-col justify-evenly items-center gap-4"
    >
      <h2>Lets Stay In Touch</h2>
      <motion.a
        href="mailto:manuelvenegas98@gmail.com"
        target="_blank"
        className="text-primary text-[1.25rem] underline"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        manuelvenegas98@gmail.com
      </motion.a>
      <div className="flex gap-6 mt-2">
        <motion.a
          href="https://github.com/Manualliee"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View my GitHub profile"
          title="GitHub"
          whileHover={{
            scale: 1.18,
            boxShadow: "0 4px 24px 0 rgba(34,197,94,0.75)",
            rotate: 8,
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-foreground/10 backdrop-blur-md shadow-md transition-all duration-50"
        >
          <FaGithub color="#fff" size={32} />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/manuel-francisco-venegas"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my LinkedIn profile"
          title="LinkedIn"
          whileHover={{
            scale: 1.18,
            boxShadow: "0 4px 24px 0 rgba(34,197,94,0.75)",
            rotate: 8,
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-foreground/10 backdrop-blur-md shadow-md transition-all duration-50"
        >
          <FaLinkedin size={45} />
        </motion.a>

        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my LinkedIn profile"
          title="My Resume"
          whileHover={{
            scale: 1.18,
            boxShadow: "0 4px 24px 0 rgba(34,197,94,0.75)",
            rotate: 8,
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-foreground/10 backdrop-blur-md shadow-md transition-all duration-50"
        >
          <IoDocumentTextSharp size={45} />
        </motion.a>
      </div>
    </motion.div>
  );
}
