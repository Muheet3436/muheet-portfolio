import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-100 flex flex-col selection:bg-teal-500/20 selection:text-teal-300">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Research />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
