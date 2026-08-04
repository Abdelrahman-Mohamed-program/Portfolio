import { ArrowRight, ChevronDown, Sparkles, Code, Rocket, Trophy, Atom } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { HeroImage } from "./figma/OptimizedImage";
import { SectionBackground } from "./ui/SectionBackground";
import { useReduceAnimations } from "../hooks/useMediaQuery";

// Cloudinary optimized URL for hero image - auto format, quality, sized for hero dimensions
const HERO_IMAGE_URL = "https://res.cloudinary.com/dwh6drlr9/image/upload/w_800,h_1000,c_fill,q_auto,f_auto/v1785843811/me--8AWmYK6_gfjrmc.png";

// Remote image component for Cloudinary URLs with blur placeholder
function RemoteHeroImage({ alt }: { alt: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <picture>
      <img
        src={HERO_IMAGE_URL}
        alt={alt}
        loading="eager"
        fetchPriority="high"
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 300ms ease-out',
          objectFit: 'cover',
        }}
        onLoad={() => setIsLoaded(true)}
      />
      {/* Blur placeholder - low quality version */}
      {!isLoaded && (
        <img
          src="https://res.cloudinary.com/dwh6drlr9/image/upload/w_20,h_25,c_fill,q_10,f_auto/v1785843811/me--8AWmYK6_gfjrmc.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'blur(20px)',
            transform: 'scale(1.1)',
            opacity: isLoaded ? 0 : 1,
            transition: 'opacity 300ms ease-out',
            pointerEvents: 'none',
          }}
        />
      )}
    </picture>
  );
}

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const reduceAnimations = useReduceAnimations();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToNext = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <SectionBackground variant="hero" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.span
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500/20 to-purple-500/20 border border-teal-300/30 rounded-full text-teal-300 text-sm mb-6 backdrop-blur-sm"
                  animate={reduceAnimations ? {} : { scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Welcome to my portfolio
                </motion.span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl leading-tight text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.span
                  className="block"
                  animate={reduceAnimations ? {} : {
                    textShadow: [
                      "0 0 20px rgba(20, 184, 166, 0.5)",
                      "0 0 40px rgba(20, 184, 166, 0.8)",
                      "0 0 20px rgba(20, 184, 166, 0.5)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Abdelrahman
                </motion.span>
                <span className="block gradient-text">Mohamed</span>
              </motion.h1>

              <motion.h2
                className="text-2xl md:text-3xl gradient-text-secondary"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.span
                  animate={reduceAnimations ? {} : {
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{
                    background: "linear-gradient(90deg, #14b8a6, #0891b2, #7c3aed, #14b8a6)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Full-Stack Developer & Co-founder
                </motion.span>
              </motion.h2>

              {/* Huawei Competition Badge */}
              <motion.div
                className="flex justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-400/40 rounded-full backdrop-blur-sm"
                  animate={reduceAnimations ? {} : {
                    boxShadow: [
                      "0 0 10px rgba(251, 146, 60, 0.2)",
                      "0 0 20px rgba(251, 146, 60, 0.4)",
                      "0 0 10px rgba(251, 146, 60, 0.2)",
                    ],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <Trophy className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-orange-300 font-medium text-gray-300">
                    Huawei Dev Competition — Top 20, North Africa
                  </span>
                </motion.div>
              </motion.div>

              <motion.p
                className="text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                I transform ideas into powerful, modern web experiences with clean design and creative development.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-xl overflow-hidden shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(20, 184, 166, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                animate={reduceAnimations ? {} : {
                  boxShadow: [
                    "0 0 20px rgba(20, 184, 166, 0.3)",
                    "0 0 40px rgba(20, 184, 166, 0.5)",
                    "0 0 20px rgba(20, 184, 166, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="relative z-10 flex items-center">
                  <Rocket className="mr-3 group-hover:rotate-12 transition-transform" size={20} />
                  View Projects
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={reduceAnimations ? {} : {
                    background: [
                      "linear-gradient(45deg, #14b8a6, #3b82f6)",
                      "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                      "linear-gradient(45deg, #8b5cf6, #14b8a6)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("contact")}
                className="group inline-flex items-center px-8 py-4 border-2 border-teal-400/50 text-teal-300 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(20, 184, 166, 1)",
                  color: "rgba(255, 255, 255, 1)",
                  boxShadow: "0 0 20px rgba(20, 184, 166, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Code className="mr-3 group-hover:rotate-12 transition-transform" size={20} />
                Let's Connect
                <motion.div
                  className="ml-3 w-3 h-3 bg-teal-400 rounded-full"
                  animate={reduceAnimations ? {} : { scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right content - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Animated background glow */}
              {!reduceAnimations && (
                <>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-teal-400/40 via-blue-400/40 to-purple-400/40 rounded-3xl blur-3xl"
                    animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    }}
                  />

                  {/* Secondary glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-l from-pink-400/30 via-cyan-400/30 to-indigo-400/30 rounded-3xl blur-2xl"
                    animate={{ rotate: [360, 0], scale: [0.8, 1.2, 0.8] }}
                    transition={{
                      rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                      scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                    }}
                  />
                </>
              )}

              {/* Main image - using optimized Cloudinary URL */}
              <motion.div
                className="relative z-10"
                whileHover={reduceAnimations ? {} : { scale: 1.05, rotateY: 5, rotateX: 5 }}
                transition={{ duration: 0.3 }}
                style={{ perspective: "1000px" }}
              >
                <RemoteHeroImage alt="Abdelrahman Mohamed - Professional Developer" />
              </motion.div>

              {/* Floating tech icons — reduced from 4 to 2 on mobile */}
              {!reduceAnimations && (
                <>
                  <motion.div
                    className="absolute -top-6 -left-6 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-2xl shadow-2xl flex items-center justify-center backdrop-blur-sm border border-white/20"
                    animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Atom className="text-white text-2xl md:text-3xl" />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-6 -right-6 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl shadow-2xl flex items-center justify-center backdrop-blur-sm border border-white/20"
                    animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Rocket className="text-white text-2xl md:text-3xl" />
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}