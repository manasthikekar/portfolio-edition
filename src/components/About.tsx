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

  return (
    <section id="about" className="relative py-28 bg-background-subtle overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-accent-violet/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>03 // ABOUT ME</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-3xl">
            {about.heading}
          </h2>
        </div>

        {/* Editorial Layout: Left Narrative, Right Terminal & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative & Stats (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

              <p className="text-base sm:text-lg text-text-primary leading-relaxed font-normal mb-6">
                {about.leadStory}
              </p>

              <div className="space-y-4 text-sm sm:text-base text-text-muted leading-relaxed">
                {about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* High-Impact Stat Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {about.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-background-surface/80 border border-white/[0.08] backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:-translate-y-1"
                >
                  <div className="font-heading text-3xl sm:text-4xl font-extrabold text-gradient-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-text-primary mb-0.5">
                    {stat.label}
                  </div>
                  <div className="font-mono text-[11px] text-text-muted">
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Code Philosophy & Core Principles (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Developer Mindset Terminal Window */}
            <div className="rounded-2xl bg-[#090b10] border border-white/10 shadow-2xl overflow-hidden">
              <div className="px-4 py-3 bg-[#0d1017] border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-text-muted">
                  <Terminal className="w-3 h-3 text-primary" />
                  <span>engineer_profile.ts</span>
                </div>
                <div className="w-12 text-right">
                  <span className="text-[10px] font-mono text-emerald-400">ACTIVE</span>
                </div>
              </div>

              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto">
                <div>
                  <span className="text-accent-purple">interface</span>{' '}
                  <span className="text-primary">DeveloperPhilosophy</span> {'{'}
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
                <div className="pl-8 text-slate-400">
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
            </div>

            {/* Core Values / Approach Cards */}
            <div className="space-y-3">
              {about.coreValues.map((value, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl glass-panel flex items-start gap-3.5 transition-all duration-300 hover:border-white/20"
                >
                  <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10 shrink-0">
                    {getIcon(value.icon)}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary mb-1">
                      {value.title}
                    </h4>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

