'use client';

import { useEffect, useRef } from 'react';
import MagneticButton from '@/components/ui/MagneticButton';

export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (nameRef.current) {
      observer.observe(nameRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-16">
      <div className="max-w-7xl w-full py-20">
        <div className="max-w-4xl space-y-8">
          {/* Greeting */}
          <p className="text-[13px] font-mono text-foreground-muted tracking-wide">
            Good afternoon
          </p>

          {/* Name */}
          <h1
            ref={nameRef}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-foreground leading-[0.95] tracking-tight opacity-0"
          >
            {"I'm an independent"}
            <br />
            <span className="italic">fullstack engineer.</span>
          </h1>

          {/* Description */}
          <div className="max-w-2xl space-y-4 pt-4">
            <p className="text-[15px] md:text-base text-foreground-muted leading-relaxed">
              I build accessible, performant web applications with modern technologies.
              Specializing in React, Next.js, and TypeScript with a focus on clean
              architecture and user experience.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-6">
            <MagneticButton>
              <a
                href="#projects"
                className="inline-block px-6 py-3 border border-foreground text-foreground text-[13px] font-mono hover:bg-foreground hover:text-background transition-all"
              >
                View selected work →
              </a>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
