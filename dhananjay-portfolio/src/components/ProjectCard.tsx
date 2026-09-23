import React, { useState } from 'react';
import { Code2, Copy, Check } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyUrl = (e: React.MouseEvent) => {
    e.stopPropagation();
    const urlToCopy = project.deploymentUrl || project.url;
    if (urlToCopy) {
      navigator.clipboard.writeText(urlToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group">
      
      <div className="h-40 relative overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800" />
            <div className="absolute inset-0 bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors" />
            <Code2 size={48} className="text-gray-300 dark:text-gray-600 group-hover:scale-110 transition-transform duration-500 relative z-10" />
          </>
        )}
        <div className="absolute bottom-3 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-primary-600 dark:text-primary-400 shadow-sm z-20">
          {project.highlight}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.name}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs font-medium">
            {project.technology}
          </span>
          <span className="text-gray-300 dark:text-gray-600">•</span>
          <span className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
            {project.category}
          </span>
        </div>
        
        <div className="flex items-center gap-3 mt-auto">
          <button 
            onClick={() => onClick(project)}
            className="flex-grow py-2 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg text-sm font-medium transition-colors"
          >
            View Details
          </button>
          
          <a 
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 transition-colors"
            aria-label="GitHub Repository"
          >
            <FaGithub size={20} />
          </a>
          <button
            onClick={handleCopyUrl}
            className="p-2 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-600 hover:text-primary-600 hover:border-primary-600 hover:bg-primary-50 dark:text-gray-400 dark:hover:text-primary-400 dark:hover:border-primary-500 dark:hover:bg-gray-700 transition-colors"
            aria-label="Copy URL"
            title="Copy URL"
          >
            {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};
