import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Contact = () => {
  const form = useRef()
  const [statusMessage, setStatusMessage] = useState('')
  const [isSending, setIsSending] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSending(true)
    setStatusMessage('')

    emailjs.sendForm(
      'service_pz3q3q7', 
      'template_yeicy9h', 
      form.current,
      'OPguZENg7GuWd_Ecz' 
    )
      .then((result) => {
        setStatusMessage('Message sent successfully!')
        setIsSending(false)
        form.current.reset()
        setTimeout(() => {
          setStatusMessage('')
        }, 3000)
      }, (error) => {
        setStatusMessage('Failed to send message. Please try again later.')
        setIsSending(false)
        setTimeout(() => {
          setStatusMessage('')
        }, 3000)
      })
  }

  return (
    <section id='contact' className="min-h-screen font-mono flex items-center justify-center py-20 relative bg-transparent">
      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 text-white z-10">
        <div className="space-y-8">
          <h2 className='text-4xl font-semibold mb-2 bg-gradient-to-r from-teal-300 to-indigo-700 bg-clip-text text-transparent'>
            Get In Touch
          </h2>
          <p className="text-gray-400 mb-8">
            Have a project in mind? Let&apos;s work together to bring your ideas to life!
          </p>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/5 rounded-full">
                <MdEmail size={24} />
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-400">turalde007@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/5 rounded-full">
                <MdPhone size={24} />
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-400">+63961-518-4113</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/5 rounded-full">
                <MdLocationOn size={24} />
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-gray-400">Indang, Cavite</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-6 mt-8">
            <a href="https://github.com/JuanTuraldeJr" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-purple-700 transition">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/juan-turalde-5aa5a9341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-purple-700 transition">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://www.facebook.com/share/18RFHQiHjG/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-purple-700 transition">
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-6 bg-transparent border border-gray-400 p-8 rounded-lg shadow-lg">
          <input
            type="text"
            id="name"
            name='name'
            placeholder='Your Name'
            required
            className="w-full bg-white/10 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            id="email"
            name='email'
            placeholder='Your Email'
            required
            className="w-full bg-white/10 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            id="message"
            name='message'
            rows="4"
            placeholder='Your Message'
            required
            className="w-full bg-white/10 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <button
            type="submit"
            disabled={isSending}
            className="w-full py-3 bg-white/5 rounded text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition disabled:opacity-50"
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
          {statusMessage && (
            <p className="mt-4 text-center font-semibold">{statusMessage}</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
