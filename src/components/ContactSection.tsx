import { Phone, Mail, MapPin, Linkedin, Send, CheckCircle, Star, Zap } from "lucide-react"
import { motion } from "motion/react"
import { Server } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import emailjs from "@emailjs/browser";
export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
        emailjs
      .send(
        "service_yzqs24s", // replace with your EmailJS service ID
        "template_k36yfsg", // replace with your EmailJS template ID
        formData,
        "q_25ZpYd9FwJarE9j" // replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
           setIsSubmitted(true)     
            setTimeout(() => {
         setFormData({ name: '', email: '', message: '' })
      setIsSubmitted(false)
    }, 3000)
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
          // Reset form
      

  
  }

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+201010723784",
      href: "tel:+201010723784",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "abdelarahman2022@gmail.com",
      href: "mailto:abdelarahman2022@gmail.com",
      gradient: "from-teal-500 to-cyan-600"
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Cairo, Egypt",
      href: "#",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/abdelarahman-mohamed",
      href: "https://linkedin.com/in/abdelarahman-mohamed",
      gradient: "from-indigo-500 to-purple-600"
    }
  ]


const benefits = [
  {
    icon: <CheckCircle className="w-5 h-5" />,
    text: "Clean, documented, maintainable code"
  },
  {
    icon: <Server className="w-5 h-5" />,
    text: "Production-ready backend systems"
  },
  {
    icon: <Star className="w-5 h-5" />,
    text: "Responsive, mobile-first design"
  },
  {
    icon: <Zap className="w-5 h-5" />,
    text: "Fast communication, delivery & ongoing support"
  }
]
 

  return (
    <section ref={sectionRef} id="contact" className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
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
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-gradient-to-r from-teal-500/20 to-purple-500/20 border border-teal-300/30 rounded-full text-teal-300 text-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            📧 Let's Connect
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Let's Build Something <span className="gradient-text">Great</span> Together
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-teal-400 to-purple-400 mx-auto mb-8 rounded-full"
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
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </motion.p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div>
              <h3 className="text-3xl mb-6 text-white">Get In Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                I'm always interested in new opportunities and exciting projects. Whether you have a specific idea in mind or just want to chat about possibilities, feel free to reach out.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index} 
                  className="group flex items-center"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center mr-6 shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="text-white">{info.icon}</div>
                  </motion.div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                    {info.href.startsWith('http') || info.href.startsWith('mailto') || info.href.startsWith('tel') ? (
                      <a href={info.href} className="text-lg text-white hover:text-teal-400 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-lg text-white">{info.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h4 className="text-xl mb-6 text-white">Why Choose Me?</h4>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center text-gray-300 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="text-teal-400 mr-4 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <span className="group-hover:text-white transition-colors duration-300">
                      {benefit.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="bg-gradient-to-br from-gray-800/50 via-gray-700/30 to-gray-900/50 backdrop-blur-lg p-8 rounded-3xl border border-gray-600/20 shadow-2xl">
              <h3 className="text-3xl mb-8 text-white">Send Message</h3>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-3 text-gray-300">
                      Full Name
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-teal-400 focus:bg-white/10 outline-none transition-all duration-300 ${
                        focusedField === 'name' ? 'shadow-lg shadow-teal-500/20' : ''
                      }`}
                      placeholder="Enter your full name"
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm mb-3 text-gray-300">
                      Email Address
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-teal-400 focus:bg-white/10 outline-none transition-all duration-300 ${
                        focusedField === 'email' ? 'shadow-lg shadow-teal-500/20' : ''
                      }`}
                      placeholder="Enter your email"
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm mb-3 text-gray-300">
                      Message
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={5}
                      className={`w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-teal-400 focus:bg-white/10 outline-none transition-all duration-300 resize-none ${
                        focusedField === 'message' ? 'shadow-lg shadow-teal-500/20' : ''
                      }`}
                      placeholder="Tell me about your project..."
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-xl hover-glow relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center">
                      Send Message
                      <Send className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </motion.button>
                </form>
              ) : (
                <motion.div 
                  className="text-center py-12"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-r from-teal-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-6"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1, repeat: 2 }}
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  <h4 className="text-2xl text-white mb-4">Thank You!</h4>
                  <p className="text-gray-300">Your message has been sent successfully. I'll get back to you soon!</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}