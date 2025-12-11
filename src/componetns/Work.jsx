// import React, { useState } from 'react'
import React, { useState, useEffect } from 'react'

import { projects } from '../constants'

export const Work = () => {
  const [selectedProject, setselectedProject] = useState(null);

  const handleOpenModel = (project) => {
    setselectedProject(project);
  }

  const handleCloseModel = (project) => {
    setselectedProject(null);
  }

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);


  return (
    <section id='work' className=' w-full py-15 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient'>

      <div className='mx-auto text-center mb-16' >
        <h2 className='text-4xl font-bold text-white' >PROJECT</h2>
        <div className=' w-24 h-1 bg-indigo-600 rounded-2xl mt-2 mx-auto ' ></div>
        <p className='text-gray-400 font-semibold text-sm mt-4  ' >A showcase of the projects I have worked on, highlighting my skills and experience in various technologies</p>
      </div>

      {/* project grid */}

      <div className='grid gap-12 grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>

        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModel(project)}
            className='border-2 border-white bg-gray-900 backdrop-blur-md rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-lg hover:shadow-indigo-500/50 hover:-translate-y-2 transition transform duration-300'
          >
            <div className='p-4 ' >
              <img
                className='w-full h-48 object-cover rounded-xl'
                src={project.image}
                alt={project.title}
              />
            </div>
            <div className='p-6' >
              <h3 className='text-white font-semibold  ' >{project.title}</h3>
              <p className='text-gray-300 pt-4 text-[10px] line-clamp-3 ' > {project.description} </p>
              <div className='mb-4' >
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className='inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2'
                  >
                    {tag}

                  </span>

                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 overflow-auto py-10 px-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-[80%] md:h-[90vh] max-w-3xl p-6 relative">
            <button
              onClick={handleCloseModel}
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-red-500 transition duration-200"
            >
              X
            </button>

            {/* modal content goes here */}
            <div className='flex flex-col p-4'>
              {/* image */}
              <div className='w-full flex justify-center bg-gray-900 px-4 mb-6'>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className='md:w-full rounded-2xl w-[95%] shadow-2xl'
                />
              </div>

              {/* text-content */}
              <div className='p-6'>
                <h3 className='text-white font-semibold'>{selectedProject.title}</h3>
                <p className='text-gray-300 pt-4 text-xs'>{selectedProject.description}</p>
                <div className='flex flex-wrap mb-2 mt-2'>
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className='inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* buttons */}
                <div className='flex gap-4'>
                  <a
                    className='w-1/2 text-center bg-gray-500 md:text-xl text-gray-400 hover:bg-indigo-500 px-2 py-1 rounded-xl border-1 hover:shadow-indigo-500/50 hover:shadow-md transition duration-300 border-teal-300 text-[17px] font-semibold hover:scale-105 '
                    href={selectedProject.github}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    View Code
                  </a>

                  <a
                    href={selectedProject.webapp}
                    rel='noopener noreferrer'
                    className='w-1/2 text-center bg-gray-500 text-xl text-gray-400 hover:bg-indigo-500 px-2 py-1 rounded-xl border-1 hover:shadow-indigo-500/50 hover:shadow-md transition duration-300 hover:scale-105 border-teal-300 font-semibold   '
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


    </section >

  )
}

