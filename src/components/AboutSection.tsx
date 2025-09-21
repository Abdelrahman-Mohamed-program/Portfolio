import { Code, Palette, Brain, Sparkles, Star, Zap } from "lucide-react"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { motion } from "motion/react"
import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: <Code size={28} />,
      title: "Programming",
      description: "Full-stack development with modern technologies",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0
    },
    {
      icon: <Palette size={28} />,
      title: "Design",
      description: "Clean, user-centered design principles",
      gradient: "from-purple-500 to-pink-500",
      delay: 0.1
    },
    {
      icon: <Brain size={28} />,
      title: "Problem Solving",
      description: "Critical thinking and innovative solutions",
      gradient: "from-orange-500 to-red-500",
      delay: 0.2
    }
  ]

  return (
    <section ref={sectionRef} id="about" className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-blue-500/5 to-purple-500/5"></div>
      
      {/* Floating elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-full blur-xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500/20 to-purple-500/20 border border-teal-300/30 rounded-full text-teal-300 text-sm mb-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Star className="w-4 h-4 mr-2" />
            Get to know me
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-teal-400 to-purple-400 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 128 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative w-full max-w-md mx-auto">
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
              
              <motion.div
                className="relative z-10"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5
                }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1593442257276-1895e27c8ed6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBjb2Rpbmd8ZW58MXx8fHwxNzU4Mjg3MzgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern Workspace"
                  className="rounded-3xl shadow-2xl w-full h-auto border border-white/20"
                />
              </motion.div>
              
              {/* Floating icons */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-xl shadow-lg flex items-center justify-center"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="text-white" size={24} />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl shadow-lg flex items-center justify-center"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Zap className="text-white" size={24} />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="space-y-6">
              <motion.p 
                className="text-xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                I am a MERN Stack Developer with strong foundations in computer science and proven experience building full-stack projects. I focus on delivering scalable, secure, and user-friendly applications.
              </motion.p>
              <motion.p 
                className="text-xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                My passion lies in transforming business needs into digital solutions that are both functional and visually compelling. I believe in clean code, intuitive design, and continuous learning.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="group text-center p-6 bg-gradient-to-br from-gray-800/50 via-gray-700/30 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-gray-600/20 hover-tilt"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1.0 + feature.delay }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.5), 0 0 30px rgba(20, 184, 166, 0.3)"
                  }}
                >
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5 
                    }}
                  >
                    <div className="text-white">{feature.icon}</div>
                  </motion.div>
                  <h4 className="text-xl mb-3 text-white group-hover:text-teal-300 transition-colors">{feature.title}</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}