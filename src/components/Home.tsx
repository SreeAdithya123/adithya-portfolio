
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen pt-16 flex flex-col justify-center items-center text-center px-4">
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        src="images/_MG_7593.jpg"
        alt="Profile"
        className="w-40 h-40 rounded-full mb-8 border-4 border-blue-500"
      />
      
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Hi, I'm Adithya
      </motion.h1>

      <div className="text-xl md:text-2xl text-gray-400 mb-8 h-[60px]">
        <TypeAnimation
          sequence={[
            'Tech Enthusiast',
            2000,
            'WildLife Photographer',
            2000,
            'Back bencher',
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex space-x-6"
      >
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
          <Github className="w-8 h-8" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
          <Linkedin className="w-8 h-8" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
          <Twitter className="w-8 h-8" />
        </a>
      </motion.div>
    </div>
  );
};

export default Home;