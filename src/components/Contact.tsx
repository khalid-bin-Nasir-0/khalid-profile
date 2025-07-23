
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-float animate-delay-200"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-float animate-delay-600"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-text-shimmer">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 animate-slide-up animate-delay-300">
              Let's collaborate on something amazing together
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-up animate-delay-500">
              <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-300">mohammadkhalidbinnasir@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl animate-slide-up animate-delay-700">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                    <p className="text-gray-300">+91 9973910879</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl animate-slide-up animate-delay-900">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                    <p className="text-gray-300">Motihari, India</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 justify-center animate-slide-up animate-delay-1100">
                <a href="#" className="group w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-500 hover:scale-125 hover:rotate-12 backdrop-blur-sm border border-white/30">
                  <Github className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="#" className="group w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-500 hover:scale-125 hover:rotate-12 backdrop-blur-sm border border-white/30">
                  <Linkedin className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="#" className="group w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-500 hover:scale-125 hover:rotate-12 backdrop-blur-sm border border-white/30">
                  <Instagram className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 animate-scale-in animate-delay-600">
              <form className="space-y-6">
                <div className="animate-slide-up animate-delay-800">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 hover:bg-white/20"
                  />
                </div>
                <div className="animate-slide-up animate-delay-1000">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 hover:bg-white/20"
                  />
                </div>
                <div className="animate-slide-up animate-delay-1200">
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 resize-none hover:bg-white/20"
                  ></textarea>
                </div>
                <div className="animate-scale-in animate-delay-1400">
                  <button
                    type="submit"
                    className="group w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-500 hover:scale-105 hover:-translate-y-1 transform shadow-xl flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-500" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
