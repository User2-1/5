"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PositioningStatement() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="bg-[#0F0F0F] py-32 px-6 border-y border-white/6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left: statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#C6A75E] text-[0.65rem] tracking-[0.4em] uppercase mb-6">
              Our Focus
            </p>
            <h2
              className="text-white text-3xl md:text-4xl font-light leading-[1.2]"
              style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.01em" }}
            >
              We specialize exclusively
              <br />
              in automotive synthetic
              <br />
              leather materials.
            </h2>
          </motion.div>

          {/* Right: clarification */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8 pt-1 md:pt-14"
          >
            <div className="flex flex-col gap-3">
              <div className="w-6 h-px bg-[#C6A75E]/50" />
              <p className="text-white/70 text-sm leading-relaxed font-light">
                We supply premium synthetic leather rolls and sheets directly to
                manufacturers, coachbuilders, trade professionals and
                fabricators. Our product is the material itself.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                "We do not provide upholstery or installation services.",
                "We are not a saddlery or custom workshop.",
                "We are not affiliated with any vehicle manufacturer.",
                "We do not offer OEM supply or branded partnerships.",
              ].map((line, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-2 w-1 h-1 rounded-full bg-[#C6A75E]/40 shrink-0" />
                  <p className="text-white/35 text-sm font-light leading-relaxed">
                    {line}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
