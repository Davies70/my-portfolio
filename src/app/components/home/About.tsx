'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { skills } from '@/lib/data';

export default function About() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'start 0.25'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <section
      ref={container}
      id="about"
      className="py-24 md:py-32 relative"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <motion.div style={{ opacity, y }}>
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground whitespace-nowrap">
              <span className="font-mono text-accent text-lg md:text-xl mr-2">
                01.
              </span>
              About Me
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          {/* Content Grid */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-16">
            {/* Text Content */}
            <div className="flex-1 flex flex-col gap-4">
              <p className="text-foreground-muted leading-relaxed">
                {"I'm a fullstack software engineer who enjoys building products that live at the intersection of thoughtful design and solid engineering. My focus is on creating web applications that are fast, accessible, and built to last."}
              </p>
              <p className="text-foreground-muted leading-relaxed">
                {'Over the past few years, I\'ve worked across the stack\u2014from crafting pixel-perfect frontends with '}
                <span className="text-accent">React</span>
                {' and '}
                <span className="text-accent">Next.js</span>
                {' to building serverless backends on '}
                <span className="text-accent">AWS</span>
                {'. I\'ve contributed to '}
                <span className="text-accent">RAG-based AI systems</span>
                {', geolocation platforms, and secure file processing pipelines.'}
              </p>
              <p className="text-foreground-muted leading-relaxed">
                {"Currently based in Germany, I'm looking for opportunities to contribute to ambitious engineering teams building meaningful products."}
              </p>

              {/* Tech Grid */}
              <div className="mt-6">
                <h3 className="text-foreground text-sm font-medium mb-4">
                  Technologies I work with:
                </h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-foreground-muted text-sm"
                    >
                      <span className="text-accent text-xs">{'>'}</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="relative group w-64 h-64 md:w-72 md:h-72 mx-auto md:mx-0">
                {/* Border offset decoration */}
                <div className="absolute inset-0 border-2 border-accent rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
                {/* Image container */}
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-accent/20">
                  <Image
                    src="/images/me.jpg"
                    alt="Alex Davies - Fullstack Engineer"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 768px) 256px, 288px"
                  />
                  {/* Tint overlay */}
                  <div className="absolute inset-0 bg-accent/10 hover:bg-transparent transition-colors duration-300" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
