import { Monitor, Wrench, Palette, Zap, Server, ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import { useEffect, useRef, useState } from "react"

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: <Monitor size={32} />,
      title: "Custom Website Development",
      description: "Responsive, tailored websites built to meet your specific business needs and requirements.",
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50"
    },
    {
      icon: <Server size={32} />,
      title: "Backend & API Development",
      description: "Secure, scalable servers with Node.js & Express, REST APIs, and authentication systems.",
      gradient: "from-teal-500 to-cyan-600",
      bgGradient: "from-teal-50 to-cyan-50"
    },
    {
      icon: <Wrench size={32} />,
      title: "Maintenance & Support",
      description: "Ongoing bug fixes, updates, and compatibility improvements to keep your website running smoothly.",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      icon: <Palette size={32} />,
      title: "Website Redesign & UI Enhancements",
      description: "Modern UI makeovers with smooth animations and improved user experience.",
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50"
    },
    {
      icon: <Zap size={32} />,
      title: "Feature Development",
      description: "Interactive elements, API integrations, and custom functionality to enhance your website.",
      gradient: "from-yellow-500 to-orange-600",
      bgGradient: "from-yellow-50 to-orange-50"
    }
  ]

  return (
    <section ref={sectionRef} id="services" className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-blue-500/5 to-purple-500/5"></div>
      
      {/* Floating elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-full blur-xl"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-blue-400/10 to-teal-400/10 rounded-full blur-lg"
        animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm mb-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            💼 What I Offer
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="gradient-text">Services</span> & <span className="gradient-text-secondary">Solutions</span>
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8 rounded-full shadow-lg shadow-purple-500/30"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 128 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I provide comprehensive web development services to transform your digital vision into reality
            with cutting-edge technology and creative solutions.
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className={`group relative bg-gradient-to-br from-gray-800/50 via-gray-700/30 to-gray-900/50 p-8 rounded-2xl shadow-xl border border-gray-600/20 hover-tilt overflow-hidden backdrop-blur-sm`}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(0,0,0,0.5), 0 0 30px rgba(20, 184, 166, 0.3)",
                rotateY: 5,
                rotateX: 5
              }}
            >
              {/* Animated background gradient */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                {/* Icon container */}
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </motion.div>
                
                <h3 className="text-xl text-white mb-4 group-hover:text-teal-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Arrow indicator */}
                <motion.div 
                  className="flex justify-end mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-teal-300" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="relative bg-gradient-to-br from-teal-500/10 via-blue-500/10 to-purple-500/10 p-12 rounded-3xl border border-gray-600/30 overflow-hidden backdrop-blur-sm">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/10 to-transparent transform -skew-y-3"></div>
            
            {/* Floating elements inside CTA */}
            <motion.div 
              className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-full blur-sm"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <div className="relative z-10">
              <motion.h3 
                className="text-3xl mb-4 gradient-text"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                Ready to Start Your Project?
              </motion.h3>
              
              <motion.p 
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                Let's collaborate to bring your digital vision to life with modern technology and creative solutions.
              </motion.p>
              
              <motion.button 
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-xl hover-glow"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get In Touch</span>
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                <motion.div
                  className="ml-3 w-2 h-2 bg-white rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}