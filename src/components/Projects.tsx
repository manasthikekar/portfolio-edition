import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Layers,
  Sparkles,
  ArrowUpRight,
  Terminal,
  Activity,
  Code2,
} from 'lucide-react';
import { portfolioData, ProjectItem } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<'all' | 'featured'>('all');

  const filteredProjects =
    activeFilter === 'featured'
      ? projects.filter((p) => p.featured)
      : projects;

  return (
    <section id="projects" className="relative py-28 bg-background overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-accent-violet/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>06 // CRAFT & CODE</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Featured Engineering Projects
            </h2>
          </div>

          <div className="flex items-center gap-2 p-1 rounded-xl bg-background-surface border border-white/10 text-xs font-mono">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeFilter === 'all'
                  ? 'bg-primary/20 text-primary font-semibold border border-primary/30'
                  : 'text-text-muted hover:text-white'
              }`}
            >
              ALL REPOSITORIES ({projects.length})
            </button>
            <button
              onClick={() => setActiveFilter('featured')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeFilter === 'featured'
                  ? 'bg-primary/20 text-primary font-semibold border border-primary/30'
                  : 'text-text-muted hover:text-white'
              }`}
            >
              HIGHLIGHTED BUILDS
            </button>
          </div>
        </div>

        {/* Projects Grid: Large Visual Cards */}
        <div className="space-y-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-3xl bg-background-surface/70 border border-white/10 hover:border-primary/40 transition-all duration-500 overflow-hidden shadow-2xl relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                {/* Visual Preview Side (7 cols) */}
                <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[460px] overflow-hidden bg-[#090b10] flex items-center justify-center p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-white/10">
                  {/* Subtle Background Glow behind preview */}
                  <div
                    className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${project.accentColor || '#38bdf8'}, transparent 70%)`,
                    }}
                  />

                  {/* Browser Mockup Window */}
                  <div className="w-full max-w-xl rounded-xl overflow-hidden border border-white/15 bg-[#0f131c] shadow-2xl transition-transform duration-700 group-hover:scale-[1.03] group-hover:-translate-y-1">
                    {/* Fake Browser Top Chrome */}
                    <div className="px-4 py-2.5 bg-[#141926] border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="px-3 py-0.5 rounded-md bg-black/40 text-[10px] font-mono text-slate-400 border border-white/5 truncate max-w-[200px]">
                        {project.title.toLowerCase().replace(/\s+/g, '-')}.local
                      </div>
                      <div className="w-6" />
                    </div>

                    {/* Image with overlay */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-transparent to-transparent opacity-60" />
                    </div>
                  </div>
                </div>

                {/* Content Details Side (5 cols) */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    {/* Top Tag & Metric Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-mono text-[10px] bg-primary/10 border border-primary/30 text-primary">
                          <Sparkles className="w-3 h-3" />
                          FEATURED
                        </span>
                      )}
                      <span className="font-mono text-[11px] text-text-muted">
                        PROJECT 0{index + 1}
                      </span>
                    </div>

                    {/* Project Title & Tagline */}
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-primary mb-5">
                      {project.tagline}
                    </p>

                    {/* Deep-dive sections: Problem & Contribution */}
                    <div className="space-y-4 mb-6">
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <span className="font-mono text-[10px] uppercase text-text-secondary font-semibold block mb-1">
                          Problem Solved
                        </span>
                        <p className="text-xs text-text-muted leading-relaxed">
                          {project.problemSolved}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <span className="font-mono text-[10px] uppercase text-text-secondary font-semibold block mb-1">
                          My Engineering Contribution
                        </span>
                        <p className="text-xs text-text-muted leading-relaxed">
                          {project.myContribution}
                        </p>
                      </div>
                    </div>

                    {/* Metrics / Performance Highlights */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                        {project.metrics.map((metric, mIdx) => (
                          <div
                            key={mIdx}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/5 border border-emerald-500/20 text-emerald-300 font-mono text-[11px]"
                          >
                            <Activity className="w-3 h-3 text-emerald-400 shrink-0" />
                            <span className="truncate">{metric}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md font-mono text-[11px] bg-background-elevated border border-white/10 text-text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link Buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl text-xs font-semibold text-text-primary bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-primary/50 transition-all flex items-center gap-2 interactive-target"
                      >
                        <Github className="w-4 h-4 text-primary" />
                        <span>Source Code</span>
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl text-xs font-semibold text-black bg-gradient-to-r from-primary to-accent-cyan hover:brightness-110 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(56,189,248,0.25)] interactive-target"
                      >
                        <span>Live Prototype</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

