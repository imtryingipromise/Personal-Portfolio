export const cv = {
  fullName:  'Mohammad Muqeet Mir',
  shortName: 'Muqeet Mir',
  initials:  'MM',
  title:     'Computer Science Student – Artificial Intelligence',

  summary:
    'AI-focused CS student who loves turning ideas into working software. From building concurrent systems in C++ to predicting flight delays with data, I enjoy tackling complex problems across the full stack. Currently looking for an internship where I can grow and make an impact.',

  contact: {
    email:   'muqeetadi165@gmail.com',
    phone:   '+60 17-884 1037',
    address: 'Kuala Lumpur, Malaysia',
  },

  education: [
    {
      degree:      'Bachelor of Science in Computer Science (AI)',
      institution: 'Asia Pacific University of Technology & Innovation',
      duration:    '2023 – 2027',
      note:        'CGPA: 3.30 / 4.00',
    },
  ],

  skills: {
    programmingLanguages: ['Python', 'Java', 'C++', 'C#', 'SQL', 'R'],
    webDevelopment: ['HTML', 'CSS', 'JavaScript'],
    technicalSkills: [
      'Object-Oriented Programming (OOP)',
      'Data Structures',
      'Multithreading',
      'CRUD Operations',
    ],
    tools: ['MySQL', 'Linux (Ubuntu)', 'RStudio', 'Virtual Machines'],
    systemsAdmin: ['Linux (Ubuntu & Rocky)', 'DNS', 'FTP', 'Email Server', 'Virtual Machines'],
    focusAreas: [
      'Artificial Intelligence',
      'Data Structures',
      'Object-Oriented Programming',
      'Database Systems',
      'Network Administration',
      'Systems Programming',
    ],
    softSkills: [
      'Strong communication skills',
      'Leadership abilities',
      'Effective teamwork and collaboration',
      'Problem-solving in academic projects',
      'Adaptable and eager to learn new technologies',
    ],
  },

  projects: [
    {
      name:        'Airport Simulation System',
      language:    'C++',
      description: 'Built a real-time airport simulator where multiple planes, runways, and refueling stations all run concurrently — handling race conditions and thread sync the hard way.',
      tags:        ['C++', 'Multithreading', 'Concurrency', 'Synchronization'],
    },
    {
      name:        'Flight Delay Prediction System',
      language:    'R',
      description: 'Dug into messy flight data to uncover what actually causes delays — cleaned, transformed, and visualized thousands of records to surface meaningful patterns.',
      tags:        ['R', 'Data Analysis', 'Visualization', 'Statistics'],
    },
    {
      name:        'Was It All A Dream?',
      language:    'Python',
      description: 'A narrative-driven 2D platformer built with Pygame — 4 dream realms, 8+ platform types, boss fights, NPC dialogue, combat mechanics, and a full audio experience with procedurally generated menus.',
      tags:        ['Python', 'Pygame', 'Game Dev', 'Combat System', 'NPC Dialogue'],
    },
    {
      name:        'Online Quiz System',
      language:    'C#',
      description: 'Full-stack quiz platform with a clean web interface — handles user sessions, timed questions, and instant score breakdowns.',
      tags:        ['C#', 'HTML', 'CSS', 'Web Application'],
    },
    {
      name:        'Hotel Booking Management System',
      language:    'SQL',
      description: 'Architected a fully normalized database for a multi-branch hotel chain — complete with booking logic, availability checks, and referential integrity.',
      tags:        ['SQL', 'Database Design', 'Normalization'],
    },
    {
      name:        'Network Administration',
      language:    'Linux',
      description: 'Set up production-style DNS, mail, and FTP servers across Ubuntu and Rocky Linux VMs — locked down with proper permissions and access controls.',
      tags:        ['Linux', 'Ubuntu', 'Rocky Linux', 'DNS', 'FTP'],
    },
  ],

  certifications: [
    {
      name:     'Red Hat System Administration II',
      issuer:   'Red Hat',
      expected: 'November 2025',
      status:   'Completed',
    },
  ],

  experience: [
    {
      role:         'Booth Leader',
      event:        'Merdeka Fiesta Event',
      organization: 'Asia Pacific University',
      year:         '2024',
      highlights: [
        'Led and managed booths as part of the CC2 module',
        'Coordinated team members and delegated tasks effectively',
        'Ensured smooth operation and resolved on-site issues',
        'Developed leadership, communication, and teamwork skills',
      ],
    },
  ],

  references: [
    {
      name:     'Ts. Dr. Maythem',
      title:    'Assistant Professor, APU',
      email:    'maythem.abbas@apu.edu.my',
    },
    {
      name:     'Mary Ting',
      title:    'Senior Lecturer, APU',
      email:    'maryting@apu.edu.my',
    },
  ],

  stats: [
    { value: '6',    label: 'Academic Projects',    sub: 'End-to-end solutions'     },
    { value: '6',    label: 'Programming Languages', sub: 'Python, Java, C++, C#, SQL, R' },
    { value: '3',    label: 'Web Technologies',      sub: 'HTML, CSS, JavaScript'    },
    { value: '2027', label: 'Expected Graduation',   sub: 'Asia Pacific University'  },
  ],
} as const;

export type CV = typeof cv;
