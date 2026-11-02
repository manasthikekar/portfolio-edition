import React, { useState, useEffect } from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { CurrentlyExploring } from './components/CurrentlyExploring';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = [
      'home',
      'about',
      'skills',
      'experience',
      'projects',
      'achievements',
      'exploring',
      'contact',
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <SmoothScroll>
      {/* Minimal subtle cursor dot */}
      <CustomCursor />

      {/* Subtle top scroll progress indicator */}
      <ScrollProgressBar />

      {/* Main Container */}
      <div className="relative min-h-screen bg-[#09090b] text-zinc-100 selection:bg-zinc-800 selection:text-white">
        {/* Navigation */}
        <Navbar activeSection={activeSection} />

        <main>
          {/* Hero */}
          <Hero />

          {/* About */}
          <About />

          {/* Skills */}
          <Skills />

          {/* Experience & Education */}
          <Experience />

          {/* Selected Projects */}
          <Projects />

          {/* Achievements & Certifications */}
          <Achievements />

          {/* Currently Exploring */}
          <CurrentlyExploring />

          {/* Contact */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default App;
