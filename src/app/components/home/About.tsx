'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
    <section ref={container} id="about" className="py-32 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div style={{ opacity, y }}>
          {/* Section Label */}
          <div className="mb-16">
            <h2 className="text-[13px] font-mono text-foreground-muted mb-2">
              Information
            </h2>
            <div className="h-px w-full bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            {/* Bio */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
                Building interfaces,
                <br />
                solving problems.
              </h3>
              <div className="space-y-4 text-foreground-muted leading-relaxed text-[15px]">
                <p>
                  I'm a fullstack software engineer with a passion for creating robust,
                  scalable web applications. My expertise spans the entire development
                  lifecycle, from initial architecture to deployment and maintenance.
                </p>
                <p>
                  With experience in both startup and enterprise environments, I've
                  contributed to projects ranging from fintech platforms to e-commerce
                  solutions. I thrive in collaborative settings and enjoy mentoring
                  junior developers.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies,
                  contributing to open source, or cycling through the German countryside.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-xl font-display font-bold text-foreground mb-6">
                Technologies I work with
              </h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="text-[13px] text-foreground-muted font-mono flex items-center gap-2"
                  >
                    <span className="text-accent">▹</span>
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
