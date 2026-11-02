import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Terminal,
  MapPin,
  Sparkles,
  Code2,
  Cpu,
  Layers,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { HeroCanvas } from './HeroCanvas';
import { MagneticButton } from './MagneticButton';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(el, { offset: -80 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Name split into individual letters for staggered animation
  const nameLetters = personal.fullName.toUpperCase().split('');

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-background"
    >
      {/* 3D / Canvas Network Background */}
      <HeroCanvas />

      {/* Radial Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-accent-violet/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Top Status & Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-background-surface/80 border border-white/10 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px] text-text-secondary tracking-wide uppercase">
                {personal.status.availableForWork ? 'Available for Engineering Roles' : 'Actively Building'}
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 font-mono text-[11px] text-text-muted">
              <MapPin className="w-3 h-3 text-primary" />
              <span>{personal.location}</span>
            </div>
          </motion.div>

          {/* Small Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mono text-xs sm:text-sm tracking-[0.3em] text-primary uppercase font-semibold mb-3 flex items-center gap-2"
          >
            <span className="inline-block w-6 h-[1px] bg-primary/60" />
            <span>{personal.greeting}</span>
            <span className="inline-block w-6 h-[1px] bg-primary/60" />
          </motion.div>

          {/* Oversized Cinematic Typography Hero Name */}
          <div className="overflow-hidden mb-4 sm:mb-6">
            <h1 className="font-heading font-extrabold tracking-tight text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white select-none">
              {nameLetters.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15 + index * 0.035,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`inline-block ${
                    char === ' ' ? 'w-4 sm:w-6' : 'hover:text-primary transition-colors duration-200'
                  }`}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Professional Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mb-6 max-w-3xl"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-text-secondary tracking-tight">
              <span className="text-gradient font-semibold">{personal.headline}</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-text-muted max-w-2xl mx-auto leading-relaxed">
              {personal.subheadline}
            </p>
          </motion.div>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
          >
            <MagneticButton>
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-3.5 rounded-xl font-medium text-sm text-black bg-gradient-to-r from-primary via-accent-cyan to-white hover:brightness-105 transition-all shadow-[0_0_25px_rgba(56,189,248,0.35)] flex items-center gap-2 interactive-target"
              >
                <span>View Featured Projects</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>
            </MagneticButton>

            <MagneticButton>
              <button
                onClick={() => scrollTo('contact')}
                className="px-5 py-3.5 rounded-xl font-medium text-sm text-text-primary bg-background-surface/80 border border-white/15 hover:border-primary/50 hover:bg-white/[0.04] transition-all flex items-center gap-2 backdrop-blur-md interactive-target"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4 text-primary" />
              </button>
            </MagneticButton>

            <MagneticButton>
              <a
                href={personal.resume.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl font-medium text-sm text-text-muted hover:text-white border border-transparent hover:border-white/10 transition-all flex items-center gap-2 interactive-target"
              >
                <Download className="w-4 h-4 text-accent-violet" />
                <span>Resume</span>
              </a>
            </MagneticButton>
          </motion.div>

          {/* Floating Technical Telemetry Bar / Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl pt-4 border-t border-white/[0.07]"
          >
            {/* Card 1: Focus */}
            <div className="glass-panel rounded-2xl p-4 text-left transition-all duration-300 hover:border-primary/30">
              <div className="flex items-center gap-2 text-primary text-xs font-mono mb-1.5">
                <Code2 className="w-4 h-4" />
                <span>PRIMARY FOCUS</span>
              </div>
              <p className="text-xs font-medium text-text-primary">
                Full-Stack Systems & Algorithmic Optimization
              </p>
            </div>

            {/* Card 2: Current Status */}
            <div className="glass-panel rounded-2xl p-4 text-left transition-all duration-300 hover:border-accent-violet/30">
              <div className="flex items-center gap-2 text-accent-violet text-xs font-mono mb-1.5">
                <Cpu className="w-4 h-4" />
                <span>EXPLORING NOW</span>
              </div>
              <p className="text-xs font-medium text-text-primary truncate">
                {personal.status.learningFocus}
              </p>
            </div>

            {/* Card 3: Philosophy */}
            <div className="glass-panel rounded-2xl p-4 text-left transition-all duration-300 hover:border-accent-cyan/30">
              <div className="flex items-center gap-2 text-accent-cyan text-xs font-mono mb-1.5">
                <Layers className="w-4 h-4" />
                <span>DESIGN PARADIGM</span>
              </div>
              <p className="text-xs font-medium text-text-primary">
                Clean Abstractions & Uncompromising Motion
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

