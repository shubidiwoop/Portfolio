import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    company: "IBM",
    location: "Dublin, Ireland",
    roles: [
      {
        title: "AI Scientist, Watson TTS",
        period: "Apr 2025 – Present",
        description: [
          "Trained and fine-tuned 3 natural expressive voices, optimizing training recipes and managing 5,000+ recorded lines, delivering production-ready voices 2 weeks ahead of schedule.",
          "Experimented with multiple voice cloning TTS models across 4 languages, achieving cross-lingual synthesis with <10% intelligibility loss and 0.5 RTF.",
          "Enhanced the WatsonTTS, adding 10+ SSML features across 7 languages providing code optimizations, reducing latency by 15%."
        ]
      },
      {
        title: "Data Scientist, IBM Security",
        period: "Apr 2024 – Mar 2025",
        description: [
          "Developed summarization validation solution using entity extraction with Watson NLU and NLP and created a dashboard that gives a visual representation of the models over time. Metric outperforms BLEU and ROGUE1, giving a response within 10 seconds.",
          "Extracting missing and changed context from LLM generated responses patent P202402483 filed.",
          "Integrating watsonx into IBMs largest security product, QRadar SOAR. Handled model configuration and prompt tuning to get optimum responses. Achieved the top 10 most viewed app within the first beta release."
        ]
      }
    ]
  },
  {
    company: "Cardinal Health",
    location: "Bangalore, India",
    roles: [
      {
        title: "Associate Data Engineer",
        period: "June 2020 – Aug 2022",
        description: [
          "Managed data engineering deployment using SQL, AWS RDS and schema design. CICD process involved managing data pipelines with jenkins, migrating 2+ Million users and 30+ pharmacy chains as clients. Reduced rollback scenarios by 94% and cost by $38k",
          "Automated moving 170 143kGB manual encrypted snapshots to s3 buckets using shellscript and AWS",
          "Contributed to DWH and data modeling, consolidating 3.4 million patient records using Matillion ETL to Snowflake. Generated data visualization and analytical reports in Tableau, maintained HIPAA and data privacy compliance"
        ]
      }
    ]
  }
];

const education = [
  {
    institution: "University College Dublin",
    location: "Dublin, Ireland",
    period: "Sept 2022 – Dec 2023",
    degree: "MSc, Data and Computational Science",
    details: "CGPA: 3.84/4.2, First Class Honors",
    coursework: "Modern Regression Analysis, Data Programming with R, SAS and Python, Optimisation and Statistics in AI ML, Deep Learning, Statistics, Probability",

  },
  {
    institution: "Manipal Institute of Technology",
    location: "Manipal, India",
    degree: "Bachelor of Technology, Electronics and Communication, Business Management minor",
    details: "CGPA: 8.08/10",
    coursework: "Data Structures Algorithms, Machine Learning, Computer Vision Organization Architecture Networks",
    projects: [
      {
        name: "Researcher",
        desc: "Researched on a texture-mapped virtual try-on for clothes using CNN, GAN, which aided 3 published papers"
      },
      {
        name: "Machine Learning Developer at edisn.ai",
        desc: "Optimised real-time player detection using CNN, OpenCV by Yolov3, won the audience choice award at the SportsTank allstar. Used python and its libraries"
      }
    ]
  }
];

export function Resume() {
  return (
    <section id="resume" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">Work Experience</h2>
            </div>

            <div className="space-y-12 border-l-2 border-primary/20 ml-4 pl-8">
              {experiences.map((exp, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm" />
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-900">{exp.company}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    {exp.roles.map((role, j) => (
                      <div key={j}>
                        <div className="flex justify-between items-start gap-4 mb-3">
                          <h4 className="text-lg font-bold text-primary">{role.title}</h4>
                          <span className="text-xs font-bold bg-slate-200 px-2 py-1 rounded text-slate-600 whitespace-nowrap">
                            {role.period}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {role.description.map((item, k) => (
                            <li key={k} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                              <span className="text-primary mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary/40" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-accent/10 rounded-lg text-accent">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">Education</h2>
            </div>

            <div className="space-y-12 border-l-2 border-accent/20 ml-4 pl-8">
              {education.map((edu, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-white shadow-sm" />
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-slate-900">{edu.institution}</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-muted-foreground text-sm mt-1">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                      {edu.period && (
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                    <h4 className="text-lg font-bold text-primary mb-1">{edu.degree}</h4>
                    <p className="text-sm font-semibold text-accent mb-4">{edu.details}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Relevant Coursework</p>
                        <p className="text-sm text-muted-foreground">{edu.coursework}</p>
                      </div>
                      
                      {(edu.projects ?? []).map((proj, j) => (
                        <div key={j} className="border-t border-slate-100 pt-3">
                          <p className="text-sm font-bold text-slate-700">{proj.name}</p>
                          <p className="text-sm text-muted-foreground mt-1">{proj.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
