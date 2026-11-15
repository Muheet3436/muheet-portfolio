import { GraduationCap, MapPin, Calendar, BookOpen, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/projects';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#0a0f1d]/60 border-y border-slate-800/60">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-teal-500/5 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono font-medium uppercase tracking-wider mb-3">
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Formal university education and ongoing undergraduate studies in Computer Science and Engineering.
          </p>
        </div>

        {/* Education Card */}
        <div className="relative group rounded-3xl p-8 sm:p-10 bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 transition-all duration-300 shadow-xl">
          {/* Subtle Ambient Hover Glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-start gap-6 lg:gap-8">
            
            {/* Institution Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-teal-500/20 to-emerald-500/10 border border-teal-500/30 flex items-center justify-center shrink-0 shadow-lg shadow-teal-500/10">
              <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-teal-400" />
            </div>

            {/* Details */}
            <div className="flex-1">
              
              {/* Header Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                  {educationData.status}
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {educationData.location}
                </span>
              </div>

              {/* Degree Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">
                {educationData.degree}
              </h3>

              {/* Institution Name */}
              <div className="text-base sm:text-lg font-medium text-teal-300 mb-5">
                {educationData.institution}
              </div>

              {/* Core Academic Focus */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-teal-400" />
                  <span>Key Coursework & CS Fundamentals:</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {educationData.focusAreas.map((area, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-slate-800/40 p-2.5 rounded-lg border border-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transparent Note */}
              <div className="mt-6 flex items-center gap-2 text-xs text-slate-400 bg-slate-950/40 px-3.5 py-2 rounded-lg border border-slate-800">
                <Calendar className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Currently enrolled in 8th Semester (Final Year Undergraduate).</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
