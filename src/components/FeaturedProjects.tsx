import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Copy } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projectsData } from '../data/projects';
import type { Project } from '../data/projects';

interface FeaturedProjectsProps {
  onProjectClick: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onProjectClick }) => {
  const featuredNames = [
    'Bhoomi-AI', 
    'Daypilot-AI', 
    'KisanBazaar', 
    'LinguaAI', 
    'VyapaarAI-Smart-Business-Assistant', 
    'Nagar-Seva'
  ];
  
  const featuredProjects = projectsData.filter(p => featuredNames.includes(p.name));

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
            <Zap className="mr-3 text-yellow-500" size={32} />
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my best work, focusing on AI, Agriculture, and solving real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col h-full overflow-hidden"
            >
              {project.image && (
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur rounded-full p-2 text-gray-900 dark:text-white">
                    <Zap size={16} className="text-yellow-500" />
                  </div>
                </div>
              )}
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  {!project.image && (
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-xl">
                      <Zap size={24} />
                    </div>
                  )}
                  <div className={`flex items-center gap-2 ${project.image ? 'ml-auto' : ''}`}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const urlToCopy = project.deploymentUrl || project.url;
                        if (urlToCopy) {
                          navigator.clipboard.writeText(urlToCopy);
                          const target = e.currentTarget;
                          const originalHtml = target.innerHTML;
                          target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500"><polyline points="20 6 9 17 4 12"></polyline></svg>';
                          setTimeout(() => { target.innerHTML = originalHtml; }, 2000);
                        }
                      }}
                      className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      title="Copy URL"
                    >
                      <Copy size={20} />
                    </button>
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.name}</h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-4">
                {project.highlight}
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex items-center flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300">
                  {project.technology}
                </span>
                <span className="px-3 py-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300">
                  {project.category.split('/')[0].trim()}
                </span>
              </div>
              
              <button 
                onClick={() => onProjectClick(project)}
                className="w-full py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors flex items-center justify-center group-hover:border-primary-500 dark:group-hover:border-primary-500"
              >
                View Details
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
