import { ArrowUpRight, Bot, Layers3, MonitorSmartphone } from "lucide-react";

const pillars = [
  {
    icon: MonitorSmartphone,
    title: "Responsive Experiences",
    description: "Designing elegant interfaces that feel seamless across devices and product surfaces.",
  },
  {
    icon: Layers3,
    title: "Full-Stack Delivery",
    description: "Turning product ideas into scalable applications with thoughtful architecture and clean execution.",
  },
  {
    icon: Bot,
    title: "AI-Driven Thinking",
    description: "Exploring how intelligent workflows and human-centered systems can improve digital products.",
  },
];

export function Overview() {
  return (
    <section id="about" className="pb-10 pt-6 sm:pb-14">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-600">About</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            A developer focused on building polished products and thoughtful digital experiences.
          </h2>
        </div>
        <a href="#projects" className="hidden items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-slate-900 sm:inline-flex">
          See work
          <ArrowUpRight size={15} />
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {pillars.map(({ icon: Icon, title, description }, index) => (
          <article
            key={title}
            className="group rounded-[1.75rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm">
              <Icon size={20} />
            </div>
            <div className="mb-4 inline-flex text-[0.7rem] font-medium uppercase tracking-[0.22em] text-slate-400">
              0{index + 1}
            </div>
            <h3 className="mb-3 text-xl font-semibold text-slate-900">{title}</h3>
            <p className="text-sm leading-6 text-slate-600">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
