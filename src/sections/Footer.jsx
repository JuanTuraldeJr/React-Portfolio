import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-transparent text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Juan C.Turalde Jr. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
