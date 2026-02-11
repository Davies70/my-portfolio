// src/components/ProjectCard.tsx
'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function ProjectCard({ project, index, range, targetScale }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={container}
      className='h-screen flex items-center justify-center sticky top-0'
    >
      <motion.div
        style={{ scale, top: `calc(-5vh + ${index * 25}px)` }}
        className='w-[1000px] h-[500px] bg-[#1a1a1a] rounded-3xl border border-white/10 relative p-10 transform-gpu origin-top'
      >
        <h2 className='text-4xl font-bold text-white mb-4'>{project.title}</h2>
        {/* Project content/image here */}
      </motion.div>
    </div>
  );
}
