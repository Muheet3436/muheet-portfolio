import { ArrowUp, Code2 } from 'lucide-react';
import { personalInfo } from '../data/projects';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080d19] border-t border-slate-800/80 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/70">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg text-white">
                Abdul Al Muheet
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Frontend-Focused Full Stack Developer • 8th Semester CSE Student at International Islamic University Chittagong.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-teal-500/40 hover:bg-slate-800 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-teal-400 hover:border-teal-500/40 hover:bg-slate-800 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.contacts.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-slate-800 transition-colors"
              aria-label="WhatsApp Contact"
            >
              <WhatsappIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-teal-400 text-xs font-medium transition-all group"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Abdul Al Muheet. Built with React.js & Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            <a href="#hero" className="hover:text-slate-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-slate-300 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-slate-300 transition-colors">Projects</a>
            <a href="#education" className="hover:text-slate-300 transition-colors">Education</a>
            <a href="#publications" className="hover:text-slate-300 transition-colors">Publications</a>
            <a href="#contact" className="hover:text-slate-300 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
