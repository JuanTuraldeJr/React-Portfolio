import React, {useState} from 'react'
import Job from '../assets/Job.png';
import Color from '../assets/Color.png';
import Nike from '../assets/Nike.png';
import Lux from '../assets/Lux.png';
import Estate from '../assets/Estate.png';

const Project = () => {
  const [project] = useState([
    {
      image: Job,
      name: "Job Connector - Resume Builder",
      brief: "A web application that allows users to create and customize their resumes with ease. It offers a variety of templates and formatting options to help users create a professional-looking resume quickly.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      link: "https://job-connector.neocities.org/",
    },
    {
      image: Color,
      name: "Color Picker App",
      brief: "A web application that allows users to select and customize colors for their projects. It offers a variety of color palettes and tools to help users find the perfect color scheme.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://cp-project1.netlify.app/",
    },
    {
      image: Nike,
      name: "Nike Landing Page",
      brief: "A landing page for Nike that showcases their latest products and promotions. It features a sleek and modern design, with high-quality images and engaging content to capture the attention of visitors.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://nike-airforce.netlify.app/",
    },
    {
      image: Lux,
      name: "BlackLux - E-commerce Website",
      brief: "An e-commerce website that offers a wide range of luxury products, including clothing, accessories, and home decor. It features a user-friendly interface and secure payment options to provide a seamless shopping experience.",
      tech: ["HTML", "Tailwind CSS", "JavaScript"],
      link: "https://blacklux.netlify.app/",
    },
    {
      image: Estate,
      name: "Liveo - Real Estate Website",
      brief: "A real estate website that allows users to search for properties, view listings, and connect with real estate agents. It features a comprehensive database of properties and advanced search filters to help users find their dream home.",
      tech: ["HTML", "Tailwind CSS", "JavaScript"],
      link: "https://liveo.netlify.app/",
    },
  ]);
  return (
    <section id='project' className="min-h-screen font-mono flex items-center justify-center py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className='max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-400 to-indigo-600 bg-clip-text text-transparent text-center'>
          Features Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.map((project, index) => (
            <div key={index} className="p-6 rounded-xl flex flex-col items-center text-center bg-transparent border-2 hover:border-blue-500/30 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-semibold mb-4">{project.name}
              </h3>
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-lg mb-4"/>
              <p className="text-gray-300 mb-4">{project.brief}</p>
              <div className="flex flex-wrap justify-center sm:items-center gap-2 mb-4">
                {project.tech && project.tech.map((tech, index) => (
                  <span key={index} className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-6 py-2 bg-transparent text-white rounded-lg hover:bg-purple-700 transition">
                    View Project
                  </a>
                </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}


export default Project