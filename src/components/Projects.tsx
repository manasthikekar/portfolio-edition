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
import { GlassCard3D } from './GlassCard3D';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<'all' | 'featured'>('all');

  const filteredProjects =
    activeFilter === 'featured'
      ? projects.filter((p) => p.featured)
      : projects;

  return (
    <section id="projects" className="relative py-28 bg-background overflow-hidden">
      {/* Dynamic 3D background lighting */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-primary/10 rounded-full blur-[160px] pointer-events-none animate-aurora" />
      <div className="absolute bottom-10 left-0 w-[550px] h-[550px] bg-accent-violet/10 rounded-full blur-[150px] pointer-events-none animate-aurora-reverse" />

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

          <div className="flex items-center gap-2 p-1.5 rounded-2xl glass-premium text-xs font-mono shadow-md">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                activeFilter === 'all'
                  ? 'bg-primary/20 text-primary font-semibold border border-primary/40 shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                  : 'text-text-muted hover:text-white'
              }`}
            >
              ALL REPOSITORIES ({projects.length})
            </button>
            <button
              onClick={() => setActiveFilter('featured')}
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                activeFilter === 'featured'
                  ? 'bg-primary/20 text-primary font-semibold border border-primary/40 shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                  : 'text-text-muted hover:text-white'
              }`}
            >
              HIGHLIGHTED BUILDS
            </button>
          </div>
        </div>

        {/* Projects Grid: 3D Tilt Glass Cards */}
        <div className="space-y-14">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard3D intensity={6} glareOpacity={0.25} className="p-0 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  {/* Visual Preview Side (7 cols) with 3D Depth Elevation */}
                  <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[480px] overflow-hidden bg-[#07090e] flex items-center justify-center p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-white/10 preserve-3d">
                    {/* Dynamic colored backdrop aura */}
                    <div
                      className="absolute inset-0 opacity-25 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${project.accentColor || '#38bdf8'}, transparent 65%)`,
                      }}
                    />

                    {/* Elevated 3D Browser Mockup Window */}
                    <div className="w-full max-w-xl rounded-xl overflow-hidden border border-white/20 bg-[#0e121a] shadow-[0_20px_50px_rgba(0,0,0,0.8)] pop-3d-2 transition-transform duration-500 hover:scale-[1.02]">
                      {/* Browser Top Chrome */}
                      <div className="px-4 py-2.5 bg-[#131824] border-b border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <div className="px-3 py-0.5 rounded-md bg-black/50 text-[10px] font-mono text-slate-300 border border-white/10 truncate max-w-[220px]">
                          {project.title.toLowerCase().replace(/\s+/g, '-')}.system
                        </div>
                        <div className="w-6" />
                      </div>

                      {/* Image Preview */}
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-60" />
                      </div>
                    </div>
                  </div>

                  {/* Content Details Side (5 cols) */}
                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between preserve-3d">
                    <div>
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-4 pop-3d-1">
                        {project.featured && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full font-mono text-[10px] bg-primary/15 border border-primary/40 text-primary shadow-sm">
                            <Sparkles className="w-3 h-3" />
                            FEATURED
                          </span>
                        )}
                        <span className="font-mono text-[11px] text-text-muted">
                          SYSTEM 0{index + 1}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2 pop-3d-2">
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs text-primary mb-5 pop-3d-1">
                        {project.tagline}
                      </p>

                      {/* Problem & Contribution */}
                      <div className="space-y-3.5 mb-6">
                        <div className="p-4 rounded-xl glass-panel">
                          <span className="font-mono text-[10px] uppercase text-text-secondary font-semibold block mb-1">
                            Problem Solved
                          </span>
                          <p className="text-xs text-text-muted leading-relaxed">
                            {project.problemSolved}
                          </p>
                        </div>

                        <div className="p-4 rounded-xl glass-panel">
                          <span className="font-mono text-[10px] uppercase text-text-secondary font-semibold block mb-1">
                            My Contribution
                          </span>
                          <p className="text-xs text-text-muted leading-relaxed">
                            {project.myContribution}
                          </p>
                        </div>
                      </div>

                      {/* Metrics Highlights */}
                      {project.metrics && project.metrics.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 pop-3d-1">
                          {project.metrics.map((metric, mIdx) => (
                            <div
                              key={mIdx}
                              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 font-mono text-[11px] shadow-sm"
                            >
                              <Activity className="w-3 h-3 text-emerald-400 shrink-0" />
                              <span className="truncate">{metric}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-6 pop-3d-1">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg font-mono text-[11px] bg-white/[0.04] border border-white/10 text-text-secondary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/10 pop-3d-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-xl text-xs font-semibold text-text-primary glass-premium hover:border-primary/50 transition-all flex items-center gap-2 interactive-target shadow-md"
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
                          className="px-4 py-2.5 rounded-xl text-xs font-semibold text-black bg-gradient-to-r from-primary to-accent-cyan hover:brightness-110 transition-all flex items-center gap-1.5 shadow-[0_0_20px_rgba(56,189,248,0.35)] interactive-target"
                        >
                          <span>Live Prototype</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </GlassCard3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
