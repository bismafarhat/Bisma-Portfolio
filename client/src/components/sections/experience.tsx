import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground">My professional journey so far</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2" />
              
              {/* Timeline Dot (Desktop) */}
              <div className="hidden md:flex absolute left-[50%] top-0 w-8 h-8 rounded-full bg-background border-2 border-primary items-center justify-center -translate-x-1/2 z-10">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>

              <div className={`md:flex items-start justify-between gap-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 mb-4 md:mb-0" />
                
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="glass-card p-6 rounded-xl hover:border-primary/30 transition-colors">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                      {job.period}
                    </span>
                    <h3 className="text-xl font-bold mb-1">{job.role}</h3>
                    <h4 className="text-lg text-muted-foreground mb-4">{job.company}</h4>
                    <ul className={`space-y-2 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} flex flex-col`}>
                      {job.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
