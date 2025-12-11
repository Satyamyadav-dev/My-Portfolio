import React from 'react'
import { SkillsInfo } from '../constants'
import Tilt from 'react-parallax-tilt'

export const Skills = () => {
  return (
    <section id='skills' className='py-24 pb-10 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans clip-path-custom'>
      <div className='text-center mb-8'>
        <h2 className='text-3xl sm:text-4xl font-bold text-white'>SKILLS</h2>
        <div className='bg-indigo-600 h-1 w-24 mt-2 mx-auto rounded-2xl'></div>
        <p className='text-gray-300 mt-4 mb-7 font-medium text-[14px]'>
          A set of technical skills and knowledge developed through hands-on projects and continuous learning.
        </p>
      </div>

      {/* skills category */}
      <div className='flex flex-wrap gap-4 lg:gap-6'>
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className='bg-gray-900 backdrop-blur-md px-6 py-8 sm:px-10 sm:py-8 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]'
          >
            <h3 className='text-xl sm:text-2xl font-semibold text-center text-gray-400 mb-4'>
              {category.title}
            </h3>

            {/* Skill items */}
            <Tilt
           
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={500}
            transitionSpeed={2000}
            gyroscope={true}

          >
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 w-full'>
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className='flex flex-col items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-2xl py-2 px-2'
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <span className="text-xs text-gray-300 sm:text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
             </Tilt>
            
          </div>
          
        ))}
      </div>
     
    </section>
  )
}
