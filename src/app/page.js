"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import NameSection from "./components/NameSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  const [showName, setShowName] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const nameSectionRef = useRef(null);

  useEffect(() => {
    const nameTimer = setTimeout(() => setShowName(true), 3000);
    return () => clearTimeout(nameTimer);
  }, []);

  useEffect(() => {
    if (showName) {
      const arrowTimer = setTimeout(() => setShowArrow(true), 5000);
      return () => clearTimeout(arrowTimer);
    }
  }, [showName]);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showNavbar && (
          <motion.div
            key="navbar"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50"
          >
            <div className="h-16 md:h-20" />
            <Navbar />
          </motion.div>
        )}
      </AnimatePresence>
      <main className="relative w-full pt-0">
        <section className="max-w-5xl mx-auto w-full px-4 py-12">
          <NameSection
            ref={nameSectionRef}
            showName={showName}
            showArrow={showArrow}
            atTop={true}
          />
        </section>

        <section
          id="about"
          className="max-w-5xl mx-auto w-full px-4 py-12 flex flex-col items-center"
        >
          <AboutMe />
        </section>

        <section
          id="skills"
          className="max-w-5xl mx-auto w-full px-4 py-12 flex flex-col items-center"
        >
          <Skills />
        </section>

        <section
          id="projects"
          className="max-w-5xl mx-auto w-full px-4 py-12 flex flex-col items-center"
        >
          <Projects />
        </section>
      </main>

      <footer
        id="contact"
        className="max-w-5xl mx-auto w-full px-4 py-20 pb-32 bg-transparent"
      >
        <Contact />
      </footer>
    </>
  );
}
