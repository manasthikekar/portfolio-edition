import React, { useState, useEffect } from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { Preloader } from './components/Preloader';
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
import { portfolioData } from './data/portfolioData';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
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
  }, [loading]);

  return (
    <SmoothScroll>
      {/* Interactive Desktop Custom Cursor */}
      <CustomCursor />

      {/* Futuristic Preloader */}
      {loading && (
        <Preloader
          monogram={portfolioData.personal.monogram}
          name={portfolioData.personal.fullName}
          onComplete={() => setLoading(false)}
        />
      )}

      {/* Main Portfolio Page Structure */}
      <div className="relative min-h-screen bg-background text-text-primary selection:bg-primary/20 selection:text-primary">
        {/* Scroll Progress Bar at the very top */}
        <ScrollProgressBar />

        {/* Section 01: Sophisticated Floating Navigation */}
        <Navbar activeSection={activeSection} />

        <main>
          {/* Section 02: Hero Section */}
          <Hero />

          {/* Section 03: Storytelling About Me */}
          <About />

          {/* Section 04: Technical Arsenal & Skills */}
          <Skills />

          {/* Section 05: Trajectory — Experience & Education Timeline */}
          <Experience />

          {/* Section 06: Craft & Code — Featured Engineering Projects */}
          <Projects />

          {/* Section 07: Honors & Recognitions — Achievements & Certifications */}
          <Achievements />

          {/* Section 08: Radar & Horizons — Currently Exploring */}
          <CurrentlyExploring />

          {/* Section 09: Initiate Transmission — Contact & Socials */}
          <Contact />
        </main>

        {/* Cinematic Animated Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default App;

