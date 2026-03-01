import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const strengths = [
    "AI Science & Voice Synthesis",
    "Large-scale ML & AI Pipelines",
    "Data Engineering & Cloud (AWS)",
    "Full-stack Data Products"
  ];

  const skillGroups = [
    {
      category: "Programming & Core Tech",
      skills: ["Python", "SQL", "R", "C++", "PyTorch", "TensorFlow", "OpenCV"]
    },
    {
      category: "Data Engineering & BI",
      skills: ["AWS (RDS, S3)", "Snowflake", "Matillion ETL", "MySQL", "Tableau", "Jenkins"]
    },
    {
      category: "ML & AI Specialized",
      skills: ["LLMs (watsonx)", "NLP/NLU", "TTS/Voice Cloning", "GANs", "CNNs", "Time Series"]
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Column: Bio & Snapshot */}
          <div className="lg:col-span-5 flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            
            <div className="mb-8 relative group">
              <div className="aspect-square w-48 rounded-3xl bg-slate-200 overflow-hidden shadow-lg border-4 border-white group-hover-elevate transition-all duration-300">
                <div className="w-full h-full flex items-center justify-center text-slate-400">
                   <Briefcase className="w-16 h-16 opacity-20" />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-accent text-white p-3 rounded-2xl shadow-lg animate-bounce hidden lg:block">
                <CheckCircle2 className="w-6 h-6" />
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I am a data scientist and researcher with a Master's from UCD. I bridge the gap between pattern identification and production-ready AI solutions, with a strong focus on expressive voice synthesis, LLM integration, and large-scale data engineering.
            </p>
            
            <div className="mt-auto">
              <h3 className="font-bold text-lg mb-4 text-slate-900">Core Strengths</h3>
              <ul className="space-y-3">
                {strengths.map((strength) => (
                  <li key={strength} className="flex items-center gap-3 text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Skills */}
          <div className="lg:col-span-7 lg:pl-12">
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl text-white h-full">
              <h3 className="text-2xl font-bold mb-8 text-white">Technical Arsenal</h3>
              
              <div className="space-y-10">
                {skillGroups.map((group) => (
                  <div key={group.category}>
                    <h4 className="text-primary-foreground/60 text-sm uppercase tracking-widest font-semibold mb-4 border-b border-white/10 pb-2">
                      {group.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
