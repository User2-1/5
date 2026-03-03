"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const specs = [
  {
    label: "Abrasion Resistance",
    value: "Suitable for automotive use",
    note: "Developed for high-contact interior surfaces",
  },
  {
    label: "UV Stability",
    value: "Designed for durability",
    note: "Consistent surface quality over long-term use",
  },
  {
    label: "Temperature Resistance",
    value: "Automotive grade",
    note: "Suitable for standard vehicle interior conditions",
  },
  {
    label: "Material Composition",
    value: "PU / PVC based",
    note: "Exact composition available upon request",
  },
  {
    label: "Tensile Strength",
    value: "Engineered for stability",
    note: "Technical datasheet available on request",
  },
  {
    label: "Surface Consistency",
    value: "Uniform across roll",
    note: "Designed for consistent surface quality",
  },
  {
    label: "Fire Classification",
    value: "Available on request",
    note: "Specific certifications vary by material grade",
  },
  {
    label: "Roll Width",
    value: "Standard & custom",
    note: "Specifications available upon request",
  },
];

function SpecRow({
  spec,
  index,
}: {
  spec: (typeof specs)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      className="grid grid-cols-[1fr_auto] md:grid-cols-[2fr_1fr_2fr] items-center gap-4 py-5 border-b border-white/6 group hover:border-white/12 transition-colors duration-300"
    >
      {/* Label */}
      <p className="text-white/60 text-sm font-light tracking-wide">
        {spec.label}
      </p>

      {/* Value */}
      <p
        className="text-[#C6A75E] text-sm font-light text-right md:text-left"
        style={{ fontFamily: "Georgia, serif" }}
      >
        {spec.value}
      </p>

      {/* Note */}
      <p className="hidden md:block text-white/25 text-xs tracking-wide">
        {spec.note}
      </p>
    </motion.div>
  );
}

export default function TechnicalPerformance() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section id="technical" className="bg-[#0F0F0F] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
        >
          <div>
            <p className="text-[#C6A75E] text-[0.65rem] tracking-[0.4em] uppercase mb-5">
              Technical Data
            </p>
            <h2
              className="text-white text-3xl md:text-4xl font-light leading-snug"
              style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.01em" }}
            >
              Performance
              <br />
              Specifications.
            </h2>
          </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-sm">
              General performance characteristics of our materials.
              Detailed technical datasheets and material samples available upon request.
            </p>
        </motion.div>

        {/* Column labels */}
        <div className="grid grid-cols-[1fr_auto] md:grid-cols-[2fr_1fr_2fr] items-center gap-4 pb-4 border-b border-white/10">
          <p className="text-white/20 text-[0.6rem] tracking-[0.3em] uppercase">Property</p>
          <p className="text-white/20 text-[0.6rem] tracking-[0.3em] uppercase text-right md:text-left">Value</p>
          <p className="hidden md:block text-white/20 text-[0.6rem] tracking-[0.3em] uppercase">Reference</p>
        </div>

        {/* Rows */}
        {specs.map((spec, i) => (
          <SpecRow key={spec.label} spec={spec} index={i} />
        ))}

        {/* Download note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={headInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mt-12 flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-white/6" />
          <a
            href="#contact"
            className="text-[#C6A75E]/60 hover:text-[#C6A75E] text-[0.65rem] tracking-[0.3em] uppercase transition-colors duration-300 whitespace-nowrap"
          >
            Request Full Datasheet →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
