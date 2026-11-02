import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Copy,
  Check,
  Send,
  Github,
  Linkedin,
  Twitter,
  Code2,
  Terminal,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData, SocialLink } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';

export const Contact: React.FC = () => {
  const { personal, contactSection } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    // Trigger celebration confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#38bdf8', '#818cf8', '#c084fc', '#34d399'],
    });

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 6000);
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github className="w-4 h-4" />;
      case 'Linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'Twitter':
        return <Twitter className="w-4 h-4" />;
      case 'Code2':
        return <Code2 className="w-4 h-4" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4" />;
      default:
        return <ArrowUpRight className="w-4 h-4" />;
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-background-subtle overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>09 // INITIATE TRANSMISSION</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            {contactSection.headline}
          </h2>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed">
            {contactSection.subtext}
          </p>
        </div>

        {/* Contact Layout: Left Info & Socials, Right Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Email & Social Network Grid (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Email Card with Copy Trigger */}
            <div className="p-6 rounded-2xl glass-panel relative overflow-hidden">
              <div className="flex items-center gap-2 font-mono text-xs text-primary mb-2">
                <Mail className="w-4 h-4" />
                <span>DIRECT EMAIL CHANNEL</span>
              </div>
              <p className="text-sm text-text-muted mb-4">
                Reach out for full-time roles, software engineering internships, or technical collaborations.
              </p>

              <div className="flex items-center justify-between p-3 rounded-xl bg-background border border-white/10 gap-3">
                <span className="font-mono text-xs sm:text-sm text-white truncate">
                  {personal.contact.email}
                </span>
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 transition-all font-mono text-xs flex items-center gap-1.5 shrink-0 interactive-target"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Network Profiles */}
            <div className="p-6 rounded-2xl glass-panel">
              <h3 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Verified Socials & Code Profiles
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {personal.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-background border border-white/5 hover:border-primary/40 hover:bg-white/[0.04] transition-all flex items-center justify-between group interactive-target"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-white/[0.03] text-text-muted group-hover:text-primary transition-colors">
                        {getSocialIcon(social.icon)}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-text-primary group-hover:text-primary transition-colors">
                          {social.name}
                        </div>
                        {social.handle && (
                          <div className="font-mono text-[10px] text-text-muted">
                            {social.handle}
                          </div>
                        )}
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-text-muted group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Location & Relocation Info */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-text-muted font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{personal.contact.locationDisplay}</span>
            </div>
          </div>

          {/* Right Column: Direct Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel relative overflow-hidden">
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-text-muted mb-6">
                Fill in the details below to start a conversation directly.
              </p>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-white">
                    Message Dispatched Successfully!
                  </h4>
                  <p className="text-xs text-text-muted max-w-sm mx-auto">
                    Thank you for reaching out. I prioritize engineering inquiries and will get back to you promptly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-text-secondary mb-1.5">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-primary text-xs sm:text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-text-secondary mb-1.5">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-primary text-xs sm:text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-text-secondary mb-1.5">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="e.g. Software Engineering Opportunity / Project Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-primary text-xs sm:text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-text-secondary mb-1.5">
                      MESSAGE CONTENT *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about your team, problem space, or what you'd like to build..."
                      className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-primary text-xs sm:text-sm transition-colors resize-none"
                    />
                  </div>

                  <MagneticButton>
                    <button
                      type="submit"
                      className="px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-black bg-gradient-to-r from-primary via-accent-cyan to-white hover:brightness-105 transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] flex items-center gap-2 interactive-target"
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </button>
                  </MagneticButton>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

