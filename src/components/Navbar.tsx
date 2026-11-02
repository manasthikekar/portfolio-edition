import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Download, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Exploring', href: '#exploring' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetElement = document.querySelector(href);
    if (targetElement) {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(targetElement, { offset: -80 });
      } else {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#07080b]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Monogram / Brand Logo */}
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className="group flex items-center gap-3 interactive-target"
            >
              <div className="relative w-10 h-10 rounded-xl bg-background-surface border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent-violet/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="font-heading font-bold text-sm tracking-widest text-gradient-accent">
                  {portfolioData.personal.monogram}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-sm font-semibold tracking-wide text-text-primary group-hover:text-primary transition-colors">
                  {portfolioData.personal.fullName}
                </span>
                <span className="font-mono text-[10px] text-text-muted flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Portfolio 2026
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-background-surface/70 border border-white/[0.07] backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 interactive-target ${
                      isActive
                        ? 'text-white'
                        : 'text-text-secondary hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-full bg-primary/15 border border-primary/30"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Desktop Action Buttons: Resume & Contact */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={portfolioData.personal.resume.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl text-xs font-medium text-text-secondary border border-white/10 hover:border-primary/40 hover:text-white transition-all duration-200 flex items-center gap-2 bg-white/[0.02] interactive-target"
              >
                <Download className="w-3.5 h-3.5 text-primary" />
                <span>Resume</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="relative group px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-primary to-accent-violet hover:brightness-110 transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.25)] flex items-center gap-1.5 interactive-target"
              >
                <span>Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="p-2.5 rounded-xl bg-background-surface border border-white/10 text-text-primary hover:border-primary/50 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-x-4 top-20 z-40 md:hidden rounded-2xl bg-background-surface/95 backdrop-blur-2xl border border-white/15 p-6 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              <div className="pb-3 mb-2 border-b border-white/10 flex items-center justify-between">
                <span className="font-mono text-xs text-primary flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  NAVIGATION_MENU
                </span>
                <span className="text-[10px] text-text-muted">SELECT DESTINATION</span>
              </div>

              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-primary/10 text-primary border border-primary/20'
                        : 'text-text-secondary hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />}
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2">
                <a
                  href={portfolioData.personal.resume.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl text-center text-xs font-medium text-text-primary bg-white/[0.05] border border-white/10 flex items-center justify-center gap-2"
                >
                  <Download className="w-3.5 h-3.5 text-primary" />
                  Download Resume
                </a>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="w-full py-2.5 rounded-xl text-center text-xs font-semibold text-white bg-gradient-to-r from-primary to-accent-violet flex items-center justify-center gap-1.5 shadow-lg"
                >
                  <span>Get In Touch</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

