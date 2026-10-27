import React, { useEffect, useState } from 'react'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Navbar = ({ isDarkMode, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsscrolled] = useState(false)


  // for smoothess 
const handleMenuItemClick = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
  setActiveSection(sectionId);
  setIsOpen(false); // Corrected from isOpen(false)
};


  useEffect(() => {
    const handleScroll = () => {
      setIsscrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)


  }, [])

  const menuItem = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },

  ]


  return (
    <nav className={`fixed top-0 z-50 w-full transition duration-300 px-[7vw] md:px-[7vw] ${
      isDarkMode
        ? isScrolled ? "bg-[#1f1b3a]/90 backdrop-blur-md shadow-md" : "bg-black"
        : "bg-slate-50/90 backdrop-blur-md shadow-md"
    }`}>

      <div className={`py-2 flex justify-between items-center ${isDarkMode ? 'text-gray-300' : 'text-slate-700'}`}>
        {/* logo */}
        <div className="   text-lg font-semibold cursor-pointer">
          <span className="text-indigo-600">&lt;</span>
          <span className="text-white">Satyam</span>
          <span className="text-indigo-600">/</span>
          <span className="text-white">Yadav</span>
          <span className="text-indigo-600">&gt;</span>
        </div>

        <ul className= "hidden md:flex justify-between items-center  space-x-5  font-normal" >
          {
            menuItem.map((item) => (
              <li key={item.id} className={` hover:text-indigo-600 ${activeSection === item.id ? "text-indigo-500" : ""}`} >
                <button className='cursor-pointer'  onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
              </li>
            ))
          }

        </ul>

        {/* social media icons */}
        <div className='hidden md:flex space-x-4 items-center'>
          <a className={`hover:text-indigo-500 ${isDarkMode ? 'text-gray-300' : 'text-slate-700'}`} href="https://github.com/Satyamyadav-dev" target="blank" relation="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a className={`hover:text-indigo-500 ${isDarkMode ? 'text-gray-300' : 'text-slate-700'}`} href="https://www.linkedin.com/in/satyam-yadav-99ab822a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <button
            type="button"
            onClick={onToggleTheme}
            className={`p-1 rounded-full transition-colors hover:text-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${isDarkMode ? 'text-gray-300' : 'text-slate-700'}`}
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          >
            {isDarkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
          </button>
        </div>

        {/* mobile menu  icon added*/}
        <div className='md:hidden flex items-center gap-4'>
          <button
            type="button"
            onClick={onToggleTheme}
            className={`p-1 rounded-full transition-colors hover:text-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${isDarkMode ? 'text-gray-300' : 'text-slate-700'}`}
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          >
            {isDarkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
          </button>
          {
            isOpen ? (
              <FiX className='text-3xl text-indigo-500 cursor-pointer'
                onClick={() => setIsOpen(false)} />
            ) : (
              <FiMenu className="text-3xl text-indigo-500 cursor-pointer"
                onClick={() => setIsOpen(true)} />
            )
          }

        </div>
      </div>

      {/* mobile menu item  */}

      {
        isOpen && (
          <div className={`absolute p-6 top-15 left-1/2 transform backdrop-filter backdrop-blur-md rounded-lg ${isDarkMode ? 'bg-blue-300/50' : 'bg-white/95 shadow-lg'}`}>
            <ul className='flex flex-col py-4 space-x-4  '>
              {
                menuItem.map((item) => (
                  <li key={item.id} className={`cursor-pointer hover:text-indigo-500 pl-5 ${isDarkMode ? 'text-black' : 'text-slate-700'} ${activeSection === item.id ? "text-indigo-500" : ""}`}>
                    <button onClick={() => handleMenuItemClick(item.id)}>
                      {item.label}
                    </button>

                  </li>
                ))
              }

              <div className="flex space-x-4 items-center mx-auto">
                <a className={`hover:text-indigo-500 ${isDarkMode ? 'text-gray-300' : 'text-slate-700'}`} href="https://github.com/Satyam223103101" target="blank" relation="noopener noreferrer">
                  <FaGithub size={24} />
                </a>
                <a className={`hover:text-indigo-500 ${isDarkMode ? 'text-gray-300' : 'text-slate-700'}`} href="https://github.com/Satyam223103101" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} />
                </a>


              </div>
            </ul>

          </div>

        )
      }

    </nav>
  )
}
