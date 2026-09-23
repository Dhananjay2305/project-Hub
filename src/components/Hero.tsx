import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Hero: React.FC = () => {
  const [copiedGithub, setCopiedGithub] = useState(false);
  const [copiedLinkedin, setCopiedLinkedin] = useState(false);

  const copyGithub = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("https://github.com/Dhananjay2305");
    setCopiedGithub(true);
    setTimeout(() => setCopiedGithub(false), 2000);
  };

  const copyLinkedin = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("https://www.linkedin.com/in/dhananjay-hegde-6b16a1291/");
    setCopiedLinkedin(true);
    setTimeout(() => setCopiedLinkedin(false), 2000);
  };
  return (
    <section className="min-h-screen flex flex-col md:flex-row overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Left Side - Content */}
      <div className="w-full md:w-1/2 flex items-center relative z-10">
        <div className="px-8 md:px-16 py-12 md:py-24 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary-600 dark:text-primary-400 font-medium tracking-wider mb-2">HELLO, WORLD!</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-400">
                Hegde Dhananjay
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6">
              Web Developer | AI Project Builder
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
              I build modern web applications and AI-powered solutions that solve real-world problems.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-colors flex items-center group shadow-lg shadow-primary-500/30"
              >
                View My Projects
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={copyGithub}
                className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-full font-medium hover:border-gray-300 dark:hover:border-gray-600 transition-colors flex items-center shadow-sm cursor-pointer"
                title="Copy GitHub URL"
              >
                <span className="mr-2 flex items-center justify-center">
                  {copiedGithub ? <Check size={20} className="text-green-500" /> : <FaGithub size={20} />}
                </span>
                GitHub
              </button>
              <button 
                onClick={copyLinkedin}
                className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-full font-medium hover:border-gray-300 dark:hover:border-gray-600 transition-colors flex items-center shadow-sm cursor-pointer"
                title="Copy LinkedIn URL"
              >
                <span className="mr-2 flex items-center justify-center">
                  {copiedLinkedin ? <Check size={20} className="text-green-500" /> : <FaLinkedin size={20} className="text-blue-600" />}
                </span>
                LinkedIn
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Right Side - Full Background Image */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative z-0 order-first md:order-last">
        <img src="/hero-bg.jpg" alt="Hegde Dhananjay" className="w-full h-full object-cover object-center" />
      </div>
    </section>
  );
};
