import { motion } from "framer-motion";
import { ExternalLink, Github, TrendingUp, Clock, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Monte Carlo EPL Prediction",
    description: "Developed custom ML model which beat PCA and GLM.",
    outcome: "0.82 correlation with real-time odds",
    icon: TrendingUp,
    tags: ["R", "Python", "Monte Carlo"],
    links: { case: "https://github.com/shubidiwoop/MCMC-EPL-Betting", github: "https://github.com/shubidiwoop/MCMC-EPL-Betting" },
    color: "bg-blue-500"
  },
  {
    title: "TinyML Anomaly Detection",
    description: "Deploying tinyengine to esp32 microcontroller for anomaly detection in time series using variational autoencoders.",
    outcome: "Reduced peak memory by 1.3-3.6x",
    icon: Clock,
    tags: ["TinyML", "ESP32", "VAEs"],
    links: { case: "#", github: "#" },
    color: "bg-emerald-500"
  },
  {
    title: "Crowdfunding DonorBox",
    description: "Built a secure, unified, automated decentralised application for donors and NGOs to crowdfund.",
    outcome: "Participated in EthOnline 2020",
    icon: Users,
    tags: ["Solidity", "React", "NodeJS", "RESTful APIs"],
    links: { case: "https://ethglobal.com/showcase/archie-ij15n", github: "https://ethglobal.com/showcase/archie-ij15n" },
    color: "bg-indigo-500"
  },
  {
    title: "Decentralised Toll Service",
    description: "Created frictionless, private, peer-to-peer secure web transactions to toll authorities using global fiat currency.",
    outcome: "Won prize at HackFS 2020",
    icon: Github,
    tags: ["Fleek Storage", "Web3", "Blockchain"],
    links: { case: "https://ethglobal.com/showcase/azureus-dvf7q", github: "https://ethglobal.com/showcase/azureus-dvf7q" },
    color: "bg-orange-500"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Work</h2>
          <p className="text-lg text-muted-foreground">
            A showcase of production-ready data products and the measurable business value they delivered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover-elevate border border-border/50 shadow-sm bg-card overflow-hidden group transition-all duration-300">
                <div className="aspect-[4/3] w-full bg-slate-100 relative overflow-hidden">
                  <div className={`absolute inset-0 ${project.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                  <div className="absolute inset-0 flex items-center justify-center text-slate-300 group-hover:scale-110 transition-transform duration-500">
                    <project.icon className="w-16 h-16 opacity-30" />
                  </div>
                  <div className="absolute bottom-3 left-3 flex gap-1">
                    {project.tags.slice(0, 2).map(tag => (
                      <Badge key={tag} className="bg-white/80 backdrop-blur-sm text-slate-600 border-none text-[10px] py-0 h-5">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 text-secondary">
                    <project.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
                  <CardDescription className="text-base mt-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pb-4">
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-6">
                    <p className="text-sm font-semibold text-accent flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                      </span>
                      Outcome: {project.outcome}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-muted text-muted-foreground font-medium hover:bg-muted">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0 flex gap-3 border-t border-border/50 mt-auto p-6 bg-slate-50/50">
                  <Button variant="default" size="sm" className="w-full bg-secondary hover:bg-secondary/90 text-white" asChild>
                    <a href={project.links.case}>
                      Case Study
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={project.links.github} target="_blank" rel="noreferrer">
                      <Github className="w-4 h-4 mr-2" /> Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
