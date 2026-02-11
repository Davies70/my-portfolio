'use client';

import { projects } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground whitespace-nowrap">
            <span className="font-mono text-accent text-lg md:text-xl mr-2">
              02.
            </span>
            Projects
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
