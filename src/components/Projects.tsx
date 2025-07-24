import { ExternalLink, Github, Star, Calendar, Users } from "lucide-react";
import { motion } from "framer-motion";
const projects = [{
  title: "Security Vulnerability Scanner",
  description: "An automated tool for identifying security vulnerabilities in web applications using Python and various security frameworks. Features real-time scanning and detailed reporting.",
  image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=500&h=300&fit=crop",
  tech: ["Python", "Flask", "SQLite", "Security", "OWASP"],
  github: "#",
  live: "#",
  featured: true,
  stats: {
    stars: 47,
    contributors: 3,
    status: "Active"
  }
}, {
  title: "E-Commerce Platform",
  description: "A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard built with React and Node.js. Includes inventory management and analytics.",
  image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
  tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
  github: "#",
  live: "#",
  featured: true,
  stats: {
    stars: 89,
    contributors: 5,
    status: "Completed"
  }
}, {
  title: "Network Monitoring Dashboard",
  description: "Real-time network monitoring system with alerting capabilities and detailed analytics for network administrators. Built with modern web technologies.",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
  tech: ["JavaScript", "D3.js", "WebSocket", "Express", "Chart.js"],
  github: "#",
  live: "#",
  featured: false,
  stats: {
    stars: 32,
    contributors: 2,
    status: "Active"
  }
}, {
  title: "Password Manager",
  description: "Secure password management application with encryption, multi-factor authentication, and cross-platform synchronization. Built with security-first approach.",
  image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=500&h=300&fit=crop",
  tech: ["Python", "Tkinter", "AES Encryption", "SQLite", "2FA"],
  github: "#",
  live: "#",
  featured: false,
  stats: {
    stars: 25,
    contributors: 1,
    status: "Beta"
  }
}];
const Projects = () => {
  return <section className="py-20 px-4 bg-gradient-to-br from-background via-card to-muted relative overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <motion.div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" animate={{
        y: [-20, 20, -20],
        opacity: [0.3, 0.6, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        <motion.div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" animate={{
        y: [20, -20, 20],
        opacity: [0.4, 0.7, 0.4]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }} />
        <motion.div className="absolute top-2/3 left-1/2 w-64 h-64 bg-accent rounded-full blur-3xl" animate={{
        y: [-15, 15, -15],
        opacity: [0.2, 0.5, 0.2]
      }} transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} whileHover={{
        scale: 1.02
      }} transition={{
        duration: 0.4
      }} viewport={{
        margin: "-100px"
      }}>
          <motion.h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.4,
          delay: 0.1
        }}>
            Featured Projects
          </motion.h2>
          <motion.div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full" initial={{
          width: 0
        }} whileInView={{
          width: 128
        }} transition={{
          duration: 0.4,
          delay: 0.2
        }} />
          <motion.p className="text-xl text-muted-foreground max-w-3xl mx-auto" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.4,
          delay: 0.3
        }}>
            Showcasing my journey through code - from security tools to full-stack applications
          </motion.p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 my-0 px-0 py-0">
          {projects.map((project, index) => <motion.div key={index} className={`group bg-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 border border-border ${project.featured ? 'lg:col-span-1' : ''}`} initial={{
          opacity: 0,
          y: 50,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          y: 0,
          scale: 1
        }} whileHover={{
          scale: 1.05,
          y: -10,
          rotateY: 5
        }} transition={{
          duration: 0.4,
          delay: index * 0.1
        }} viewport={{
          margin: "-50px"
        }}>
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-3" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Featured Badge */}
                {project.featured && <div className="absolute top-4 left-4 flex items-center gap-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce">
                    <Star className="w-4 h-4 fill-current animate-pulse" />
                    Featured
                  </div>}
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-110 ${project.stats.status === 'Active' ? 'bg-green-100 text-green-700 border border-green-200' : project.stats.status === 'Completed' ? 'bg-blue-100 text-blue-700 border border-blue-200' : 'bg-yellow-100 text-yellow-700 border border-yellow-200'}`}>
                    {project.stats.status}
                  </span>
                </div>
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <a href={project.github} className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-lg hover:bg-white transition-all duration-300 font-medium shadow-lg hover:scale-125 hover:-translate-y-2">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a href={project.live} className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 font-medium shadow-lg hover:scale-125 hover:-translate-y-2">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-800 transition-colors duration-300">
                    {project.description}
                  </p>
                </div>
                
                {/* Project Stats */}
                <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1 hover:scale-110 transition-transform duration-300">
                    <Star className="w-4 h-4" />
                    <span>{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center gap-1 hover:scale-110 transition-transform duration-300">
                    <Users className="w-4 h-4" />
                    <span>{project.stats.contributors}</span>
                  </div>
                  <div className="flex items-center gap-1 hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-4 h-4" />
                    <span>2024</span>
                  </div>
                </div>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 text-sm rounded-full font-medium border border-purple-100 hover:from-purple-100 hover:to-blue-100 hover:scale-110 hover:rotate-2 transition-all duration-300">
                      {tech}
                    </span>)}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a href={project.github} className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-500 font-medium hover:scale-110 hover:-translate-y-1">
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                  <a href={project.live} className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-500 font-medium hover:scale-110 hover:-translate-y-1">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>)}
        </div>
        
        {/* More Projects Button */}
        <motion.div className="text-center mt-12" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.4,
        delay: 0.2
      }} viewport={{
        margin: "-100px"
      }}>
          <motion.button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:scale-110 transition-all duration-300 shadow-lg" whileHover={{
          scale: 1.1,
          y: -5
        }} transition={{
          duration: 0.2
        }}>
            View All Projects on GitHub
          </motion.button>
        </motion.div>
      </div>
    </section>;
};
export default Projects;