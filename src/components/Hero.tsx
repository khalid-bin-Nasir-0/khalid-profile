import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted to-card text-foreground overflow-hidden">
      
      {/* Simple Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary to-secondary rounded-full filter blur-xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-gradient-to-r from-secondary to-accent rounded-full filter blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-gradient-to-r from-accent to-primary rounded-full filter blur-xl animate-float"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Simplified Profile Picture */}
        <div className="mb-8">
          <div className="relative inline-block group my-[25px]">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <img 
              src="/lovable-uploads/16bcec82-72d9-49b1-95bc-ca6f3ab5e18c.png" 
              alt="Mohammad Khalid Bin Nasir" 
              className="relative w-48 h-48 rounded-full mx-auto mb-6 border-4 border-primary shadow-xl hover:scale-105 transition-all duration-300 object-cover" 
            />
            
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full border-4 border-background flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">👋</span>
            </div>
          </div>
        </div>
        
        {/* Simplified Name and Title */}
        <div className="space-y-4 mb-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            Mohammad Khalid
          </h1>
          <h2 className="text-3xl md:text-5xl font-light text-secondary hover:text-primary transition-colors duration-300">
            Bin Nasir
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-6 py-3 bg-primary/20 rounded-full text-lg backdrop-blur-sm border border-primary/30 hover:bg-primary/30 hover:scale-105 transition-all duration-300 cursor-default">
              B.Tech 3rd Year
            </span>
            <span className="px-6 py-3 bg-secondary/20 rounded-full text-lg backdrop-blur-sm border border-secondary/30 hover:bg-secondary/30 hover:scale-105 transition-all duration-300 cursor-default">
              Ethical Hacker
            </span>
            <span className="px-6 py-3 bg-accent/20 rounded-full text-lg backdrop-blur-sm border border-accent/30 hover:bg-accent/30 hover:scale-105 transition-all duration-300 cursor-default">
              Web Developer
            </span>
            <span className="px-6 py-3 bg-primary/20 rounded-full text-lg backdrop-blur-sm border border-primary/30 hover:bg-primary/30 hover:scale-105 transition-all duration-300 cursor-default">
              DevOps Engineer
            </span>
          </div>
        </div>
        
        <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed hover:opacity-100 transition-opacity duration-300 text-muted-foreground">
          Passionate tech enthusiast crafting secure digital solutions and exploring the frontiers of cybersecurity and DevOps
        </p>
        
        {/* Simplified Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com" className="group p-4 bg-primary/20 rounded-full hover:bg-primary/30 transition-all duration-300 hover:scale-110 transform backdrop-blur-sm border border-primary/30">
            <Github className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
          </a>
          <a href="https://linkedin.com" className="group p-4 bg-secondary/20 rounded-full hover:bg-secondary/30 transition-all duration-300 hover:scale-110 transform backdrop-blur-sm border border-secondary/30">
            <Linkedin className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
          </a>
          <a href="mailto:mohammadkhalidbinnasir@gmail.com" className="group p-4 bg-accent/20 rounded-full hover:bg-accent/30 transition-all duration-300 hover:scale-110 transform backdrop-blur-sm border border-accent/30">
            <Mail className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
          </a>
        </div>
        
        {/* Simplified Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="group bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:-translate-y-1 transform shadow-lg flex items-center justify-center gap-2">
            <span>View My Work</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
          <button className="group bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:-translate-y-1 transform flex items-center justify-center gap-2">
            <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            <span>Download CV</span>
          </button>
        </div>
      </div>
      
      {/* Simple Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center backdrop-blur-sm bg-primary/10 hover:bg-primary/20 transition-colors duration-300">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-sm mt-2 opacity-75 hover:opacity-100 transition-opacity duration-300">Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;