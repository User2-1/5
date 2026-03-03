"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─── Image catalogue ────────────────────────────────────────────────────────
// A) Extreme close-up texture / macro shots
// B) Controlled interior detail shots — cropped, no OEM logos
const IMAGES = {
  // Macro leather grain — dark, precise, technical
  grainMacro:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=90&fit=crop",
  // Diamond-stitch surface detail — black leather, close range
  stitchDetail:
    "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=1600&q=90&fit=crop",
  // Smooth perforated surface — precision holes, uniform surface
  perforated:
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=90&fit=crop",
  // Neutral seat surface — material visible, no branding
  seatSurface:
    "https://images.unsplash.com/photo-1616628182506-9d8f3f93b74b?w=1600&q=90&fit=crop",
  // Door panel / armrest detail — cropped, neutral interior
  doorDetail:
    "https://images.unsplash.com/photo-1547038577-da80abbc4f19?w=1600&q=90&fit=crop",
  // Close-up quilted / structured surface
  quilted:
    "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1600&q=90&fit=crop",
};

// ─── Shared image filter ─────────────────────────────────────────────────────
const IMG_FILTER =
  "brightness(0.62) saturate(0.75) contrast(1.05)";

// ─── Small label component ───────────────────────────────────────────────────
function Label({
  eyebrow,
  title,
  descriptor,
  light = false,
}: {
  eyebrow: string;
  title: string;
  descriptor: string;
  light?: boolean;
}) {
  return (
    <div className={`px-6 py-5 ${light ? "bg-[#141414]" : "bg-[#0F0F0F]"}`}>
      <p className="text-[#C6A75E] text-[0.6rem] tracking-[0.35em] uppercase mb-2">
        {eyebrow}
      </p>
      <p
        className="text-white/90 text-sm font-light mb-1"
        style={{ fontFamily: "Georgia, serif" }}
      >
        {title}
      </p>
      <p className="text-white/35 text-[0.68rem] leading-relaxed tracking-wide">
        {descriptor}
      </p>
    </div>
  );
}

// ─── Animated wrapper ─────────────────────────────────────────────────────────
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Single image tile ────────────────────────────────────────────────────────
function ImageTile({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden group ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
        style={{ filter: IMG_FILTER }}
      />
      {/* Subtle gold edge on hover */}
      <div className="absolute inset-0 ring-inset ring-0 group-hover:ring-1 group-hover:ring-[#C6A75E]/20 transition-all duration-700 pointer-events-none" />
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function TextureCollection() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section id="textures" className="bg-[#0B0B0B] py-32">
      {/* ── Section header ──────────────────────────────────────────────── */}
      <div className="px-6 max-w-7xl mx-auto mb-20">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="text-[#C6A75E] text-[0.62rem] tracking-[0.42em] uppercase mb-5">
              Surface &amp; Texture Collection
            </p>
            <h2
              className="text-white text-3xl md:text-[2.6rem] font-light leading-[1.1]"
              style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.015em" }}
            >
              Precision-Engineered
              <br />
              Surfaces.
            </h2>
          </div>
          <p className="text-white/35 text-[0.82rem] leading-[1.75] max-w-[280px] md:text-right">
            Precision-engineered surfaces for modern vehicle interiors.
            <br />
            Custom emboss patterns available on request.
          </p>
        </motion.div>
      </div>

      {/* ── Editorial layout ─────────────────────────────────────────────── */}
      <div className="px-6 max-w-7xl mx-auto space-y-px">

        {/* ROW 1 — Large texture (2/3) + small interior detail (1/3) */}
        <FadeIn delay={0}>
          <div className="flex flex-col md:flex-row gap-px">
            {/* Large: macro grain */}
            <div className="md:w-[65%] flex flex-col">
              <ImageTile
                src={IMAGES.grainMacro}
                alt="Close-up leather grain texture"
                className="h-[460px] md:h-[540px]"
              />
              <Label
                eyebrow="Texture 01"
                title="Deep Grain Structure"
                descriptor="Embossed grain at 1.2 mm depth — consistent repeat across full roll width. High tactile definition."
              />
            </div>
            {/* Small: stitch detail */}
            <div className="md:w-[35%] flex flex-col">
              <ImageTile
                src={IMAGES.stitchDetail}
                alt="Leather stitching detail close-up"
                className="h-[280px] md:h-[380px]"
              />
              <Label
                eyebrow="Detail 01"
                title="Precision Stitching Surface"
                descriptor="Diamond-pattern stitch depth 0.4 mm — engineered for uniform thread tension."
                light
              />
            </div>
          </div>
        </FadeIn>

        {/* ROW 2 — Small macro (1/3) + Large neutral interior (2/3) */}
        <FadeIn delay={0.08}>
          <div className="flex flex-col md:flex-row gap-px">
            {/* Small: perforated surface */}
            <div className="md:w-[35%] flex flex-col">
              <ImageTile
                src={IMAGES.perforated}
                alt="Perforated synthetic leather surface"
                className="h-[280px] md:h-[420px]"
              />
              <Label
                eyebrow="Texture 02"
                title="Micro-Perforated Surface"
                descriptor="CNC-punched perforation at 2 mm pitch — engineered for breathability and a refined tactile feel."
                light
              />
            </div>
            {/* Large: seat surface */}
            <div className="md:w-[65%] flex flex-col">
              <ImageTile
                src={IMAGES.seatSurface}
                alt="Neutral vehicle seat surface material"
                className="h-[360px] md:h-[500px]"
              />
              <Label
                eyebrow="Application 01"
                title="Seat Surface — Material View"
                descriptor="Smooth-matte finish applied to seat bolster. No branding present — material performance is the focus."
              />
            </div>
          </div>
        </FadeIn>

        {/* ROW 3 — Full-width split: door panel + quilted close-up */}
        <FadeIn delay={0.14}>
          <div className="flex flex-col md:flex-row gap-px">
            {/* Door / armrest */}
            <div className="md:w-[50%] flex flex-col">
              <ImageTile
                src={IMAGES.doorDetail}
                alt="Door panel and armrest material detail"
                className="h-[340px] md:h-[440px]"
              />
              <Label
                eyebrow="Application 02"
                title="Door Panel & Armrest"
                descriptor="Structured surface applied to door card — consistent wrap coverage with clean edge finish."
              />
            </div>
            {/* Quilted / structured */}
            <div className="md:w-[50%] flex flex-col">
              <ImageTile
                src={IMAGES.quilted}
                alt="Quilted synthetic leather texture macro"
                className="h-[340px] md:h-[440px]"
              />
              <Label
                eyebrow="Texture 03"
                title="Quilted Relief Pattern"
                descriptor="Raised quilted emboss — 8 mm cell pitch, 0.6 mm relief height. Available in full color range."
                light
              />
            </div>
          </div>
        </FadeIn>
      </div>

      {/* ── Bottom note ──────────────────────────────────────────────────── */}
      <FadeIn delay={0.1}>
        <div className="px-6 max-w-7xl mx-auto mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-white/6 pt-10">
          <p className="text-white/25 text-[0.68rem] tracking-[0.3em] uppercase">
            All surfaces available in the full color system
          </p>
          <a
            href="#colors"
            className="text-[#C6A75E] text-[0.68rem] tracking-[0.25em] uppercase border-b border-[#C6A75E]/30 hover:border-[#C6A75E]/80 transition-colors duration-300 pb-px"
          >
            Explore Color System →
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
