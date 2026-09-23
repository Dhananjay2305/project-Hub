import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Tag, Code2, Layers, Copy, CheckCircle } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import type { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [adminCopied, setAdminCopied] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCopied(false);
      setAdminCopied(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen, project]);

  const handleCopyDeploymentUrl = () => {
    const urlToCopy = project?.deploymentUrl || project?.url;
    if (urlToCopy) {
      navigator.clipboard.writeText(urlToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCopyAdminUrl = () => {
    if (project?.adminUrl) {
      navigator.clipboard.writeText(project.adminUrl);
      setAdminCopied(true);
      setTimeout(() => setAdminCopied(false), 2000);
    }
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className={`h-48 sm:h-64 relative flex items-center justify-center p-6 ${!project.image ? 'bg-gradient-to-br from-primary-600 to-blue-800' : ''}`}>
              {project.image && (
                <>
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gray-900/60" />
                </>
              )}
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur transition-colors"
              >
                <X size={20} />
              </button>
              <h2 className="text-3xl sm:text-4xl font-bold text-white text-center drop-shadow-lg relative z-10">
                {project.name}
              </h2>
            </div>
            
            <div className="p-6 sm:p-8 overflow-y-auto flex-grow custom-scrollbar">
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">About the Project</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center text-gray-900 dark:text-white font-medium mb-2">
                    <Code2 size={18} className="mr-2 text-primary-500" /> Technology
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{project.technology}</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center text-gray-900 dark:text-white font-medium mb-2">
                    <Layers size={18} className="mr-2 text-blue-500" /> Category
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{project.category}</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700 sm:col-span-2">
                  <div className="flex items-center text-gray-900 dark:text-white font-medium mb-2">
                    <Tag size={18} className="mr-2 text-green-500" /> Highlight
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{project.highlight}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center py-3 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 dark:text-gray-900 text-white rounded-xl font-medium transition-colors"
                >
                  <FaGithub size={20} className="mr-2" /> View on GitHub
                </a>
                  <button 
                    onClick={handleCopyDeploymentUrl}
                    className="flex-1 flex items-center justify-center py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-colors"
                  >
                    {copied ? (
                      <>
                        <CheckCircle size={20} className="mr-2" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={20} className="mr-2" /> Copy URL
                      </>
                    )}
                  </button>
                  {project.adminUrl && (
                    <button 
                      onClick={handleCopyAdminUrl}
                      className="flex-1 flex items-center justify-center py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors"
                    >
                      {adminCopied ? (
                        <>
                          <CheckCircle size={20} className="mr-2" /> Admin Copied!
                        </>
                      ) : (
                        <>
                          <Copy size={20} className="mr-2" /> Copy Admin URL
                        </>
                      )}
                    </button>
                  )}
              </div>
              
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
