export interface Project {
  id: string;
  name: string;
  url: string; // GitHub URL
  technology: string;
  category: string;
  description: string;
  highlight: string;
  image?: string;
  featured?: boolean;
  deploymentUrl?: string; // Vercel or other deployment URL
  adminUrl?: string; // Optional admin panel URL
}

export const projectsData: Project[] = [
  {
    id: "1",
    name: "Bhoomi-AI",
    url: "https://github.com/Dhananjay2305/Bhoomi-AI",
    deploymentUrl: "https://bhoomi-ai-seven.vercel.app/",
    technology: "TypeScript",
    category: "AI / Agriculture / IoT",
    description: "AI-powered smart farming project designed to help farmers analyze crop and leaf conditions and make better agricultural decisions.",
    highlight: "Smart Farming + AI",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop",
    featured: true
  },
  {
    id: "2",
    name: "Daypilot-AI",
    url: "https://github.com/Dhananjay2305/Daypilot-AI",
    deploymentUrl: "https://daypilotai.vercel.app/",
    technology: "TypeScript",
    category: "AI / Productivity",
    description: "AI-powered schedule and meeting management assistant designed to help users manage meetings, schedules, emails and daily tasks.",
    highlight: "AI Executive Assistant",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    featured: true
  },
  {
    id: "3",
    name: "KisanBazaar",
    url: "https://github.com/Dhananjay2305/KisanBazaar",
    deploymentUrl: "https://kisanbazaar-five.vercel.app/",
    adminUrl: "https://kisanbazaar-five.vercel.app/admin-login.html",
    technology: "JavaScript",
    category: "Agriculture / E-Commerce",
    description: "Digital farmer-to-consumer marketplace connecting farmers directly with customers for fresh agricultural and food products.",
    highlight: "Farmer-to-Consumer Marketplace",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop",
    featured: true
  },
  {
    id: "4",
    name: "LinguaAI",
    url: "https://github.com/Dhananjay2305/LinguaAI",
    technology: "AI",
    category: "AI / Education",
    description: "AI-powered language learning application designed to make language learning more interactive and accessible.",
    highlight: "AI Language Learning",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop",
    featured: true
  },
  {
    id: "5",
    name: "restaurant-reservation-system",
    url: "https://github.com/Dhananjay2305/restaurant-reservation-system",
    deploymentUrl: "https://restaurant-reservation-system-liart.vercel.app",
    technology: "JavaScript",
    category: "Web Application",
    description: "Restaurant reservation web application designed to manage restaurant bookings and reservation workflows.",
    highlight: "Online Restaurant Booking",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "6",
    name: "AI-interviewer",
    url: "https://github.com/Dhananjay2305/AI-interviewer",
    deploymentUrl: "https://ai-interviewer-drab-beta.vercel.app/",
    technology: "AI",
    category: "AI / Career",
    description: "AI-powered interview application designed to help users practice and improve their interview skills.",
    highlight: "AI Interview Practice",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "7",
        name: "Portfolio",
    url: "https://github.com/Dhananjay2305/Portfolio",
    deploymentUrl: "https://dhananjayprofile.vercel.app/",
    technology: "Web Development",
    category: "Web Development",
    description: "Personal portfolio website project showcasing web development skills and projects.",
    highlight: "Developer Portfolio",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "8",
    name: "node-js",
    url: "https://github.com/Dhananjay2305/node-js",
    technology: "Node.js",
    category: "Backend Development",
    description: "Node.js learning and development project focused on backend JavaScript concepts.",
    highlight: "Node.js",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "9",
    name: "Bachelor-s-Hub",
    url: "https://github.com/Dhananjay2305/Bachelor-s-Hub",
    deploymentUrl: "https://bachelorhub.vercel.app/",
    technology: "Web Application",
    category: "Web Application",
    description: "Web project designed to provide useful features and resources for bachelor students.",
    highlight: "Student Lifestyle",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "10",
    name: "login-page-html-css",
    url: "https://github.com/Dhananjay2305/login-page-html-css",
    technology: "CSS",
    category: "Frontend",
    description: "Responsive login page created using HTML and CSS to demonstrate modern frontend design.",
    highlight: "HTML + CSS",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "11",
    name: "Bachelor-s-Journey",
    url: "https://github.com/Dhananjay2305/Bachelor-s-Journey",
    technology: "JavaScript",
    category: "Lifestyle / Web Application",
    description: "Bachelor Life Manager is a smart lifestyle management website specially designed for bachelor students and working professionals living independently.",
    highlight: "Lifestyle Management",
    image: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "12",
    name: "VyapaarAI-Smart-Business-Assistant",
    url: "https://github.com/Dhananjay2305/VyapaarAI-Smart-Business-Assistant",
    technology: "HTML",
    category: "AI / Business",
    description: "VyapaarAI is an AI-powered web application designed to help small and medium businesses manage their operations smarter.",
    highlight: "AI Business Assistant",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    featured: true
  },
  {
    id: "13",
    name: "Learn2Earn",
    url: "https://github.com/Dhananjay2305/Learn2Earn",
    technology: "JavaScript",
    category: "Education / Career",
    description: "SkillEarn is a Learn + Earn platform where students gain real-world skills and earn money by completing micro-tasks from businesses and startups.",
    highlight: "Learn + Earn Platform",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "14",
    name: "Farmer-to-Market-Web-Platform",
    url: "https://github.com/Dhananjay2305/Farmer-to-Market-Web-Platform",
    technology: "HTML",
    category: "Agriculture / Marketplace",
    description: "Web application that helps farmers sell their produce directly to buyers without middlemen. Farmers can list crops with price, quantity and location.",
    highlight: "Direct Farmer Marketplace",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "15",
    name: "To-do-list",
    url: "https://github.com/Dhananjay2305/To-do-list",
    technology: "CSS",
    category: "Productivity",
    description: "A simple and responsive To-Do List web application for managing daily tasks.",
    highlight: "Task Management",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "16",
    name: "Named-AI-Assistant",
    url: "https://github.com/Dhananjay2305/Named-AI-Assistant",
    technology: "JavaScript",
    category: "AI / Productivity",
    description: "AI assistant for students and young professionals that supports study planning, reminders, doubt solving and career help.",
    highlight: "Personal AI Assistant",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "17",
    name: "simple-calculator",
    url: "https://github.com/Dhananjay2305/simple-calculator",
    technology: "CSS",
    category: "Beginner Web Project",
    description: "Basic calculator application performing arithmetic operations such as addition, subtraction, multiplication and division.",
    highlight: "Calculator",
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "18",
    name: "Local-Business-Digital",
    url: "https://github.com/Dhananjay2305/Local-Business-Digital",
    deploymentUrl: "https://local-business-digital.vercel.app/",
    technology: "CSS",
    category: "Business / Web Development",
    description: "Web application designed to help local businesses establish a digital presence with an online business profile.",
    highlight: "Digital Business Presence",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "19",
    name: "Nagar-Seva",
    url: "https://github.com/Dhananjay2305/Nagar-Seva",
    technology: "JavaScript",
    category: "Civic Tech",
    description: "FixIndia is a civic-tech web platform where citizens can report public problems such as potholes, garbage, streetlight issues and water leakage.",
    highlight: "Smart Civic Reporting",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=800&auto=format&fit=crop",
    featured: true
  },
  {
    id: "20",
    name: "AI-Alarm-Clock",
    url: "https://github.com/Dhananjay2305/AI-Alarm-Clock",
    technology: "JavaScript",
    category: "AI / Productivity",
    description: "Modern AI-powered alarm clock web application with alarms, notes, repeat days, snooze duration and AI voice reminders.",
    highlight: "AI Voice Alarm",
    image: "https://images.unsplash.com/photo-1508605051939-29177b960538?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "21",
    name: "dhanu",
    url: "https://github.com/Dhananjay2305/dhanu",
    technology: "HTML",
    category: "Beginner Project",
    description: "My first Git repository and one of my early web development projects.",
    highlight: "First GitHub Project",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "22",
    name: "HTML--CSS-Portfolio",
    url: "https://github.com/Dhananjay2305/HTML--CSS-Portfolio",
    technology: "HTML / CSS",
    category: "Frontend / Portfolio",
    description: "Beginner-friendly responsive portfolio website built using HTML and CSS.",
    highlight: "Responsive Portfolio",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=800&auto=format&fit=crop"
  }
,
  {
    id: "23",
    name: "KisanBazaar Admin Panel",
    url: "https://github.com/Dhananjay2305/KisanBazaar",
    deploymentUrl: "https://kisanbazaar-five.vercel.app/admin-login.html",
    technology: "JavaScript",
    category: "Agriculture / Admin",
    description: "Admin panel for the KisanBazaar digital marketplace to manage users, products, and platform settings.",
    highlight: "Platform Management",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop",
    featured: false
  }
];

export const getCategories = () => {
  const categories = new Set<string>();
  projectsData.forEach(project => {
    project.category.split(' / ').forEach(c => categories.add(c.trim()));
  });
  return Array.from(categories).sort();
};
