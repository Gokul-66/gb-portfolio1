
import './App.css';
import { useState } from 'react';
import { LoadingScreen } from './components/Loading';
import "./index.css";
import { Navbar } from './components/sections/Navbar';
import { MobileNavbar } from './components/sections/MobileNavbar';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import React from "react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return <>
  {!isLoaded && <LoadingScreen  onComplete={()=> setIsLoaded(true)}/>}{''}
    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} text-slate-100 relative overflow-hidden`}>
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 app-background" />
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-blue-500/15 blur-[130px]" />
        <div className="absolute top-1/3 -left-28 h-[24rem] w-[24rem] rounded-full bg-cyan-400/10 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-indigo-500/15 blur-[140px]" />
      </div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
    </div>
  </>

}

export default App
  
