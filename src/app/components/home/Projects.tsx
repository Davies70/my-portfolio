'use client';

import { projects } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 lg:px-16 bg-background-alt">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="mb-16">
          <h2 className="text-[13px] font-mono text-foreground-muted mb-2">
            Selected work
          </h2>
          <div className="h-px w-full bg-border" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
