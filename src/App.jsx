import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Achievements from './components/Achievements'
import TopButton from './components/TopButton'

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      </div>
      
      <div className="container mx-auto px-8">
      <Navbar/>
      <Hero/>
      <About />
      <Technologies/>
      <Experience/>
      <Projects/>
      <Achievements/>
      <Contact/>
      <TopButton/>
      </div>
    
    </div>
  )
}


export default App