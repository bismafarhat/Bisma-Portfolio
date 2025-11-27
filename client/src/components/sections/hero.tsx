import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { personalInfo } from "@/lib/data";
import heroImage from "@assets/generated_images/abstract_gradient_glassmorphism_shape_on_dark_background.png";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-3 py-1 rounded-full glass-card border-primary/20 mb-6">
            <span className="text-primary text-sm font-medium">Available for Work</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-8">
            Hi, I'm <span className="text-gradient">{personalInfo.name}</span>,<br />
            Frontend Developer passionate about creating responsive, user-friendly web applications and growing my skills.
          </h1>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full text-base px-8" asChild>
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-base px-8 border-white/10 hover:bg-white/5" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-[600px] mx-auto">
             <img 
              src={heroImage} 
              alt="Abstract 3D Art" 
              className="w-full h-full object-contain drop-shadow-2xl animate-float"
             />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
