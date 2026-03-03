"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";

const catalog: Record<
  string,
  {
    id: string;
    name: string;
    descriptor: string;
    swatch: string;
    image: string;
  }[]
> = {
  "Black Series": [
    {
      id: "bs-1",
      name: "Smooth Black",
      descriptor: "Ultra-fine flat surface, zero grain reflection.",
      swatch: "#0D0D0D",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85&fit=crop",
    },
    {
      id: "bs-2",
      name: "Fine Grain Black",
      descriptor: "Micro-embossed grain structure, consistent depth.",
      swatch: "#1A1A1A",
      image:
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=85&fit=crop",
    },
    {
      id: "bs-3",
      name: "Dynamic Pattern Black",
      descriptor: "Geometric surface pattern, high visual contrast.",
      swatch: "#222222",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=85&fit=crop",
    },
    {
      id: "bs-4",
      name: "Matte Structured Black",
      descriptor: "Deep matte finish, anti-glare structured surface.",
      swatch: "#2A2A2A",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=85&fit=crop",
    },
    {
      id: "bs-5",
      name: "Alcantara-Style Black",
      descriptor: "Microfiber-type surface with soft tactile texture.",
      swatch: "#181818",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=85&fit=crop",
    },
  ],
  "Beige & Sand": [
    {
      id: "be-1",
      name: "Ivory Smooth",
      descriptor: "Light cream base, smooth satin surface finish.",
      swatch: "#E8D5B0",
      image:
        "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=85&fit=crop",
    },
    {
      id: "be-2",
      name: "Sand Grain",
      descriptor: "Warm sand tone with natural grain emboss.",
      swatch: "#D4BC8B",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85&fit=crop",
    },
    {
      id: "be-3",
      name: "Cashmere Matte",
      descriptor: "Muted beige, low-sheen controlled surface.",
      swatch: "#C8B89A",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85&fit=crop&sat=-30&bri=10",
    },
    {
      id: "be-4",
      name: "Warm Perforated",
      descriptor: "Perforated sand surface for ventilation applications.",
      swatch: "#C4A96E",
      image:
        "https://images.unsplash.com/photo-1616628182506-9d8f3f93b74b?w=800&q=85&fit=crop",
    },
  ],
  "Grey Collection": [
    {
      id: "gr-1",
      name: "Cool Silver",
      descriptor: "Light grey with subtle metallic undertone.",
      swatch: "#9A9A9A",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=85&fit=crop&sat=-60",
    },
    {
      id: "gr-2",
      name: "Anthracite Grain",
      descriptor: "Mid-dark anthracite with structured grain pattern.",
      swatch: "#525252",
      image:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=85&fit=crop",
    },
    {
      id: "gr-3",
      name: "Slate Structured",
      descriptor: "Deep slate tone, uniform surface texture.",
      swatch: "#3A3A3A",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=85&fit=crop&sat=-80",
    },
    {
      id: "gr-4",
      name: "Graphite Fine",
      descriptor: "Near-black graphite with micro grain visibility.",
      swatch: "#2E2E2E",
      image:
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=85&fit=crop&sat=-50",
    },
  ],
  "Cognac & Brown": [
    {
      id: "co-1",
      name: "Cognac Classic",
      descriptor: "Rich amber-brown with deep grain character.",
      swatch: "#8B5A2B",
      image:
        "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=85&fit=crop&hue=30",
    },
    {
      id: "co-2",
      name: "Tobacco Matte",
      descriptor: "Warm tobacco finish, low-reflectivity surface.",
      swatch: "#6B4226",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85&fit=crop&hue=15",
    },
    {
      id: "co-3",
      name: "Cinnamon Grain",
      descriptor: "Medium brown with natural-look grain emboss.",
      swatch: "#A0522D",
      image:
        "https://images.unsplash.com/photo-1616628182506-9d8f3f93b74b?w=800&q=85&fit=crop&hue=20",
    },
    {
      id: "co-4",
      name: "Dark Walnut",
      descriptor: "Deep brown tone, premium surface consistency.",
      swatch: "#4A2518",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85&fit=crop&hue=25",
    },
  ],
    "Performance Red": [
      {
        id: "re-1",
        name: "Sport Red",
        descriptor: "Saturated red, uniform surface sheen.",
        swatch: "#A52020",
        image:
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=85&fit=crop&hue=350",
      },
      {
        id: "re-2",
        name: "Dark Burgundy",
        descriptor: "Deep burgundy tone for interior contrast application.",
        swatch: "#6B0F0F",
        image:
          "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=85&fit=crop&hue=340",
      },
      {
        id: "re-3",
        name: "Crimson Structured",
        descriptor: "Structured grain surface, high-density crimson finish.",
        swatch: "#8B1A1A",
        image:
          "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=85&fit=crop&hue=355",
      },
    ],
    "Others": [
      {
        id: "ot-1",
        name: "Custom Tone",
        descriptor: "Available on request — specify RAL or Pantone reference.",
        swatch: "#3A3A4A",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85&fit=crop",
      },
      {
        id: "ot-2",
        name: "Special Edition",
        descriptor: "Limited production runs for specific project requirements.",
        swatch: "#2E2E2E",
        image:
          "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=85&fit=crop",
      },
      {
        id: "ot-3",
        name: "Non-Standard Shade",
        descriptor: "Material samples and specifications available upon request.",
        swatch: "#4A4040",
        image:
          "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=85&fit=crop",
      },
    ],
};

const categories = Object.keys(catalog);

const categorySwatches: Record<string, string> = {
  "Black Series": "#1A1A1A",
  "Beige & Sand": "#D4BC8B",
  "Grey Collection": "#5A5A5A",
  "Cognac & Brown": "#8B5A2B",
  "Performance Red": "#A52020",
  "Others": "#3A3A4A",
};

export default function ColorSystem() {
  const [active, setActive] = useState("Black Series");
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  const items = catalog[active];

  return (
    <section id="colors" className="bg-[#0F0F0F] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-[#C6A75E] text-[0.65rem] tracking-[0.4em] uppercase mb-5">
            Color System
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h2
                className="text-white text-3xl md:text-4xl font-light leading-snug"
                style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.01em" }}
              >
                Color families.
                <br />
                Full spectrum availability.
              </h2>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              All color families are available across every texture category.
              Custom RAL / Pantone matching available on bulk orders.
            </p>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="flex items-center gap-2.5 px-5 py-2.5 text-[0.7rem] tracking-[0.2em] uppercase transition-all duration-300 border rounded-sm"
                style={{
                  borderColor: isActive
                    ? "rgba(198,167,94,0.6)"
                    : "rgba(255,255,255,0.08)",
                  color: isActive ? "#C6A75E" : "rgba(255,255,255,0.4)",
                  background: isActive
                    ? "rgba(198,167,94,0.06)"
                    : "transparent",
                }}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: categorySwatches[cat] }}
                />
                {cat}
              </button>
            );
          })}
        </div>

        {/* Animated Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-px bg-white/5"
          >
            {items.map((item) => (
              <MaterialTile key={item.id} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Footer note */}
        <p className="mt-10 text-white/20 text-[0.65rem] tracking-[0.25em] uppercase text-center">
          Custom color matching available — contact us with your specification
        </p>
      </div>
    </section>
  );
}

function MaterialTile({
  item,
}: {
  item: { id: string; name: string; descriptor: string; swatch: string; image: string };
}) {
  return (
    <div className="group relative bg-[#0F0F0F] overflow-hidden cursor-default">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          style={{
            filter: "brightness(0.6) saturate(0.7) contrast(1.05)",
          }}
        />
        {/* Swatch strip at top */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5 opacity-80"
          style={{ backgroundColor: item.swatch }}
        />
        {/* Bottom gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.0) 50%)",
          }}
        />
        {/* Text overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p
            className="text-white text-xs font-light mb-1 leading-snug"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {item.name}
          </p>
          <p className="text-white/40 text-[0.6rem] tracking-wide leading-snug">
            {item.descriptor}
          </p>
        </div>
      </div>
    </div>
  );
}
