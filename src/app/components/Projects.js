import { motion } from "motion/react";
import Image from "next/image";
import Anicentral from "@/../public/assets/Anicentral.jpg";
import { IoLogoVercel } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";

export default function Projects() {
  return (
    <motion.div
      className="w-full flex flex-col justify-evenly items-center min-h-screen gap-6"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ amount: 0.5, once: false }}
    >
      <h2>My Projects</h2>
      <div className="w-[90%] flex justify-between">
        <div className="flex flex-col lg:flex-row justify-between gap-20 w-full">
          <div className="flex justify-center items-center w-full lg:w-1/2">
            <motion.a
              href="https://ani-central-jsruzbn6t-manuels-projects-4795f6b6.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Anicentral"
              title="Visit Anicentral"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-full aspect-video max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl overflow-hidden mx-auto block"
            >
              <Image
                src={Anicentral}
                alt="Anicentral Project"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                className="object-fit"
              />
            </motion.a>
          </div>

          <div className="flex flex-col justify-evenly items-start gap-4 w-full lg:w-1/2 mt-8 lg:mt-0">
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
                className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-foreground/10 backdrop-blur-md shadow-md transition-all duration-50"
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

            <ul className="flex flex-wrap gap-2 text-sm">
              <li className="flex items-center gap-1 bg-foreground/10 px-3 py-1 rounded-full shadow-sm border border-foreground/10">
                <SiNextdotjs className="inline" />
                Next.js
              </li>
              <li className="flex items-center gap-1 bg-foreground/10 px-3 py-1 rounded-full shadow-sm border border-foreground/10">
                <RiTailwindCssFill className="inline" />
                Tailwind CSS
              </li>
              <li className="flex items-center gap-1 bg-foreground/10 px-3 py-1 rounded-full shadow-sm border border-foreground/10">
                <TbBrandFramerMotion className="inline" />
                Framer Motion
              </li>
              <li className="flex items-center gap-1 bg-foreground/10 px-3 py-1 rounded-full shadow-sm border border-foreground/10">
                <GrGraphQl className="inline" />
                Anilist API
              </li>
              <li className="flex items-center gap-1 bg-foreground/10 px-3 py-1 rounded-full shadow-sm border border-foreground/10">
                <IoLogoVercel className="inline" />
                Vercel
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
