import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Volunteering from './components/Volunteering';
import Training from './components/Training';

function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <div className="font-inter bg-light dark:bg-dark text-gray-900 dark:text-gray-100 transition">
      <Navbar toggleTheme={() => setDark(!dark)} isDark={dark} />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Training />
        <Projects />
        <Certifications />
        <Volunteering />
        
        {/* Contact section */}
        <Contact />

      </main>
    </div>
  );
}

export default App;
