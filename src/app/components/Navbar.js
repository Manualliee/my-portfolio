import { useRef, useState, useLayoutEffect, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import logo from "@/../public/assets/logo.svg";

export default function Navbar({ visible = true }) {
  const [open, setOpen] = useState(false);
  const linksRef = useRef(null);
  const [linksHeight, setLinksHeight] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after client mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Measure the height of the links for smooth animation
  useLayoutEffect(() => {
    if (linksRef.current) {
      setLinksHeight(linksRef.current.scrollHeight);
    }
  }, [open]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 w-full z-50 bg-foreground/10 backdrop-blur-md border-b border-foreground/20"
      style={{
        boxSizing: "border-box",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.3s",
      }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between w-full px-4 py-4">
        {/* Logo */}
        <Image
          src={logo}
          alt="Manuel Venegas Logo"
          width={80}
          height={40}
          priority
          className="object-contain h-8 w-auto md:h-12"
        />
        {/* Hamburger for mobile */}
        <button
          className="md:hidden ml-auto z-50 p-2 flex flex-col justify-center items-center h-10 w-10"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <motion.span
            className="block w-7 h-1 bg-primary rounded mb-1"
            animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
          <motion.span
            className="block w-7 h-1 bg-primary rounded mb-1"
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-7 h-1 bg-primary rounded"
            animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        </button>
        {/* Desktop nav links */}
        <nav className="hidden md:flex flex-row gap-8 w-auto items-center">
          <a
            href="#about"
            className="animated-underline relative transition-colors px-4 py-3 md:p-0 block md:inline"
          >
            About
          </a>
          <a
            href="#skills"
            className="animated-underline relative transition-colors px-4 py-3 md:p-0 block md:inline"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="animated-underline relative transition-colors px-4 py-3 md:p-0 block md:inline"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="animated-underline relative transition-colors px-4 py-3 md:p-0 block md:inline"
          >
            Contact
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="animated-underline relative transition-colors px-4 py-3 md:p-0 block md:inline"
          >
            View Resume
          </a>
        </nav>
      </div>

      {/* Mobile nav links */}
      <AnimatePresence initial={false}>
        {open && mounted && (
          <motion.nav
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: linksHeight,
              opacity: 1,
              pointerEvents: "auto",
            }}
            exit={{
              height: 0,
              opacity: 0,
              pointerEvents: "none",
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="w-full overflow-hidden border-t transition-all duration-300 flex flex-col gap-6 py-2 md:hidden"
            style={{ overflow: "hidden" }}
          >
            <div
              ref={linksRef}
              className="flex flex-col gap-6 w-full pb-8 px-4"
            >
              <a
                href="#about"
                className="animated-underline transition-colors px-4 py-3 block"
              >
                About
              </a>
              <a
                href="#skills"
                className="animated-underline transition-colors px-4 py-3 block"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="animated-underline transition-colors px-4 py-3 block"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="animated-underline transition-colors px-4 py-3 block"
              >
                Contact
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="animated-underline transition-colors px-4 py-3 block"
              >
                View Resume
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
