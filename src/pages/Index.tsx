import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
const Index = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return <div className="min-h-screen relative bg-background">
      {/* Modern Glass Header with Profile */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-primary/20">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-4">
            <div className="relative">
              
              <img src="/lovable-uploads/16bcec82-72d9-49b1-95bc-ca6f3ab5e18c.png" alt="Mohammad Khalid Bin Nasir" className="relative w-12 h-12 rounded-full border-2 border-primary object-cover" />
            </div>
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Mohammad Khalid Bin Nasir</h1>
              <p className="text-sm text-muted-foreground">B.Tech 3rd Year</p>
            </div>
          </div>
        </div>
      </div>

      {/* Simplified Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Simple gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background"></div>
        
        {/* Minimal floating elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-float blur-2xl"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-r from-secondary/15 to-accent/15 rounded-full animate-float blur-xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full animate-float blur-2xl"></div>
      </div>
      
      <div className="pt-20">
        <Hero />
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <About />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Skills />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Projects />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Contact />
        </motion.div>
      </div>
    </div>;
};
export default Index;