import { Github, Linkedin, Mail, Download, ExternalLink, Home, User, CheckCircle, Bell, MessageCircle, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false); // Close menu after navigation
  };

  const navigationItems = [
    { id: 'home', icon: Home, label: 'Home', color: 'primary' },
    { id: 'about', icon: User, label: 'About', color: 'secondary' },
    { id: 'skills', icon: CheckCircle, label: 'Skills', color: 'accent' },
    { id: 'projects', icon: Bell, label: 'Projects', color: 'primary' },
    { id: 'contact', icon: MessageCircle, label: 'Contact', color: 'secondary' }
  ];
  return <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted to-card text-foreground overflow-hidden">
      
      {/* Desktop Navigation - Top Center */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden md:flex"
      >
        <div className="flex space-x-2 bg-background/80 backdrop-blur-lg border border-border/50 rounded-full px-4 py-2 shadow-lg">
          {navigationItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative w-12 h-12 rounded-full bg-${item.color}/20 backdrop-blur-sm border border-${item.color}/30 flex items-center justify-center hover:bg-${item.color}/30 transition-all duration-200`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className={`w-5 h-5 text-${item.color}`} />
              
              {/* Tooltip */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-popover text-popover-foreground px-2 py-1 rounded-md text-sm whitespace-nowrap shadow-lg border">
                  {item.label}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Navigation - Hamburger Menu */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="fixed top-4 right-4 z-50 md:hidden"
      >
        {/* Hamburger Button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-14 h-14 rounded-full bg-background/80 backdrop-blur-lg border border-border/50 flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-foreground" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6 text-foreground" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 right-0 bg-background/95 backdrop-blur-lg border border-border/50 rounded-2xl p-4 shadow-xl min-w-[200px]"
            >
              <div className="space-y-2">
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl bg-${item.color}/10 hover:bg-${item.color}/20 transition-all duration-200 text-left group`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <item.icon className={`w-5 h-5 text-${item.color} group-hover:scale-110 transition-transform duration-200`} />
                    <span className="font-medium text-foreground group-hover:text-${item.color} transition-colors duration-200">
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Background Code Animation - Only in Hero Section */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        {/* Moving code snippets behind profile - Layer 1 */}
        <motion.div className="absolute top-[10%] left-0 w-full text-primary/70 font-mono text-2xl whitespace-nowrap" animate={{
        x: [-400, typeof window !== 'undefined' ? window.innerWidth + 400 : 1200]
      }} transition={{
        duration: 12,
        repeat: Infinity,
        ease: "linear"
      }}>
          {"const hero = { name: 'Mohammad Khalid', role: 'Developer', passion: 'Security' };"}
        </motion.div>
        
        <motion.div className="absolute top-[20%] right-0 w-full text-secondary/70 font-mono text-xl whitespace-nowrap text-right" animate={{
        x: [typeof window !== 'undefined' ? window.innerWidth + 400 : 1200, -400]
      }} transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear",
        delay: 2
      }}>
          {"function buildFuture() { return innovation + dedication + code; }"}
        </motion.div>
        
        <motion.div className="absolute top-[35%] left-0 w-full text-accent/70 font-mono text-lg whitespace-nowrap" animate={{
        x: [-400, typeof window !== 'undefined' ? window.innerWidth + 400 : 1200]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
        delay: 4
      }}>
          {"while(learning) { skills++; experience++; impact++; }"}
        </motion.div>

        <motion.div className="absolute top-[50%] right-0 w-full text-primary/60 font-mono text-xl whitespace-nowrap text-right" animate={{
        x: [typeof window !== 'undefined' ? window.innerWidth + 400 : 1200, -400]
      }} transition={{
        duration: 13,
        repeat: Infinity,
        ease: "linear",
        delay: 1
      }}>
          {"if (challenge) { solveProblem(); deploySecure(); optimizeCode(); }"}
        </motion.div>

        <motion.div className="absolute top-[65%] left-0 w-full text-secondary/60 font-mono text-2xl whitespace-nowrap" animate={{
        x: [-400, typeof window !== 'undefined' ? window.innerWidth + 400 : 1200]
      }} transition={{
        duration: 11,
        repeat: Infinity,
        ease: "linear",
        delay: 6
      }}>
          {"console.log('Building tomorrow\\'s solutions today');"}
        </motion.div>

        <motion.div className="absolute top-[75%] right-0 w-full text-accent/60 font-mono text-lg whitespace-nowrap text-right" animate={{
        x: [typeof window !== 'undefined' ? window.innerWidth + 400 : 1200, -400]
      }} transition={{
        duration: 14,
        repeat: Infinity,
        ease: "linear",
        delay: 3
      }}>
          {"class Developer { constructor() { this.passion = 'unlimited'; } }"}
        </motion.div>

        <motion.div className="absolute top-[85%] left-0 w-full text-primary/50 font-mono text-xl whitespace-nowrap" animate={{
        x: [-400, typeof window !== 'undefined' ? window.innerWidth + 400 : 1200]
      }} transition={{
        duration: 16,
        repeat: Infinity,
        ease: "linear",
        delay: 8
      }}>
          {"async function innovate() { await dream(); return reality; }"}
        </motion.div>

        {/* Floating elements */}
        <motion.div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full filter blur-xl" animate={{
        y: [-20, 20, -20],
        opacity: [0.3, 0.6, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        <motion.div className="absolute top-1/3 right-1/4 w-56 h-56 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full filter blur-xl" animate={{
        y: [20, -20, 20],
        opacity: [0.4, 0.7, 0.4]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }} />
        <motion.div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full filter blur-xl" animate={{
        y: [-15, 15, -15],
        opacity: [0.2, 0.5, 0.2]
      }} transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }} />
      </div>
      
      <motion.div className="relative z-10 text-center px-4 max-w-4xl mx-auto" initial={{
      opacity: 0,
      y: 50
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.4
    }} viewport={{
      margin: "-100px"
    }}>
        {/* Simplified Profile Picture */}
        <motion.div className="mb-8" initial={{
        opacity: 0,
        scale: 0.8
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} whileHover={{
        scale: 1.05,
        y: -5
      }} transition={{
        duration: 0.15,
        delay: 0.05
      }} viewport={{
        margin: "-100px"
      }}>
          <div className="relative inline-block group my-[25px]">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-150"></div>
            <img src="/lovable-uploads/16bcec82-72d9-49b1-95bc-ca6f3ab5e18c.png" alt="Mohammad Khalid Bin Nasir" className="relative w-48 h-48 rounded-full mx-auto mb-6 border-4 border-primary shadow-xl hover:scale-105 hover:rotate-2 transition-all duration-150 object-cover" />
            
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full border-4 border-background flex items-center justify-center shadow-lg hover:scale-125 hover:rotate-12 transition-transform duration-150">
              <span className="text-2xl animate-pulse">👋</span>
            </div>
          </div>
        </motion.div>
        
        {/* Simplified Name and Title */}
        <motion.div className="space-y-4 mb-8" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} whileHover={{
        scale: 1.02
      }} transition={{
        duration: 0.15,
        delay: 0.1
      }} viewport={{
        margin: "-100px"
      }}>
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent hover:scale-105 hover:-translate-y-2 transition-transform duration-150">
            Mohammad Khalid
          </h1>
          <h2 className="text-3xl md:text-5xl font-light text-secondary hover:text-primary hover:scale-105 transition-all duration-150">
            Bin Nasir
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <motion.span className="px-6 py-3 bg-primary/20 rounded-full text-lg backdrop-blur-sm border border-primary/30 hover:bg-primary/30 hover:scale-110 hover:-translate-y-1 transition-all duration-150 cursor-default" whileHover={{
            scale: 1.1,
            y: -4,
            rotate: 2
          }} transition={{
            duration: 0.1
          }}>
              B.Tech 3rd Year
            </motion.span>
            <motion.span className="px-6 py-3 bg-secondary/20 rounded-full text-lg backdrop-blur-sm border border-secondary/30 hover:bg-secondary/30 hover:scale-110 hover:-translate-y-1 transition-all duration-150 cursor-default" whileHover={{
            scale: 1.1,
            y: -4,
            rotate: -2
          }} transition={{
            duration: 0.1
          }}>
              Ethical Hacker
            </motion.span>
            <motion.span className="px-6 py-3 bg-accent/20 rounded-full text-lg backdrop-blur-sm border border-accent/30 hover:bg-accent/30 hover:scale-110 hover:-translate-y-1 transition-all duration-150 cursor-default" whileHover={{
            scale: 1.1,
            y: -4,
            rotate: 2
          }} transition={{
            duration: 0.1
          }}>
              Web Developer
            </motion.span>
            <motion.span className="px-6 py-3 bg-primary/20 rounded-full text-lg backdrop-blur-sm border border-primary/30 hover:bg-primary/30 hover:scale-110 hover:-translate-y-1 transition-all duration-150 cursor-default" whileHover={{
            scale: 1.1,
            y: -4,
            rotate: -2
          }} transition={{
            duration: 0.1
          }}>
              DevOps Engineer
            </motion.span>
          </div>
        </motion.div>
        
        <motion.p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed hover:opacity-100 hover:scale-105 transition-all duration-150 text-muted-foreground" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.15,
        delay: 0.15
      }} viewport={{
        margin: "-100px"
      }}>
          Passionate tech enthusiast crafting secure digital solutions and exploring the frontiers of cybersecurity and DevOps
        </motion.p>
        
        {/* Simplified Social Links */}
        <motion.div className="flex justify-center space-x-6 mb-12" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.15,
        delay: 0.2
      }} viewport={{
        margin: "-100px"
      }}>
          <motion.a href="https://github.com" className="group p-4 bg-primary/20 rounded-full hover:bg-primary/30 transition-all duration-150 hover:scale-110 transform backdrop-blur-sm border border-primary/30" whileHover={{
          scale: 1.3,
          rotate: 15,
          y: -5
        }} transition={{
          duration: 0.1
        }}>
            <Github className="w-7 h-7 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-150" />
          </motion.a>
          <motion.a href="https://linkedin.com" className="group p-4 bg-secondary/20 rounded-full hover:bg-secondary/30 transition-all duration-150 hover:scale-110 transform backdrop-blur-sm border border-secondary/30" whileHover={{
          scale: 1.3,
          rotate: -15,
          y: -5
        }} transition={{
          duration: 0.1
        }}>
            <Linkedin className="w-7 h-7 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-150" />
          </motion.a>
          <motion.a href="mailto:mohammadkhalidbinnasir@gmail.com" className="group p-4 bg-accent/20 rounded-full hover:bg-accent/30 transition-all duration-150 hover:scale-110 transform backdrop-blur-sm border border-accent/30" whileHover={{
          scale: 1.3,
          rotate: 15,
          y: -5
        }} transition={{
          duration: 0.1
        }}>
            <Mail className="w-7 h-7 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-150" />
          </motion.a>
        </motion.div>
        
        {/* Simplified Action Buttons */}
        <motion.div className="flex flex-col sm:flex-row justify-center gap-4" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.15,
        delay: 0.25
      }} viewport={{
        margin: "-100px"
      }}>
          <motion.button className="group bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-150 hover:scale-105 hover:-translate-y-1 transform shadow-lg flex items-center justify-center gap-2" whileHover={{
          scale: 1.1,
          y: -8,
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
        }} transition={{
          duration: 0.1
        }}>
            <span>View My Work</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-1 group-hover:rotate-12 transition-transform duration-150" />
          </motion.button>
          <motion.button className="group bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-150 hover:scale-105 hover:-translate-y-1 transform flex items-center justify-center gap-2" whileHover={{
          scale: 1.1,
          y: -8,
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
        }} transition={{
          duration: 0.1
        }}>
            <Download className="w-5 h-5 group-hover:translate-y-1 group-hover:rotate-12 transition-transform duration-150" />
            <span>Download CV</span>
          </motion.button>
        </motion.div>
      </motion.div>
      
      {/* Enhanced Scroll Indicator */}
      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer" animate={{
      y: [0, -10, 0]
    }} transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }} whileHover={{
      scale: 1.2,
      y: -15
    }}>
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center backdrop-blur-sm bg-primary/10 hover:bg-primary/20 hover:scale-110 transition-all duration-150">
          <motion.div className="w-1 h-3 bg-primary rounded-full mt-2" animate={{
          y: [0, 6, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
        </div>
        <p className="text-sm mt-2 opacity-75 hover:opacity-100 hover:scale-105 transition-all duration-150 text-center">Scroll to explore</p>
      </motion.div>
    </section>;
};
export default Hero;