import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const codeSnippets = [
    "const developer = 'Mohammad Khalid';",
    "function hackTheWorld() {",
    "  return 'Securing digital future';",
    "}",
    "class EthicalHacker {",
    "  constructor() {",
    "    this.passion = 'cybersecurity';",
    "  }",
    "}",
    "const skills = ['React', 'DevOps', 'Security'];",
    "if (challenge.exists()) {",
    "  solve(challenge);",
    "}",
    "// Building the future, one line at a time"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted to-card text-foreground overflow-hidden">
      
      {/* Animated Code Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {codeSnippets.map((code, index) => (
          <motion.div
            key={index}
            className="absolute text-primary font-mono text-sm md:text-base whitespace-nowrap"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ 
              x: ["-200px", "100vw"],
              opacity: [0, 0.6, 0.6, 0]
            }}
            transition={{
              duration: 15 + (index * 2),
              repeat: Infinity,
              delay: index * 2,
              ease: "linear"
            }}
            style={{
              top: `${10 + (index * 8)}%`,
            }}
          >
            {code}
          </motion.div>
        ))}
      </div>

      {/* Simple Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary to-secondary rounded-full filter blur-xl"
          animate={{ y: [-20, 20, -20], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-56 h-56 bg-gradient-to-r from-secondary to-accent rounded-full filter blur-xl"
          animate={{ y: [20, -20, 20], rotate: [0, -2, 2, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-gradient-to-r from-accent to-primary rounded-full filter blur-xl"
          animate={{ y: [-15, 15, -15], rotate: [0, 3, -3, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
      
      <motion.div 
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Profile Picture */}
        <div className="mb-8">
          <motion.div 
            className="relative inline-block group my-[25px]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <motion.img 
              src="/lovable-uploads/16bcec82-72d9-49b1-95bc-ca6f3ab5e18c.png" 
              alt="Mohammad Khalid Bin Nasir" 
              className="relative w-48 h-48 rounded-full mx-auto mb-6 border-4 border-primary shadow-xl object-cover" 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.div 
              className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full border-4 border-background flex items-center justify-center shadow-lg"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-2xl">👋</span>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Name and Title */}
        <div className="space-y-4 mb-8">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Mohammad Khalid
          </motion.h1>
          <motion.h2 
            className="text-3xl md:text-5xl font-light text-secondary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Bin Nasir
          </motion.h2>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {["B.Tech 3rd Year", "Ethical Hacker", "Web Developer", "DevOps Engineer"].map((tag, index) => (
              <motion.span
                key={tag}
                className="px-6 py-3 bg-primary/20 rounded-full text-lg backdrop-blur-sm border border-primary/30 cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.6 + (index * 0.1) }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.3)" }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
        
        <motion.p 
          className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          Passionate tech enthusiast crafting secure digital solutions and exploring the frontiers of cybersecurity and DevOps
        </motion.p>
        
        {/* Social Links */}
        <motion.div 
          className="flex justify-center space-x-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          {[
            { href: "https://github.com", icon: Github, color: "primary" },
            { href: "https://linkedin.com", icon: Linkedin, color: "secondary" },
            { href: "mailto:mohammadkhalidbinnasir@gmail.com", icon: Mail, color: "accent" }
          ].map(({ href, icon: Icon, color }, index) => (
            <motion.a
              key={href}
              href={href}
              className={`group p-4 bg-${color}/20 rounded-full backdrop-blur-sm border border-${color}/30`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2.2 + (index * 0.1) }}
              whileHover={{ scale: 1.1, backgroundColor: `rgba(var(--${color}), 0.3)` }}
            >
              <motion.div
                whileHover={{ rotate: 12 }}
                transition={{ duration: 0.3 }}
              >
                <Icon className="w-7 h-7" />
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
        
        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
        >
          <motion.button 
            className="group bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-lg flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View My Work</span>
            <motion.div
              whileHover={{ x: 2, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <ExternalLink className="w-5 h-5" />
            </motion.div>
          </motion.button>
          <motion.button 
            className="group bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(var(--primary), 1)", color: "rgba(var(--primary-foreground), 1)" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              whileHover={{ y: 2 }}
              transition={{ duration: 0.3 }}
            >
              <Download className="w-5 h-5" />
            </motion.div>
            <span>Download CV</span>
          </motion.button>
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center backdrop-blur-sm bg-primary/10">
            <motion.div 
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
        <p className="text-sm mt-2 opacity-75 text-center">Scroll to explore</p>
      </motion.div>
    </section>
  );
};

export default Hero;