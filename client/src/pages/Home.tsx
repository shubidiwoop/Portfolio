import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Resume } from "@/components/Resume";
import { Trust } from "@/components/Trust";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-accent/30 selection:text-slate-900">
      <NavBar />
      
      <main>
        <Hero />
        <Projects />
        <About />
        <Resume />
        <Trust />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
