import { Code, Database, Globe, Users, Brain, Settings, GitBranch, Lightbulb, Star, Zap } from "lucide-react"
import { motion } from "motion/react"
import { JSX, useEffect, useRef, useState } from "react"
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress, 
  SiBootstrap, 
  SiCss3, 
  SiJavascript, 
  SiTypescript,
  SiHtml5,
  SiPython,
  SiCplusplus,
  SiGit,SiTailwindcss
} from "react-icons/si"

export function SkillsSection() {
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

  const webDevSkills = [
    { name: "React", level: 90, color: "from-blue-400 to-cyan-400", icon: <SiReact className="w-4 h-4 text-cyan-400" /> },
    { name: "Node.js", level: 85, color: "from-green-400 to-emerald-400", icon: <SiNodedotjs className="w-4 h-4 text-green-500" /> },
    { name: "Express", level: 85, color: "from-gray-400 to-gray-600", icon: <SiExpress className="w-4 h-4 text-gray-300" /> },
    { name: "MongoDB", level: 80, color: "from-green-500 to-green-700", icon: <SiMongodb className="w-4 h-4 text-green-600" /> },
    { name: "JavaScript (ES6+)", level: 90, color: "from-yellow-400 to-orange-400", icon: <SiJavascript className="w-4 h-4 text-yellow-400" /> }, { name: "tailwind", level: 85, color: "from-purple-600 to-indigo-600", icon: <SiTailwindcss className="w-4 h-4 text-blue-500" /> },
    { name: "TypeScript", level: 65, color: "from-blue-600 to-blue-800", icon: <SiTypescript className="w-4 h-4 text-blue-600" /> },
    { name: "HTML5", level: 90, color: "from-orange-500 to-red-500", icon: <SiHtml5 className="w-4 h-4 text-orange-500" /> },
    { name: "CSS3", level: 90, color: "from-blue-500 to-purple-500", icon: <SiCss3 className="w-4 h-4 text-blue-500" /> },
    { name: "Bootstrap", level: 85, color: "from-purple-600 to-indigo-600", icon: <SiBootstrap className="w-4 h-4 text-purple-500" /> }
  ]

  const programmingLanguages = [
    { name: "C++", level: 90, color: "from-blue-700 to-purple-700", icon: <SiCplusplus className="w-4 h-4 text-blue-600" /> },
    { name: "Python", level: 50, color: "from-green-400 to-blue-500", icon: <SiPython className="w-4 h-4 text-yellow-500" /> },,
    { name: "Java", level: 70, color: "from-red-500 to-orange-600", icon: <Code className="w-4 h-4 text-red-500" /> },
    { name: "C#", level: 50, color: "from-purple-600 to-indigo-700", icon: <Code className="w-4 h-4 text-purple-600" /> }
  ]

  const tools = [
    { name: "Git", icon: <SiGit size={24} />, gradient: "from-orange-500 to-red-500" },
    { name: "GitHub", icon: <Globe size={24} />, gradient: "from-gray-700 to-black" },
    { name: "VS Code", icon: <Code size={24} />, gradient: "from-blue-500 to-purple-500" },
    { name: "MongoDB Compass", icon: <SiMongodb size={24} />, gradient: "from-green-500 to-emerald-600" }
  ]

  const softSkills = [
    { name: "Teamwork", icon: <Users size={24} />, gradient: "from-pink-500 to-rose-500" },
    { name: "Self-learning", icon: <Brain size={24} />, gradient: "from-purple-500 to-indigo-500" },
    { name: "Troubleshooting", icon: <Settings size={24} />, gradient: "from-cyan-500 to-blue-500" },
    { name: "Critical Thinking", icon: <Lightbulb size={24} />, gradient: "from-yellow-500 to-orange-500" }
  ]

  const SkillBar = ({ name, level, color, delay, icon }: { name: string; level: number; color: string; delay: number; icon?: JSX.Element }) => (
    <motion.div 
      className="mb-6"
      initial={{ opacity: 0, x: -30 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex justify-between mb-3">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-white">{name}</span>
        </div>
        <span className="text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-3 backdrop-blur-sm">
        <motion.div 
          className={`bg-gradient-to-r ${color} h-3 rounded-full relative overflow-hidden`}
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-white/20"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>
    </motion.div>
  )

  return (
    <section ref={sectionRef} id="skills" className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-blue-500/5 to-purple-500/5"></div>
      
      {/* Floating elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-teal-400/15 to-purple-400/15 rounded-full blur-lg"
        animate={{ scale: [1, 1.4, 1], y: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
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
            <Zap className="w-4 h-4 mr-2" />
            My Technical Arsenal
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="gradient-text">Skills</span> & <span className="gradient-text-secondary">Expertise</span>
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-teal-400 to-purple-400 mx-auto mb-8 rounded-full shadow-lg shadow-teal-400/30"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 128 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A comprehensive skill set covering modern web development technologies, 
            programming languages, and essential soft skills for collaborative success.
          </motion.p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Web Development Skills */}
          <motion.div 
            className="bg-gradient-to-br from-gray-800/50 via-gray-700/30 to-gray-900/50 backdrop-blur-lg p-8 rounded-3xl border border-gray-600/20 shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(0,0,0,0.5), 0 0 30px rgba(20, 184, 166, 0.3)"
            }}
          >
            <div className="flex items-center mb-8">
              <motion.div 
                className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Globe className="text-white" size={28} />
              </motion.div>
              <h3 className="text-2xl text-white">Web Development</h3>
            </div>
            <div className="space-y-2">
              {webDevSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} color={skill.color} delay={0.8 + index * 0.1} icon={skill.icon} />
              ))}
            </div>
          </motion.div>

          {/* Programming Languages */}
          <motion.div 
            className="bg-gradient-to-br from-gray-800/50 via-gray-700/30 to-gray-900/50 backdrop-blur-lg p-8 rounded-3xl border border-gray-600/20 shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(0,0,0,0.5), 0 0 30px rgba(139, 92, 246, 0.3)"
            }}
          >
            <div className="flex items-center mb-8">
              <motion.div 
                className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Code className="text-white" size={28} />
              </motion.div>
              <h3 className="text-2xl text-white">Programming Languages</h3>
            </div>
            <div className="space-y-2">
              {programmingLanguages.map((skill, index) => (
                skill&&
                <SkillBar key={index} name={skill.name} level={skill.level} color={skill.color} delay={1.0 + index * 0.1} icon={skill.icon} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tools & Soft Skills */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-gradient-to-br from-gray-800/50 via-gray-700/30 to-gray-900/50 backdrop-blur-lg p-8 rounded-3xl border border-gray-600/20 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(0,0,0,0.5), 0 0 30px rgba(59, 130, 246, 0.3)"
            }}
          >
            <h3 className="text-2xl mb-8 text-white">Tools & Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <motion.div 
                  key={index} 
                  className="group flex items-center p-4 bg-gray-700/30 rounded-xl border border-gray-600/20 hover:bg-gray-600/30 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5
                  }}
                >
                  <motion.div 
                    className={`w-10 h-10 bg-gradient-to-r ${tool.gradient} rounded-lg flex items-center justify-center mr-3 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <div className="text-white">{tool.icon}</div>
                  </motion.div>
                  <span className="text-white group-hover:text-teal-300 transition-colors">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-gray-800/50 via-gray-700/30 to-gray-900/50 backdrop-blur-lg p-8 rounded-3xl border border-gray-600/20 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(0,0,0,0.5), 0 0 30px rgba(236, 72, 153, 0.3)"
            }}
          >
            <h3 className="text-2xl mb-8 text-white">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="group flex items-center p-4 bg-gray-700/30 rounded-xl border border-gray-600/20 hover:bg-gray-600/30 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5
                  }}
                >
                  <motion.div 
                    className={`w-10 h-10 bg-gradient-to-r ${skill.gradient} rounded-lg flex items-center justify-center mr-3 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <div className="text-white">{skill.icon}</div>
                  </motion.div>
                  <span className="text-white group-hover:text-teal-300 transition-colors">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}