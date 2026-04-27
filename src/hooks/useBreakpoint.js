import { useState, useEffect } from 'react';

export function useBreakpoint() {
  const [w, setW] = useState(() => (typeof window !== 'undefined' ? window.innerWidth : 1440));
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener('resize', h, { passive: true });
    return () => window.removeEventListener('resize', h);
  }, []);
  return { isMobile: w < 768, isTablet: w < 1024, w };
}
