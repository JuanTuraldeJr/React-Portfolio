import React from 'react'
import profile from '../assets/juan.jpg'
import {FiDownload} from 'react-icons/fi'
import Resume from '../assets/Resume.pdf'

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center lg:flex-row-reverse gap-9 lg:gap-15">
      <div className="text-center z-10 px-4 ">
        <img className='w-80 h-80 border-0 mt-20 shadow-lg rounded-full shadow-gray-500/70 lg:m-0 lg:max-w-100 object-cover object-primary hover:translate-y-1 transition-all' src={profile} alt="Profile"/>
      </div>
      <div className="text-center font-mono z-10 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl lg:max-w-w[500px] font-semibold mb-6 px-1 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent leading-right">
          I am Juan Turalde
        </h1>
        <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
          I am Frontend Developer who loves creation interactive, scalable web applications. My purpose is to build solutions that offer dynamic UI, high performance and delightful UX.</p>
          <div className="flex justify-center items-center space-x-4">
            <a href="#contact" className="bg-gradient-to-r flex flex-row items-center justify-center from-purple-600 to-blue-600 py-3 px-8 rounded-full hover:from-purple-700 hover:to-blue-700 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] font-bold transition relative overflow-hidden text-white">
              Contact Me
            </a>
            <a href={Resume} className="bg-gradient-to-r flex flex-row items-center justify-center from-purple-600 to-blue-600 py-3 px-8 rounded-full hover:from-purple-700 hover:to-blue-700 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] font-medium transition relative overflow-hidden text-white" download>
              <p>Download CV</p>
              <span className="h-5 ml-3 text-2xl text-white"><FiDownload/></span>
            </a>
          </div>
      </div>
    </section>
  )
}

export default Home