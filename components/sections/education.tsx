"use client";

import { motion } from "framer-motion";
import { educationItems } from "@/data/journey";

export function Education() {
  return (
    <section id="education" className="py-12 sm:py-16">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-600">Education</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Education details ready to be filled in with real information.
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45 }}
        className="rounded-[1.75rem] border border-slate-200 bg-white/80 p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]"
      >
        <div className="space-y-2">
          {educationItems.map((item) => (
            <div key={item.label} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{item.label}</span>
              <p className="text-base text-slate-700">{item.value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
