import { useState } from 'react';
import { LoadingScreen } from './components/Loading';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/sections/Navbar';
import { Home } from './components/sections/Home';
import { ServicesTicker } from './components/sections/ServicesTicker';
import { Projects } from './components/sections/Projects';
import { SkillsTicker } from './components/sections/SkillsTicker';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoaded(true)} />

      <div
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {/* Top 2px Rainbow Scroll Progress Bar & Floating Social Bar */}
        <ScrollProgress />

        {/* Global Navigation */}
        <Navbar />

        {/* Main Sections */}
        <main>
          {/* 01: Hero Section */}
          <Home />

          {/* Kinetic Big Text Services Banner */}
          <ServicesTicker />

          {/* 02: Interactive Featured Projects (Signature Scrubber) */}
          <Projects />

          {/* Dual-Track Infinite Skills Marquee */}
          <SkillsTicker />

          {/* 03: About & Technical Capabilities */}
          <About />

          {/* 04: Experience & Milestones */}
          <Experience />

          {/* 05: Testimonials & Recommendations */}
          <Testimonials />

          {/* 06: Contact & Large Interactive Email Card */}
          <Contact />
        </main>

        {/* Signature Watermark Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
