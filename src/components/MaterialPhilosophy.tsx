"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    number: "01",
    title: "Durability",
    body: "High abrasion resistance and structural stability under sustained use. Engineered to outlast standard materials in demanding vehicle environments.",
  },
  {
    number: "02",
    title: "Precision Finish",
    body: "Refined grain structures and consistent surface quality across every roll. Uniform texture, calibrated thickness, and clean edge tolerances.",
  },
  {
    number: "03",
    title: "Design Flexibility",
    body: "Available in multiple textures and color variations. Compatible with industry-standard cutting, bonding and sewing processes.",
  },
  {
    number: "04",
    title: "Low Maintenance",
    body: "Easy to clean and resistant to wear, moisture and common vehicle contaminants. Retains surface integrity over extended product lifespan.",
  },
];

function Pillar({ item, index }: { item: typeof pillars[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="flex flex-col gap-5 p-8 border border-white/6 hover:border-[#C6A75E]/20 transition-colors duration-500 group"
    >
      <span className="text-[#C6A75E]/40 text-[0.65rem] tracking-[0.35em] font-light">
        {item.number}
      </span>
      <div className="w-8 h-px bg-[#C6A75E]/30 group-hover:bg-[#C6A75E]/60 transition-colors duration-500" />
      <h3
        className="text-white text-lg font-light tracking-wide"
        style={{ fontFamily: "Georgia, serif" }}
      >
        {item.title}
      </h3>
      <p className="text-white/45 text-sm leading-relaxed font-light">
        {item.body}
      </p>
    </motion.div>
  );
}

export default function MaterialPhilosophy() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section id="philosophy" className="bg-[#0B0B0B] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-[#C6A75E] text-[0.65rem] tracking-[0.4em] uppercase mb-5">
            Material Philosophy
          </p>
          <h2
            className="text-white text-3xl md:text-4xl font-light leading-snug max-w-xl"
            style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.01em" }}
          >
            Built on four
            <br />
            core principles.
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {pillars.map((item, i) => (
            <div key={item.number} className="bg-[#0B0B0B]">
              <Pillar item={item} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
