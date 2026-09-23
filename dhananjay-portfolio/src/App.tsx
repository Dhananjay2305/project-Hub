import { useState } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Projects } from './components/Projects';
import { Technologies } from './components/Technologies';
import { GithubSection } from './components/GithubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { VoiceProjectAssistant } from './components/VoiceProjectAssistant';
import type { Project } from './data/projects';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <FeaturedProjects onProjectClick={openProjectModal} />
          <Projects onProjectClick={openProjectModal} />
          <Technologies />
          <GithubSection />
          <Contact />
        </main>

        <Footer />
        
        <ProjectModal 
          project={selectedProject} 
          isOpen={selectedProject !== null} 
          onClose={closeProjectModal} 
        />
        
        <VoiceProjectAssistant />
      </div>
    </ThemeProvider>
  );
}

export default App;
