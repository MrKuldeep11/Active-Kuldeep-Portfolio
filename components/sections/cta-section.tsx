"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <motion.section
      id="cta"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
      className="py-12 sm:py-16"
    >
      <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 text-center shadow-[0_12px_35px_rgba(15,23,42,0.05)] sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-600">Next Step</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Let&apos;s build something meaningful.
        </h2>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          >
            View Projects
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition-colors duration-200 hover:border-slate-300 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2"
          >
            Contact Me
          </a>
        </div>
      </div>
    </motion.section>
  );
}
