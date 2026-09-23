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
    <section 
      className="min-h-screen flex items-center pt-20 pb-12 overflow-hidden relative"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Optional overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/60 dark:bg-gray-900/80 z-0"></div>
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between relative z-10">
        
        <div className="w-full md:w-1/2 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
        
        <div className="w-full md:w-1/2 mt-12 md:mt-0 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-blue-300 rounded-full blur-3xl opacity-20 dark:opacity-30 animate-pulse" />
              <div className="absolute inset-4 bg-gradient-to-bl from-primary-600 to-cyan-400 rounded-full blur-2xl opacity-40 dark:opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 rotate-3 transform transition-transform hover:rotate-0 duration-500 flex items-center justify-center relative glass">
                  <div className="absolute top-0 left-0 w-full h-8 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center px-4 space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="p-8 font-mono text-sm md:text-base text-gray-600 dark:text-gray-300 mt-8 w-full">
                    <p className="text-pink-500 dark:text-pink-400">const <span className="text-blue-500 dark:text-blue-400">developer</span> = {'{'}</p>
                    <p className="pl-4">name: <span className="text-green-500 dark:text-green-400">'Dhananjay'</span>,</p>
                    <p className="pl-4">skills: [<span className="text-green-500 dark:text-green-400">'React'</span>, <span className="text-green-500 dark:text-green-400">'AI'</span>, <span className="text-green-500 dark:text-green-400">'IoT'</span>],</p>
                    <p className="pl-4">hardWorker: <span className="text-orange-500 dark:text-orange-400">true</span>,</p>
                    <p className="pl-4">problemSolver: <span className="text-orange-500 dark:text-orange-400">true</span>,</p>
                    <p className="text-pink-500 dark:text-pink-400">{'}'};</p>
                    <br />
                    <p className="text-gray-400 dark:text-gray-500">// Building the future...</p>
                    <p className="text-blue-500 dark:text-blue-400">developer<span className="text-gray-600 dark:text-gray-300">.</span>code<span className="text-gray-600 dark:text-gray-300">();</span></p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};
