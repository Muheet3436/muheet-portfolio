import { Layout, Server, Database, Code2, Wrench, CheckCircle2 } from 'lucide-react';
import { skillCategories } from '../data/projects';

export default function Skills() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-teal-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-teal-300" />;
      case 'Code':
        return <Code2 className="w-5 h-5 text-emerald-300" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-teal-400" />;
      default:
        return <Code2 className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0a0f1d]/60 border-y border-slate-800/60">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono font-medium uppercase tracking-wider mb-3">
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Technologies, frameworks, and programming languages I actively utilize. Presented honestly without exaggerated metrics.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => {
            const isFrontend = cat.category.toLowerCase().includes('frontend');

            return (
              <div
                key={cat.category}
                className={`relative group rounded-2xl p-6 transition-all duration-300 bg-slate-900/70 border ${
                  isFrontend
                    ? 'border-teal-500/40 shadow-lg shadow-teal-500/5 md:col-span-2 lg:col-span-1'
                    : 'border-slate-800 hover:border-teal-500/30'
                } hover:-translate-y-1`}
              >
                {/* Subtle Card Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Header inside card */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                      {getCategoryIcon(cat.icon)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                        {cat.category}
                      </h3>
                      {isFrontend && (
                        <span className="text-[10px] font-mono uppercase tracking-wider text-teal-400 font-semibold">
                          Main Focus
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Category Description */}
                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 hover:border-teal-500/40 text-slate-200 text-xs font-medium transition-all duration-200 shadow-sm"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Transparency & Continuous Learning */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/40 border border-slate-800/70 text-center max-w-xl mx-auto">
          <p className="text-xs text-slate-400">
            <span className="text-teal-400 font-medium">Note:</span> Actively expanding hands-on expertise through full-stack projects, academic coursework, and practical problem-solving.
          </p>
        </div>

      </div>
    </section>
  );
}
