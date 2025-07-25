
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-muted via-card to-background overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-xl"
          animate={{ y: [-20, 20, -20], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl"
          animate={{ y: [20, -20, 20], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.15 }}
            viewport={{ margin: "-100px" }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent hover:scale-105 hover:-translate-y-2 transition-transform duration-150"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.15, delay: 0.05 }}
            >
              Get In Touch
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground hover:text-foreground hover:scale-105 transition-all duration-150"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, delay: 0.1 }}
            >
              Let's collaborate on something amazing together
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02, x: 5 }}
              transition={{ duration: 0.15, delay: 0.05 }}
              viewport={{ margin: "-50px" }}
            >
              <motion.div 
                className="group bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 hover:bg-card transition-all duration-150"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.08, y: -8, rotate: 1 }}
                transition={{ duration: 0.15, delay: 0.1 }}
              >
                <div className="flex items-center space-x-4">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 18, scale: 1.2 }}
                    transition={{ duration: 0.1 }}
                  >
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">mohammadkhalidbinnasir@gmail.com</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="group bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 hover:bg-card transition-all duration-150"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.08, y: -8, rotate: -1 }}
                transition={{ duration: 0.15, delay: 0.15 }}
              >
                <div className="flex items-center space-x-4">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 18, scale: 1.2 }}
                    transition={{ duration: 0.1 }}
                  >
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 9973910879</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="group bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 hover:bg-card transition-all duration-150"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.08, y: -8, rotate: 1 }}
                transition={{ duration: 0.15, delay: 0.2 }}
              >
                <div className="flex items-center space-x-4">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 18, scale: 1.2 }}
                    transition={{ duration: 0.1 }}
                  >
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">Motihari, India</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="flex space-x-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15, delay: 0.25 }}
              >
                <motion.a 
                  href="#" 
                  className="group w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-all duration-150 backdrop-blur-sm border border-primary/30"
                  whileHover={{ scale: 1.3, rotate: 15, y: -5 }}
                  transition={{ duration: 0.1 }}
                >
                  <Github className="w-6 h-6 text-foreground group-hover:scale-125 transition-transform duration-150" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="group w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary/30 transition-all duration-150 backdrop-blur-sm border border-secondary/30"
                  whileHover={{ scale: 1.3, rotate: -15, y: -5 }}
                  transition={{ duration: 0.1 }}
                >
                  <Linkedin className="w-6 h-6 text-foreground group-hover:scale-125 transition-transform duration-150" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="group w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent/30 transition-all duration-150 backdrop-blur-sm border border-accent/30"
                  whileHover={{ scale: 1.3, rotate: 15, y: -5 }}
                  transition={{ duration: 0.1 }}
                >
                  <Instagram className="w-6 h-6 text-foreground group-hover:scale-125 transition-transform duration-150" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="bg-card/80 backdrop-blur-md border border-border rounded-3xl p-8 hover:bg-card transition-all duration-150"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.03, x: -8, rotate: -1 }}
              transition={{ duration: 0.15, delay: 0.1 }}
              viewport={{ margin: "-50px" }}
            >
              <form className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15, delay: 0.15 }}
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-150 hover:bg-background/80 hover:scale-105"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15, delay: 0.2 }}
                >
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-150 hover:bg-background/80 hover:scale-105"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15, delay: 0.25 }}
                >
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-150 resize-none hover:bg-background/80 hover:scale-105"
                  ></textarea>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15, delay: 0.3 }}
                >
                  <motion.button
                    type="submit"
                    className="group w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-3 rounded-xl font-semibold transition-all duration-150 shadow-xl flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.08, y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                    transition={{ duration: 0.1 }}
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-3 group-hover:-translate-y-2 group-hover:rotate-12 transition-transform duration-150" />
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
