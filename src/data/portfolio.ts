export const experience = [
  {
    company: 'ALTR',
    location: 'Melbourne, FL',
    roles: [
      {
        title: 'Associate Field Software Engineer — Data Governance & Security',
        dates: 'Sep 2025 — Feb 2026',
      },
      { title: 'Field Engineering Intern', dates: 'Aug 2024 — Aug 2025' },
    ],
    summary:
      'Promoted from intern to associate while delivering production software and secure integrations for three enterprise customers across APIs, cloud platforms, databases, and applied AI.',
    highlights: [
      'Built backend integrations in Python, Node.js, and SQL with authentication, validation, observability, and explicit failure handling.',
      'Translated customer security and operational constraints into practical solution designs and production-ready implementations.',
      'Diagnosed API, identity, database, and cloud issues through targeted test environments and structured logging.',
    ],
  },
  {
    company: 'Ditz Medical & Laser Aesthetics Center',
    location: 'Melbourne, FL',
    roles: [{ title: 'Manager', dates: 'Jan 2020 — Jul 2024' }],
    summary:
      'Managed daily operations across scheduling, billing, inventory, staff coordination, and client communication in a fast-moving customer-facing environment.',
    highlights: [],
  },
];

export const professionalWork = [
  {
    number: '01',
    title: 'Enterprise API SDK',
    context: 'Professional work · ALTR',
    description:
      'Designed a typed Python SDK spanning more than 100 REST endpoints, with a shared session layer, modular resource clients, models, retries, pagination, logging, and CI quality gates.',
    skills: ['Python', 'Pydantic', 'REST APIs', 'pytest', 'GitLab CI'],
  },
  {
    number: '02',
    title: 'Reliable Data Protection Pipeline',
    context: 'Professional work · ALTR',
    description:
      'Built a serverless AWS-to-Snowflake processing workflow with checkpoint recovery, persistent state, audit logging, and record-level validation for reliable high-volume execution.',
    skills: ['Node.js', 'AWS', 'Snowflake', 'Terraform', 'Reliability'],
  },
  {
    number: '03',
    title: 'Governed AI Data Assistant',
    context: 'Professional work · ALTR',
    description:
      'Built an LLM-powered application that connected natural-language requests to governed metadata and data systems through controlled tools, secure authentication, and query safeguards.',
    skills: ['Python', 'OpenAI API', 'PostgreSQL', 'Alation', 'RBAC'],
  },
];

export const capabilities = [
  {
    title: 'Backend engineering',
    description:
      'Production APIs, typed SDKs, authentication flows, and integrations with explicit failure handling.',
    technologies: ['Python', 'Node.js', 'FastAPI', 'REST APIs', 'Pydantic'],
  },
  {
    title: 'Cloud & data systems',
    description:
      'Recoverable workflows connecting AWS services, databases, Snowflake, and external platforms.',
    technologies: ['AWS', 'PostgreSQL', 'Snowflake', 'Docker', 'Terraform'],
  },
  {
    title: 'Applied AI',
    description:
      'LLM applications with controlled tools, governed metadata, structured outputs, and secure access.',
    technologies: ['OpenAI API', 'Tool calling', 'Agent workflows', 'Metadata retrieval'],
  },
  {
    title: 'Quality & delivery',
    description:
      'Automated checks, structured logging, test environments, and production-focused troubleshooting.',
    technologies: ['pytest', 'MyPy', 'Ruff', 'CI/CD', 'Structured logging'],
  },
];

export const resumes = [
  {
    title: 'Software Engineering',
    description:
      'The recommended general resume for backend, full-stack, platform, and integration roles.',
    href: '/resumes/frank-ditz-software-engineer.pdf',
    primary: true,
  },
  {
    title: 'Field Engineering',
    description:
      'Technical delivery, solution design, customer implementation, and production troubleshooting.',
    href: '/resumes/frank-ditz-field-engineer.pdf',
    primary: false,
  },
  {
    title: 'Applied AI',
    description:
      'LLM applications, agent workflows, governed data access, and enterprise AI integration.',
    href: '/resumes/frank-ditz-applied-ai.pdf',
    primary: false,
  },
];
