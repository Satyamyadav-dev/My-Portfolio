import React, { useState } from 'react'
import { Navbar } from './componetns/Navbar'
import { Education } from './componetns/Education'
import { About } from './componetns/About'
import { Contact } from './componetns/Contact'
import { Work } from './componetns/Work'
import { Footer } from './componetns/Footer'
import { BlurBlob } from '../BlurBlob'
import { Skills } from './componetns/Skills'
import { Experience } from './componetns/Experience'

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <div className={`${isDarkMode ? 'bg-[#050414]' : 'bg-slate-50'} min-h-screen transition-colors duration-300 ${isDarkMode ? '' : 'light-theme'}`}>
      {/* ✅ Fix the size prop */}
      <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />
      <div className="absolute inset-0 
  [background-image:linear-gradient(to_right,_#4f4f4f33_1px,_transparent_1px),linear-gradient(to_bottom,_#4f4f4f33_1px,_transparent_1px)] 
  [background-size:14px_24px] 
  [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,_#000,_transparent_100%)] 
  pointer-events-none portfolio-grid">
      </div>


      <div className='relative pt'>
        <Navbar
          isDarkMode={isDarkMode}
          onToggleTheme={() => setIsDarkMode((darkMode) => !darkMode)}
        />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>

    </div>

  )
};
