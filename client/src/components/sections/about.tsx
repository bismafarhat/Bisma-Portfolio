import { motion } from "framer-motion";
import { skills, personalInfo } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-16"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {personalInfo.about}
            </p>
            
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white">BS Computer Science</h4>
                  <p className="text-primary">Riphah International University</p>
                  <p className="text-sm text-muted-foreground">Jan 2022 – Dec 2025 | CGPA: 3.0</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Technical Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-secondary/30 border-white/5 hover:border-primary/50 transition-colors duration-300">
                    <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-3">
                      <skill.icon className="w-8 h-8 text-primary" />
                      <span className="font-medium text-sm">{skill.name}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
