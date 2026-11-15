import { ArrowRight, Mail, MapPin, Sparkles, Trophy } from 'lucide-react';
import profilePhoto from '../assets/profile/photo.png';
import { personalInfo } from '../data/projects';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './Icons';

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-teal-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-32 w-[350px] h-[350px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      
      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Information */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-teal-500/30 text-teal-300 text-xs sm:text-sm font-medium mb-6 shadow-sm shadow-teal-500/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span>8th Semester CSE Student • Frontend Enthusiast</span>
            </div>

            {/* Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.15]">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-400">
                {personalInfo.name}
              </span>
            </h1>

            {/* Title / Role */}
            <div className="text-xl sm:text-2xl font-semibold text-slate-200 mb-5 flex items-center gap-2 flex-wrap">
              <span>{personalInfo.title}</span>
            </div>

            {/* Honest Bio */}
            <p className="text-base sm:text-lg text-slate-300 mb-6 leading-relaxed max-w-2xl">
              Currently in my 8th semester pursuing a <strong className="text-white font-medium">BSc in Computer Science and Engineering</strong> at{' '}
              <span className="text-teal-300 font-medium">{personalInfo.institution}</span>.
              My primary focus is on <span className="text-white font-medium">Frontend Development</span> with React.js, crafting responsive and intuitive user interfaces while keeping strong foundational skills in backend services, databases, and core programming.
            </p>

            {/* Personal Touch / Interests Pill Strip */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/70 border border-slate-800 text-xs text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                <span>Building Practical Apps</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/70 border border-slate-800 text-xs text-slate-300">
                <Trophy className="w-3.5 h-3.5 text-emerald-400" />
                <span>Football & Cricket</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/70 border border-slate-800 text-xs text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 transition-all duration-300 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/35 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
              >
                <span>Get in Touch</span>
                <Mail className="w-4 h-4 text-teal-400" />
              </a>
            </div>

            {/* Social Links & Quick Connect */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80 w-full">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.contacts.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-teal-500/40 hover:bg-slate-800 transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.contacts.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-teal-400 hover:border-teal-500/40 hover:bg-slate-800 transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.contacts.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-slate-800 transition-all duration-200"
                  aria-label="WhatsApp Contact"
                >
                  <WhatsappIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.contacts.email}`}
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-teal-400 hover:border-teal-500/40 hover:bg-slate-800 transition-all duration-200"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Picture Visual */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
            <div className="relative group w-72 sm:w-80 md:w-88 lg:w-96">
              
              {/* Outer decorative gradient border & glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-teal-500 via-emerald-500 to-teal-400 rounded-3xl opacity-75 blur-md group-hover:opacity-100 transition duration-500 group-hover:blur-lg" />
              
              {/* Image Frame Card */}
              <div className="relative bg-[#0d1527] rounded-3xl p-3 border border-slate-700/60 shadow-2xl overflow-hidden">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 relative">
                  <img
                    src={profilePhoto}
                    alt="Abdul Al Muheet"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Decorative Corner Accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-teal-400 rounded-tl-lg pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-emerald-400 rounded-br-lg pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
