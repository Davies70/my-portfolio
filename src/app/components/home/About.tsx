'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
  const container = useRef(null);

  // 1. Scroll Progress Logic
  // We track when the container enters the viewport
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'start 0.25'],
  });

  // 2. Animations based on Scroll
  // As you scroll down, the opacity goes 0 -> 1
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  // As you scroll down, the text moves up 50px -> 0px (Parallax lift)
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <section
      ref={container}
      className='min-h-[80vh] flex items-center justify-center px-6 md:px-20 py-24 relative z-10 bg-[#0B0C10]'
    >
      <motion.div style={{ opacity, y }} className='max-w-5xl w-full'>
        {/* BIG INTRO TEXT */}
        <h2 className='text-3xl md:text-5xl font-light leading-tight text-[#E0E0E0] mb-20'>
          I’m <span className='text-[#C5F82A] font-medium'>Alex Davies</span>, a
          software engineer who bridges the gap between
          <span className='italic font-serif opacity-70 px-2'>
            robust backend logic
          </span>{' '}
          and
          <span className='italic font-serif opacity-70 px-2'>
            fluid frontend motion
          </span>
          .
        </h2>

        {/* DETAILS GRID */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-[#E0E0E0]/20 pt-10'>
          {/* COLUMN 1: THE STACK */}
          <div className='flex flex-col gap-6'>
            <h3 className='uppercase tracking-[0.2em] text-xs text-[#E0E0E0]/50 font-medium'>
              The Stack
            </h3>
            <p className='text-lg md:text-xl text-[#E0E0E0]/80 font-light leading-relaxed'>
              Currently obsessed with the <strong>Next.js</strong> ecosystem. I
              build scalable applications using <strong>TypeScript</strong>,{' '}
              <strong>Tailwind</strong>, and <strong>AWS Serverless</strong>{' '}
              architecture.
            </p>

            {/* Tech Tags */}
            <div className='flex flex-wrap gap-2 mt-2'>
              {[
                'Next.js 14',
                'React',
                'TypeScript',
                'Tailwind CSS',
                'Python',
                'Node.js',
                'AWS',
                'Framer Motion',
                'PostgreSQL',
              ].map((tech, i) => (
                <span
                  key={i}
                  className='px-4 py-2 rounded-full border border-[#E0E0E0]/10 text-xs text-[#E0E0E0]/60 hover:border-[#C5F82A]/50 hover:text-[#C5F82A] transition-colors cursor-default'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* COLUMN 2: THE GOAL */}
          <div className='flex flex-col gap-6'>
            <h3 className='uppercase tracking-[0.2em] text-xs text-[#E0E0E0]/50 font-medium'>
              The Methodology
            </h3>
            <p className='text-lg md:text-xl text-[#E0E0E0]/80 font-light leading-relaxed'>
              I don`t just write code; I craft <strong>digital products</strong>
              . My focus is on performance, accessibility, and creating user
              interfaces that feel `alive`` through micro-interactions and
              smooth transitions.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
