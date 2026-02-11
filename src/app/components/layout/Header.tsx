'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';

const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // 1. Scroll Logic: Hide on scroll down, Show on scroll up
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Set "scrolled" state for style changes (blur/opacity)
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Hide header if scrolling down more than 150px
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className={`
        fixed top-0 left-0 w-full z-[100] 
        transition-all duration-300 ease-in-out
        ${scrolled ? 'py-4 bg-[#0B0C10]/80 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'}
      `}
    >
      <div className='container mx-auto px-6 md:px-12 flex items-center justify-between'>
        {/* LOGO AREA */}
        <Link href='/' className='relative z-10 group'>
          <div className='flex flex-col leading-none'>
            <span className='font-display font-bold text-xl md:text-2xl text-[#E0E0E0] group-hover:text-[#C5F82A] transition-colors'>
              DAVIES
            </span>
            <span className='text-[10px] uppercase tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors'>
              Portfolio
            </span>
          </div>
        </Link>

        {/* NAVIGATION (Desktop) */}
        <nav className='hidden md:flex items-center gap-8'>
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className='relative text-sm font-medium uppercase tracking-widest text-[#E0E0E0]/80 hover:text-white transition-colors group'
            >
              {link.name}
              {/* Animated Underline */}
              <span className='absolute left-0 -bottom-1 w-0 h-[1px] bg-[#C5F82A] transition-all duration-300 group-hover:w-full' />
            </Link>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <div className='flex items-center gap-4'>
          <Link href='mailto:your.email@example.com'>
            <MagneticButton
              strength={0.2}
              className={`
                hidden md:block 
                ${scrolled ? 'py-3 px-6 text-[10px]' : 'py-4 px-8 text-xs'}
              `}
            >
              Let`s Talk
            </MagneticButton>
          </Link>

          {/* MOBILE MENU TOGGLE (Visual Only - Logic needed for full menu) */}
          <button className='md:hidden flex flex-col gap-1.5 group p-2'>
            <span className='w-6 h-[2px] bg-white group-hover:bg-[#C5F82A] transition-colors' />
            <span className='w-4 h-[2px] bg-white group-hover:bg-[#C5F82A] transition-colors group-hover:w-6' />
            <span className='w-6 h-[2px] bg-white group-hover:bg-[#C5F82A] transition-colors' />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
