import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Brain,
  Layers,
  Sparkles,
  CheckCircle,
} from 'lucide-react';
import { portfolioData, SkillCategory } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (icon: string) => {
    switch (icon) {
      case 'Code2':
        return <Code2 className="w-4 h-4" />;
      case 'Layout':
        return <Layout className="w-4 h-4" />;
      case 'Server':
        return <Server className="w-4 h-4" />;
      case 'Database':
        return <Database className="w-4 h-4" />;
      case 'Wrench':
        return <Wrench className="w-4 h-4" />;
      case 'Brain':
        return <Brain className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  const displayedCategories =
    selectedCategory === 'all'
      ? skills
      : skills.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="relative py-28 bg-background overflow-hidden">
      {/* Subtle radial lights */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-violet/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>04 // TECHNICAL ARSENAL</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Skills & Engineering Stack
            </h2>
          </div>
          <p className="text-sm text-text-muted max-w-md">
            Technologies and core competencies strictly grounded in active practice, project execution, and algorithmic problem-solving.
          </p>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 flex items-center gap-2 interactive-target ${
              selectedCategory === 'all'
                ? 'bg-primary text-black font-semibold shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                : 'bg-background-surface/80 text-text-secondary hover:text-white border border-white/10 hover:border-white/20'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>ALL_CATEGORIES ({skills.reduce((acc, cat) => acc + cat.skills.length, 0)})</span>
          </button>

          {skills.map((category) => {
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 flex items-center gap-2 interactive-target ${
                  isSelected
                    ? 'bg-primary text-black font-semibold shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                    : 'bg-background-surface/80 text-text-secondary hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                {getCategoryIcon(category.icon)}
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Categorized Skills Grid */}
        <div className="space-y-10">
          <AnimatePresence mode="wait">
            {displayedCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-4"
              >
                {selectedCategory === 'all' && (
                  <div className="flex items-center gap-3 pt-2">
                    <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-primary">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-white">
                        {category.title}
                      </h3>
                      <p className="text-xs text-text-muted">{category.shortDesc}</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group p-4 rounded-xl bg-background-surface/60 border border-white/[0.07] hover:border-primary/40 hover:bg-background-elevated/70 transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors pointer-events-none" />

                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="font-heading font-medium text-sm text-text-primary group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                        {skill.badge && (
                          <span className="px-2 py-0.5 rounded-md font-mono text-[10px] bg-primary/10 border border-primary/20 text-primary shrink-0">
                            {skill.badge}
                          </span>
                        )}
                      </div>

                      {skill.description && (
                        <p className="text-xs text-text-muted leading-relaxed line-clamp-2">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

