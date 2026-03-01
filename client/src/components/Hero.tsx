import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(34,197,94,0.05)_0%,rgba(243,244,246,0)_100%)] opacity-70" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 border border-accent/20">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for new opportunities
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 leading-[1.1]">
              Shubham Sharma
              <br />
              <span className="text-gradient">Data Scientist in Dublin</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Enthusiastic data scientist based in Dublin, Ireland, with a master's degree from University College Dublin. Specializing in AI, Machine Learning, and Data Engineering to drive measurable business impact.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg shadow-primary/25 hover-elevate active-elevate-2 transition-all text-base" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-xl border-border hover:bg-muted text-base hover-elevate active-elevate-2" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>

          <motion.div 
            className="flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Tech Stack</p>
            <div className="flex gap-4 text-foreground/60">
              <span className="font-display font-bold hover:text-primary transition-colors cursor-default">Python</span>
              <span className="font-display font-bold hover:text-primary transition-colors cursor-default">SQL</span>
              <span className="font-display font-bold hover:text-primary transition-colors cursor-default">PyTorch</span>
              <span className="font-display font-bold hover:text-primary transition-colors cursor-default">AWS</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="aspect-video w-full rounded-2xl bg-slate-200 shadow-2xl overflow-hidden relative group hover-elevate transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 mix-blend-overlay z-10" />
            <div className="absolute inset-0 flex items-center justify-center text-slate-400 group-hover:scale-110 transition-transform duration-700">
               {/* Abstract Data Viz Placeholder */}
               <div className="w-full h-full p-8 flex flex-col gap-4 opacity-40">
                  <div className="h-4 w-3/4 bg-current rounded-full" />
                  <div className="h-4 w-1/2 bg-current rounded-full" />
                  <div className="flex-1 grid grid-cols-6 items-end gap-2">
                    {[40, 70, 45, 90, 65, 80].map((h, i) => (
                      <div key={i} className="bg-current rounded-t-lg" style={{ height: `${h}%` }} />
                    ))}
                  </div>
               </div>
            </div>
            <div className="absolute bottom-4 left-4 z-20 bg-white/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-xs font-mono text-slate-600 shadow-sm">
              visual_representation.py
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
