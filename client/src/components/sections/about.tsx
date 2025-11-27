import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
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
        </motion.div>
      </div>
    </section>
  );
}
