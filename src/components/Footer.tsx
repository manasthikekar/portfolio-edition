import React, { useEffect, useState } from 'react';
import { ArrowUp, Terminal, Heart, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { personal, contactSection } = portfolioData;
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(now.toLocaleTimeString('en-US', options) + ' IST');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#050609] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden text-text-muted">
      {/* Huge subtle background monogram watermark */}
      <div className="absolute -bottom-20 right-0 font-heading font-extrabold text-[160px] sm:text-[220px] text-white/[0.015] select-none pointer-events-none leading-none">
        {personal.monogram}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          {/* Brand & Closing Ethos */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-background-surface border border-white/10 flex items-center justify-center font-heading font-bold text-xs text-gradient-accent">
                {personal.monogram}
              </div>
              <span className="font-heading font-bold text-base text-white tracking-wide">
                {personal.fullName}
              </span>
            </div>
            <p className="font-mono text-xs text-primary font-medium tracking-wide">
              "{contactSection.footerMessage}"
            </p>
          </div>

          {/* Real-time Clock & Status */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 font-mono text-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-text-secondary">{currentTime || 'India Standard Time'}</span>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-background-surface hover:bg-white/[0.06] border border-white/10 hover:border-primary/50 text-white transition-all flex items-center gap-2 text-xs font-mono interactive-target group"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            © {new Date().getFullYear()} {personal.fullName}. All rights reserved.
          </div>

          <div className="flex items-center gap-3 text-text-muted">
            <span>Built with React, TypeScript, Tailwind & GSAP</span>
            <span>•</span>
            <span className="text-primary">60 FPS Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
