"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[720px] flex items-center justify-center overflow-hidden bg-[#0B0B0B]"
    >
      {/* Background — macro leather texture */}
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=2400&q=90&fit=crop"
          alt="Automotive synthetic leather surface detail"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.38) saturate(0.7) contrast(1.08)" }}
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-[#C6A75E] text-xs tracking-[0.4em] uppercase mb-8"
        >
          Material Supplier
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-white leading-[1.05]"
          style={{
            fontSize: "clamp(3rem, 7vw, 6rem)",
            fontFamily: "Georgia, serif",
            fontWeight: 400,
            letterSpacing: "-0.02em",
          }}
        >
          Automotive
          <br />
          <span
            style={{
              background:
                "linear-gradient(90deg, #C6A75E 0%, #E8D5A3 50%, #C6A75E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Synthetic Leather
          </span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-white/65 mt-10 max-w-xl mx-auto text-base leading-relaxed"
        >
          High-quality synthetic leather materials available in multiple
          textures and color variations. Professional material supply for
          automotive applications.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#colors"
            className="px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 rounded-sm"
            style={{
              background:
                "linear-gradient(135deg, #C6A75E 0%, #E8D5A3 50%, #C6A75E 100%)",
              color: "#0B0B0B",
            }}
          >
            Explore Materials
          </a>

            <a
              href="#colors"
              className="px-10 py-4 text-xs uppercase tracking-[0.2em] font-light border border-[#C6A75E]/50 text-[#C6A75E] hover:bg-[#C6A75E]/10 transition-all duration-300 rounded-sm"
            >
              View Colors
            </a>
        </motion.div>
      </div>
    </section>
  );
}
