import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Bio } from "@/components/sections/Bio";
import { Method } from "@/components/sections/Method";
import { Services } from "@/components/sections/Services";
import { Philosophy } from "@/components/sections/Philosophy";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <Bio />
        <Method />
        <Services />
        <Philosophy />
      </main>
      <Contact />
    </div>
  );
}
