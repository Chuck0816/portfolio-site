import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors">
      <Header />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="px-5 py-10 text-center text-sm text-slate-500 sm:px-8">
        Built with React and Tailwind CSS. Designed for clear recruiter review.
      </footer>
    </div>
  );
}
