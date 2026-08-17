"use client";

import { ArrowUpRight, GitBranch } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-600">Projects</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Selected work spanning product experiences, systems, and AI-focused ideas.
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.05)] transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="flex h-52 items-center justify-center border-b border-slate-200 bg-[linear-gradient(135deg,#e2e8f0_0%,#c7d2fe_45%,#f8fafc_100%)] px-6">
              <div className="flex h-36 w-full max-w-[90%] flex-col items-center justify-center rounded-[1.4rem] border border-slate-300/80 bg-white/60 text-center shadow-inner backdrop-blur-sm">
                <span className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-slate-500">
                  Project Preview
                </span>
                <span className="mt-3 text-lg font-semibold text-slate-800">{project.title}</span>
              </div>
            </div>

            <div className="space-y-5 p-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-2.5 py-1 text-[0.7rem] font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-1">
                <a
                  href={project.liveDemoUrl}
                  aria-label={`View live demo for ${project.title}`}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                >
                  Live Demo
                  <ArrowUpRight size={15} />
                </a>
                <a
                  href={project.githubUrl}
                  aria-label={`View GitHub for ${project.title}`}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:border-slate-300 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2"
                >
                  GitHub
                  <GitBranch size={15} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
