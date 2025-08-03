import { motion } from "motion/react";
import Image from "next/image";
import logo from "@/../public/assets/logo.svg";

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[90vw] max-w-5xl z-50
                 bg-foreground/10 backdrop-blur-md border border-foreground/20
                 flex items-center px-8 py-3 rounded-xl"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Image
        src={logo}
        alt="Logo"
        width={192}
        height={108}
        className="object-cover"
      />
      
    </motion.nav>
  );
}
