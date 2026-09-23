import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { ProjectFilter } from './ProjectFilter';
import { projectsData } from '../data/projects';
import type { Project } from '../data/projects';
import { FolderGit2 } from 'lucide-react';

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Define the exact filter categories requested by the user
  const filterCategories = [
    'AI',
    'Web Development',
    'Agriculture',
    'Education',
    'Business',
    'Productivity',
    'Civic Tech',
    'Backend',
    'Beginner'
  ];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      // 1. Search filter
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        project.name.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technology.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query);

      // 2. Category filter
      let matchesCategory = true;
      if (activeCategory !== 'All') {
        matchesCategory = project.category.includes(activeCategory) || 
                          project.technology.includes(activeCategory) ||
                          (activeCategory === 'Backend' && project.category.includes('Backend')) ||
                          (activeCategory === 'Beginner' && project.category.includes('Beginner'));
      }

      return matchesSearch && matchesCategory;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
            <FolderGit2 className="mr-3 text-primary-500" size={32} />
            All Projects
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my complete portfolio of {projectsData.length} GitHub repositories. Filter by category or search for specific technologies.
          </p>
        </motion.div>

        <ProjectFilter 
          categories={filterCategories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500 dark:text-gray-400">No projects found matching your search.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                >
                  <ProjectCard 
                    project={project} 
                    onClick={onProjectClick} 
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
};
