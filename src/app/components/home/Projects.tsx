'use client';

import { useRef } from 'react';
import { projects } from '@/lib/data'; // Ensure this path matches your file structure
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// --- SUB-COMPONENT: INDIVIDUAL CARD ---
interface CardProps {
  project: (typeof projects)[0];
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card = ({ project, i, progress, range, targetScale }: CardProps) => {
  const container = useRef(null);

  // Logic:
  // We map the GLOBAL scroll progress of the section to the LOCAL scale of this card.
  // As the user scrolls past this card, it scales down from 1 -> targetScale.
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='h-screen flex items-center justify-center sticky top-0'
    >
      <motion.div
        style={{
          scale,
          backgroundColor: project.color, // Uses the colors we defined in data.ts
          top: `calc(-5vh + ${i * 25}px)`, // Stacking offset so you see the cards behind
        }}
        className='relative flex flex-col w-[90vw] md:w-[1000px] h-[65vh] md:h-[600px] rounded-[30px] p-8 md:p-12 origin-top border border-white/10 shadow-2xl overflow-hidden will-change-transform'
      >
        {/* TOP ROW: Title & Links */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 z-20'>
          <h2 className='text-3xl md:text-5xl font-bold font-display text-white mix-blend-difference'>
            {project.title}
          </h2>

          <div className='flex items-center gap-4'>
            {project.link && (
              <Link
                href={project.link}
                target='_blank'
                className='flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full text-xs font-bold uppercase tracking-widest text-white transition-all border border-white/10'
              >
                Visit
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1 11L11 1M11 1H1M11 1V11'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                target='_blank'
                className='flex items-center gap-2 px-5 py-2 bg-[#0B0C10] hover:bg-[#1a1a1a] rounded-full text-xs font-bold uppercase tracking-widest text-white transition-all border border-white/10'
              >
                GitHub
              </Link>
            )}
          </div>
        </div>

        {/* MIDDLE: Description & Tech */}
        <div className='flex flex-col gap-6 z-20 max-w-lg'>
          <p className='text-white/90 text-base md:text-lg font-light leading-relaxed drop-shadow-md'>
            {project.description}
          </p>

          <ul className='flex flex-wrap gap-2'>
            {project.tech.map((t, idx) => (
              <li
                key={idx}
                className='px-3 py-1 bg-black/20 backdrop-blur-sm rounded-md text-[10px] uppercase tracking-wider text-white/80 border border-white/5'
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* IMAGE: Absolute Positioned (Bleeds to edges) */}
        <div className='absolute top-20 md:top-0 right-0 h-[300px] md:h-full w-full md:w-[60%] overflow-hidden rounded-tl-[30px] md:rounded-l-[30px] md:rounded-tr-none border-t md:border-l border-white/10 mt-10 md:mt-0 bg-black'>
          <motion.div className='w-full h-full relative grayscale-[20%] hover:grayscale-0 transition-all duration-500'>
            <Image
              fill
              src={project.src}
              alt={project.title}
              className='object-cover object-left-top hover:scale-105 transition-transform duration-700'
              sizes='(max-width: 768px) 100vw, 60vw'
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

// --- MAIN COMPONENT ---
export default function Projects() {
  const container = useRef(null);

  // Track scroll progress of the ENTIRE Projects section
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      ref={container}
      id='work'
      className='relative mt-[20vh] mb-[20vh] px-4 md:px-0'
    >
      {/* SECTION HEADER */}
      <div className='container mx-auto px-6 md:px-20 mb-20 flex flex-col gap-4'>
        <div className='flex items-center gap-4'>
          <span className='w-3 h-3 bg-[#C5F82A] rounded-full animate-pulse' />
          <span className='text-[#E0E0E0]/60 uppercase tracking-widest text-xs'>
            Selected Works
          </span>
        </div>
        <h2 className='text-5xl md:text-7xl font-display font-bold text-[#E0E0E0]'>
          RECENT <br />{' '}
          <span
            className='text-transparent'
            style={{ WebkitTextStroke: '1px #C5F82A' }}
          >
            CASES
          </span>
        </h2>
      </div>

      {/* PROJECTS LOOP */}
      <div className='flex flex-col gap-0 w-full'>
        {projects.map((project, i) => {
          // Calculate the "Stacking Scale"
          // The first card scales down the most, the last card stays size 1.
          const targetScale = 1 - (projects.length - i) * 0.05;

          return (
            <Card
              key={i}
              i={i}
              project={project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}
