import React from 'react'
import {education} from '../constants'

export const Education = () => {
  return (
    <section
                id="education"
                className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
            >
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
                    <div className="w-32 h-1 bg-indigo-600 rounded-2xl mx-auto mt-4"></div>
                    <p className="text-gray-400 mt-4 text-sm font-semibold">
                        My education has been a journey of learning and development. Here are the details of my academic background
                    </p>
                </div>
    
                {/* Education Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full z-0 rounded-2xl "></div>
    
                    {/* Experience Entries */}
                    {education.map((edu, index) => (
                        <div
                            key={edu.id}
                            className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                                }`}
                        >
                            {/* Timeline Circle */}
                            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-0 ">
                                <img
                                    src={edu.img}
                                    alt={edu.school}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
    
                            {/* Content Section */}
                            <div className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] border-1 border-gray-300 bg-gray-900 backdrop-blur-md ${index % 2 === 0 ? 'sm:mr-10 sm:ml-0' : 'sm:ml-10 sm:mr-0'
                                } ml-8 transform transition-transform duration-300 hover:scale-105`}>
    
                                {/* Flex container for image and text */}
                                <div className="flex items-center space-x-6">
                                    {/* Company Logo/Image */}
                                    <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                                        <img
                                            src={edu.img}
                                            alt={edu.school}
                                            className="w-full h-full object-cover rounded-full " />
                                    </div>
    
                                    {/* Degree , school and Date */}
                                    <div className="flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-[14px] sm:text-[17px] pb-2 font-semibold text-white">
                                                {edu.degree}
                                            </h3>
                                            <h4 className="text-md sm:text-sm text-gray-300">
                                                {edu.school}
                                            </h4>
                                        </div>
                                        {/* Date at the bottom */}
                                        <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                                    </div>
                                </div>
    
                                <p className="mt-4 text-gray-400 font-bold ">Current CGPA: {edu.grade}</p>
                                <p className='mt-4 text-gray-400 text-[14px]' >{edu.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
  )
}
