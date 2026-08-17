"use client";

import {
  ArrowDownToLine,
  ArrowRight,
  BrainCircuit,
  Code2,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-10 pt-12 sm:pt-16 lg:pb-16 lg:pt-20"
    >
      {/* Background Glow */}
      <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-[420px] w-[85%] max-w-5xl rounded-full bg-[radial-gradient(circle,_rgba(99,102,241,0.17),_transparent_60%)] blur-3xl" />

      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3 py-1.5 text-xs font-medium text-indigo-700 shadow-sm backdrop-blur-sm">
            <Sparkles size={14} />
            Full-Stack Developer & AI Enthusiast
          </div>

          {/* Heading */}
          <div className="space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
              Kuldeep
            </p>

            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Building modern digital experiences with code and AI.
            </h1>

            <p className="max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
              I build responsive web applications, full-stack platforms, and
              explore AI-powered digital experiences.
            </p>
          </div>

          {/* ================= BUTTONS ================= */}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {/* View My Work */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
            >
              View My Work
              <ArrowRight size={16} />
            </a>

            {/* View Resume */}
            <a
              href="/images/Kuldeep_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-indigo-200 bg-white px-5 py-3 text-sm font-medium text-indigo-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-400 hover:bg-indigo-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2"
            >
              View Resume
            </a>

            {/* Download Resume */}
            <a
              href="/images/Kuldeep_Resume.pdf"
              download="Kuldeep_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2"
            >
              Download Resume
              <ArrowDownToLine size={16} />
            </a>
          </div>

          {/* ================= FEATURES ================= */}
          <div className="flex flex-wrap items-center gap-4 pt-2 text-sm text-slate-600">
            {/* Feature 1 */}
            <div className="flex items-center gap-2">
              <Code2 size={16} className="text-indigo-600" />
              Full-stack product building
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-2">
              <BrainCircuit size={16} className="text-indigo-600" />
              AI-driven experimentation
            </div>
          </div>
        </motion.div>

        {/* ================= RIGHT HERO VISUAL ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
            delay: 0.1,
          }}
          className="relative mx-auto w-full max-w-[480px]"
        >
          {/* Main Card */}
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-3 shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
            {/* Hero Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
              <Image
                src="/images/hero.jpeg"
                alt="Kuldeep portfolio hero"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover"
              />

              {/* Soft Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />

              {/* ================= PROFILE CARD ================= */}
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/40 bg-white/85 p-4 shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-4">
                  {/* Profile Image */}
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-md">
                    <Image
                      src="/images/profile.jpeg"
                      alt="Kuldeep profile"
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>

                  {/* Profile Information */}
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-indigo-600">
                      Portfolio
                    </p>

                    <h2 className="mt-1 text-lg font-semibold text-slate-950">
                      Kuldeep
                    </h2>

                    <p className="text-xs text-slate-600">
                      Full-Stack Developer & AI Enthusiast
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="absolute -bottom-4 -right-4 -z-10 h-24 w-24 rounded-full bg-indigo-200/50 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}