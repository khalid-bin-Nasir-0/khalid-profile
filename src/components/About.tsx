
import { Code, Shield, Lightbulb, Award, Users, Target, Cloud } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
        {/* Clean background without code animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/3 to-accent/5" style={{ zIndex: 0 }}>

        {/* Enhanced floating elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full blur-3xl"
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-secondary/15 to-accent/15 rounded-full blur-3xl"
          animate={{ 
            y: [0, 25, 0],
            x: [0, -15, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full blur-3xl"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.15 }}
          viewport={{ margin: "-50px" }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:scale-105 hover:-translate-y-2 transition-transform duration-150"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.15, delay: 0.05 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 0.15, delay: 0.1 }}
          />
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto hover:text-foreground hover:scale-105 transition-all duration-150"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15, delay: 0.15 }}
          >
            Building the future through code, one secure application at a time
          </motion.p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02, x: 5 }}
            transition={{ duration: 0.15, delay: 0.05 }}
            viewport={{ margin: "-50px" }}
          >
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.15, delay: 0.1 }}
            >
              <motion.p 
                className="text-lg text-foreground leading-relaxed hover:scale-105 hover:-translate-y-1 transition-transform duration-150"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15, delay: 0.15 }}
              >
                I am a passionate tech enthusiast currently pursuing my B.Tech degree (3rd Year) at 
                <span className="font-semibold text-primary bg-primary/10 px-2 py-1 rounded-md mx-1 hover:bg-primary/20 hover:scale-110 transition-all duration-150">
                  Uttaranchal University
                </span>. 
                My journey in technology spans across ethical hacking, web development, DevOps, and 
                software engineering.
              </motion.p>
              <motion.p 
                className="text-lg text-foreground leading-relaxed hover:scale-105 hover:-translate-y-1 transition-transform duration-150"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15, delay: 0.2 }}
              >
                I believe in the power of technology to solve real-world problems and am 
                constantly learning new skills to stay at the forefront of innovation. 
                My goal is to create secure, efficient, and scalable solutions that make a difference.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, delay: 0.25 }}
            >
              {[
                { number: "3rd", label: "Year B.Tech", delay: 0 },
                { number: "20+", label: "Projects", delay: 0.05 },
                { number: "5+", label: "Certifications", delay: 0.1 }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 bg-card rounded-xl shadow-lg border border-border hover:scale-115 hover:shadow-xl hover:-translate-y-3 hover:rotate-2 transition-all duration-150 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.15, y: -12, rotate: 2 }}
                  transition={{ duration: 0.15, delay: 0.3 + stat.delay }}
                >
                  <motion.div 
                    className="text-4xl font-bold text-primary mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.15, delay: 0.35 + stat.delay, type: "spring", stiffness: 200 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, delay: 0.4 }}
            >
              {[
                { icon: Award, label: "Dean's List Student", delay: 0 },
                { icon: Users, label: "Team Leader", delay: 0.03 },
                { icon: Target, label: "Problem Solver", delay: 0.06 }
              ].map((badge, index) => (
                <motion.div
                  key={badge.label}
                  className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 hover:scale-115 hover:-translate-y-1 hover:rotate-2 transition-all duration-150 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.15, y: -4, rotate: 2 }}
                  transition={{ duration: 0.1, delay: 0.45 + badge.delay }}
                >
                  <badge.icon className="w-4 h-4" />
                  {badge.label}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02, x: -5 }}
            transition={{ duration: 0.15, delay: 0.1 }}
            viewport={{ margin: "-50px" }}
          >
            {[
              {
                icon: Code,
                title: "Web Development",
                subtitle: "Full-Stack Solutions",
                description: "Building modern, responsive web applications using cutting-edge technologies and best practices. From concept to deployment, I create digital experiences that users love.",
                gradient: "from-primary to-secondary",
                delay: 0
              },
              {
                icon: Shield,
                title: "Ethical Hacking",
                subtitle: "Cybersecurity Expert",
                description: "Passionate about cybersecurity and helping organizations secure their digital infrastructure. I identify vulnerabilities before malicious actors can exploit them.",
                gradient: "from-secondary to-accent",
                delay: 0.1
              },
              {
                icon: Cloud,
                title: "DevOps",
                subtitle: "Cloud & Automation",
                description: "Streamlining development workflows through automation, containerization, and cloud technologies. I bridge the gap between development and operations for faster, more reliable deployments.",
                gradient: "from-accent to-primary",
                delay: 0.2
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                subtitle: "Creative Solutions",
                description: "Always exploring new technologies and creative solutions to complex problems. I turn challenges into opportunities for innovation and growth.",
                gradient: "from-primary to-accent",
                delay: 0.3
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-card p-8 rounded-2xl shadow-xl border border-border hover:shadow-2xl hover:scale-110 hover:-translate-y-5 hover:rotate-1 transition-all duration-150 cursor-pointer group"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -20,
                  rotate: 1,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ duration: 0.15, delay: 0.15 + item.delay }}
              >
                <div className="flex items-center mb-6">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-150`}
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    whileHover={{ scale: 1.3, rotate: 18 }}
                    transition={{ duration: 0.15, delay: 0.2 + item.delay, type: "spring", stiffness: 200 }}
                  >
                    <item.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-150"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.15, delay: 0.25 + item.delay }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p 
                      className="text-muted-foreground font-medium group-hover:text-secondary transition-colors duration-150"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.15, delay: 0.28 + item.delay }}
                    >
                      {item.subtitle}
                    </motion.p>
                  </div>
                </div>
                <motion.p 
                  className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-150"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15, delay: 0.3 + item.delay }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
