"use client";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "motion/react";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import NameSection from "./components/NameSection";
import Projects from "./components/Projects";

export default function Home() {
  const [showName, setShowName] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [atTop, setAtTop] = useState(true);
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
      setAtTop(window.scrollY < 10);
      if (nameSectionRef.current) {
        const rect = nameSectionRef.current.getBoundingClientRect();
        const halfHeight = rect.height / 2;
        setShowNavbar(rect.top < -halfHeight);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative w-full">
      <AnimatePresence>{showNavbar && <Navbar key="navbar" />}</AnimatePresence>
      {/* Name Section */}
      <NameSection
        ref={nameSectionRef}
        showName={showName}
        showArrow={showArrow}
        atTop={atTop}
      />

      {/* Consistent Section Layout */}
      <section className="w-full flex justify-center items-center min-h-[60vh] py-12">
        <div className="w-full max-w-5xl px-4">
          <AboutMe />
        </div>
      </section>

      <section className="w-full flex justify-center items-center min-h-[60vh] py-12">
        <div className="w-full max-w-5xl px-4">
          <Skills />
        </div>
      </section>

      <section className="w-full flex justify-center items-center min-h-[60vh] py-12">
        <div className="w-full max-w-5xl px-4">
          <Projects />
        </div>
      </section>
    </main>
  );
}
