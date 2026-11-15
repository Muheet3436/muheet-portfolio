import { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, Send, MessageSquare, MapPin } from 'lucide-react';
import { personalInfo } from '../data/projects';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './Icons';

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(subject || 'Portfolio Inquiry');
    const mailtoBody = encodeURIComponent(
      `Hello Abdul Al Muheet,\n\n${message}\n\nFrom: ${senderName || 'Visitor'}`
    );
    window.location.href = `mailto:${personalInfo.contacts.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0a0f1d]/60 border-t border-slate-800/60">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-500/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono font-medium uppercase tracking-wider mb-3">
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact Information
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Interested in working together or discussing frontend development opportunities? Reach out through any channel below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 transition-all duration-200 group flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-4 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                  Email Address
                </div>
                <div className="text-base font-semibold text-white truncate mb-2">
                  {personalInfo.contacts.email}
                </div>
              </div>
              <div className="flex items-center gap-2 pt-3 border-t border-slate-800/80">
                <a
                  href={`mailto:${personalInfo.contacts.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 text-xs font-medium border border-teal-500/20 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard(personalInfo.contacts.email, 'email')}
                  className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-colors flex items-center gap-1.5"
                  title="Copy email address"
                >
                  {copiedType === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
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

            {/* WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all duration-200 group flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-105 transition-transform">
                  <WhatsappIcon className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                  WhatsApp
                </div>
                <div className="text-base font-semibold text-white mb-2">
                  {personalInfo.contacts.whatsapp}
                </div>
              </div>
              <div className="flex items-center gap-2 pt-3 border-t border-slate-800/80">
                <a
                  href={personalInfo.contacts.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-xs font-medium border border-emerald-500/20 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat Now</span>
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard(personalInfo.contacts.whatsapp, 'whatsapp')}
                  className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-colors flex items-center gap-1.5"
                  title="Copy phone number"
                >
                  {copiedType === 'whatsapp' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
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

            {/* LinkedIn Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 transition-all duration-200 group flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-4 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                  LinkedIn Profile
                </div>
                <div className="text-base font-semibold text-white mb-2">
                  Abdul Al Muheet
                </div>
              </div>
              <div className="pt-3 border-t border-slate-800/80">
                <a
                  href={personalInfo.contacts.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
                >
                  <span>View LinkedIn Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 transition-all duration-200 group flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-4 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                  GitHub Profile
                </div>
                <div className="text-base font-semibold text-white mb-2">
                  @Muheet3436
                </div>
              </div>
              <div className="pt-3 border-t border-slate-800/80">
                <a
                  href={personalInfo.contacts.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
                >
                  <span>Explore GitHub Code</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Direct Email Composer (5 cols) */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800/90 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">
                Quick Message
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 mb-5 leading-relaxed">
              Fill in your details below to open a pre-filled email draft directly to <span className="text-teal-300 font-mono">{personalInfo.contacts.email}</span>.
            </p>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g. John Doe"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/40 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="e.g. Frontend Opportunity / Inquiry"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/40 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="3"
                  placeholder="Write your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/40 transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-slate-950 shadow-md shadow-teal-500/20 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>Compose & Send Email</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
