import React from 'react';
import { motion } from 'framer-motion';
import {
  Trophy,
  Award,
  Scroll,
  BookOpen,
  Star,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { portfolioData, AchievementItem } from '../data/portfolioData';
import { GlassCard3D } from './GlassCard3D';

export const Achievements: React.FC = () => {
  const { achievements } = portfolioData;

  const getCategoryIcon = (category: AchievementItem['category']) => {
    switch (category) {
      case 'Hackathon':
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'Competition':
        return <Star className="w-5 h-5 text-primary" />;
      case 'Certification':
        return <ShieldCheck className="w-5 h-5 text-accent-cyan" />;
      case 'Academic':
        return <BookOpen className="w-5 h-5 text-accent-violet" />;
      default:
        return <Award className="w-5 h-5 text-primary" />;
    }
  };

  const getCategoryColor = (category: AchievementItem['category']) => {
    switch (category) {
      case 'Hackathon':
        return 'border-amber-500/40 text-amber-300 bg-amber-500/15 shadow-[0_0_12px_rgba(245,158,11,0.2)]';
      case 'Competition':
        return 'border-primary/40 text-primary bg-primary/15 shadow-[0_0_12px_rgba(56,189,248,0.2)]';
      case 'Certification':
        return 'border-accent-cyan/40 text-accent-cyan bg-accent-cyan/15 shadow-[0_0_12px_rgba(34,211,238,0.2)]';
      case 'Academic':
        return 'border-accent-violet/40 text-accent-violet bg-accent-violet/15 shadow-[0_0_12px_rgba(129,140,248,0.2)]';
      default:
        return 'border-white/20 text-white bg-white/5';
    }
  };

  return (
    <section id="achievements" className="relative py-28 bg-background-subtle overflow-hidden">
      {/* 3D ambient glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[160px] pointer-events-none animate-aurora" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#38bdf8]" />
              <span>07 // HONORS & RECOGNITION</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-md">
              Achievements & Certifications
            </h2>
          </div>
          <p className="text-sm text-text-muted max-w-md leading-relaxed">
            Milestones earned through competitive coding grit, collegiate innovation sprints, and academic commitment.
          </p>
        </div>

        {/* 2-column 3D Glass Card Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard3D
                intensity={10}
                neonBorder={item.category === 'Hackathon' ? 'emerald' : item.category === 'Competition' ? 'cyan' : 'violet'}
                className="p-6 sm:p-7 relative overflow-hidden"
              >
                {/* Top row: Category Badge & Date */}
                <div className="flex items-center justify-between gap-3 mb-4 pop-3d-1">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-white/[0.06] border border-white/10 shadow-sm">
                      {getCategoryIcon(item.category)}
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full font-mono text-[10px] border uppercase font-semibold ${getCategoryColor(
                        item.category
                      )}`}
                    >
                      {item.category}
                    </span>
                  </div>

                  <span className="font-mono text-xs text-text-muted">
                    {item.date}
                  </span>
                </div>

                {/* Achievement Title */}
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors pop-3d-2">
                  {item.title}
                </h3>
                <h4 className="text-xs font-mono text-text-secondary mb-3 pop-3d-1">
                  {item.organization}
                </h4>

                {/* Narrative description */}
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Bottom footer: Badge / Verification link */}
                <div className="flex items-center justify-between pt-3 border-t border-white/[0.08] text-xs font-mono pop-3d-1">
                  {item.badge && (
                    <span className="text-emerald-400 font-semibold flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {item.badge}
                    </span>
                  )}

                  {item.credentialUrl && (
                    <a
                      href={item.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-1 ml-auto"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </GlassCard3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
