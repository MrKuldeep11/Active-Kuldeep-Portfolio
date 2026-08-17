"use client";

import { Bot, Code2, LayoutTemplate, MonitorSmartphone } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with clean, scalable code.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "End-to-end web applications with reliable frontend and backend architecture.",
  },
  {
    icon: Bot,
    title: "AI-Powered Solutions",
    description: "Exploring and building practical AI-powered digital experiences.",
  },
  {
    icon: LayoutTemplate,
    title: "UI/UX Implementation",
    description: "Clean, responsive interfaces focused on usability and modern visual design.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-12 sm:py-16">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-600">Services</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Practical capabilities for building modern digital experiences.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[1.75rem] border border-slate-200 bg-white/80 p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)] transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Icon size={20} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="text-sm leading-6 text-slate-600">{service.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
