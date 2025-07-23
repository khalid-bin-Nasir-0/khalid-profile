
import { Code, Shield, Lightbulb, Award, Users, Target, Cloud } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Aesthetic grey water-like blurred background */}
      <div className="absolute inset-0 bg-gray-800/5">
        {/* Heavily blurred grey water effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-600/8 rounded-full animate-water-flow blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gray-500/6 rounded-full animate-water-wave blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gray-700/7 rounded-full animate-water-ripple blur-3xl"></div>
        <div className="absolute top-1/6 right-1/3 w-72 h-72 bg-gray-600/5 rounded-full animate-water-flow animate-delay-300 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-88 h-88 bg-gray-500/8 rounded-full animate-water-wave animate-delay-500 blur-3xl"></div>
        <div className="absolute top-2/3 left-1/6 w-48 h-48 bg-gray-400/6 rounded-full animate-water-ripple animate-delay-700 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/6 w-56 h-56 bg-gray-700/7 rounded-full animate-water-flow animate-delay-400 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Building the future through code, one secure application at a time
          </motion.p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.p 
                className="text-lg text-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                I am a passionate tech enthusiast currently pursuing my B.Tech degree (3rd Year) at 
                <span className="font-semibold text-primary bg-primary/10 px-2 py-1 rounded-md mx-1">
                  Uttaranchal University
                </span>. 
                My journey in technology spans across ethical hacking, web development, DevOps, and 
                software engineering.
              </motion.p>
              <motion.p 
                className="text-lg text-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
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
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              {[
                { number: "3rd", label: "Year B.Tech", delay: 0 },
                { number: "20+", label: "Projects", delay: 0.2 },
                { number: "5+", label: "Certifications", delay: 0.4 }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 bg-card rounded-xl shadow-lg border border-border"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 + stat.delay }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="text-4xl font-bold text-primary mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 + stat.delay, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
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
              transition={{ duration: 0.8, delay: 1.6 }}
              viewport={{ once: true }}
            >
              {[
                { icon: Award, label: "Dean's List Student", delay: 0 },
                { icon: Users, label: "Team Leader", delay: 0.1 },
                { icon: Target, label: "Problem Solver", delay: 0.2 }
              ].map((badge, index) => (
                <motion.div
                  key={badge.label}
                  className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 + badge.delay }}
                  viewport={{ once: true }}
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
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
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
                delay: 0.2
              },
              {
                icon: Cloud,
                title: "DevOps",
                subtitle: "Cloud & Automation",
                description: "Streamlining development workflows through automation, containerization, and cloud technologies. I bridge the gap between development and operations for faster, more reliable deployments.",
                gradient: "from-accent to-primary",
                delay: 0.4
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                subtitle: "Creative Solutions",
                description: "Always exploring new technologies and creative solutions to complex problems. I turn challenges into opportunities for innovation and growth.",
                gradient: "from-primary to-accent",
                delay: 0.6
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-card p-8 rounded-2xl shadow-xl border border-border"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + item.delay }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + item.delay, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="text-2xl font-bold text-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1 + item.delay }}
                      viewport={{ once: true }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p 
                      className="text-muted-foreground font-medium"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.1 + item.delay }}
                      viewport={{ once: true }}
                    >
                      {item.subtitle}
                    </motion.p>
                  </div>
                </div>
                <motion.p 
                  className="text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + item.delay }}
                  viewport={{ once: true }}
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
