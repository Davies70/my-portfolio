'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number; // How "strong" the magnetic pull is (higher = pulls further)
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  strength = 0.5, // Default strength
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;

    // 1. Get the button's position and dimensions
    const { height, width, left, top } =
      ref.current?.getBoundingClientRect() || {
        height: 0,
        width: 0,
        left: 0,
        top: 0,
      };

    // 2. Calculate the center of the button
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    // 3. Update position (multiplied by strength factor)
    setPosition({ x: middleX * strength, y: middleY * strength });
  };

  const handleMouseLeave = () => {
    // 4. Snap back to center when mouse leaves
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
      whileTap={{ scale: 0.9 }} // Subtle press effect
      className={`
        relative px-8 py-4 rounded-full 
        border border-[rgba(255,255,255,0.1)] 
        bg-[#1a1a1a] text-white 
        uppercase tracking-widest text-xs font-bold
        overflow-hidden group
        hover:border-[#C5F82A] hover:text-[#C5F82A]
        transition-colors duration-300
        ${className}
      `}
    >
      {/* Optional: Add a subtle glow or fill effect on hover here */}
      <span className='relative z-10 pointer-events-none'>{children}</span>
    </motion.button>
  );
}
