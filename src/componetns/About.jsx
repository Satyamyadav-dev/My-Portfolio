import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Tilt from 'react-parallax-tilt'
import profileImage from '../assets/profile image/professional.jpg'

export const About = () => {
  return (
    <section id='about' className="py-4 px-[7vw] md:px-[7vw] font-sans  mt-10 md:mt-10 lg:mt-11  ">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center" >
        {/* left-side */}
        <div className="w-full  sm:w-full text-center md:text-left pt-10 md:mt-0">
          {/* Greeting */}
          <h1 className=" text-3xl sm:text-5xl md:text-5xl text-white font-bold mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* name */}
          <h2 className=" text-2xl sm:text-5xl md:text-4xl text-white font-bold leading-tight mb-2 " >
            Satyam Yadav
          </h2>
          <h3 className="text-xl sm:text-3xl md:text-3xl font-semibold mb-4 leading-tight  " >
            <span className="text-white w-full ">
              I am a &nbsp;
            </span>
            {/* typingeffect */}
            <TypeAnimation
              sequence={[
                // Text, delay (in ms)
                'Fullstack Developer', 2000,
                'AI & ML Enthusiast', 2000,
                'coder', 2000
              ]}
              speed={50} // Typing speed
              repeat={Infinity}
              wrapper="span"
              style={{ display: 'inline-block', color: '#6366f1' }} // Tailwind indigo-600 HEX
              cursor={true}
            />
          </h3>
          {/* about me pareagragh */}
          <p className='text-base mb-10 sm:text-light md:text-light leading-relaxed text-gray-300 mt-10 text-justify md:text-left' style={{ textJustify: "inter-word", hyphens: "auto" }}>
            I am a passionate technologist currently pursuing a degree in Computer Engineering at <a href="https://www.google.com/search?q=vcet&oq=vcet&gs_lcrp=EgZjaHJvbWUyDAgAEEUYORixAxiABDIHCAEQLhiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDE1MDVqMGo3qAIIsAIB8QVMMNHQDMHfbw&sourceid=chrome&ie=UTF-8 " className='text-red-500' target='_blank' relation="noopener noreferrer" > VCET </a>. My enthusiasm lies in building impactful digital solutions, with a strong focus on  <span className='text-green-400' > full-stack development</span>. I continuously strive to expand my knowledge and skills in both frontend and backend technologies to create seamless and efficient user experiences.
          </p>

          <a className='inline-block text-white py-2 px-8 rounded-full mt-5 md:text-lg text-[13px] font-semibold md:font-bold  transition duration-300  tranform hover:scale-105 ' target='_blank' rel='noopener noreferrer'
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec , 0 0 40px #8245ec'

            }}

            href="https://drive.google.com/file/d/1MmAqG8THsuRYMVt0OAtZHnj9--2bDktu/preview" >DOWNLOAD CV</a>

        </div>

        {/* right sidde image */}
        <div className="md:w-1/2 flex justify-center md:justify-end  " >
          <Tilt
            className="w-48 h-48 sm:w-64 md:w-[20rem] md:h-[20rem] border-4 border-purple-700 rounded-full "
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            transitionSpeed={1000}

            gyroscope={true}

          >


            <img className=" w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5 )]" src={profileImage} alt="satyam Yadav" />
          </Tilt>

        </div>

      </div>

    </section>
  )
}
