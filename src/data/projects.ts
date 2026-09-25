export interface ProjectLink {
  label: string;
  href: string;
  kind: 'source' | 'demo' | 'documentation';
}

export interface ProjectDecision {
  decision: string;
  reasoning: string;
  tradeoff: string;
}

export interface ProjectArchitectureItem {
  name: string;
  responsibility: string;
}

export interface PortfolioProject {
  slug: string;
  published: boolean;
  featured: boolean;
  number: string;
  title: string;
  category: string;
  status: string;
  summary: string;
  outcome: string;
  role: string;
  timeline: string;
  audience: string;
  technologies: string[];
  links: ProjectLink[];
  problem: string;
  solution: string;
  results: string[];
  constraints: string[];
  features: string[];
  architecture: ProjectArchitectureItem[];
  decisions: ProjectDecision[];
  quality: string[];
  lessons: string[];
  nextSteps: string[];
  media?: {
    src: string;
    alt: string;
    caption: string;
  };
}

// Add completed work here. A project appears on the homepage and receives its own
// route only after `published` is true. Keep drafts private until the repository,
// demo, screenshots, and case-study claims are ready for recruiter review.
export const projects: PortfolioProject[] = [];

// Development-only fixture for reviewing the reusable case-study layout.
// This object is excluded from production builds and is never shown to recruiters.
export const projectTemplate: PortfolioProject = {
  slug: 'project-template',
  published: false,
  featured: false,
  number: '00',
  title: 'Project Title',
  category: 'Project category',
  status: 'Template preview',
  summary:
    'One sentence that explains what the product does, who it helps, and why the problem matters.',
  outcome:
    'Lead with the strongest verified result: time saved, errors reduced, scale handled, or a meaningful user outcome.',
  role: 'Independent developer',
  timeline: 'Month YYYY — Month YYYY',
  audience: 'Name the primary user',
  technologies: ['Primary language', 'Framework', 'Database', 'Infrastructure'],
  links: [
    { label: 'Source code', href: '#', kind: 'source' },
    { label: 'Live demo', href: '#', kind: 'demo' },
  ],
  problem:
    'Describe the specific workflow, limitation, or user frustration that made the project worth building. Avoid broad claims and define the starting condition.',
  solution:
    'Explain the product in plain language before discussing implementation details. A recruiter should understand the value without knowing the stack.',
  results: [
    'A verified product or engineering result',
    'A second measurable or observable result',
    'What the finished project demonstrates about your ability',
  ],
  constraints: [
    'The most important technical or product constraint',
    'A scope decision that kept the project focused',
    'A security, reliability, or accessibility requirement',
  ],
  features: [
    'The primary user workflow',
    'A technically meaningful supporting capability',
    'The feature that best differentiates the project',
  ],
  architecture: [
    { name: 'Client', responsibility: 'User interface, validation, and interaction state.' },
    {
      name: 'Application API',
      responsibility: 'Business rules, authorization, and orchestration.',
    },
    { name: 'Data layer', responsibility: 'Durable storage, queries, migrations, and integrity.' },
    { name: 'Operations', responsibility: 'Deployment, monitoring, logging, and recovery.' },
  ],
  decisions: [
    {
      decision: 'Name a consequential technical decision',
      reasoning: 'Explain why it fit the users, constraints, and expected scale.',
      tradeoff: 'State what this choice made harder or what you deliberately gave up.',
    },
    {
      decision: 'Name the second decision',
      reasoning: 'Connect the choice to maintainability, reliability, or delivery speed.',
      tradeoff: 'Show that you evaluated alternatives instead of choosing by habit.',
    },
  ],
  quality: [
    'Automated tests covering the highest-risk behavior',
    'Useful errors, structured logs, and operational visibility',
    'Security, accessibility, and performance checks appropriate to the product',
  ],
  lessons: [
    'What changed between the initial idea and the finished implementation',
    'The most important technical lesson from the build',
  ],
  nextSteps: [
    'The highest-value improvement you would make next',
    'A known limitation you would address with more time or usage data',
  ],
};
