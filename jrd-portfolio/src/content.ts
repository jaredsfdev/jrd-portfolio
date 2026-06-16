
export const highlights = [
  {
    title: "About Me",
    description:
      "Software developer focused on enterprise HRIS and inventory platforms. I turn complex workflows into calm, consistent experiences with maintainable code and clear interfaces.",
    cta: { label: "View Resume", href: "/cv.pdf" },
  },
  {
    title: "What I Build",
    description:
      "End-to-end business solutions that modernize legacy tools, improve accuracy, and reduce handoffs. I enjoy building fast, reliable web apps that teams can trust.",
    cta: { label: "Start a Project", href: "mailto:hello@example.com" },
  },
];

export const experiences = [
  {
    role: "Software Developer",
    period: "2024 - Present",
    org: "Government and Hospital Human Resource Information Systems - (CONFIDENTIAL)",
    details: [
      "Developed and optimized a Human Resource Information System serving thousands of concurrent users across multiple divisions.",
      "Managed high-volume transactions, patient records, and workflows through efficient database design.",
      "Designed complex Stored Procedures and database Events to ensure scalability and performance under heavy workloads.",
    ],
    skills: ["PHP", "CakePHP", "MySQL", "Database Optimization", "Performance Tuning"],
  },
  {
    role: "Freelance Developer",
    period: "2022 - 2023",
    org: "Random Clients (Coffee Shop, Sari-Sari Store, Connections)",
    details: [
      "Designed and developed responsive landing pages and point-of-sale systems for web and desktop platforms.",
      "Optimized customer queuing workflows for a coffee shop, improving user experience and customer retention.",
      "Delivered tailored solutions based on unique business requirements.",
    ],
    skills: ["React", "Bootstrap", "VB.NET", "MySQL", "Workflow Optimization"], 
  },
  {
    role: "Hello World!",
    period: "2020",
    org: "Wrote my first line of code.",
    details: [
      "Started exploring web and desktop application development.",
      "Built foundational skills in programming and software engineering.",
    ],
  },
];

export const education = [
  {
    period: "2020 - 2024",
    school: "Colegio De Montalban",
    detail: "BS Information Technology.",
    bullets: [
      "Graduated with a Bachelor's degree in Information Technology, earning both President's and Dean's List honors for academic excellence.",
      "Completed coursework in software development, database management, and system design, laying a strong foundation for a career in technology.",
    ],
  },
  {
    period: "2018 - 2019",
    school: "Asian Institute of Computer Studies",
    detail: "ICT Strand",
  },
  {
    period: "2013 - 2017",
    school: "General Licerio Memorial National High School",
    detail: "",
  },
];

export const projects = [
  {
    id: "trendybrew",
    name: "TrendyBrew",
    description:
      "Built a full-stack POS with RFID loyalty, QR-based reservations, and receipt printing, improving transaction accuracy, queue flow, and customer experience for 100+ users.",
    techStack: ["React", "MongoDB", "Bootstrap", "Glide"],
    category: ["Web", "Mobile", "Desktop"],
    href: "#",
    image: "/project-imgs/trendy-brew.png",
    status: "Completed",
    highlights: [
      "Mobile integration via Glide",
      "Optimized order processing flow",
      "Designed for high-volume transactions"
    ]
  },
  {
    id: "study-routine-system",
    name: "Alarmo",
    description:
      "Desktop-based productivity system that guides users through structured study routines using time-based triggers.",
    techStack: ["VB.NET", "MySQL"],
    category: ["Desktop"],
    href: "#",
    image: "/project-imgs/alarmo.png",
    status: "Completed",
    highlights: [
      "Time-triggered study scheduling",
      "Improved user discipline through automation"
    ]
  },
  {
    id: "capsgen",
    name: "Capsgen",
    description:
      "A simple yet effective web application that assists users in generating capstone project titles through customizable field-based filtering.",
    techStack: ["VB.NET", "MySQL"],
    category: ["Desktop"],
    href: "https://capsgen-z6u4.vercel.app/",
    image: "/project-imgs/capsgen.png",
    status: "Completed",
    highlights: [
      "Streamlined data generation",
      "Improved internal process efficiency"
    ]
  },
  {
    id: "skyboard",
    name: "SkyBoard",
    description:
      "A responsive weather dashboard that fetches real-time data from external APIs and presents it in a clean UI.",
    techStack: ["React", "OpenWeather API", "Bootstrap"],
    category: ["Web"],
    href: "#",
    image: "/project-imgs/skyboard.png",
    status: "Completed",
    highlights: [
      "Real-time API integration",
      "Responsive UI design"
    ]
  },
  {
    id: "lumio",
    name: "Lumio",
    description:
      "A location-based anonymous social platform where users interact as map points, enabling raw, identity-free communication.",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    category: ["Web"],
    href: "#",
    image: "/project-imgs/lumio.png",
    status: "Planning",
    highlights: [
      "Geo-based interaction model",
      "Anonymous communication design",
      "Experimental social UX concept"
    ]
  },
  {
    id: "chordstack",
    name: "ChordStack",
    description:
      "A location-based anonymous social platform where users interact as map points, enabling raw, identity-free communication.",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    category: ["Web"],
    href: "#",
    image: "/project-imgs/chordstack.png",
    status: "Planning",
    highlights: [
      "Geo-based interaction model",
      "Anonymous communication design",
      "Experimental social UX concept"
    ]
  }
];

export const techStack = {
  Frontend: ["HTML5", "CSS", "React", "Vite", "Bootstrap"],
  Backend: ["JavaScript", "TypeScript", "PHP", "CakePHP", "Laravel", "Node.js"],
  Database: ["MySQL", "MongoDB"],
  Tools: ["Git", "GitHub", "Bitbucket", "Jira", "GraphQL"],
};

export const certifications = [
  {
    name: "Javascript",
    issuer: "TestDome",
    url: "https://www.testdome.com/certificates/3deda3907b6f496f8b387064c58a0ac9",
    username: "jaredsfdev"
  }
]
