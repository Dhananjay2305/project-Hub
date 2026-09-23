import type { Project } from '../data/projects';

export type CommandAction = 
  | 'copy-url' 
  | 'copy-github' 
  | 'open-url' 
  | 'open-github' 
  | 'copy-profile-linkedin'
  | 'copy-profile-github'
  | 'open-profile-linkedin'
  | 'open-profile-github'
  | 'unknown';

export interface ParsedCommand {
  action: CommandAction;
  project: Project | null;
}

const normalize = (str: string) => str.toLowerCase().replace(/[^a-z0-9]/g, '');

export const parseVoiceCommand = (transcript: string, projects: Project[]): ParsedCommand => {
  const lower = transcript.toLowerCase();
  
  // Smart project matching
  let matchedProject: Project | null = null;
  let maxMatchLen = 0;

  for (const p of projects) {
    const variations = [
      normalize(p.name),
      p.name.toLowerCase().replace(/-/g, ' ').replace(/[^a-z0-9\s]/g, ''),
      p.name.toLowerCase().replace(/[^a-z0-9]/g, ' ')
    ];

    if (p.name === 'KisanBazaar') variations.push('kisan bazaar', 'farmer market', 'kisan', 'kisam bazar', 'kisan bazar');
    if (p.name === 'Daypilot-AI') variations.push('day pilot', 'daypilot ai', 'day pilot ai', 'daypilot');
    if (p.name === 'Bhoomi-AI') variations.push('bhoomi ai', 'bhumi ai', 'bhoomi', 'bhumi', 'boomi ai', 'boomi');
    if (p.name === 'AI-interviewer') variations.push('ai interview', 'interview coach', 'ai interviewer', 'interview');
    if (p.name === 'restaurant-reservation-system') variations.push('restaurant management system', 'restaurant', 'reservation');
    if (p.name === 'Farmer-to-Market-Web-Platform') variations.push('farmer to market', 'farmer market');
    if (p.name === 'Bachelor-s-Hub') variations.push('bachelor hub', 'bachelors hub');
    if (p.name === 'Portfolio') variations.push('my portfolio', 'portfolio');

    const transcriptNormalized = lower.replace(/[^a-z0-9\s]/g, '');
    const transcriptNoSpace = normalize(lower);

    for (const v of variations) {
      const vNorm = normalize(v);
      const vSpaced = v.replace(/[^a-z0-9\s]/g, '');

      if ((vNorm.length > 3 && transcriptNoSpace.includes(vNorm)) || 
          transcriptNormalized.includes(vSpaced)) {
        if (vNorm.length > maxMatchLen) {
          maxMatchLen = vNorm.length;
          matchedProject = p;
        }
      }
    }
  }

  // Identify Action
  let action: CommandAction = 'unknown';

  const isCopy = lower.includes('copy') || lower.includes('link') || lower.includes('url');
  const isOpen = lower.includes('open');

  if (lower.includes('linkedin')) {
    if (isOpen) action = 'open-profile-linkedin';
    else if (isCopy || true) action = 'copy-profile-linkedin'; // default to copy
  } else if (lower.includes('github') || lower.includes('git hub')) {
    if (matchedProject) {
      if (isOpen) action = 'open-github';
      else action = 'copy-github';
    } else {
      if (isOpen) action = 'open-profile-github';
      else action = 'copy-profile-github';
    }
  } else if (matchedProject) {
    if (isOpen) action = 'open-url';
    else if (isCopy) action = 'copy-url';
    else action = 'copy-url'; // default to copy if they just say project name
  }

  return { action, project: matchedProject };
};
