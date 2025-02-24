import { motion } from 'framer-motion';
import { Code, User, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const skills = [
    'Python',
    'AI Prompting',
    'Software Defined Radio',
  ];

  const hobbies = [
    {
      name: 'Photography',
      description: 'Capturing moments through the lens, specializing in nature and technology photography. I enjoy documenting my technical projects and exploring creative angles in photography.'
    },
    {
      name: 'Listening Music',
      description: 'Finding inspiration and relaxation in various genres of music. Music helps me stay focused during coding sessions and technical work.'
    },
    {
      name: 'Space Exploration',
      description: 'Passionate about astronomy and space technology. I actively track satellite passes and study space communications, which inspired my NOAA satellite reception project.'
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 rounded-lg shadow-xl p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Code className="w-8 h-8 text-blue-500" />
            About Me
          </h2>
          <p className="text-gray-300 mb-6">
            I am an Electronics and Communication Engineering student currently pursuing my 2nd year B.Tech. My passion lies at the intersection of hardware and software, where I explore innovative solutions in satellite communication, AI, and embedded systems. I've successfully implemented projects like satellite image reception using SDR and face recognition systems using Raspberry Pi.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-800 rounded-lg shadow-xl p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-blue-500" />
            Education
          </h2>
          <div>
            <h3 className="text-xl font-semibold text-blue-400">Sasi Institute of Technology and Engineering</h3>
            <p className="text-gray-400">Currently in 2nd Year of B.Tech in Electronics and Communication Engineering</p>
            <p className="text-gray-300 mt-2">
              Focusing on satellite communication, embedded systems, and AI integration in electronics.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-800 rounded-lg shadow-xl p-8 mb-8"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <User className="w-8 h-8 text-blue-500" />
            Hobbies & Interests
          </h2>
          <div className="space-y-6">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors"
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-2">{hobby.name}</h3>
                <p className="text-gray-300">{hobby.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gray-800 rounded-lg shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Award className="w-8 h-8 text-blue-500" />
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-700 rounded-lg p-4 text-center hover:bg-gray-600 transition-colors text-lg font-semibold"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;