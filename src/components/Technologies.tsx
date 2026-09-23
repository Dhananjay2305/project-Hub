import React from 'react';
import { motion } from 'framer-motion';
import { Blocks } from 'lucide-react';
import { 
  SiHtml5, SiJavascript, SiTypescript, 
  SiReact, SiNodedotjs, SiGithub 
} from 'react-icons/si';
import { FaBrain, FaRobot, FaMicrochip, FaCss3Alt as SiCss3 } from 'react-icons/fa';

export const Technologies: React.FC = () => {
  const technologies = [
    { name: 'HTML', icon: <SiHtml5 size={40} className="text-[#E34F26]" /> },
    { name: 'CSS', icon: <SiCss3 size={40} className="text-[#1572B6]" /> },
    { name: 'JavaScript', icon: <SiJavascript size={40} className="text-[#F7DF1E]" /> },
    { name: 'TypeScript', icon: <SiTypescript size={40} className="text-[#3178C6]" /> },
    { name: 'React', icon: <SiReact size={40} className="text-[#61DAFB]" /> },
    { name: 'Node.js', icon: <SiNodedotjs size={40} className="text-[#339933]" /> },
    { name: 'AI', icon: <FaBrain size={40} className="text-purple-500" /> },
    { name: 'Machine Learning', icon: <FaRobot size={40} className="text-blue-500" /> },
    { name: 'IoT', icon: <FaMicrochip size={40} className="text-green-600" /> },
    { name: 'GitHub', icon: <SiGithub size={40} className="text-gray-900 dark:text-white" /> },
  ];

  return (
    <section id="technologies" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
            <Blocks className="mr-3 text-primary-500" size={32} />
            Technologies & Tools
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The skills, tools and technologies I use to build robust and scalable web applications and AI solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {technologies.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 transform transition-transform group-hover:scale-110">
                {tech.icon}
              </div>
              <span className="font-medium text-gray-700 dark:text-gray-300 text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
