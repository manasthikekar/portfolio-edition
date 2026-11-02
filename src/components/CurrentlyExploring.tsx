import React from 'react';
import { motion } from 'framer-motion';
import {
  Network,
  Binary,
  Bot,
  Palette,
  Cpu,
  Compass,
  ArrowRight,
  Radio,
  Flame,
} from 'lucide-react';
import { portfolioData, ExploringTopic } from '../data/portfolioData';
import { GlassCard3D } from './GlassCard3D';

export const CurrentlyExploring: React.FC = () => {
  const { currentlyExploring } = portfolioData;

  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case 'Network':
        return <Network className="w-5 h-5 text-primary" />;
      case 'Binary':
        return <Binary className="w-5 h-5 text-accent-violet" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-accent-cyan" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-accent-purple" />;
      default:
        return <Cpu className="w-5 h-5 text-primary" />;
    }
  };

  const getStatusColor = (status: ExploringTopic['status']) => {
    switch (status) {
      case 'Deep Diving':
        return 'text-primary bg-primary/15 border-primary/40 shadow-[0_0_12px_rgba(56,189,248,0.25)]';
      case 'Active Study':
        return 'text-emerald-400 bg-emerald-500/15 border-emerald-500/40 shadow-[0_0_12px_rgba(52,211,153,0.25)]';
      case 'Building Prototypes':
        return 'text-accent-cyan bg-accent-cyan/15 border-accent-cyan/40 shadow-[0_0_12px_rgba(34,211,238,0.25)]';
      case 'Experimenting':
        return 'text-accent-purple bg-accent-purple/15 border-accent-purple/40 shadow-[0_0_12px_rgba(192,132,252,0.25)]';
      default:
        return 'text-text-muted bg-white/5 border-white/10';
    }
  };

  return (
    <section id="exploring" className="relative py-28 bg-background overflow-hidden">
      {/* 3D background aura lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-accent-violet/10 rounded-full blur-[150px] pointer-events-none animate-aurora" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#38bdf8]" />
              <span>08 // RADAR & HORIZONS</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-md">
              Currently Exploring
            </h2>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-premium font-mono text-xs text-text-primary border border-white/15 shadow-md">
            <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>ACTIVE RESEARCH & EXPERIMENTATION</span>
          </div>
        </div>

        {/* Futuristic Terminal Radar Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentlyExploring.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard3D
                intensity={10}
                neonBorder={index % 2 === 0 ? 'cyan' : 'violet'}
                className="p-6 sm:p-7 relative overflow-hidden"
              >
                {/* Header row: Icon, Domain, Status Badge */}
                <div className="flex items-start justify-between gap-3 mb-4 pop-3d-1">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 shadow-sm">
                      {getTopicIcon(topic.icon)}
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-primary uppercase tracking-widest block font-semibold">
                        {topic.area}
                      </span>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors pop-3d-2">
                        {topic.title}
                      </h3>
                    </div>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full font-mono text-[10px] border uppercase font-semibold shrink-0 ${getStatusColor(
                      topic.status
                    )}`}
                  >
                    {topic.status}
                  </span>
                </div>

                {/* Narrative description */}
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-6">
                  {topic.description}
                </p>

                {/* Progress Bar & Telemetry */}
                <div className="space-y-1.5 mb-5 pop-3d-1">
                  <div className="flex justify-between items-center font-mono text-[11px] text-text-muted">
                    <span>INVESTIGATION_DEPTH</span>
                    <span className="text-primary font-semibold">{topic.progress}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-black/40 border border-white/10 overflow-hidden p-0.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${topic.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-primary via-accent-cyan to-accent-violet rounded-full shadow-[0_0_12px_#38bdf8]"
                    />
                  </div>
                </div>

                {/* Technologies / Keywords */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.08] pop-3d-1">
                  {topic.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg font-mono text-[10px] bg-white/[0.04] border border-white/10 text-text-secondary"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>
              </GlassCard3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
