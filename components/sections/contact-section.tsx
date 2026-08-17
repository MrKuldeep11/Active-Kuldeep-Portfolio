"use client";

import { ArrowUpRight, GitBranch, Link2, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/forms/contact-form";

const socialLinks = [
  { label: "GitHub", href: "#", icon: GitBranch },
  { label: "LinkedIn", href: "#", icon: Link2 },
  { label: "Email", href: "mailto:hello@kuldeep.dev", icon: Mail },
];

export function ContactSection() {
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
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-300">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s build something meaningful.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
              I&apos;m open to building meaningful web products, AI ideas, and digital experiences with a practical, learning-first mindset.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-slate-200">
                <Mail size={18} className="text-indigo-300" />
                <a href="mailto:hello@kuldeep.dev" className="transition-colors hover:text-white">
                  hello@kuldeep.dev
                </a>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition-colors duration-200 hover:border-white/20 hover:text-white"
                >
                  <Icon size={15} />
                  {label}
                  <ArrowUpRight size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
