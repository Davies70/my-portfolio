'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false); // Only show after mouse moves

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener('mousemove', updateMouse);
    return () => window.removeEventListener('mousemove', updateMouse);
  }, [isVisible]);

  // If mouse hasn't moved yet, don't render anything
  if (!isVisible) return null;

  return (
    <motion.div
      className='fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none'
      style={{
        backgroundColor: 'white', // Force white color
        zIndex: 99999 /* Insanely high number to sit on top of everything */,
        mixBlendMode: 'difference' /* Cool effect: inverts colors behind it */,
        x: mousePosition.x - 16, // Center the 32px (w-8) circle
        y: mousePosition.y - 16,
      }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0 }}
    />
  );
}
