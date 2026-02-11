'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    github: string;
    link: string;
    tech: string[];
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.33, 1, 0.68, 1] }}
      className="group relative flex flex-col justify-between bg-background-alt rounded-xl p-7 md:p-8 border border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-2 shadow-lg shadow-background/50 hover:shadow-xl hover:shadow-accent/[0.03]"
    >
      {/* Top Row: Folder icon + Links */}
      <div className="flex items-start justify-between mb-8">
        {/* Folder Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent"
          aria-hidden="true"
        >
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>

        {/* External Links */}
        <div className="flex items-center gap-4">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository for ${project.title}`}
              className="text-foreground-muted hover:text-accent transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </Link>
          )}
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo for ${project.title}`}
              className="text-foreground-muted hover:text-accent transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </Link>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300 mb-3">
        {project.link ? (
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="before:absolute before:inset-0"
          >
            {project.title}
          </Link>
        ) : (
          project.title
        )}
      </h3>

      {/* Description */}
      <p className="text-foreground-muted text-sm leading-relaxed mb-6 flex-1">
        {project.description}
      </p>

      {/* Tech Stack Badges */}
      <ul className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((t) => (
          <li
            key={t}
            className="font-mono text-xs text-foreground-muted/80 bg-background/60 px-3 py-1 rounded-full border border-border"
          >
            {t}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
