import { Header } from "./components/Header"
import { HeroSection } from "./components/HeroSection"
import { AboutSection } from "./components/AboutSection"
import { EducationSection } from "./components/EducationSection"
import { SkillsSection } from "./components/SkillsSection"
import { ServicesSection } from "./components/ServicesSection"
import { ProjectsSection } from "./components/ProjectsSection"
import { TestimonialsSection } from "./components/TestimonialsSection"
import { ContactSection } from "./components/ContactSection"
import { motion } from "motion/react"
import { ArrowUp, Heart } from "lucide-react"
import { useState, useEffect } from "react"

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      {/* Scroll to top button */}
      <motion.button
        className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-full shadow-lg hover-glow z-50 ${
          showScrollTop ? 'block' : 'hidden'
        }`}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          y: showScrollTop ? 0 : 100 
        }}
        transition={{ duration: 0.3 }}
      >
        <ArrowUp size={20} className="mx-auto" />
      </motion.button>
      
      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-blue-500/5 to-purple-500/5"></div>
        
        {/* Floating elements */}
        <motion.div 
          className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-full blur-xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-3xl mb-4 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Abdelrahman Mohamed
            </motion.h3>
            
            <motion.p 
              className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              MERN Stack Developer passionate about creating exceptional digital experiences
            </motion.p>
            
            <motion.div 
              className="flex items-center justify-center space-x-2 text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-400 fill-current" />
              </motion.div>
              <span>using React & TypeScript</span>
            </motion.div>
            
            <motion.div 
              className="border-t border-gray-700 pt-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400">
                © 2025 Abdelrahman Mohamed. All rights reserved.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}