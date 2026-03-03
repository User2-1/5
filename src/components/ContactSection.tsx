"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const actions = [
  {
    id: "samples",
    title: "Request Material Samples",
    description:
      "Receive physical samples of your selected textures and colors. Available for all standard grades.",
  },
  {
    id: "datasheet",
    title: "Download Specification Sheet",
    description:
      "Full technical datasheet including test results, composition and tolerances. PDF format.",
  },
  {
    id: "contact",
    title: "Contact Our Team",
    description:
      "Enquiries, pricing, bulk orders and custom specifications. We respond within one business day.",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [activeForm, setActiveForm] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" ref={ref} className="bg-[#0B0B0B] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="text-[#C6A75E] text-[0.65rem] tracking-[0.4em] uppercase mb-5">
            Get in Touch
          </p>
          <h2
            className="text-white text-3xl md:text-4xl font-light leading-snug"
            style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.01em" }}
          >
            Start with materials.
          </h2>
          <p className="text-white/35 text-sm mt-4 max-w-md mx-auto leading-relaxed">
            Whether you need samples, datasheets or a direct conversation — we
            are here.
          </p>
        </motion.div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/6 mb-0">
          {actions.map((action, i) => (
            <motion.div
              key={action.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="bg-[#0B0B0B] p-8 flex flex-col gap-5 group border border-white/0 hover:border-[#C6A75E]/15 transition-colors duration-500"
            >
              <span className="text-[#C6A75E]/40 text-[0.65rem] tracking-[0.35em]">
                0{i + 1}
              </span>
              <div className="w-6 h-px bg-[#C6A75E]/30 group-hover:bg-[#C6A75E]/60 transition-colors duration-500" />
              <h3
                className="text-white text-base font-light"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {action.title}
              </h3>
              <p className="text-white/35 text-sm leading-relaxed font-light flex-1">
                {action.description}
              </p>
              <button
                onClick={() =>
                  setActiveForm(activeForm === action.id ? null : action.id)
                }
                className="self-start text-[#C6A75E]/60 hover:text-[#C6A75E] text-[0.65rem] tracking-[0.25em] uppercase transition-colors duration-300 flex items-center gap-2"
              >
                <span>{activeForm === action.id ? "Close" : "Get Started"}</span>
                <span className="text-xs">
                  {activeForm === action.id ? "−" : "→"}
                </span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Inline form */}
        {activeForm && !submitted && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="border border-white/8 border-t-0 bg-[#0E0E0E] p-8"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl"
            >
              <input
                type="text"
                placeholder="Name"
                required
                className="bg-white/4 border border-white/8 text-white placeholder-white/20 text-sm font-light px-4 py-3 focus:outline-none focus:border-[#C6A75E]/40 transition-colors duration-300 rounded-sm"
              />
              <input
                type="email"
                placeholder="Email address"
                required
                className="bg-white/4 border border-white/8 text-white placeholder-white/20 text-sm font-light px-4 py-3 focus:outline-none focus:border-[#C6A75E]/40 transition-colors duration-300 rounded-sm"
              />
              <input
                type="text"
                placeholder="Company (optional)"
                className="bg-white/4 border border-white/8 text-white placeholder-white/20 text-sm font-light px-4 py-3 focus:outline-none focus:border-[#C6A75E]/40 transition-colors duration-300 rounded-sm"
              />
              <input
                type="text"
                placeholder="Country"
                className="bg-white/4 border border-white/8 text-white placeholder-white/20 text-sm font-light px-4 py-3 focus:outline-none focus:border-[#C6A75E]/40 transition-colors duration-300 rounded-sm"
              />
              <textarea
                placeholder="Message or specification details"
                rows={3}
                className="md:col-span-2 bg-white/4 border border-white/8 text-white placeholder-white/20 text-sm font-light px-4 py-3 focus:outline-none focus:border-[#C6A75E]/40 transition-colors duration-300 rounded-sm resize-none"
              />
              <div className="md:col-span-2 flex items-center gap-6">
                <button
                  type="submit"
                  className="px-8 py-3 text-[0.65rem] uppercase tracking-[0.2em] font-medium rounded-sm transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #C6A75E 0%, #E8D5A3 50%, #C6A75E 100%)",
                    color: "#0B0B0B",
                  }}
                >
                  Submit Request
                </button>
                <p className="text-white/20 text-[0.65rem] tracking-wide">
                  We respond within one business day.
                </p>
              </div>
            </form>
          </motion.div>
        )}

        {/* Thank you */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="border border-white/8 border-t-0 bg-[#0E0E0E] p-8"
          >
            <p
              className="text-[#C6A75E] text-lg font-light"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Thank you. We will be in touch shortly.
            </p>
            <p className="text-white/30 text-sm mt-2 font-light">
              Your enquiry has been received.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
