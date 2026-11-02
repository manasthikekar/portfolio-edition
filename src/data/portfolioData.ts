/**
 * =========================================================================
 * CENTRALIZED PORTFOLIO DATA CONFIGURATION
 * =========================================================================
 * All personal details, projects, skills, timeline events, and links
 * are configured here.
 */

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle?: string;
}

export interface SkillItem {
  name: string;
  iconName?: string;
  badge?: string;
  description?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problemSolved: string;
  myContribution: string;
  tags: string[];
  metrics?: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  accentColor?: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  location?: string;
  type: 'education' | 'experience' | 'internship' | 'training' | 'milestone';
  description: string;
  highlights: string[];
  technologies?: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Hackathon' | 'Competition' | 'Certification' | 'Academic' | 'Recognition';
  organization: string;
  date: string;
  description: string;
  badge?: string;
  credentialUrl?: string;
}

export interface ExploringTopic {
  id: string;
  title: string;
  area: string;
  description: string;
  status: 'Deep Diving' | 'Building Prototypes' | 'Experimenting' | 'Active Study';
  progress: number; // 0 - 100
  technologies: string[];
  icon: string;
}

export interface PortfolioData {
  personal: {
    fullName: string;
    firstName: string;
    lastName: string;
    monogram: string;
    greeting: string;
    headline: string;
    subheadline: string;
    location: string;
    status: {
      availableForWork: boolean;
      currentRoleOrStudy: string;
      learningFocus: string;
    };
    contact: {
      email: string;
      locationDisplay: string;
    };
    resume: {
      url: string;
      fileName: string;
    };
    socials: SocialLink[];
  };
  about: {
    heading: string;
    leadStory: string;
    paragraphs: string[];
    coreValues: {
      title: string;
      desc: string;
      icon: string;
    }[];
    stats: {
      value: string;
      label: string;
      sublabel: string;
    }[];
  };
  skills: SkillCategory[];
  timeline: TimelineItem[];
  projects: ProjectItem[];
  achievements: AchievementItem[];
  currentlyExploring: ExploringTopic[];
  contactSection: {
    headline: string;
    subtext: string;
    callToAction: string;
    footerMessage: string;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    fullName: "Manas Thikekar",
    firstName: "Manas",
    lastName: "Thikekar",
    monogram: "MT",
    greeting: "HELLO, I'M",
    headline: "Software Engineer & Creative Problem Solver",
    subheadline: "Crafting robust architectures, high-performance web systems, and elegant digital products at the intersection of engineering and design.",
    location: "India",
    status: {
      availableForWork: true,
      currentRoleOrStudy: "Computer Science & Engineering",
      learningFocus: "Distributed Systems, Advanced Algorithms & Modern Web Architectures",
    },
    contact: {
      email: "manasthikekar23@gmail.com",
      locationDisplay: "Open to Global Remote & Relocation Opportunities",
    },
    resume: {
      url: "#contact",
      fileName: "Manas_Thikekar_Resume.pdf",
    },
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/manasthikekar",
        icon: "Github",
        handle: "@manasthikekar",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/manas-thikekar/",
        icon: "Linkedin",
        handle: "manas-thikekar",
      },
      {
        name: "LeetCode",
        url: "https://leetcode.com",
        icon: "Code2",
        handle: "manasthikekar",
      },
      {
        name: "Codeforces",
        url: "https://codeforces.com",
        icon: "Terminal",
        handle: "manasthikekar",
      },
      {
        name: "Twitter / X",
        url: "https://twitter.com",
        icon: "Twitter",
        handle: "@manasthikekar",
      },
    ],
  },

  about: {
    heading: "Engineering with curiosity, discipline, and purpose.",
    leadStory: "I am a computer science student and software engineer driven by an obsession with how complex systems operate under the hood. From low-level algorithmic efficiency to immersive frontend rendering pipelines, I thrive on turning ambiguous problems into elegant, resilient software.",
    paragraphs: [
      "My journey started with a deep fascination for algorithms and computational problem solving. Deconstructing mathematical problems and coding deterministic solutions taught me analytical precision and the power of computational thinking.",
      "As I expanded into modern full-stack development, I discovered the joy of building products that balance uncompromising engineering rigor with intuitive, memorable user experiences. I don't settle for 'it works'—I care about how code scales, how clean the abstractions are, and how seamless the end product feels.",
      "Beyond coding, you'll find me analyzing competitive programming problems, exploring distributed system architectures, experimenting with motion design, and staying at the bleeding edge of software engineering."
    ],
    coreValues: [
      {
        title: "Algorithmic Rigor",
        desc: "Rooted in strong foundations of data structures, complexity analysis, and clean design patterns.",
        icon: "Cpu",
      },
      {
        title: "Product Craftsmanship",
        desc: "Believing that performance, aesthetics, and developer experience are deeply intertwined.",
        icon: "Sparkles",
      },
      {
        title: "Continuous Experimentation",
        desc: "Rapidly adapting to new paradigms, open-source tools, and next-generation frameworks.",
        icon: "Flame",
      },
    ],
    stats: [
      {
        value: "350+",
        label: "DSA Problems Solved",
        sublabel: "Across LeetCode, Codeforces & GFG",
      },
      {
        value: "99.9%",
        label: "Commitment to Quality",
        sublabel: "Pixel-perfect & clean code",
      },
      {
        value: "10+",
        label: "Production & Hobby Projects",
        sublabel: "End-to-end full stack builds",
      },
    ],
  },

  skills: [
    {
      id: "languages",
      title: "Programming Languages",
      shortDesc: "Foundational and modern languages for systems and applications",
      icon: "Code2",
      skills: [
        { name: "C++", badge: "Core DSA", description: "Competitive programming, STL, memory optimization" },
        { name: "JavaScript (ES6+)", badge: "Advanced", description: "Modern asynchronous workflows, V8 internals" },
        { name: "TypeScript", badge: "Strict Type Safety", description: "Type gymnastics, generics, scalable codebases" },
        { name: "Python", badge: "Problem Solving", description: "Data manipulation, scripting, automation" },
        { name: "Java", badge: "OOP & Design Patterns", description: "Object-oriented architecture & backend logic" },
        { name: "SQL", badge: "Relational Queries", description: "Complex joins, indexing, query optimization" },
      ],
    },
    {
      id: "frontend",
      title: "Frontend Development",
      shortDesc: "Building fluid, high-performance, accessible interfaces",
      icon: "Layout",
      skills: [
        { name: "React.js", badge: "Primary UI", description: "Custom hooks, component state, context, React 18" },
        { name: "Next.js", badge: "SSR / App Router", description: "Hybrid static generation, routing & server actions" },
        { name: "Tailwind CSS", badge: "Utility-first", description: "Design systems, responsive tokens, custom animations" },
        { name: "Framer Motion", badge: "Micro-interactions", description: "Physics-based springs, gesture animations" },
        { name: "GSAP / ScrollTrigger", badge: "Cinematic Motion", description: "High-frame-rate timelines and scroll experiences" },
        { name: "HTML5 / Semantic Web", badge: "Accessibility", description: "WCAG standards, SEO, semantic markup" },
      ],
    },
    {
      id: "backend",
      title: "Backend Development",
      shortDesc: "Scalable server architectures, APIs, and microservices",
      icon: "Server",
      skills: [
        { name: "Node.js", badge: "Event-driven", description: "Non-blocking I/O, REST APIs, streams" },
        { name: "Express.js", badge: "REST Framework", description: "Middleware chains, authentication, routing" },
        { name: "RESTful API Design", badge: "Standards", description: "Clean contracts, status codes, documentation" },
        { name: "JWT & OAuth 2.0", badge: "Security", description: "Stateless tokens, role-based authorization" },
        { name: "WebSocket", badge: "Real-time", description: "Bidirectional event messaging, live state sync" },
      ],
    },
    {
      id: "database",
      title: "Database Management",
      shortDesc: "Data persistence, schema design, and query optimization",
      icon: "Database",
      skills: [
        { name: "PostgreSQL", badge: "Relational", description: "ACID transactions, relational schemas, indexing" },
        { name: "MongoDB", badge: "Document Store", description: "Aggregation pipelines, flexible document schemas" },
        { name: "MySQL", badge: "RDBMS", description: "Normalized schemas, views, stored procedures" },
        { name: "Redis", badge: "In-memory Cache", description: "Key-value caching, rate limiting, pub/sub" },
      ],
    },
    {
      id: "tools",
      title: "Developer Tools & DevOps",
      shortDesc: "Workflow optimization, source control, and deployment pipelines",
      icon: "Wrench",
      skills: [
        { name: "Git & GitHub", badge: "Version Control", description: "Branching strategies, code reviews, workflows" },
        { name: "Docker", badge: "Containerization", description: "Containerized environments and Dockerfiles" },
        { name: "Postman", badge: "API Testing", description: "Contract testing, mock servers, automation" },
        { name: "Linux / Bash", badge: "Command Line", description: "Shell scripting, server management, CLI tools" },
        { name: "Vite & Webpack", badge: "Build Systems", description: "HMR, bundling, asset optimization" },
      ],
    },
    {
      id: "dsa",
      title: "Competitive Programming & DSA",
      shortDesc: "Algorithmic thinking, time/space complexity optimization",
      icon: "Brain",
      skills: [
        { name: "Data Structures", badge: "Trees, Graphs, Heaps", description: "Segment trees, Trie, Disjoint Set Union" },
        { name: "Algorithms", badge: "DP & Greedy", description: "Dynamic programming, graph algorithms, binary search" },
        { name: "Time Complexity Analysis", badge: "Optimization", description: "Big-O bounds, space-time tradeoffs" },
        { name: "Problem Solving", badge: "Pattern Recognition", description: "Translating real-world constraints into code" },
      ],
    },
  ],

  timeline: [
    {
      id: "edu-1",
      period: "2022 — Present",
      title: "Bachelor of Technology in Computer Science & Engineering",
      organization: "University / Engineering College",
      location: "India",
      type: "education",
      description: "Pursuing in-depth academic studies in core computing paradigms, operating systems, compiler theory, DBMS, computer networks, and advanced mathematics.",
      highlights: [
        "Consistent high academic standing across computer science fundamentals.",
        "Active member of coding clubs and technical symposium committees.",
        "Coursework: Data Structures, Analysis of Algorithms, Database Systems, Computer Networks, Operating Systems.",
      ],
      technologies: ["C++", "Java", "Python", "SQL", "Linux"],
    },
    {
      id: "milestone-1",
      period: "2023 — 2024",
      title: "Competitive Programming & Algorithm Training",
      organization: "LeetCode & Codeforces Platforms",
      type: "milestone",
      description: "Dedicated systematic practice in algorithmic problem solving, graph theory, dynamic programming, and data structures.",
      highlights: [
        "Solved 350+ algorithmic problems across diverse categories and difficulty levels.",
        "Regular participant in weekly contests, sharpening speed and edge-case detection under time pressure.",
      ],
      technologies: ["C++ STL", "Data Structures", "Dynamic Programming", "Graph Theory"],
    },
    {
      id: "training-1",
      period: "2024",
      title: "Full-Stack Web Development & Cloud Systems Training",
      organization: "Intensive Technical Bootcamps & Workshops",
      type: "training",
      description: "Comprehensive hands-on training building production-grade web applications, containerized services, and reactive user interfaces.",
      highlights: [
        "Architected complete RESTful APIs with authentication, middleware, and database schemas.",
        "Mastered state management, performance profiling, and modern component design in React and TypeScript.",
      ],
      technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL"],
    },
    {
      id: "edu-2",
      period: "Prior Education",
      title: "Higher Secondary Certificate (HSC) — Science & Mathematics",
      organization: "Junior College / High School",
      type: "education",
      description: "Graduated with strong foundations in Physics, Chemistry, and Advanced Mathematics.",
      highlights: [
        "Strong focus on analytical mathematics and foundational logic.",
        "Participated in regional science exhibitions and Olympiads.",
      ],
    },
  ],

  projects: [
    {
      id: "project-1",
      title: "AlgoPulse — Interactive Algorithm Visualizer",
      tagline: "High-performance visual engine for sorting, pathfinding, and graph traversals",
      description: "An interactive, web-based algorithmic learning platform designed to demystify complex data structures and traversal algorithms with real-time step execution.",
      problemSolved: "Abstract algorithms are notoriously difficult for computer science students to visualize. Traditional static diagrams fail to convey dynamic pointer manipulation and temporal state transitions.",
      myContribution: "Engineered step-by-step state playback generators in TypeScript, optimized rendering loops for 60fps canvas animations, and implemented custom speed controls and edge case generators.",
      tags: ["TypeScript", "React", "Canvas API", "Tailwind CSS", "Algorithms"],
      metrics: ["60 FPS smoothly visualized", "12+ Algorithms implemented", "Zero external animation lag"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1400&auto=format&fit=crop",
      githubUrl: "https://github.com/manasthikekar",
      liveUrl: "https://demo.example.com",
      featured: true,
      accentColor: "#38bdf8",
    },
    {
      id: "project-2",
      title: "DevSprint — Distributed Issue & Task Orchestrator",
      tagline: "Minimalist, keyboard-first issue tracker inspired by modern developer workflows",
      description: "A fast, high-density project management workspace designed for engineering teams that prioritize speed, markdown documentation, and instant keyboard navigation.",
      problemSolved: "Traditional project management tools are sluggish, bloated with unnecessary modals, and break developer flow through mouse-heavy navigation.",
      myContribution: "Designed full-text search indexing, optimistic UI updates with automatic conflict rollback, JWT-based role management, and fluid command-palette navigation.",
      tags: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "REST API"],
      metrics: ["Sub-100ms API response time", "Full keyboard command palette", "Optimistic state synchronization"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
      githubUrl: "https://github.com/manasthikekar",
      liveUrl: "https://demo.example.com",
      featured: true,
      accentColor: "#818cf8",
    },
    {
      id: "project-3",
      title: "NexusCloud — Containerized File Sync & Storage Engine",
      tagline: "Secure, chunked file upload and preview system with distributed metadata storage",
      description: "A cloud storage interface featuring resumable chunked uploads, instant document previews, and encrypted file sharing links with expiration controls.",
      problemSolved: "Uploading multi-gigabyte assets over unstable network conditions frequently fails without granular chunk verification and resumable upload protocols.",
      myContribution: "Implemented client-side file chunking via Web Workers, MD5 hash verification, presigned download URLs, and responsive dark-mode file explorer.",
      tags: ["TypeScript", "React", "Node.js", "MongoDB", "Docker", "Tailwind CSS"],
      metrics: ["Resumable multi-part upload", "Automatic checksum verification", "End-to-end token security"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1400&auto=format&fit=crop",
      githubUrl: "https://github.com/manasthikekar",
      liveUrl: "https://demo.example.com",
      featured: true,
      accentColor: "#22d3ee",
    },
    {
      id: "project-4",
      title: "CodeMorph — Real-time Collaborative Code Sandbox",
      tagline: "In-browser multi-language execution playground with live collaborative editing",
      description: "A browser-based code compilation and sharing platform allowing developers to prototype ideas, execute scripts securely, and collaborate synchronously.",
      problemSolved: "Setting up local runtimes and dependencies for quick code snippets creates friction during technical interviews and pair programming sessions.",
      myContribution: "Built the Monaco editor integration with language highlighting, custom syntax themes, WebSocket collaborative cursor broadcast, and isolated execution containers.",
      tags: ["React", "TypeScript", "WebSocket", "Docker", "Tailwind CSS", "Monaco Editor"],
      metrics: ["Real-time multi-user synchronization", "Sub-second code compilation", "Isolated execution sandboxes"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1400&auto=format&fit=crop",
      githubUrl: "https://github.com/manasthikekar",
      liveUrl: "https://demo.example.com",
      featured: false,
      accentColor: "#c084fc",
    },
  ],

  achievements: [
    {
      id: "ach-1",
      title: "National / Collegiate Hackathon Finalist",
      category: "Hackathon",
      organization: "Tech Innovation Challenge",
      date: "2024",
      description: "Developed and pitched an innovative full-stack technological solution under a strict 36-hour sprint, qualifying among the top teams out of hundreds of entries.",
      badge: "Finalist",
    },
    {
      id: "ach-2",
      title: "350+ Algorithmic Challenges Mastered",
      category: "Competition",
      organization: "LeetCode & Competitive Platforms",
      date: "2023 — 2024",
      description: "Demonstrated strong problem-solving perseverance by tackling complex challenges in Dynamic Programming, Graph Theory, and Tree Traversal algorithms.",
      badge: "Global Milestone",
    },
    {
      id: "ach-3",
      title: "Full-Stack Software Engineering Certification",
      category: "Certification",
      organization: "Recognized Technical Authority",
      date: "2024",
      description: "Validated proficiency in modern web architecture, RESTful API development, SQL/NoSQL databases, and production software patterns.",
      badge: "Certified",
    },
    {
      id: "ach-4",
      title: "Academic Excellence in Computing Fundamentals",
      category: "Academic",
      organization: "College Department of Computer Engineering",
      date: "2023",
      description: "Consistently recognized for top-tier performance in Data Structures, Object-Oriented Programming, and Discrete Mathematics coursework.",
      badge: "Honor Roll",
    },
  ],

  currentlyExploring: [
    {
      id: "exp-1",
      title: "Distributed Systems & Consensus Protocols",
      area: "Systems Engineering",
      description: "Studying how distributed state machines maintain consistency across unreliable networks, diving into Raft, Paxos, and vector clocks.",
      status: "Deep Diving",
      progress: 75,
      technologies: ["Raft", "Distributed Consensus", "gRPC", "Go / C++"],
      icon: "Network",
    },
    {
      id: "exp-2",
      title: "Competitive Programming & ICPC Workouts",
      area: "Advanced Algorithms",
      description: "Refining algorithmic intuition for international programming competitions, focusing on segment trees with lazy propagation, Fenwick trees, and flow algorithms.",
      status: "Active Study",
      progress: 85,
      technologies: ["Advanced Graph Theory", "Segment Trees", "Number Theory", "C++20"],
      icon: "Binary",
    },
    {
      id: "exp-3",
      title: "AI Integration & LLM Orchestration",
      area: "Artificial Intelligence",
      description: "Exploring embeddings, retrieval-augmented generation (RAG) pipelines, and local LLM runtime tooling for autonomous agent workflows.",
      status: "Building Prototypes",
      progress: 65,
      technologies: ["Vector DBs", "LangChain", "Embeddings", "FastAPI"],
      icon: "Bot",
    },
    {
      id: "exp-4",
      title: "Creative WebGL & 3D Shaders",
      area: "Creative Motion",
      description: "Experimenting with vertex/fragment shaders and GPU-accelerated math for award-winning digital web experiences and fluid simulations.",
      status: "Experimenting",
      progress: 60,
      technologies: ["Three.js", "GLSL Shaders", "GSAP", "Canvas 2D"],
      icon: "Palette",
    },
  ],

  contactSection: {
    headline: "Let's build something extraordinary together.",
    subtext: "Whether you have an ambitious project in mind, an engineering internship or full-time opportunity, or simply want to talk about algorithms and systems architecture, my inbox is always open.",
    callToAction: "Say Hello",
    footerMessage: "Building, learning, and exploring what's next.",
  },
};
