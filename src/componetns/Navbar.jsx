import React, { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Navbar = () => {
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
    <nav className={`fixed top-0 z-50 w-full transition duration-300 px-[7vw] md:px-[7vw] ${isScrolled ? 
 "   bg-[#1f1b3a]  bg-opacity-90 backdrop-blur-md shadow-md" : "bg-black"}`}>

      <div className="py-2 text-gray-300 flex justify-between items-center">
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
        <div className='hidden md:flex space-x-4'>
          <a className='text-gray-300 hover:text-indigo-500' href="https://github.com/Satyamyadav-dev" target="blank" relation="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a className='text-gray-300 hover:text-indigo-500' href="https://www.linkedin.com/in/satyam-yadav-99ab822a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* mobile menu  icon added*/}
        <div className='md:hidden'>
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
          <div className="absolute p-6  top-15 left-1/2 transform bg-blue-300/50 bg-opacity-100  backdrop-filter backdrop-blur-md rounded-lg   ">
            <ul className='flex flex-col py-4 space-x-4  '>
              {
                menuItem.map((item) => (
                  <li key={item.id} className={` text-black cursor-pointer hover:text-red-400  pl-5 ${activeSection === item.id ? "text-indigo-500" : ""}`}>
                    <button onClick={() => handleMenuItemClick(item.id)}>
                      {item.label}
                    </button>

                  </li>
                ))
              }

              <div className="flex space-x-4 items-center mx-auto">
                <a className='text-gray-300 hover:text-red-400' href="https://github.com/Satyam223103101" target="blank" relation="noopener noreferrer">
                  <FaGithub size={24} />
                </a>
                <a className='text-gray-300 hover:text-red-400' href="https://github.com/Satyam223103101" target="_blank" rel="noopener noreferrer">
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
