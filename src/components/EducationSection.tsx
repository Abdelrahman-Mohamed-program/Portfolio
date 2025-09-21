import { GraduationCap, Award, BookOpen, Star, Trophy, Sparkles } from "lucide-react"
import { motion } from "motion/react"
import { useEffect, useRef, useState } from "react"

export function EducationSection() {
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

  const educationItems = [
    {
      icon: <GraduationCap size={28} />,
      title: "BSc Computer Science",
      institution: "Ain-Shams University",
      details: "GPA 3.37",
      description: "Relevant coursework: Front-end (HTML, CSS, JS, Bootstrap),DS C++, Java OOP, C++",
      year: "2023-2027",
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-500/20 to-purple-500/20"
    }, {
      icon: <BookOpen size={28} />,
      title: "React Frontend Web Development",
      institution: "DEPI (Digital Egypt Pioneers Initiative)",
      details: "Professional Certificate",
      description: "Advanced training in React, JavaScript, TypeScript, Bootstrap, Git, Node.js & Express",
      year: "2024",
      gradient: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-500/20 to-cyan-500/20"
    },
    {
      icon: <Award size={28} />,
      title: "CS50 - Introduction to Computer Science",
      institution: "Harvard University",
      details: "Online Certificate",
      description: "Comprehensive course covering C, Python, SQL, and Web Development fundamentals",
      year: "2023",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-500/20 to-pink-500/20"
    }
   
  ]

  return (
    <section ref={sectionRef} id="education" className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-blue-500/5 to-purple-500/5"></div>
      
      {/* Floating elements */}
      <motion.div 
        className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-xl"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl"
        animate={{ x: [0, 20, 0], y: [0, -30, 0] }}
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
            <Trophy className="w-4 h-4 mr-2" />
            My Learning Journey
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Education & <span className="gradient-text">Courses</span>
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-teal-400 to-purple-400 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 128 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 via-purple-400 to-pink-400 rounded-full"
            initial={{ height: 0 }}
            animate={isVisible ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 2, delay: 0.6 }}
          />
          
          <div className="space-y-16">
            {educationItems.map((item, index) => (
              <motion.div 
                key={index} 
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
              >
                <div className="flex items-start md:items-center">
                  {/* Timeline icon */}
                  <motion.div 
                    className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center text-white z-10 shadow-lg border-4 border-white/20`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      boxShadow: "0 0 30px rgba(20, 184, 166, 0.6)"
                    }}
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(20, 184, 166, 0.3)",
                        "0 0 40px rgba(139, 92, 246, 0.5)",
                        "0 0 20px rgba(20, 184, 166, 0.3)"
                      ]
                    }}
                    transition={{ 
                      boxShadow: { duration: 3, repeat: Infinity },
                      scale: { duration: 0.3 }
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  
                  <motion.div 
                    className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    transition={{ duration: 0.8, delay: 1.0 + index * 0.2 }}
                    whileHover={{ 
                      scale: 1.02,
                      y: -5
                    }}
                  >
                    <div className={`bg-gradient-to-br from-gray-800/50 via-gray-700/30 to-gray-900/50 backdrop-blur-lg p-8 rounded-3xl border border-gray-600/20 shadow-2xl hover-tilt`}>
                      <div className="flex items-center justify-between mb-6">
                        <motion.span 
                          className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${item.gradient} text-white rounded-full text-sm shadow-lg`}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Star className="w-3 h-3 mr-2" />
                          {item.year}
                        </motion.span>
                      </div>
                      <h3 className="text-2xl mb-3 text-white">{item.title}</h3>
                      <h4 className="text-xl text-teal-300 mb-2">{item.institution}</h4>
                      <p className="text-sm text-gray-300 mb-4 opacity-90">{item.details}</p>
                      <p className="text-gray-200 leading-relaxed">{item.description}</p>
                      
                      {/* Decorative element */}
                      <motion.div 
                        className="absolute top-4 right-4 w-8 h-8 opacity-20"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      >
                        <Sparkles className="w-full h-full text-white" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}