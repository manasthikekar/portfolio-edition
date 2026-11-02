import React from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Sparkles,
  Flame,
  Terminal,
  BookOpen,
  Award,
  CheckCircle2,
  Code,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GlassCard3D } from './GlassCard3D';

export const About: React.FC = () => {
  const { about, personal } = portfolioData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-primary" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-accent-violet" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-accent-cyan" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-primary" />;
    }
  };

  const getNeonBorder = (idx: number): 'cyan' | 'violet' | 'emerald' => {
    if (idx === 0) return 'cyan';
    if (idx === 1) return 'violet';
    return 'emerald';
  };

  return (
    <section id="about" className="relative py-28 bg-background-subtle overflow-hidden">
      {/* 3D background aurora lights */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[160px] pointer-events-none animate-aurora" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-accent-violet/10 rounded-full blur-[150px] pointer-events-none animate-aurora-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#38bdf8]" />
            <span>03 // ABOUT ME</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-3xl drop-shadow-md">
            {about.heading}
          </h2>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative & 3D Stat Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl glass-premium relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

              <p className="text-base sm:text-lg text-text-primary leading-relaxed font-normal mb-6">
                {about.leadStory}
              </p>

              <div className="space-y-4 text-sm sm:text-base text-text-muted leading-relaxed">
                {about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* High-Impact Stat Metrics with 3D Tilt */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {about.stats.map((stat, idx) => (
                <GlassCard3D key={idx} intensity={14} neonBorder={idx === 0 ? 'cyan' : idx === 1 ? 'violet' : 'emerald'}>
                  <div className="p-5">
                    <div className="font-heading text-3xl sm:text-4xl font-extrabold text-gradient-accent mb-1 pop-3d-2">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-text-primary mb-0.5 pop-3d-1">
                      {stat.label}
                    </div>
                    <div className="font-mono text-[11px] text-text-muted pop-3d-1">
                      {stat.sublabel}
                    </div>
                  </div>
                </GlassCard3D>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Terminal & Core Principles (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Developer Mindset 3D Terminal Window */}
            <GlassCard3D intensity={10} glareOpacity={0.25} className="overflow-hidden p-0 border border-white/15">
              <div className="px-4 py-3 bg-[#0c1018]/90 border-b border-white/[0.08] flex items-center justify-between backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-[0_0_6px_rgba(244,63,94,0.5)]" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-[0_0_6px_rgba(245,158,11,0.5)]" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-300">
                  <Terminal className="w-3 h-3 text-primary" />
                  <span>engineer_profile.ts</span>
                </div>
                <div className="w-12 text-right">
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">ACTIVE</span>
                </div>
              </div>

              <div className="p-6 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-200 bg-[#07090e]/80">
                <div>
                  <span className="text-accent-purple">interface</span>{' '}
                  <span className="text-primary font-semibold">DeveloperPhilosophy</span> {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-text-secondary">engineer</span>: <span className="text-emerald-400">"{personal.fullName}"</span>;
                </div>
                <div className="pl-4">
                  <span className="text-text-secondary">ethos</span>: <span className="text-amber-300">"Master the fundamentals, iterate rapidly"</span>;
                </div>
                <div className="pl-4">
                  <span className="text-text-secondary">mindset</span>: <span className="text-accent-cyan">"Problem-solver before framework consumer"</span>;
                </div>
                <div className="pl-4">
                  <span className="text-text-secondary">currentFocus</span>: [
                </div>
                <div className="pl-8 text-slate-300">
                  <span className="text-emerald-300">"Competitive Programming (C++)"</span>,<br />
                  <span className="text-emerald-300">"Distributed Architecture"</span>,<br />
                  <span className="text-emerald-300">"Production Frontend Systems"</span>
                </div>
                <div className="pl-4">];</div>
                <div className="pl-4">
                  <span className="text-text-secondary">readyForImpact</span>: <span className="text-primary font-bold">true</span>;
                </div>
                <div>{'}'}</div>
              </div>
            </GlassCard3D>

            {/* Core Values 3D Tilt Cards */}
            <div className="space-y-3">
              {about.coreValues.map((value, idx) => (
                <GlassCard3D key={idx} intensity={8} neonBorder={getNeonBorder(idx)}>
                  <div className="p-4 flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/10 shrink-0 shadow-sm pop-3d-1">
                      {getIcon(value.icon)}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary mb-1 pop-3d-1">
                        {value.title}
                      </h4>
                      <p className="text-xs text-text-muted leading-relaxed">
                        {value.desc}
                      </p>
                    </div>
                  </div>
                </GlassCard3D>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
