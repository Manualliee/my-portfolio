import { motion } from "motion/react";
import Image from "next/image";
import Anicentral from "@/../public/assets/Anicentral.jpg";
import { IoLogoVercel } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <motion.div
      className="w-full flex flex-col justify-evenly items-center min-h-screen"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ amount: 0.5, once: false }}
    >
      <h2>My Projects</h2>
      <div className="w-[90%] flex justify-between">
        <div className="flex flex-col lg:flex-row justify-center gap-20">
          <div className="w-full xs:w-[50%] flex justify-center items-center">
            <motion.a
              href="https://ani-central-jsruzbn6t-manuels-projects-4795f6b6.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Anicentral"
              title="Visit Anicentral"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative w-[400px] h-[225px] rounded-xl overflow-hidden">
                <Image
                  src={Anicentral}
                  alt="Anicentral Project"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.a>
          </div>

          <div className="w-full xs:w-[50%] flex flex-col justify-evenly items-start gap-4">
            <h3>Anicentral</h3>

            <div className="flex justify-start gap-10">
              <motion.a
                href="https://ani-central-jsruzbn6t-manuels-projects-4795f6b6.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Anicentral"
                title="Visit Anicentral"
                whileHover={{
                  scale: 1.18,
                  boxShadow: "0 4px 24px 0 rgba(34,197,94,0.75)",
                  rotate: -8,
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md shadow-md transition-all duration-50"
              >
                <IoLogoVercel color="#fff" size={32} />
              </motion.a>

              <motion.a
                href="https://github.com/Manualliee/AniCentral"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Anicentral on GitHub"
                title="View Anicentral on GitHub"
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
            </div>

            <p>
              A modern web app for discovering anime shows, movies, mangas and
              anything related. Look at what animes are currently trending,
              search for possibly new shows to try out, and learn more about the
              characters and their voice actors within the show!
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
