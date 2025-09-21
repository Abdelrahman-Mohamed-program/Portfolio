import { ExternalLink, Github, Code, Smartphone, Globe, BarChart3, Link } from "lucide-react"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { motion } from "motion/react"
import { JSX, useEffect, useRef, useState } from "react"
import travling from "../assets/travling.png"
import social from "../assets/social.png"
import mango from "../assets/mango.png"
import personal from "../assets/personal.png"
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
      "AWS": <Cloud className="w-4 h-4 text-orange-400" />
    }
    return iconMap[tech] || <Code className="w-4 h-4 text-gray-400" />
  }

  const projects = [
     {
      title: "Mango Business Website",
      description: "Developed a responsive, user-friendly Mango website in just 3 days as requested by the client, enhancing product visibility, boosting customer engagement, and supporting their business needs.",
      technologies: ["React", "CSS3", "Bootstrap", "JavaScript"],
      live:"https://amaniango.netlify.app/",
      image: mango,
      category: "Frontend",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Social Media Dashboard",
      description: "Designed and developed a comprehensive dashboard for businesses to track social media performance across multiple platforms.",
      technologies: ["React", "Bootstrap", "Node.js", "Express", "MongoDB"],
      image: social,
      code:"https://github.com/Abdelrahman-Mohamed-program/Social-Media-Dashboard",

      category: "Full-Stack",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Travling system",
      description: "Developed a backend system for a traveling platform with user management, bookings, destinations, and secure authentication/authorization ",
      technologies: ["Node.js", "Express", "MongoDB"],
      image:travling,
      category: "Full-Stack",
      code:"https://github.com/Abdelrahman-Mohamed-program/Tavelsta",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Productivity Life Planner App",
      description: "Created an intuitive planning tool to help users organize daily tasks, set goals, and track their productivity over time.",
      technologies: ["React","JavaScript","TailwindCss"],
      live:"https://personal-life.netlify.app/",code:"https://github.com/Abdelrahman-Mohamed-program/personal-life",
      image:personal,
      category: "Frontend",
      icon: <Smartphone className="w-6 h-6" />
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
                
                {/* Hover overlay with buttons */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                >
                  <div className="flex space-x-4">
                    {project.live&& <motion.button 
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(20, 184, 166, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                     <span className="mr-2">Live</span>  <a href={project.live}> <ExternalLink size={16} className="mr-2" /></a>
                      
                    </motion.button>}
                   {project.code&&              <motion.button 
                      className="flex items-center px-4 py-2 bg-gray-800/80 border border-gray-600 text-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
                      whileHover={{ scale: 1.05, borderColor: "rgb(20, 184, 166)" }}
                      whileTap={{ scale: 0.95 }}
                 
                    >
                      <span className="mr-2">Code</span> <a href={project.code} className="w-[100%] h-[100%]">     <Github size={16} className="mr-2" /></a>
                 
                          
                    </motion.button>}
      
                  </div>
                </motion.div>
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
            <a href={"https://github.com/Abdelrahman-Mohamed-program"}>Explore My GitHub</a>
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