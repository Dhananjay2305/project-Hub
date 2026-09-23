import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, GitCommit, GitPullRequest } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export const GithubSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gray-900 text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gray-800 rounded-full mb-6 text-sm font-medium border border-gray-700">
              <FaGithub size={18} className="mr-2" />
              <span>@Dhananjay2305</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Explore My Code on GitHub
            </h2>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Check out my repositories, experiments and projects on GitHub. I actively build and share open-source code.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://github.com/Dhananjay2305" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center justify-center group"
              >
                Visit GitHub Profile
                <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a 
                href="https://github.com/Dhananjay2305?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gray-800 text-white border border-gray-700 rounded-full font-bold hover:bg-gray-700 transition-colors flex items-center justify-center"
              >
                View All Repositories
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-blue-500" />
              
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                  <FaGithub size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Dhananjay2305</h3>
                  <p className="text-gray-400 text-sm">Developer</p>
                </div>
              </div>
              
              <div className="space-y-4 text-sm font-mono text-gray-300 bg-gray-900 p-4 rounded-xl border border-gray-700">
                <div className="flex items-center text-green-400">
                  <GitCommit size={16} className="mr-3" />
                  <span>Committing to: main</span>
                </div>
                <div className="flex items-center text-blue-400">
                  <GitBranch size={16} className="mr-3" />
                  <span>Branch: feature/ai-project</span>
                </div>
                <div className="flex items-center text-purple-400">
                  <GitPullRequest size={16} className="mr-3" />
                  <span>PR: Add new portfolio features</span>
                </div>
              </div>
              
              <div className="mt-6 flex justify-between text-center border-t border-gray-700 pt-6">
                <div>
                  <p className="text-2xl font-bold text-white">23+</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Repositories</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">13</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Stars</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">2</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Followers</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
