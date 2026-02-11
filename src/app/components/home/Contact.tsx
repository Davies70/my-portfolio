'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-2xl px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className="flex flex-col items-center gap-6"
        >
          {/* Label */}
          <p className="font-mono text-accent text-sm">
            03. {"What's Next?"}
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground text-balance">
            Get In Touch
          </h2>

          {/* Description */}
          <p className="text-foreground-muted leading-relaxed max-w-lg">
            {"I'm currently open to new opportunities and always happy to connect. Whether you have a question, a project idea, or just want to say hi \u2014 my inbox is open."}
          </p>

          {/* CTA */}
          <Link
            href="mailto:hello@alexdavies.dev"
            className="inline-block mt-6 px-8 py-4 border border-accent text-accent font-mono text-sm rounded hover:bg-accent-muted transition-colors duration-300"
          >
            Say Hello
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
