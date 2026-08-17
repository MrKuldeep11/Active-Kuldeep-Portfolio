import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ContactSection } from "@/components/sections/contact-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Education } from "@/components/sections/education";
import { Hero } from "@/components/sections/hero";
import { Journey } from "@/components/sections/journey";
import { Overview } from "@/components/sections/overview";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Skills } from "@/components/sections/skills";
import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.08),_transparent_30%),linear-gradient(180deg,#f8fafc_0%,#f8fafc_30%,#eef2ff_100%)] text-slate-900">
      <Navbar />

      <main>
        <Container>
          <Hero />
          <Overview />
          <Skills />
          <Projects />
          <Services />
          <Journey />
          <Education />
          <CtaSection />
          <ContactSection />
        </Container>
      </main>

      <Footer />
    </div>
  );
}