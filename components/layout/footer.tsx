const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-base font-semibold tracking-[0.18em] text-slate-900 uppercase">Kuldeep</p>
          <p className="mt-2">Full-Stack Developer &amp; AI Enthusiast</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a href="#about" className="transition-colors hover:text-slate-900">About</a>
          <a href="#skills" className="transition-colors hover:text-slate-900">Skills</a>
          <a href="#projects" className="transition-colors hover:text-slate-900">Projects</a>
          <a href="#contact" className="transition-colors hover:text-slate-900">Contact</a>
        </div>

        <p>© {currentYear} Kuldeep. All rights reserved.</p>
      </div>
    </footer>
  );
}
