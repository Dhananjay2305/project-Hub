import fs from 'fs';  
const files = ['src/components/Contact.tsx', 'src/components/FeaturedProjects.tsx', 'src/components/GithubSection.tsx', 'src/components/Hero.tsx', 'src/components/Navbar.tsx', 'src/components/ProjectCard.tsx', 'src/components/ProjectModal.tsx'];  
files.forEach(file => { let content = fs.readFileSync(file, 'utf8'); content = 'import { FaGithub as Github, FaLinkedin as Linkedin } from \'react-icons/fa\';\n' + content; fs.writeFileSync(file, content); });  
