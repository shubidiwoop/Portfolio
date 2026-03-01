import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Trust() {
  const stats = [
    { value: "5+", label: "Industry Experience Years" },
    { value: "3.4M", label: "Patient Records Managed" },
    { value: "20%", label: "Runtime Perf. Boost" }
  ];

  const testimonials = [
    {
      quote: "Delivered production-ready expressive voices 2 weeks ahead of schedule. Exceptional engineering and research skills.",
      author: "IBM Voice Lab",
      role: "AI Science Team",
    },
    {
      quote: "Reduced rollback scenarios by 94% and cut infrastructure costs by $38k through advanced CI/CD and automation.",
      author: "Cardinal Health",
      role: "Data Engineering Dept.",
    }
  ];

  return (
    <section className="py-24 bg-secondary text-secondary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white/10 pb-16 mb-16">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="text-5xl font-extrabold text-accent mb-2 font-display">{stat.value}</div>
              <div className="text-lg font-medium text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
            >
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary opacity-50" />
              <div className="relative z-10 pl-6 border-l-2 border-primary/30">
                <p className="text-xl italic text-white/90 mb-6 leading-relaxed">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-bold text-white text-lg">{t.author}</p>
                  <p className="text-accent">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
