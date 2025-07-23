
import { Code, Shield, Database, Globe, Server, Brain, Cloud, Settings, Container, GitBranch } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-8 h-8" />,
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML5", "CSS3"],
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      skills: ["Node.js", "Python", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
      color: "from-green-400 to-emerald-400"
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-8 h-8" />,
      skills: ["Docker", "Kubernetes", "AWS", "Jenkins", "Terraform", "CI/CD"],
      color: "from-cyan-400 to-blue-400"
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="w-8 h-8" />,
      skills: ["Penetration Testing", "Network Security", "Vulnerability Assessment", "OWASP", "Kali Linux", "Metasploit"],
      color: "from-red-400 to-pink-400"
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      skills: ["JavaScript", "Python", "Java", "C++", "SQL", "Bash"],
      color: "from-purple-400 to-indigo-400"
    },
    {
      title: "Database Management",
      icon: <Database className="w-8 h-8" />,
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Firebase", "SQLite"],
      color: "from-orange-400 to-yellow-400"
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-8 h-8" />,
      skills: ["Python", "TensorFlow", "Scikit-learn", "Data Analysis", "Neural Networks", "Deep Learning"],
      color: "from-teal-400 to-blue-400"
    },
    {
      title: "Tools & Technologies",
      icon: <Settings className="w-8 h-8" />,
      skills: ["Git", "Linux", "VS Code", "Postman", "Nginx", "Apache"],
      color: "from-gray-400 to-slate-400"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-background via-card to-muted overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full filter blur-xl"
          animate={{ y: [-20, 20, -20], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary rounded-full filter blur-xl"
          animate={{ y: [20, -20, 20], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-accent rounded-full filter blur-xl"
          animate={{ y: [-15, 15, -15], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Skills & Expertise
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Crafting secure and innovative digital solutions with cutting-edge technologies
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="group bg-card/50 backdrop-blur-md border border-border rounded-3xl p-8 shadow-2xl"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                >
                  <div className="text-white">
                    {category.icon}
                  </div>
                </motion.div>
                
                <motion.h3 
                  className="text-2xl font-bold text-foreground mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {category.title}
                </motion.h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.1 + 0.7 + skillIndex * 0.05
                      }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.1 + 0.8 + skillIndex * 0.05,
                          type: "spring",
                          stiffness: 300
                        }}
                        viewport={{ once: true }}
                      />
                      <span className="text-muted-foreground">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Skill level indicator */}
                <motion.div 
                  className="mt-6 space-y-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 1.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Proficiency</span>
                    <span>85-95%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <motion.div 
                      className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 0.9 }}
                      transition={{ 
                        duration: 1.5, 
                        delay: index * 0.1 + 1.4,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                      style={{ transformOrigin: "left" }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Certifications section */}
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 
              className="text-3xl font-bold text-foreground mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Certifications & Achievements
            </motion.h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                "Ethical Hacking Certificate",
                "Web Development Bootcamp",
                "Cybersecurity Fundamentals",
                "DevOps Foundation",
                "Cloud Computing Essentials",
                "Full Stack Development"
              ].map((cert, index) => (
                <motion.div
                  key={cert}
                  className="group bg-card backdrop-blur-sm border border-border rounded-xl p-4 shadow-lg"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                    stiffness: 150
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-3"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                  >
                    <span className="text-white font-bold text-lg">🏆</span>
                  </motion.div>
                  <motion.p 
                    className="text-muted-foreground text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {cert}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
