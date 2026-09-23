import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Sprout, Star, Users, FolderKanban } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { icon: <FolderKanban size={24} className="text-primary-500" />, value: '23+', label: 'Projects' },
    { icon: <Star size={24} className="text-yellow-500" />, value: '13', label: 'GitHub Stars' },
    { icon: <Users size={24} className="text-blue-500" />, value: '2', label: 'Followers' },
  ];

  const interests = [
    { icon: <Code size={20} />, label: 'Web Development' },
    { icon: <Cpu size={20} />, label: 'AI Projects' },
    { icon: <Sprout size={20} />, label: 'IoT / Smart Farming' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <div className="glass p-8 rounded-2xl">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700 text-center sm:text-left">
                <img 
                  src="/profile.jpg" 
                  alt="Hegde Dhananjay" 
                  className="w-32 h-32 rounded-full object-cover shadow-md border-4 border-white dark:border-gray-800 flex-shrink-0"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Hegde Dhananjay</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">@Dhananjay2305</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Web Developer | HTML | CSS | JavaScript | Learning React
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-center sm:text-left">
                I'm a passionate web developer interested in building practical web applications, AI-powered solutions and technology projects that solve real-world problems. I enjoy learning new technologies and turning ideas into working products.
              </p>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">Interests</h4>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest, idx) => (
                    <div key={idx} className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm text-gray-700 dark:text-gray-300">
                      <span className="mr-2 text-primary-500">{interest.icon}</span>
                      {interest.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="grid grid-cols-2 gap-6 w-full max-w-md">
              {stats.map((stat, idx) => (
                <div key={idx} className={`${idx === 0 ? 'col-span-2' : 'col-span-1'} bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center text-center transform transition-transform hover:-translate-y-1`}>
                  <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-full mb-4">
                    {stat.icon}
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</h4>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
