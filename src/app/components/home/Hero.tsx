'use client';

import { useRef, useEffect } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';

const textVariants = {
  hidden: { y: '100%' },
  visible: {
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.33, 1, 0.68, 1] as const, // Bezier for smooth "snap"
      delay: 0.2,
    },
  },
};

export default function Hero() {
  const container = useRef(null);

  // 1. Scroll Parallax (Moves content down on scroll)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // 2. Mouse Parallax Logic
  // We use useMotionValue to track mouse, then useSpring to smooth it out
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Create smooth springs based on mouse values
  // stiffness = tension, damping = friction (lower damping = more "floaty")
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // Map the smooth mouse values to actual pixel movement for the orbs
  // The negative output range creates the "inverse" movement (parallax)
  const xOrb = useTransform(smoothX, [0, 1], [30, -30]); // Move 30px left/right
  const yOrb = useTransform(smoothY, [0, 1], [30, -30]); // Move 30px up/down

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to 0-1 range
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth);
      mouseY.set(e.clientY / innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={container}
      className='h-screen w-full flex flex-col justify-center items-center relative overflow-hidden bg-[#0B0C10]'
    >
      {/* BACKGROUND ACCENT ORBS (Now animated with Spring Physics) */}
      <motion.div
        style={{ x: xOrb, y: yOrb }} // Bind the spring values here
        className='absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#C5F82A]/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen'
      />

      {/* Second Orb moves in reverse for complexity (multiplied by -1 via transform) */}
      <motion.div
        style={{
          x: useTransform(xOrb, (v) => v * -1.5),
          y: useTransform(yOrb, (v) => v * -1.5),
        }}
        className='absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen'
      />

      {/* MAIN CONTENT */}
      <motion.div
        style={{ y }}
        className='relative z-10 flex flex-col items-center'
      >
        {/* LINE 1: "CREATIVE" */}
        <div className='overflow-hidden'>
          <motion.h1
            className='text-[13vw] leading-[0.8] font-bold font-display tracking-tighter text-[#E0E0E0] mix-blend-difference z-20'
            initial='hidden'
            animate='visible'
            variants={textVariants}
          >
            CREATIVE
          </motion.h1>
        </div>

        {/* LINE 2: "DEVELOPER" */}
        <div className='overflow-hidden'>
          <motion.h1
            className='text-[13vw] leading-[0.8] font-bold font-display tracking-tighter text-transparent z-20'
            style={{ WebkitTextStroke: '1px #E0E0E0' }} // Thinner, cleaner stroke
            initial='hidden'
            animate='visible'
            variants={textVariants}
            transition={{ delay: 0.1 }}
          >
            DEVELOPER
          </motion.h1>
        </div>

        {/* SUBTEXT & CTA */}
        <motion.div
          className='mt-12 flex flex-col md:flex-row items-center gap-8 md:gap-16 z-20'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className='text-sm md:text-base font-light text-[#E0E0E0]/70 max-w-xs text-center md:text-left'>
            Crafting digital experiences with <br />
            <span className='text-[#C5F82A]'>Next.js</span>,{' '}
            <span className='text-white'>Motion</span>, and Design.
          </p>

          <div className='relative group'>
            <MagneticButton
              strength={0.3}
              className='bg-[#E0E0E0] text-[#0B0C10] border-none hover:bg-[#C5F82A] transition-colors'
            >
              See My Work
            </MagneticButton>
          </div>
        </motion.div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        className='absolute bottom-12 flex flex-col items-center gap-2 z-20'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className='text-[10px] uppercase tracking-[0.2em] text-[#E0E0E0]/50'>
          Scroll
        </span>
        <div className='w-[1px] h-16 bg-[#E0E0E0]/20 overflow-hidden relative'>
          <motion.div
            className='absolute top-0 left-0 w-full h-1/2 bg-[#C5F82A]'
            animate={{ top: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
