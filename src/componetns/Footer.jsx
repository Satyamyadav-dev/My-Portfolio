import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaTwitter,  } from 'react-icons/fa'

export const Footer = () => {

  const handleScroll = (sectionid) => {
    const sectionId = document.getElementById(sectionid)
    if (sectionId) {
      sectionId.scrollIntoView({ behavior: 'smooth' })
    }

  }

  return (
    <footer className='text-white py-6 px-[12vw] md:px-[7vw] lg:px-[20vw]  ' >
      <div className='mx-auto text-center' >
        <div className='text-purple-500 text-base font-semibold' >Satyam Yadav</div>
        <nav className=' flex flex-wrap justify-center text-white text-sm space-x-4' >
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Project", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className='hover:text-indigo-500 text-sm sm:text-[13px] my-1 hover:cursor-pointer  '
            >
              {item.name}

            </button>
          ))

          }

        </nav>

        {/* social media icons */}
        <div className='flex flex-wrap space-x-2 justify-center  mt-2  ' >
          <a href="https://www.linkedin.com/in/satyam-yadav-99ab822a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className=" text-white  text-sm hover:text-purple-500 hover:cursor-pointer" target="_blank" rel="noopener noreferrer" > <FaLinkedin /> </a>

          <a href="https://github.com/Satyamyadav-dev" target="_blank" className=' text-white text-sm hover:text-purple-500 hover:cursor-pointer target="_blank" rel="noopener noreferrer"' > <FaGithub /> </a>

        </div>
        <p className="text-xs text-gray-400 mt-6">
          &copy; {new Date().getFullYear()} Satyam Yadav. All rights reserved.
        </p>

      </div>

    </footer>
  )
}
