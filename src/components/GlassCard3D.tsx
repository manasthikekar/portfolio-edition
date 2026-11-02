import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface GlassCard3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glareOpacity?: number;
  neonBorder?: 'cyan' | 'violet' | 'emerald' | 'none';
}

export const GlassCard3D: React.FC<GlassCard3DProps> = ({
  children,
  className = '',
  intensity = 15,
  glareOpacity = 0.2,
  neonBorder = 'none',
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for smooth 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-intensity, intensity]);

  // Dynamic glare coordinates (percentage)
  const glareX = useTransform(smoothX, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(smoothY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const getBorderGlow = () => {
    switch (neonBorder) {
      case 'cyan':
        return 'hover:border-primary/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]';
      case 'violet':
        return 'hover:border-accent-violet/50 hover:shadow-[0_0_30px_rgba(129,140,248,0.2)]';
      case 'emerald':
        return 'hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]';
      default:
        return 'hover:border-white/30 hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)]';
    }
  };

  return (
    <div
      style={{ perspective: 1200 }}
      className="relative rounded-2xl will-change-transform"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={`relative rounded-2xl glass-premium transition-colors duration-300 ${getBorderGlow()} ${className}`}
      >
        {/* Dynamic Glare Specular Highlight Layer */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 overflow-hidden z-20"
          style={{
            opacity: isHovered ? glareOpacity : 0,
            background: `radial-gradient(circle 300px at ${glareX.get()} ${glareY.get()}, rgba(255, 255, 255, 0.22), transparent 70%)`,
          }}
        />

        {/* Content with 3D depth preserve */}
        <div style={{ transformStyle: 'preserve-3d' }} className="relative z-10 w-full h-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

