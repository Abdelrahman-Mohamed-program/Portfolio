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
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      text:
        "I'd like to thank Eng. Abdelrahman for designing such a unique and professional website for my mango business. The website turned out beautiful, elegant, and very practical. It made my work much easier and helped a lot in showcasing the products and dealing with customers. Truly professional work and a very pleasant experience. I highly recommend him.",
      author: "Amany.M.",
      role: "Business Owner, Cairo",
      rating: 5,
      image: null
    }
  ]

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "5+",
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
      number: "On-time",
      label: "Production Deployments",
      gradient: "from-orange-500 to-red-600"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-blue-500/10 to-purple-500/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500/20 to-purple-500/20 border border-teal-300/30 rounded-full text-teal-300 text-sm mb-6 backdrop-blur-sm">
            <Quote className="w-4 h-4 mr-2" />
            Client Reviews
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
            What <span className="gradient-text">Clients</span> Say
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        {/* Testimonial */}
        <motion.div
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              className="relative bg-white/10 backdrop-blur-lg p-8 md:p-12 rounded-3xl border border-white/20"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.5 }}
            >
              <Quote className="absolute top-6 left-6 text-teal-400/30" size={50} />

              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                {/* Avatar */}
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-teal-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {getInitials(testimonials[currentTestimonial].author)}
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>

                  <blockquote className="text-gray-200 italic text-lg mb-6">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>

                  <div>
                    <div className="text-xl gradient-text-secondary">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center mt-8 gap-4">
            <button onClick={prevTestimonial}>
              <ChevronLeft className="text-white" />
            </button>
            <button onClick={nextTestimonial}>
              <ChevronRight className="text-white" />
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-gray-800/40 rounded-2xl border border-gray-600/20"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br ${stat.gradient}`}
              >
                {stat.icon}
              </div>

              <div className="text-4xl text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}