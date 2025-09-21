import { ArrowRight, ChevronDown, Sparkles, Code, Rocket } from "lucide-react"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { motion } from "motion/react"
import { useEffect, useState } from "react"
import me from "../assets/me.jpeg"
export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToNext = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-blue-500/5 to-purple-500/5"></div>
      
      {/* Floating geometric shapes */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-teal-400/30 to-blue-400/30 rounded-full blur-xl"
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-xl"
        animate={{ 
          y: [0, 40, 0],
          x: [0, -15, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.5, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div 
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.span 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500/20 to-purple-500/20 border border-teal-300/30 rounded-full text-teal-300 text-sm mb-6 backdrop-blur-sm"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Welcome to my portfolio
                </motion.span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl leading-tight text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.span 
                  className="block"
                  animate={{ 
                    textShadow: [
                      "0 0 20px rgba(20, 184, 166, 0.5)",
                      "0 0 40px rgba(20, 184, 166, 0.8)",
                      "0 0 20px rgba(20, 184, 166, 0.5)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Abdelrahman
                </motion.span>
                <span className="block gradient-text">Mohamed</span>
              </motion.h1>
              
              <motion.h2 
                className="text-2xl md:text-3xl gradient-text-secondary"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.span
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{
                    background: "linear-gradient(90deg, #14b8a6, #0891b2, #7c3aed, #14b8a6)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  MERN Stack Developer
                </motion.span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                I transform ideas into powerful, modern web experiences with clean design and creative development.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.button 
                onClick={() => scrollToSection('projects')}
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-xl overflow-hidden shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(20, 184, 166, 0.6)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(20, 184, 166, 0.3)",
                    "0 0 40px rgba(20, 184, 166, 0.5)",
                    "0 0 20px rgba(20, 184, 166, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="relative z-10 flex items-center">
                  <Rocket className="mr-3 group-hover:rotate-12 transition-transform" size={20} />
                  View Projects 
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    background: [
                      "linear-gradient(45deg, #14b8a6, #3b82f6)",
                      "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                      "linear-gradient(45deg, #8b5cf6, #14b8a6)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.button>
              
              <motion.button 
                onClick={() => scrollToSection('contact')}
                className="group inline-flex items-center px-8 py-4 border-2 border-teal-400/50 text-teal-300 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(20, 184, 166, 1)",
                  color: "rgba(255, 255, 255, 1)",
                  boxShadow: "0 0 20px rgba(20, 184, 166, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Code className="mr-3 group-hover:rotate-12 transition-transform" size={20} />
                Let's Connect
                <motion.div
                  className="ml-3 w-3 h-3 bg-teal-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right content - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Animated background glow */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-teal-400/40 via-blue-400/40 to-purple-400/40 rounded-3xl blur-3xl"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              
              {/* Secondary glow */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-l from-pink-400/30 via-cyan-400/30 to-indigo-400/30 rounded-3xl blur-2xl"
                animate={{ 
                  rotate: [360, 0],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ 
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              
              {/* Main image */}
              <motion.div
                className="relative z-10"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5
                }}
                transition={{ duration: 0.3 }}
                style={{ perspective: "1000px" }}
              >
                <ImageWithFallback 
                  src = {me}
                  alt="Abdelrahman Mohamed - Professional Developer"
                  className="rounded-3xl shadow-2xl w-full h-auto border border-white/20"
                />
              </motion.div>
              
              {/* Floating tech icons */}
              <motion.div
                className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-2xl shadow-2xl flex items-center justify-center backdrop-blur-sm border border-white/20"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-3xl">⚛️</span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl shadow-2xl flex items-center justify-center backdrop-blur-sm border border-white/20"
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-3xl">🚀</span>
              </motion.div>
              
              {/* Additional floating elements */}
              <motion.div
                className="absolute top-1/4 -right-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl shadow-lg flex items-center justify-center backdrop-blur-sm border border-white/20"
                animate={{ 
                  x: [0, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.2 }}
              >
                <span className="text-2xl">💻</span>
              </motion.div>
              
              <motion.div
                className="absolute bottom-1/4 -left-8 w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl shadow-lg flex items-center justify-center backdrop-blur-sm border border-white/20"
                animate={{ 
                  x: [0, -10, 0],
                  rotate: [0, 15, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.2 }}
              >
                <span className="text-2xl">✨</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.button
          onClick={scrollToNext}
          className="flex flex-col items-center text-gray-300 hover:text-teal-400 transition-colors group backdrop-blur-sm bg-white/10 px-6 py-4 rounded-full border border-white/20"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ 
            scale: 1.1,
            backgroundColor: "rgba(20, 184, 166, 0.1)"
          }}
        >
          <span className="text-sm mb-2 group-hover:text-teal-300">Scroll to explore</span>
          <motion.div
            animate={{ 
              y: [0, 5, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={24} className="group-hover:text-teal-300" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  )
}