'use client';

import { motion } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="mb-16">
          <h2 className="text-[13px] font-mono text-foreground-muted mb-2">
            Connect
          </h2>
          <div className="h-px w-full bg-border" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8 leading-tight">
            Let's work together.
          </h3>
          <p className="text-[15px] text-foreground-muted mb-8 leading-relaxed">
            I'm currently open to new opportunities and interesting projects.
            Whether you have a question or just want to say hi, feel free to reach out.
          </p>
          <MagneticButton>
            <a
              href="mailto:hello@alexdavies.dev"
              className="inline-block px-6 py-3 border border-foreground text-foreground text-[13px] font-mono hover:bg-foreground hover:text-background transition-all"
            >
              Get in touch
            </a>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
