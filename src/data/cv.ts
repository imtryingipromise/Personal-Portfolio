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
      name:        'Was It All A Dream?',
      language:    'Python',
      description: 'A narrative-driven 2D platformer built with Pygame — 4 dream realms, 8+ platform types, boss fights, NPC dialogue, combat mechanics, and a full audio experience with procedurally generated menus.',
      tags:        ['Python', 'Pygame', 'Game Dev', 'Combat System', 'NPC Dialogue'],
      github:      'https://github.com/imtryingipromise/Was-It-All-a-Dream',
      featured:    true,
      details: {
        overview: 'A complete 4-level Christmas-themed platformer about overcoming inner fears across dream realms. 13,600+ lines of Python powering custom physics, sprite animation, boss AI, and a procedurally generated menu system — all built from scratch with zero external dependencies beyond Pygame.',
        highlights: [
          '4 unique dream realms with escalating difficulty and distinct mechanics',
          '8+ platform types: shrinking ice, falling wood, phantom, glitch, crumbling bridges, moving trams, countdown, and zigzag',
          'Full combat system with ice arrow shooting, mushroom stomping, bomb fiends, and a multi-phase Santa boss fight',
          'Custom sprite animation engine with 5 states (idle, walk, jump, death, climb), squash & stretch, and invincibility flickering',
          'NPC dialogue system with typewriter text, speaker color coding, and story progression tied to checkpoints',
          'Procedurally generated menu background with gradient sky, dual mountain ridges, pine trees, and a dynamic star field',
          'Wooden UI theme with hand-drawn grain lines, nail details, and shimmer effects',
          'Audio crossfade system with 8 music tracks and 20+ sound effects — no pops or overlaps',
          'Unreal Mode powerup with 2x speed, color cycling through 7 Christmas colors, and dash afterimage trails',
          '3 difficulty presets that tune 20+ parameters independently per level',
        ],
        techStack: ['Python', 'Pygame', 'Custom Physics Engine', 'Sprite Sheet Animation', 'Procedural Generation'],
      },
    },
    {
      name:        'SmartQuiz',
      language:    'C# / ASP.NET',
      description: 'A full-stack educational platform with role-based access for admins, lecturers, students, and staff — featuring timed quizzes, OTP email verification, analytics dashboards, study materials, and a threaded discussion board.',
      tags:        ['C#', 'ASP.NET', 'SQL Server', 'Bootstrap', 'jQuery'],
      github:      'https://github.com/imtryingipromise/SmartQuiz',
      featured:    true,
      details: {
        overview: 'A production-grade quiz management system built with ASP.NET Web Forms and SQL Server. Four distinct user portals (Admin, Lecturer, Student, Staff) with session-based auth, cryptographic OTP verification, timed assessments, analytics dashboards, and a full discussion forum — all backed by a normalized 12-table database.',
        highlights: [
          '4 role-based portals with separated concerns: Admin dashboard, Lecturer quiz management, Student assessment, Staff analytics',
          'Timed quiz engine with SessionStorage countdown, auto-submission on expiry, and anti-cheat measures (no-cache headers, re-attempt prevention)',
          'Cryptographic OTP system using RNGCryptoServiceProvider — 6-digit codes with 5-minute expiry, rate limiting, and max attempt lockout',
          'Email service with DNS MX record validation, HTML-branded templates, and Gmail SMTP integration',
          'Analytics pipeline: quiz attempts → percentage scoring → pass/fail tracking → full student transcript generation',
          'Lecturer tools: create/manage quizzes, upload PDF study materials, link videos, provide per-attempt feedback, view class-wide statistics',
          'Threaded discussion board with posts, replies, file attachments, and per-user read/unread tracking',
          'Dark/light theme with localStorage persistence and CSS variable switching',
          'SQL injection prevention via parameterized queries throughout, XSS protection with HTML encoding',
          'Password recovery with security questions and multi-step OTP verification',
        ],
        techStack: ['C#', 'ASP.NET Web Forms', 'SQL Server', 'Bootstrap 5', 'jQuery', 'Gmail SMTP', 'Newtonsoft.Json'],
      },
    },
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
