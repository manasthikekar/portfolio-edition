import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
  monogram?: string;
  name?: string;
}

export const Preloader: React.FC<PreloaderProps> = ({
  onComplete,
  monogram = "MT",
  name = "MANAS THIKEKAR"
}) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }
        // Organic acceleration curve
        const step = prev < 60 ? Math.floor(Math.random() * 8) + 4 : Math.floor(Math.random() * 12) + 6;
        return Math.min(prev + step, 100);
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#06080d] text-white px-6 overflow-hidden select-none"
        >
          {/* Subtle background grid & radial glow */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
          <div className="absolute w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

          {/* Central Monogram & Branding */}
          <div className="relative z-10 flex flex-col items-center max-w-sm w-full">
            {/* Geometric Monogram Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-24 h-24 mb-8 flex items-center justify-center"
            >
              {/* Rotating outer technical ring */}
              <div className="absolute inset-0 border border-primary/30 rounded-2xl animate-spin-slow" />
              <div className="absolute -inset-1 border border-dashed border-accent-violet/30 rounded-2xl" />

              {/* Inner core with monogram */}
              <div className="w-20 h-20 rounded-xl bg-background-surface/80 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-[0_0_25px_rgba(56,189,248,0.25)]">
                <span className="font-heading font-extrabold text-2xl tracking-widest text-gradient-accent">
                  {monogram}
                </span>
              </div>
            </motion.div>

            {/* Candidate Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center mb-6"
            >
              <h2 className="font-heading text-sm tracking-[0.25em] text-text-primary font-semibold uppercase mb-1">
                {name}
              </h2>
              <p className="font-mono text-xs text-text-muted tracking-wider flex items-center justify-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                SYSTEM INITIALIZING
              </p>
            </motion.div>

            {/* High-tech Progress Bar */}
            <div className="w-full bg-white/5 border border-white/10 rounded-full h-1.5 p-0.5 overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-accent-violet to-accent-cyan rounded-full shadow-[0_0_12px_#38bdf8]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Percentage & Telemetry readout */}
            <div className="w-full flex justify-between items-center mt-3 font-mono text-[11px] text-text-muted">
              <span>MEM_ALLOC: OK</span>
              <span className="text-primary font-semibold">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

