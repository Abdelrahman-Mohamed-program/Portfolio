import { ExternalLink, Github, Code, Globe, BarChart3, FolderOpen } from "lucide-react"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { motion } from "motion/react"
import { JSX, useEffect, useRef, useState } from "react"
import travling from "../assets/travling.png"
import social from "../assets/social.png"
import mango from "../assets/mango.png"
const  m360 =  "https://res.cloudinary.com/dwh6drlr9/image/upload/v1779833116/masr360_lpzwy9.jpg";

import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress, 
  SiBootstrap, 
  SiCss3, 
  SiJavascript, 
  SiStripe, 
  SiChartdotjs,
  SiTypescript,
  SiHtml5,
  SiTailwindcss,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiVercel,
  SiNetlify
} from "react-icons/si"
import { Cloud } from "lucide-react"

export function ProjectsSection() {
  
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

  const getTechIcon = (tech: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      "React": <SiReact className="w-4 h-4 text-cyan-400" />,
      "Node.js": <SiNodedotjs className="w-4 h-4 text-green-500" />,
      "MongoDB": <SiMongodb className="w-4 h-4 text-green-600" />,
      "Express": <SiExpress className="w-4 h-4 text-gray-300" />,
      "Bootstrap": <SiBootstrap className="w-4 h-4 text-purple-500" />,
      "CSS3": <SiCss3 className="w-4 h-4 text-blue-500" />,
      "JavaScript": <SiJavascript className="w-4 h-4 text-yellow-400" />,
      "TypeScript": <SiTypescript className="w-4 h-4 text-blue-600" />,
      "HTML5": <SiHtml5 className="w-4 h-4 text-orange-500" />,
      "Stripe API": <SiStripe className="w-4 h-4 text-purple-400" />,
      "Chart.js": <SiChartdotjs className="w-4 h-4 text-pink-400" />,
      "Tailwind CSS": <SiTailwindcss className="w-4 h-4 text-cyan-400" />,
      "Python": <SiPython className="w-4 h-4 text-yellow-500" />,
      "MySQL": <SiMysql className="w-4 h-4 text-blue-600" />,
      "PostgreSQL": <SiPostgresql className="w-4 h-4 text-blue-700" />,
      "Docker": <SiDocker className="w-4 h-4 text-blue-500" />,
      "Git": <SiGit className="w-4 h-4 text-orange-600" />,
      "Vercel": <SiVercel className="w-4 h-4 text-white" />,
      "Netlify": <SiNetlify className="w-4 h-4 text-teal-400" />,
      "Cloud": <Cloud className="w-4 h-4 text-orange-400" />
    }
    return iconMap[tech] || <Code className="w-4 h-4 text-gray-400" />
  }

  const projects = [
    {
      title: "Masr360 — Gamified Tourism Platform",
      description: "As a co-founder and backend developer of a tourism startup, built the backend from scratch and led its core design and development. Delivered scalable APIs, handled authentication and data management, and deployed the system to production. Ranked Top 20 in North Africa at the Spark Infinity Huawei Developer Competition.",
      technologies: ["Node.js", "Express", "MongoDB", "Cloud"],
      live: "https://www.m360travel.com",
      image: m360,
      category: "Full-Stack",
      icon: <Globe className="w-6 h-6" />,
      badge: " Top 20 — Huawei Competition",
      code: null,
      drive: null
    },
    {
      title: "Mango Business Website",
      description: "Delivered a responsive, production-ready website for a mango business client within 72 hours. Enhanced product visibility and customer engagement based on direct client requirements.",
      technologies: ["React", "CSS3", "Bootstrap", "JavaScript"],
      live: "https://amaniango.netlify.app/",
      image: mango,
      category: "Frontend",
      icon: <Code className="w-6 h-6" />,
      badge: null,
      code: null,
      drive: null
    },
    {
      title: "Social Media Dashboard",
      description: "Designed and developed a full-stack dashboard for businesses to track social media performance across multiple platforms with real-time data visualization.",
      technologies: ["React", "Bootstrap", "Node.js", "Express", "MongoDB"],
      image: social,
      code: "https://github.com/Abdelrahman-Mohamed-program/Social-Media-Dashboard",
      drive: "https://drive.google.com/drive/folders/16-5UsMnkd9dz9_7E4Moy8o40s8fb6qj2?hl=ar",
      category: "Full-Stack",
      icon: <BarChart3 className="w-6 h-6" />,
      badge: null,
      live: null
    },
    {
      title: "Travel Booking System",
      description: "Built a complete backend system for a travel platform including user management, destination browsing, booking flow, and secure JWT authentication and authorization.",
      technologies: ["Node.js", "Express", "MongoDB"],
      image: travling,
      code: "https://github.com/Abdelrahman-Mohamed-program/Tavelsta",
      drive: "https://drive.google.com/drive/folders/1L8KGeLd0AHeB02qlRxczXsYVxp24prHw?hl=ar",
      category: "Full-Stack",
      icon: <Globe className="w-6 h-6" />,
      badge: null,
      live: null
    },
  ]

  return (
    <section ref={sectionRef} id="projects" className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-blue-500/5 to-purple-500/5"></div>
      
      {/* Floating elements */}
      <motion.div 
        className="absolute top-16 right-16 w-28 h-28 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
        animate={{ y: [0, -25, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-24 left-16 w-20 h-20 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-full blur-xl"
        animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/3 left-1/4 w-12 h-12 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-lg"
        animate={{ scale: [1, 1.4, 1], y: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-400/30 rounded-full text-teal-300 text-sm mb-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            🚀 Featured Work
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="gradient-text">Projects</span> & <span className="gradient-text-secondary">Creations</span>
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-8 rounded-full shadow-lg shadow-teal-500/30"
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
            Explore my latest projects that demonstrate expertise in modern web development, 
            from responsive frontends to scalable backend solutions.
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/50 via-gray-700/30 to-gray-900/50 rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm border border-gray-600/20"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 + 0.7 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.5), 0 0 30px rgba(20, 184, 166, 0.3)"
              }}
            >
              {/* Image container with overlay */}
              <div className="relative overflow-hidden h-64">
                <ImageWithFallback 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 bg-gray-900/80 backdrop-blur-sm text-teal-300 rounded-full text-sm border border-teal-400/30">
                    {project.icon}
                    <span className="ml-2">{project.category}</span>
                  </span>
                </div>

                {/* Competition badge for Masr360 */}
                {project.badge && (
                  <div className="absolute top-4 right-4">
                    <motion.span 
                      className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-orange-500/80 to-yellow-500/80 backdrop-blur-sm text-white rounded-full text-xs border border-orange-400/50 font-medium"
                      animate={{ 
                        boxShadow: [
                          "0 0 8px rgba(251, 146, 60, 0.4)",
                          "0 0 16px rgba(251, 146, 60, 0.7)",
                          "0 0 8px rgba(251, 146, 60, 0.4)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {project.badge}
                    </motion.span>
                  </div>
                )}
                
                {/* DESKTOP: hidden, appears on hover — original behavior */}
                <motion.div 
                  className="absolute inset-0 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                >
                  <div className="flex space-x-4">
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(20, 184, 166, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="mr-2">Live</span>
                        <ExternalLink size={16} />
                      </motion.a>
                    )}
                    {project.code && (
                      <motion.a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gray-800/80 border border-gray-600 text-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
                        whileHover={{ scale: 1.05, borderColor: "rgb(20, 184, 166)" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="mr-2">Code</span>
                        <Github size={16} />
                      </motion.a>
                    )}
                    {project.drive && (
                      <motion.a
                        href={project.drive}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gray-800/80 border border-gray-600 text-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
                        whileHover={{ scale: 1.05, borderColor: "rgb(250, 204, 21)" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="mr-2">Preview</span>
                        <FolderOpen size={16} />
                      </motion.a>
                    )}
                  </div>
                </motion.div>

                {/* MOBILE: always visible at bottom of image */}
                <div className="absolute bottom-4 left-0 right-0 flex md:hidden items-center justify-center gap-3">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg shadow-lg text-sm">
                      Live <ExternalLink size={14} />
                    </a>
                  )}
                  {project.code && (
                    <a href={project.code} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800/90 border border-gray-600 text-gray-200 rounded-lg shadow-lg text-sm">
                      Code <Github size={14} />
                    </a>
                  )}
                  {project.drive && (
                    <a href={project.drive} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800/90 border border-gray-600 text-gray-200 rounded-lg shadow-lg text-sm">
                      Preview <FolderOpen size={14} />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl text-white mb-4 group-hover:text-teal-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>
                
                {/* Tech stack with icons */}
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex} 
                      className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-gray-700/50 to-gray-600/50 border border-gray-500/30 text-gray-200 rounded-xl text-sm backdrop-blur-sm hover:border-teal-400/50 transition-all duration-300"
                      whileHover={{ 
                        scale: 1.1, 
                        y: -2,
                        boxShadow: "0 4px 12px rgba(20, 184, 166, 0.2)"
                      }}
                    >
                      <span className="mr-2">{getTechIcon(tech)}</span>
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-teal-400/30 transition-all duration-300 pointer-events-none"></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none rounded-2xl"></div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-xl text-gray-300 mb-8">Want to see more of my work?</p>
          <motion.button 
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover-glow border border-gray-600/30"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(20, 184, 166, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={24} className="mr-3 group-hover:rotate-12 transition-transform duration-300" />
            <a href="https://github.com/Abdelrahman-Mohamed-program" target="_blank" rel="noopener noreferrer">Explore My GitHub</a>
            <motion.div
              className="ml-3 w-2 h-2 bg-teal-400 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}