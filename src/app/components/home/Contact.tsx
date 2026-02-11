'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';
import Link from 'next/link';

export default function Contact() {
  const container = useRef(null);

  // Parallax Effect: The background moves slightly slower than the text
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  return (
    <motion.section
      ref={container}
      className='relative z-10 w-full bg-[#0B0C10] pt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* CURVED TOP EDGE DECORATION */}
      <div className='w-full h-[100px] bg-[#0B0C10] rounded-t-[100%] absolute -top-[50px] left-0 z-0 pointer-events-none' />

      <div className='container mx-auto px-6 md:px-20 py-20 md:py-32 flex flex-col items-center justify-center relative z-10'>
        {/* HEADER */}
        <div className='flex flex-col items-center gap-6 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='flex items-center gap-3'
          >
            <span className='w-2 h-2 bg-[#C5F82A] rounded-full animate-pulse' />
            <span className='text-[#E0E0E0]/60 uppercase tracking-[0.2em] text-xs font-medium'>
              What`s Next?
            </span>
          </motion.div>

          <h2 className='text-[10vw] md:text-[8vw] leading-[0.85] font-bold font-display text-[#E0E0E0] mb-10'>
            LET`S WORK <br /> <span className='text-[#C5F82A]'>TOGETHER</span>
          </h2>
        </div>

        {/* MAGNETIC BUTTON CTA */}
        <div className='relative z-20 my-10'>
          <Link href='mailto:hello@alexdavies.com'>
            <MagneticButton
              strength={0.4}
              className='w-48 h-48 md:w-64 md:h-64 rounded-full bg-[#C5F82A] text-[#0B0C10] border-none flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-500'
            >
              <span className='text-xl md:text-2xl font-bold'>
                Get in Touch
              </span>
              <span className='text-xs uppercase tracking-widest opacity-60'>
                hello@alexdavies.com
              </span>
            </MagneticButton>
          </Link>
        </div>

        {/* FOOTER LINKS */}
        <div className='w-full border-t border-[#E0E0E0]/10 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-8'>
          {/* Socials */}
          <div className='flex gap-8'>
            {['LinkedIn', 'GitHub', 'Twitter', 'Instagram'].map((social, i) => (
              <Link
                key={i}
                href='#'
                className='text-[#E0E0E0]/60 hover:text-white transition-colors uppercase text-xs tracking-[0.2em] relative group'
              >
                {social}
                <span className='absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C5F82A] transition-all duration-300 group-hover:w-full' />
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className='text-[#E0E0E0]/40 text-xs uppercase tracking-widest text-center md:text-right'>
            <p>Designed & Built by Alex Davies</p>
            <p className='mt-1'>© 2025 All Rights Reserved</p>
          </div>
        </div>
      </div>

      {/* BACKGROUND GRADIENT */}
      <div className='absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#C5F82A]/5 to-transparent pointer-events-none' />
    </motion.section>
  );
}
