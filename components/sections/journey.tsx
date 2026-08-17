"use client";

import { motion } from "framer-motion";
import { journeyItems } from "@/data/journey";

export function Journey() {
  return (
    <section id="journey" className="py-12 sm:py-16">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-600">Journey</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Learning, building, and growing through practical experience.
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-slate-200 md:block" />

        <div className="space-y-6">
          {journeyItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative grid gap-4 md:grid-cols-[60px_1fr] md:items-start"
            >
              <div className="hidden md:block">
                <div className="ml-1 flex h-8 w-8 items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 text-xs font-semibold text-indigo-700">
                  {index + 1}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-white/80 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-slate-600">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
