import React from 'react'

const About = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git", "GitHub"
  ];
  return (
    <section id='about' className="min-h-screen font-mono flex items-center justify-center py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className='max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-400 to-indigo-600 bg-clip-text text-transparent text-center'>About Me
        </h2>

        <div className="p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all ">
          <p className="text-gray-300 mb-5 text-xl">
            I'm a passionate front-end developer with over 1 year of experience creating web applications that solve real-world problems. I love working with modern technologies and turning complex ideas into simple, beautiful solutions.
            <br />
            <br />
            When I'm not coding, you can find me exploring the latest tech trends or working on personal projects to sharpen my skills.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
            <h3 className='text-2xl text-center font-bold mb-8'>Tech Stack</h3>
            <div className="flex justify-center flex-wrap gap-2">{skills.map((skill, index) => (
                <span className='bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition' key={index}>{skill}</span>
              ))}
            </div>
          </div>
          <div className="p-6 hover:-translate-y-1 transition-all">
          <h3 className='text-2xl text-center font-bold mb-8'>Education
          </h3>
          <ul className='pl-5 list-disc list-inside text-lg text-gray-300'>
            <li className='mb-4'>
              <strong>
                <em>
                  Bachelor of Science in Computer Science - </em>
              </strong>
                  Cavite State University - Main Campus (2020 - 2025)
            </li>
            <li className='mb-4'> 
              <strong>
              <em>
                STEM - Senior High School -
              </em>
              </strong> Hillcrest Periwinkle School  (2018 - 2020)</li>
            <li className='mb-4'>
              <strong>
                <em>
                  Junior High School - 
                </em>
              </strong> Lumampong National High School (2014 - 2018)</li>
          </ul>
        </div>
        </div>

        <div className="p-6 hover:-translate-y-1 transition-all">
          <h3 className='text-2xl text-center font-bold mb-8'>Work Experience
          </h3>
          <ul className='pl-5 list-disc list-inside text-lg text-gray-300'>
            <li className='mb-4'>
              <strong>
                <em>
                  Customer Service Representative - Non-Voice
                </em>
              </strong>
              <br />
              Virtua Nova Venture Corp. (January 2025 - June 2025)
              <br />
              - Handled customer inquiries and provided solutions via chat.
              <br />
              - Maintained high customer satisfaction ratings through effective communication and problem-solving skills.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About