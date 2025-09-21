import { Quote, Star, ChevronLeft, ChevronRight, Users, Award, Clock } from "lucide-react"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { motion, AnimatePresence } from "motion/react"
import { useEffect, useRef, useState } from "react"

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
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

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const testimonials = [
    {
      text: "I'd like to thank Eng.Abdelrahman for designing such a unique and professional website for my mango business. The website turned out beautiful, elegant, and very practical. It made my work much easier and helped a lot in showcasing the products and dealing with customers. Truly professional work and a very pleasant experience. I highly recommend him.",
      author: "Mango Business Owner",
      rating: 5,
      role:"",
      image: ""
    }
  ]

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "4+",
      label: "Projects Completed",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "100%", 
      label: "Client Satisfaction",
      gradient: "from-teal-500 to-cyan-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "24/7",
      label: "Support Available", 
      gradient: "from-orange-500 to-red-600"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-blue-500/10 to-purple-500/10"></div>
      
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
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500/20 to-purple-500/20 border border-teal-300/30 rounded-full text-teal-300 text-sm mb-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Quote className="w-4 h-4 mr-2" />
            Client Reviews
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            What <span className="gradient-text">Clients</span> Say
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-teal-400 to-purple-400 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 128 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>
        
        {/* Testimonial slider */}
        <motion.div 
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentTestimonial}
                className="bg-white/10 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl border border-white/20 relative overflow-hidden"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  boxShadow: "0 25px 50px rgba(20, 184, 166, 0.2)"
                }}
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-blue-500/10 to-purple-500/10"></div>
                
                {/* Quote icon */}
                <motion.div 
                  className="absolute top-6 left-6 text-teal-400/30"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Quote size={48} />
                </motion.div>
                
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                  {/* Client image */}
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-teal-400/50 shadow-xl relative">
                      <div className="absolute inset-0 bg-gradient-to-tr from-teal-400/20 to-purple-400/20 rounded-full"></div>
                      <ImageWithFallback 
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].author}
                        className="w-full h-full object-cover relative z-10"
                      />
                    </div>
                  </motion.div>
                  
                  {/* Testimonial content */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Stars */}
                    <motion.div 
                      className="flex justify-center md:justify-start mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
                        >
                          <Star className="text-yellow-400 fill-current mx-1" size={24} />
                        </motion.div>
                      ))}
                    </motion.div>
                    
                    {/* Quote */}
                    <motion.blockquote 
                      className="text-lg md:text-xl text-gray-200 italic mb-8 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      "{testimonials[currentTestimonial].text}"
                    </motion.blockquote>
                    
                    {/* Author */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <cite className="not-italic">
                        <div className="text-xl gradient-text-secondary">
                          {testimonials[currentTestimonial].author}
                        </div>
                        <div className="text-gray-400 mt-1">
                          {testimonials[currentTestimonial].role}
                        </div>
                      </cite>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation buttons */}
            <motion.button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-300 hover:text-teal-400 border border-white/20 transition-all duration-300"
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "rgba(20, 184, 166, 0.2)",
                boxShadow: "0 0 20px rgba(20, 184, 166, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={24} />
            </motion.button>
            
            <motion.button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-300 hover:text-teal-400 border border-white/20 transition-all duration-300"
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "rgba(20, 184, 166, 0.2)",
                boxShadow: "0 0 20px rgba(20, 184, 166, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={24} />
            </motion.button>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-teal-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats section */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center p-8 bg-gradient-to-br from-gray-800/50 via-gray-700/30 to-gray-900/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-600/20 hover-glow"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.5), 0 0 30px rgba(20, 184, 166, 0.3)"
              }}
            >
              <motion.div 
                className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg`}
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {stat.icon}
              </motion.div>
              
              <motion.div 
                className="text-4xl mb-2 gradient-text"
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
              >
                {stat.number}
              </motion.div>
              
              <div className="text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}