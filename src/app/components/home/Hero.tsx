'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] },
  },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 md:px-12 w-full py-32 md:py-0">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          {/* Greeting */}
          <motion.p
            variants={item}
            className="font-mono text-accent text-sm md:text-base"
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-[0.95] text-balance"
          >
            Alex Davies.
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            variants={item}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground-muted leading-[1.1] text-balance"
          >
            I build things for the web.
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={item}
            className="max-w-xl text-foreground-muted text-base md:text-lg leading-relaxed mt-2"
          >
            {"I'm a fullstack software engineer based in Germany, specializing in building robust, user-centric web applications. Currently focused on creating scalable products with "}
            <span className="text-accent">React</span>
            {', '}
            <span className="text-accent">Next.js</span>
            {', and '}
            <span className="text-accent">cloud-native architectures</span>
            {'.'}
          </motion.p>

          {/* CTA */}
          <motion.div variants={item} className="mt-6">
            <Link
              href="#projects"
              className="inline-block px-7 py-4 border border-accent text-accent font-mono text-sm rounded hover:bg-accent-muted transition-colors duration-300"
            >
              View My Work
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle background gradient */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
