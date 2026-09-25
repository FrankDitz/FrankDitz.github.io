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
    title: 'Backend & API engineering',
    description:
      'I can own service and integration work from API design through validation, authentication, testing, and failure handling.',
    evidence: 'Built a typed Python SDK spanning 100+ enterprise REST endpoints.',
    technologies: ['Python', 'Node.js', 'FastAPI', 'REST', 'PostgreSQL'],
  },
  {
    title: 'Cloud, data & platform work',
    description:
      'I build recoverable workflows across cloud services, databases, and third-party systems with operability in mind.',
    evidence:
      'Delivered a stateful AWS-to-Snowflake pipeline with checkpoint recovery and audit logging.',
    technologies: ['AWS', 'Snowflake', 'Docker', 'Terraform', 'SQL'],
  },
  {
    title: 'Applied AI & product integration',
    description:
      'I connect AI capabilities to real products and governed data instead of treating the model as an isolated demo.',
    evidence:
      'Built a secured data assistant using controlled tools, metadata, RBAC, and query safeguards.',
    technologies: ['OpenAI API', 'Tool calling', 'Python', 'RBAC', 'Metadata'],
  },
];

export const engineeringPractices = [
  'Automated testing & type safety',
  'Structured logging & observability',
  'Secure authentication & access control',
  'Customer requirements translated into working software',
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
