import React from 'react'
import { MdClose } from 'react-icons/md'

const MobileMenu = ({isMenuOpen, setIsMenuOpen}) => {
  return (
    <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 gap-15 ease-in-out ${isMenuOpen ? 'h-screen opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'}`}>
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-5 right-7 text-2xl focus:outline-none cursor-pointer" aria-label='Close Menu'>
            <MdClose/>
        </button>
        <a onClick={() => setIsMenuOpen(false)} href="#home" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${isMenuOpen 
        ? "opacity-100 translate-y-0" 
        : "opacity-0 translate-y-5"}`}>Home</a>
        <a onClick={() => setIsMenuOpen(false)} href="#about" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${isMenuOpen 
        ? "opacity-100 translate-y-0" 
        : "opacity-0 translate-y-5"}`}>About</a>
        <a onClick={() => setIsMenuOpen(false)} href="#project" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${isMenuOpen 
        ? "opacity-100 translate-y-0" 
        : "opacity-0 translate-y-5"}`}>Project</a>
        <a onClick={() => setIsMenuOpen(false)} href="#contact" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${isMenuOpen 
        ? "opacity-100 translate-y-0" 
        : "opacity-0 translate-y-5"}`}>Contact</a>
    </div>
  )
}

export default MobileMenu