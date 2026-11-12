import { Navbar } from './components/sections/Navbar';
import { Home } from './components/sections/Home';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { About } from './components/sections/About';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <>
      <a href="#work" className="skip-link">Skip to main content</a>
      <Navbar />
      <main>
        <Home />
        <Projects />
        <Experience />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
