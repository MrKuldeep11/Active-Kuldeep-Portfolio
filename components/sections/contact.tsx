"use client";

import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
      className="py-12 sm:py-16"
    >
      <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_20px_50px_rgba(15,23,42,0.12)] sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-300">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s build something meaningful.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
              I&apos;m building products, experiences, and AI-powered ideas with a practical, learning-driven mindset.
            </p>
          </div>

          <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-slate-200">
              <Mail size={18} className="text-indigo-300" />
              <a href="mailto:hello@kuldeep.dev" className="transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-slate-950">
                hello@kuldeep.dev
              </a>
            </div>
            <div className="flex items-center gap-3 text-slate-200">
              <MapPin size={18} className="text-indigo-300" />
              <span>Available worldwide</span>
            </div>
            <a
              href="mailto:hello@kuldeep.dev"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Contact Me
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
