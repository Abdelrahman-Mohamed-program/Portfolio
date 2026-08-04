import { motion } from 'motion/react';
import { useReducedMotion } from 'motion/react';

interface SectionBackgroundProps {
  variant?: 'default' | 'hero' | 'education' | 'skills' | 'services' | 'projects' | 'contact';
  className?: string;
  reducedMotion?: boolean;
}

export function SectionBackground({
  variant = 'default',
  className = '',
  reducedMotion: reducedMotionProp,
}: SectionBackgroundProps) {
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = reducedMotionProp || prefersReducedMotion;

  const baseTransition = { duration: 6, repeat: Infinity, ease: 'easeInOut' as const };
  const slowTransition = { duration: 8, repeat: Infinity, ease: 'easeInOut' as const };
  const verySlowTransition = { duration: 10, repeat: Infinity, ease: 'easeInOut' as const };

  // Static positions for reduced motion
  const staticStyle = { opacity: 0.15 };

  if (reducedMotion) {
    return (
      <div className={`absolute inset-0 ${className}`} aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-blue-500/5 to-purple-500/5" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-teal-400/15 to-blue-400/15 rounded-full blur-xl" style={staticStyle} />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-xl" style={staticStyle} />
      </div>
    );
  }

  const variants = {
    default: (
      <>
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-full blur-xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={baseTransition}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={slowTransition}
        />
      </>
    ),
    hero: (
      <>
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-teal-400/30 to-blue-400/30 rounded-full blur-xl"
          animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-xl"
          animate={{ y: [0, 40, 0], x: [0, -15, 0], scale: [1, 0.8, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl"
          animate={{ rotate: [0, 360], scale: [1, 1.5, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
      </>
    ),
    education: (
      <>
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-xl"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={baseTransition}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl"
          animate={{ x: [0, 20, 0], y: [0, -30, 0] }}
          transition={slowTransition}
        />
      </>
    ),
    skills: (
      <>
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={baseTransition}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={slowTransition}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-teal-400/15 to-purple-400/15 rounded-full blur-lg"
          animate={{ scale: [1, 1.4, 1], y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
      </>
    ),
    services: (
      <>
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-full blur-xl"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={baseTransition}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={slowTransition}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-blue-400/10 to-teal-400/10 rounded-full blur-lg"
          animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
          transition={verySlowTransition}
        />
      </>
    ),
    projects: (
      <>
        <motion.div
          className="absolute top-16 right-16 w-28 h-28 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
          animate={{ y: [0, -25, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-24 left-16 w-20 h-20 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-full blur-xl"
          animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-12 h-12 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-lg"
          animate={{ scale: [1, 1.4, 1], y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
      </>
    ),
    contact: (
      <>
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-full blur-xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={baseTransition}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={slowTransition}
        />
      </>
    ),
  };

  return (
    <div className={`absolute inset-0 ${className}`} aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-blue-500/5 to-purple-500/5" />
      {variants[variant]}
    </div>
  );
}

// Simplified floating element for specific use cases
export function FloatingElement({
  className = '',
  animate = {},
  transition = { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  reducedMotion: reducedMotionProp,
}: {
  className?: string;
  animate?: Record<string, number[]>;
  transition?: { duration: number; repeat: number | boolean; ease: string };
  reducedMotion?: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = reducedMotionProp || prefersReducedMotion;

  if (reducedMotion) {
    return <div className={className} style={{ opacity: 0.3 }} aria-hidden="true" />;
  }

  return (
    <motion.div
      className={className}
      animate={animate}
      transition={transition}
      aria-hidden="true"
    />
  );
}