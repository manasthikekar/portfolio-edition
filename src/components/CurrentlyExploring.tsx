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
        return 'text-primary bg-primary/10 border-primary/30';
      case 'Active Study':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
      case 'Building Prototypes':
        return 'text-accent-cyan bg-accent-cyan/10 border-accent-cyan/30';
      case 'Experimenting':
        return 'text-accent-purple bg-accent-purple/10 border-accent-purple/30';
      default:
        return 'text-text-muted bg-white/5 border-white/10';
    }
  };

  return (
    <section id="exploring" className="relative py-28 bg-background overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-violet/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>08 // RADAR & HORIZONS</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Currently Exploring
            </h2>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 font-mono text-xs text-text-muted">
            <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>ACTIVE RESEARCH & EXPERIMENTATION</span>
          </div>
        </div>

        {/* Futuristic Terminal Radar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentlyExploring.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#0b0e16] border border-white/10 hover:border-primary/40 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors pointer-events-none" />

              {/* Header row: Icon, Domain, Status Badge */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 group-hover:border-primary/40 transition-colors">
                    {getTopicIcon(topic.icon)}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-primary uppercase tracking-widest block">
                      {topic.area}
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {topic.title}
                    </h3>
                  </div>
                </div>

                <span
                  className={`px-2.5 py-1 rounded-full font-mono text-[10px] border uppercase font-medium shrink-0 ${getStatusColor(
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
              <div className="space-y-1.5 mb-5">
                <div className="flex justify-between items-center font-mono text-[11px] text-text-muted">
                  <span>INVESTIGATION_DEPTH</span>
                  <span className="text-primary font-semibold">{topic.progress}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${topic.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-primary to-accent-violet rounded-full"
                  />
                </div>
              </div>

              {/* Technologies / Keywords */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                {topic.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded-md font-mono text-[10px] bg-white/[0.02] border border-white/5 text-text-secondary"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

