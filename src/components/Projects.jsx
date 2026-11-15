import { ExternalLink, Check, Sparkles } from 'lucide-react';
import { projects } from '../data/projects';
import { GithubIcon } from './Icons';

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-teal-500/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono font-medium uppercase tracking-wider mb-3">
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Real-world web applications built with modern frontend and full-stack technologies.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-20">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-slate-900/40 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300"
              >
                {/* Project Image Container */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="group relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/90 shadow-2xl transition-all duration-300 hover:border-teal-500/40 hover:shadow-teal-500/10">
                    {/* Browser-style window top bar */}
                    <div className="px-4 py-3 bg-slate-900/95 border-b border-slate-800/90 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 truncate max-w-[200px] sm:max-w-xs">
                        {project.liveUrl.replace('https://', '')}
                      </div>
                      <div className="w-6" />
                    </div>

                    {/* Screenshot */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                      <img
                        src={project.image}
                        alt={`${project.title} - ${project.subtitle}`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      
                      {/* Interactive Hover Overlay with Live Demo shortcut */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium backdrop-blur-[2px]"
                      >
                        <span className="px-4 py-2 rounded-xl bg-teal-500 text-slate-950 font-semibold text-sm flex items-center gap-2 shadow-lg">
                          Visit Live Site <ExternalLink className="w-4 h-4" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Details Container */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  {/* Badge */}
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-teal-400 uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Project {index + 1}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
                    {project.title}
                  </h3>
                  <div className="text-sm font-semibold text-teal-300 mb-4">
                    {project.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Highlighted Features */}
                  <div className="mb-6 space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Key Highlights:
                    </div>
                    {project.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-teal-400" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Badges */}
                  <div className="mb-7">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                      Technologies:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/80 border border-slate-700/70 text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Action Links */}
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-slate-950 transition-all duration-200 shadow-md shadow-teal-500/20 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 hover:bg-slate-700/80 text-white border border-slate-700/80 hover:border-slate-600 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
