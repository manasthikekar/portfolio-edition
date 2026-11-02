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
import { ThreeHeroScene } from './ThreeHeroScene';
import { MagneticButton } from './MagneticButton';
import { GlassCard3D } from './GlassCard3D';

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

  const nameLetters = personal.fullName.toUpperCase().split('');

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-background"
    >
      {/* 1. Interactive 3D WebGL Three.js Scene */}
      <ThreeHeroScene />

      {/* 2. 2D Interactive Particle Mesh Canvas */}
      <HeroCanvas />

      {/* 3. Floating 3D Aurora Gradient Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-primary/15 rounded-full blur-[140px] pointer-events-none animate-aurora" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-accent-violet/15 rounded-full blur-[130px] pointer-events-none animate-aurora-reverse" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[550px] h-[250px] bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Top Status & Location Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-premium shadow-lg backdrop-blur-xl border border-white/15">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#10b981]" />
              </span>
              <span className="font-mono text-[11px] text-text-primary tracking-wide uppercase font-medium">
                {personal.status.availableForWork ? 'Available for Engineering Roles' : 'Actively Building'}
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-premium font-mono text-[11px] text-text-secondary border border-white/10">
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
            <span className="inline-block w-8 h-[1px] bg-gradient-to-r from-transparent to-primary" />
            <span>{personal.greeting}</span>
            <span className="inline-block w-8 h-[1px] bg-gradient-to-l from-transparent to-primary" />
          </motion.div>

          {/* Oversized 3D Cinematic Typography Hero Name */}
          <div className="overflow-hidden mb-4 sm:mb-6">
            <h1 className="font-heading font-extrabold tracking-tight text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white select-none drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
              {nameLetters.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 90, opacity: 0, rotateX: 45 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  transition={{
                    duration: 0.85,
                    delay: 0.15 + index * 0.035,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`inline-block transition-all duration-300 ${
                    char === ' '
                      ? 'w-4 sm:w-6'
                      : 'hover:text-primary hover:-translate-y-2 hover:drop-shadow-[0_0_25px_#38bdf8]'
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
            className="mb-8 max-w-3xl"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-text-secondary tracking-tight">
              <span className="text-gradient font-semibold">{personal.headline}</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-text-muted max-w-2xl mx-auto leading-relaxed">
              {personal.subheadline}
            </p>
          </motion.div>

          {/* Call to Actions with Glass & Magnetic 3D Interactions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14 sm:mb-18"
          >
            <MagneticButton>
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-primary via-accent-cyan to-white hover:brightness-105 transition-all shadow-[0_0_30px_rgba(56,189,248,0.45)] flex items-center gap-2 interactive-target"
              >
                <span>View Featured Projects</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>
            </MagneticButton>

            <MagneticButton>
              <button
                onClick={() => scrollTo('contact')}
                className="px-5 py-3.5 rounded-xl font-medium text-sm text-text-primary glass-premium border border-white/20 hover:border-primary/60 hover:bg-white/[0.08] transition-all flex items-center gap-2 backdrop-blur-xl interactive-target shadow-lg"
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
                className="px-4 py-3.5 rounded-xl font-medium text-sm text-text-muted hover:text-white glass-premium border border-white/10 hover:border-accent-violet/50 transition-all flex items-center gap-2 interactive-target"
              >
                <Download className="w-4 h-4 text-accent-violet" />
                <span>Resume</span>
              </a>
            </MagneticButton>
          </motion.div>

          {/* Floating 3D Telemetry Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl pt-4"
          >
            {/* Card 1: Focus */}
            <GlassCard3D intensity={12} neonBorder="cyan">
              <div className="p-5 text-left">
                <div className="flex items-center gap-2 text-primary text-xs font-mono mb-2 pop-3d-1">
                  <Code2 className="w-4 h-4" />
                  <span className="font-semibold">PRIMARY FOCUS</span>
                </div>
                <p className="text-xs font-semibold text-text-primary leading-snug pop-3d-2">
                  Full-Stack Systems & Algorithmic Optimization
                </p>
              </div>
            </GlassCard3D>

            {/* Card 2: Current Status */}
            <GlassCard3D intensity={12} neonBorder="violet">
              <div className="p-5 text-left">
                <div className="flex items-center gap-2 text-accent-violet text-xs font-mono mb-2 pop-3d-1">
                  <Cpu className="w-4 h-4" />
                  <span className="font-semibold">EXPLORING NOW</span>
                </div>
                <p className="text-xs font-semibold text-text-primary leading-snug truncate pop-3d-2">
                  {personal.status.learningFocus}
                </p>
              </div>
            </GlassCard3D>

            {/* Card 3: Philosophy */}
            <GlassCard3D intensity={12} neonBorder="cyan">
              <div className="p-5 text-left">
                <div className="flex items-center gap-2 text-accent-cyan text-xs font-mono mb-2 pop-3d-1">
                  <Layers className="w-4 h-4" />
                  <span className="font-semibold">DESIGN PARADIGM</span>
                </div>
                <p className="text-xs font-semibold text-text-primary leading-snug pop-3d-2">
                  Clean Abstractions & Uncompromising Motion
                </p>
              </div>
            </GlassCard3D>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
