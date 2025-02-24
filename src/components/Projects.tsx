import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
 
    {
      title: "NOAA Satellite Image Reception",
      description: "Successfully receiving satellite images from NOAA satellites using a Software Defined Radio. Currently working on establishing a weather station at my college to enhance meteorological data collection and analysis.",
      image: "/images/sate.jpg",
      github: '#',
      demo: '#',
      tags: ["Software Defined Radio", "NOAA", "Meteorology"]
    },
    {
      title: "Face Recognition Attendance System",
      description: "Developed a face recognition-based attendance marking system for schools using Raspberry Pi, webcam, and Python. The system automates attendance tracking through facial recognition technology.",
      image: "/images/face.jpg",
      github: '#',
      demo: '#',
      tags: ["Python", "Raspberry Pi", "OpenCV", "Face Recognition"]
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          My Projects
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Demo
                  </a>
                  <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <Star className="w-5 h-5" />
                    Star
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;