// src/components/Hero.tsx
'use client';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { y: '100%' },
  visible: { y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }, // Bezier for "snap" feel
};

export default function Hero() {
  return (
    <section className='h-screen flex flex-col justify-center px-10 bg-[#0B0C10] text-[#E0E0E0]'>
      <div className='overflow-hidden'>
        {' '}
        {/* The Mask */}
        <motion.h1
          className='text-[10vw] font-bold leading-none font-clash'
          initial='hidden'
          animate='visible'
          variants={textVariants}
        >
          CREATIVE
        </motion.h1>
      </div>
      <div className='overflow-hidden'>
        <motion.h1
          className='text-[10vw] font-bold leading-none text-[#C5F82A]'
          initial='hidden'
          animate='visible'
          variants={textVariants}
          transition={{ delay: 0.1 }}
        >
          DEVELOPER
        </motion.h1>
      </div>
    </section>
  );
}
