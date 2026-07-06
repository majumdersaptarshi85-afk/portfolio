import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ExperienceTimeline from './components/ExperienceTimeline'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FishBackground from './components/FishBackground'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100">
      <FishBackground />
      <CustomCursor />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.14),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),_transparent_28%)]" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-20">
        <Navbar />
        <main className="space-y-24 pt-8">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <ExperienceTimeline />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
