'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';

export default function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });

  // Parallax Effect: The footer moves slightly slower than the scroll
  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  // Dynamic Time Logic
  const [time, setTime] = useState('');

  useEffect(() => {
    // Update time every second
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone: 'Europe/London', // Change to your timezone
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      ref={container}
      className='relative h-[800px] bg-[#0B0C10] flex flex-col items-center justify-center overflow-hidden'
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className='relative h-[calc(100vh+800px)] -top-[100vh]'>
        <motion.div
          style={{ y }}
          className='h-[800px] sticky top-[calc(100vh-800px)] px-12 flex flex-col justify-between py-20'
        >
          {/* TOP SECTION: CTA */}
          <div className='flex flex-col items-center justify-center flex-grow gap-10'>
            <h2 className='text-[12vw] leading-[0.8] font-bold font-display text-center text-[#E0E0E0]'>
              LET`S <br /> TALK
            </h2>

            <div className='relative z-20'>
              <Link href='mailto:hello@alexdavies.com'>
                <MagneticButton
                  strength={0.3}
                  className='w-48 h-48 rounded-full bg-[#C5F82A] text-[#0B0C10] border-none flex items-center justify-center text-xl font-bold hover:scale-110 transition-transform duration-500'
                >
                  Email Me
                </MagneticButton>
              </Link>
            </div>
          </div>

          {/* BOTTOM SECTION: INFO */}
          <div className='flex flex-col md:flex-row justify-between items-end w-full border-t border-[#E0E0E0]/20 pt-10 mt-20'>
            {/* Socials */}
            <div className='flex flex-col gap-4'>
              <h3 className='uppercase tracking-widest text-xs text-[#E0E0E0]/50'>
                Socials
              </h3>
              <div className='flex gap-6'>
                {['LinkedIn', 'GitHub', 'Instagram', 'Twitter'].map(
                  (social, i) => (
                    <Link
                      key={i}
                      href='#'
                      className='text-[#E0E0E0] hover:text-[#C5F82A] transition-colors text-sm uppercase tracking-wider relative group'
                    >
                      {social}
                      <span className='absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C5F82A] transition-all group-hover:w-full' />
                    </Link>
                  ),
                )}
              </div>
            </div>

            {/* Time & Location */}
            <div className='flex flex-col gap-4 text-right mt-10 md:mt-0'>
              <h3 className='uppercase tracking-widest text-xs text-[#E0E0E0]/50'>
                Location & Time
              </h3>
              <p className='text-[#E0E0E0] text-sm font-medium'>
                London, UK <br />
                <span className='text-[#C5F82A]'>{time} GMT</span>
              </p>
            </div>

            {/* Copyright */}
            <div className='flex flex-col gap-4 text-right hidden md:flex'>
              <h3 className='uppercase tracking-widest text-xs text-[#E0E0E0]/50'>
                Version
              </h3>
              <p className='text-[#E0E0E0]/40 text-sm'>2025 © Edition</p>
            </div>
          </div>

          {/* BACKGROUND DECORATION */}
          <div className='absolute bottom-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]'>
            <div className='absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#C5F82A]/5 rounded-full blur-[100px]' />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
