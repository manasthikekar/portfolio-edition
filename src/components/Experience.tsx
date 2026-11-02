import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Briefcase,
  Trophy,
  BookOpen,
  Calendar,
  MapPin,
  CheckCircle2,
  Tag,
} from 'lucide-react';
import { portfolioData, TimelineItem } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { timeline } = portfolioData;
  const [filterType, setFilterType] = useState<string>('all');

  const filteredTimeline =
    filterType === 'all'
      ? timeline
      : timeline.filter((item) => {
          if (filterType === 'education') return item.type === 'education';
          if (filterType === 'experience') return item.type === 'experience' || item.type === 'internship';
          if (filterType === 'milestone') return item.type === 'milestone' || item.type === 'training';
          return true;
        });

  const getTypeIcon = (type: TimelineItem['type']) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-4 h-4 text-primary" />;
      case 'internship':
      case 'experience':
        return <Briefcase className="w-4 h-4 text-accent-cyan" />;
      case 'milestone':
        return <Trophy className="w-4 h-4 text-accent-violet" />;
      case 'training':
        return <BookOpen className="w-4 h-4 text-emerald-400" />;
      default:
        return <Calendar className="w-4 h-4 text-primary" />;
    }
  };

  const getTypeBadge = (type: TimelineItem['type']) => {
    switch (type) {
      case 'education':
        return 'ACADEMICS';
      case 'internship':
        return 'INTERNSHIP';
      case 'experience':
        return 'EXPERIENCE';
      case 'milestone':
        return 'MILESTONE';
      case 'training':
        return 'TECHNICAL TRAINING';
      default:
        return 'EVENT';
    }
  };

  return (
    <section id="experience" className="relative py-28 bg-background-subtle overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>05 // TRAJECTORY</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Experience & Education
            </h2>
          </div>

          {/* Timeline Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-background-surface border border-white/10 text-xs font-mono">
            {[
              { id: 'all', label: 'ALL CHRONOLOGY' },
              { id: 'education', label: 'EDUCATION' },
              { id: 'milestone', label: 'MILESTONES & WORKSHOPS' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id)}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  filterType === tab.id
                    ? 'bg-primary/20 text-primary font-semibold border border-primary/30'
                    : 'text-text-muted hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/10 space-y-12 ml-2 sm:ml-6">
          {filteredTimeline.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Glowing Node on Timeline Axis */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#07080b] border-2 border-primary/60 flex items-center justify-center group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-[0_0_12px_rgba(56,189,248,0.4)]">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              {/* Timeline Card */}
              <div className="p-6 sm:p-7 rounded-2xl glass-panel group-hover:border-primary/30 transition-all duration-300">
                {/* Meta details bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10">
                      {getTypeIcon(item.type)}
                    </span>
                    <span className="font-mono text-[11px] font-semibold text-primary uppercase tracking-wider">
                      {getTypeBadge(item.type)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
                    <Calendar className="w-3.5 h-3.5 text-accent-violet" />
                    <span>{item.period}</span>
                    {item.location && (
                      <>
                        <span className="text-white/20">•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-text-muted" />
                          {item.location}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Title & Organization */}
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white mb-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <h4 className="text-sm font-medium text-text-secondary mb-4">
                  {item.organization}
                </h4>

                {/* Narrative description */}
                <p className="text-sm text-text-muted leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Highlights List */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="space-y-2 mb-4 pt-2 border-t border-white/[0.05]">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technology Badges */}
                {item.technologies && item.technologies.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-3">
                    <Tag className="w-3 h-3 text-text-muted mr-1" />
                    {item.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md font-mono text-[11px] bg-white/[0.03] border border-white/10 text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

