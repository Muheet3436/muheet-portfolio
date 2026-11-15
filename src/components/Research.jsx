import { Award, Calendar, CheckCircle2, FileText, HeartPulse, Cpu, ExternalLink, FileCheck } from 'lucide-react';
import { publicationData } from '../data/projects';
import { IeeeIcon } from './Icons';

export default function Research() {
  return (
    <section id="publications" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[350px] bg-teal-500/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono font-medium uppercase tracking-wider mb-3">
            <span>Research & Academia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Publications
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Peer-reviewed research paper successfully presented at an international IEEE conference.
          </p>
        </div>

        {/* Publication Card */}
        <div className="relative group rounded-3xl p-8 sm:p-10 bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 transition-all duration-300 shadow-xl">
          {/* Subtle Ambient Hover Glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-start gap-6 lg:gap-8">
            
            {/* Research / IEEE Icon Box */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-teal-500/20 to-emerald-500/10 border border-teal-500/30 flex items-center justify-center shrink-0 shadow-lg shadow-teal-500/10">
              <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-teal-400" />
            </div>

            {/* Details */}
            <div className="flex-1">
              
              {/* Badges Strip */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{publicationData.status}</span>
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono font-medium">
                  <Award className="w-3.5 h-3.5 text-teal-400" />
                  <span>Paper ID: {publicationData.paperId}</span>
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{publicationData.presentationDate}</span>
                </span>
              </div>

              {/* Research Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug group-hover:text-teal-200 transition-colors">
                "{publicationData.title}"
              </h3>

              {/* Conference Name */}
              <div className="text-sm sm:text-base font-semibold text-teal-400 mb-4 flex items-center gap-2 flex-wrap">
                <IeeeIcon className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{publicationData.conference}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {publicationData.description}
              </p>

              {/* Bottom Section: Topic Chips & Action Button */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-1">Focus Topics:</span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800/90 border border-slate-700 text-xs text-slate-300">
                    <Cpu className="w-3 h-3 text-teal-400" />
                    Multilayer Perceptron (MLP)
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800/90 border border-slate-700 text-xs text-slate-300">
                    <HeartPulse className="w-3 h-3 text-rose-400" />
                    Heart Disease Prediction
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800/90 border border-slate-700 text-xs text-slate-300">
                    Clinical Data
                  </span>
                </div>

                {/* View Presentation Certificate Button */}
                <div className="shrink-0">
                  <a
                    href={publicationData.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-slate-950 transition-all duration-200 shadow-md shadow-teal-500/20 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <FileCheck className="w-4 h-4" />
                    <span>View Presentation Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
