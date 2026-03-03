"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Materials", href: "#philosophy" },
  { label: "Colors", href: "#colors" },
  { label: "Technical", href: "#technical" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(11,11,11,0.95)"
          : "transparent",
        borderBottom: scrolled ? "1px solid rgba(198,167,94,0.12)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <span
            className="text-[#C6A75E] text-[0.6rem] tracking-[0.5em] uppercase font-light"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Synthetix
          </span>
          <span className="w-px h-4 bg-[#C6A75E]/30" />
          <span className="text-white/40 text-[0.6rem] tracking-[0.3em] uppercase font-light">
            Automotive Materials
          </span>
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/50 hover:text-[#C6A75E] text-[0.65rem] tracking-[0.25em] uppercase transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-6 py-2.5 text-[0.6rem] tracking-[0.2em] uppercase border border-[#C6A75E]/50 text-[#C6A75E] hover:bg-[#C6A75E]/10 transition-all duration-300 rounded-sm"
        >
          Request Sample
        </a>
      </div>
    </motion.header>
  );
}
