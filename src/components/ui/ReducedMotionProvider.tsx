import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useReducedMotion as useMotionReducedMotion } from 'motion/react';

interface ReducedMotionContextType {
  reducedMotion: boolean;
}

const ReducedMotionContext = createContext<ReducedMotionContextType>({
  reducedMotion: false,
});

export function ReducedMotionProvider({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useMotionReducedMotion();
  const [reducedMotion, setReducedMotion] = useState(prefersReducedMotion);

  useEffect(() => {
    // Listen for changes to the preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <ReducedMotionContext.Provider value={{ reducedMotion }}>
      {children}
    </ReducedMotionContext.Provider>
  );
}

export function useReducedMotion(): boolean {
  const context = useContext(ReducedMotionContext);
  if (!context) {
    // Fallback if not wrapped in provider
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  }
  return context.reducedMotion;
}