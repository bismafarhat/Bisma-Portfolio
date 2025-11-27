import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">Some of the projects I've worked on</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full flex flex-col bg-secondary/20 border-white/5 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                <div className="h-48 bg-gradient-to-br from-secondary to-black relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                    {/* Placeholder for project image - could use a pattern or gradient */}
                    <div className="absolute inset-0 flex items-center justify-center text-primary/20 font-heading font-bold text-4xl opacity-20 rotate-[-12deg] scale-150">
                        {project.title}
                    </div>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                    <span className="text-xs text-muted-foreground border border-white/10 px-2 py-1 rounded-md bg-black/20">
                      {project.date}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-0">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
                
                <CardFooter className="gap-3">
                  <Button variant="outline" size="sm" className="w-full border-white/10 hover:bg-white/5">
                    <Github className="w-4 h-4 mr-2" /> Code
                  </Button>
                  {project.link && (
                    <Button size="sm" className="w-full">
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
