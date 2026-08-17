"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-600">Skills</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Tools and technologies I use to build modern digital solutions.
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="rounded-[1.75rem] border border-slate-200 bg-white/80 p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)] transition-transform duration-200 hover:-translate-y-1"
          >
            <h3 className="mb-5 text-xl font-semibold text-slate-900">{group.title}</h3>
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors duration-200 hover:border-slate-300 hover:bg-slate-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
