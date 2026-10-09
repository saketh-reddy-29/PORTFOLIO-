/* ===================================================================
   G. SAKETH REDDY PORTFOLIO — COMPREHENSIVE PROJECT DATABASE
   10 Verified Project Specifications across 3 Core Domains:
   1. Industrial & Business Websites (TechBott, Mectto, Coastal Fabtech)
   2. Interactive Applications (Crex Arena, Gloster Desktop)
   3. AI & Software Engineering (AI Website Builder, HRMS, Security, E-loan, Materials)
   =================================================================== */

export const PROJECTS_DATA = [
  // -------------------------------------------------------------
  // 01. TECHBOTT
  // -------------------------------------------------------------
  {
    id: "techbott",
    number: "01",
    slug: "techbott",
    title: "TechBott",
    subtitle: "Industrial Printing & Coding Solutions",
    category: "Industrial Technology / Business Website",
    filterCategory: "web",
    layoutType: "layout-a", // Layout A: Two-column with 2 sub-images & large right image
    statement: "Enterprise web presence for an industrial coding, marking, and high-speed packaging printing equipment provider.",
    liveUrl: "https://techbottindia.com/",
    liveUrlLabel: "VISIT LIVE WEBSITE ↗",
    githubUrl: null,
    isPrivate: false,
    role: "Full-Stack Web Developer & UI Architect",
    stack: ["HTML5", "CSS3 / Sass", "JavaScript", "Responsive Design", "SEO Architecture", "Web Performance"],
    heroImage: "/assets/projects/techbott-live.png",
    heroImageCaption: "FIG. 01A — TECHBOTT INDIA PRODUCTION WEBSITE (TECHBOTTINDIA.COM) // ISO 9001:2015 CERTIFIED",
    thumb1: "/assets/projects/techbott-jet-neo2.jpg",
    thumb1Caption: "FIG. 01B — CONTINUOUS INKJET (CIJ) JET-NEO2 PRINTER (LIVE CATALOG)",
    thumb2: "/assets/projects/techbott-fiber-laser.jpg",
    thumb2Caption: "FIG. 01C — FIBER LASER MARKING MACHINERY (LIVE CATALOG)",
    overview: "TechBott India (techbottindia.com) is an ISO 9001:2015 certified industrial printing solutions company based in Jeedimetla, Hyderabad, powering high-speed production lines across 300+ manufacturing industries in India. The website serves as their primary commercial and technical portal, presenting continuous inkjet (CIJ), thermal inkjet (TIJ), laser marking, and thermal transfer overprinting (TTO) technologies with technical datasheets, brochures, and quote generation.",
    bullets: [
      "ISO 9001:2015 certified industrial printing portfolio covering CIJ, TIJ, Laser, and TTO",
      "Interactive nationwide service network highlighting Hyderabad HQ and regional hubs",
      "Technical catalog with downloadable engineering datasheets, brochures, and consumables",
      "Targeted application pathways across FMCG, pharmaceuticals, automotive, and packaging",
      "Streamlined high-intent RFQ (Request For Quotation) and direct phone consultation triggers"
    ],
    metadata: {
      "CATEGORY": "BUSINESS WEBSITE",
      "LIVE WEBSITE": "HTTPS://TECHBOTTINDIA.COM/",
      "CERTIFICATION": "ISO 9001:2015 CERTIFIED",
      "HEADQUARTERS": "JEEDIMETLA, HYDERABAD, INDIA",
      "STATUS": "ACTIVE PRODUCTION"
    },
    sections: [
      {
        heading: "Business Positioning & Industrial Solutions",
        content: "TechBott India positions itself as 'U'rs Technology Partner' for coding and marking equipment. The website interface delivers immediate access to printer capabilities, speed ratings, and ink formulations across fast-moving consumer goods, pharmaceuticals, food & beverages, and automotive components."
      },
      {
        heading: "Website Structure & Product Presentation",
        content: "Products are structured into hardware categories: Continuous Inkjet (CIJ) for non-contact coding, Thermal Inkjet (TIJ) for sharp high-resolution prints, Laser Marking Systems (CO2, Fiber, UV) for permanent tamper-proof coding, and TTO for flexible films. Each page includes downloadable PDF datasheets and consumable specifications."
      },
      {
        heading: "Engineering Challenges & Implementation",
        content: "Engineered responsive technical specification tables and optimized high-resolution industrial equipment imagery. Implemented clean semantic layouts to ensure fast loading speeds for field plant directors accessing product specifications on mobile networks."
      }
    ],
    nextProjectId: "mectto"
  },

  // -------------------------------------------------------------
  // 02. MECTTO
  // -------------------------------------------------------------
  {
    id: "mectto",
    number: "02",
    slug: "mectto",
    title: "Mectto",
    subtitle: "Intelligent Industrial Automation",
    category: "Industrial Automation / Corporate Website",
    filterCategory: "web",
    layoutType: "layout-b", // Layout B: 4-Column Asymmetrical with center image & stacked images
    statement: "Corporate web presentation for a custom industrial robotics, automated conveyor, and smart factory engineering company.",
    liveUrl: "https://mectto.com/",
    liveUrlLabel: "VISIT LIVE WEBSITE ↗",
    githubUrl: null,
    isPrivate: false,
    role: "Software Developer (Freelance)",
    stack: ["HTML5", "Modern CSS", "JavaScript", "Responsive Layouts", "Performance Optimization"],
    heroImage: "/assets/projects/mectto-live.png",
    heroImageCaption: "FIG. 02A — MECTTO AUTOMACHINE PRODUCTION WEBSITE (MECTTO.COM) // ENGINEERING EXCELLENCE SINCE 2014",
    thumb1: "/assets/projects/mectto-robot.png",
    thumb1Caption: "FIG. 02B — ARTICULATED ROBOTIC INTEGRATION CELL (MECTTO.COM)",
    thumb2: "/assets/projects/mectto-conveyor.png",
    thumb2Caption: "FIG. 02C — HIGH-THROUGHPUT CONVEYOR AUTOMATION SYSTEM (MECTTO.COM)",
    overview: "Mectto (mectto.com) represents 'Engineering Excellence Since 2014' as an Indian industrial automachine manufacturer specializing in articulated robotics, conveyor networks, secondary line packing, check weighers, and smart factory systems. The website showcases their turnkey capabilities from conceptual design to commissioning, featuring an interactive solution configurator across automotive, FMCG, and pharma sectors.",
    bullets: [
      "Showcase of custom articulated robotics, pick-and-place, and automated palletizing cells",
      "Interactive multi-parameter solution finder: Industry, Solution type, and Project timeline",
      "Secondary conveyor systems, check weighers, and vision inspection machinery",
      "Smart Factory & IIoT (Industrial Internet of Things) integration documentation",
      "Clean corporate branding with high-contrast industrial typography and direct quotation links"
    ],
    metadata: {
      "CATEGORY": "CORPORATE WEBSITE",
      "LIVE WEBSITE": "HTTPS://MECTTO.COM/",
      "FOUNDED": "ENGINEERING EXCELLENCE SINCE 2014",
      "HEADLINE": "INTELLIGENT AUTOMACHINE",
      "STATUS": "ACTIVE PRODUCTION"
    },
    sections: [
      {
        heading: "Industrial Positioning: Intelligent Automachine",
        content: "Mectto's website reinforces their philosophy: 'From concept to commissioning — every system built to perfection.' The design establishes immediate credibility for high-capital manufacturing investments with interactive solution filtering across automotive, electronics, and food packaging."
      },
      {
        heading: "Interactive Solution Architecture",
        content: "Visitors can select their target industry (e.g., Automotive Manufacturing), specify machine requirements, and initiate project consultations directly from the hero fold. Clean visual hierarchy separates heavy machinery specifications from automation software capabilities."
      },
      {
        heading: "Technical Architecture & Mobile Responsiveness",
        content: "Built with semantic HTML5 and clean CSS layouts. The site ensures high performance and visual fidelity across desktop workstations and mobile devices used by factory procurement teams."
      }
    ],
    nextProjectId: "coastal-fabtech"
  },

  // -------------------------------------------------------------
  // 03. COASTAL FABTECH
  // -------------------------------------------------------------
  {
    id: "coastal-fabtech",
    number: "03",
    slug: "coastal-fabtech",
    title: "Coastal Fabtech",
    subtitle: "Industrial Engineering & Fabrication",
    category: "Industrial Engineering / Corporate Website",
    filterCategory: "web",
    layoutType: "layout-a", // Layout A: Two-column
    statement: "Comprehensive engineering case study for a premier Indian industrial tank fabrication and refinery maintenance contractor.",
    liveUrl: "https://coastalfabtech.com/",
    liveUrlLabel: "VISIT LIVE WEBSITE ↗",
    githubUrl: null,
    isPrivate: false,
    role: "Web Designer & Full-Stack Developer",
    stack: ["HTML5", "CSS Grid & Flexbox", "JavaScript", "Responsive Design", "Cross-Browser Testing"],
    heroImage: "/assets/projects/coastal-fabtech-live.png",
    heroImageCaption: "FIG. 03A — COASTAL FABTECH PRODUCTION WEBSITE (COASTALFABTECH.COM) // SINCE 1992 ISO 9001:2015",
    thumb1: "/assets/projects/coastal-tank-farm.jpg",
    thumb1Caption: "FIG. 03B — COMPLETED BULK STORAGE TANK FARM (COASTALFABTECH.COM)",
    thumb2: "/assets/projects/coastal-plant-piping.jpg",
    thumb2Caption: "FIG. 03C — PLANT PIPING & PUMP INSTALLATION ERECTION",
    overview: "Coastal Fabtech (coastalfabtech.com), established in 1992 and ISO 9001:2015 certified, is a leading provider of turnkey project solutions in Kakinada, Andhra Pradesh, delivering industrial engineering, fabrication, and erection of storage tanks across Energy, Petroleum, Chemical, Edible Oil, and Process Industries. The website presents heavy engineering contracts, including international projects like Nigeria OML13, with aerial photographic portfolios and technical capability sheets.",
    bullets: [
      "Engineering, fabrication, and erection of API 650 storage tanks (cone roof, floating roof)",
      "Hydraulic jack-up system methodology enabling safe ground-level construction",
      "Turnkey service presentation spanning Energy, Petroleum, Chemical, and Edible Oil sectors",
      "Documentation of major industrial contracts including Nigeria OML13 Projects • 2025",
      "High-impact visual presentation of heavy structural fabrication and terminal operations"
    ],
    metadata: {
      "CATEGORY": "INDUSTRIAL CORPORATE WEBSITE",
      "LIVE WEBSITE": "HTTPS://COASTALFABTECH.COM/",
      "HERITAGE": "SINCE 1992 // ISO 9001:2015",
      "SPECIALTY": "API 650 STORAGE TANKS & REFINERY",
      "STATUS": "ACTIVE PRODUCTION"
    },
    sections: [
      {
        heading: "Heritage & Heavy Industry Focus",
        content: "Coastal Fabtech's website communicates over three decades of 'Service to Energy Industry.' The hero layout features aerial views of multi-tank bulk storage terminals with bold typography declaring their core expertise: 'Engineering, Fabrication and Erection of Storage Tanks.'"
      },
      {
        heading: "Service Architecture & International Reach",
        content: "The site organizes complex industrial services into accessible pathways: Storage Tank Fabrication, Hydraulic Jack-up Erection, Pipeline Installation & Coating, Heavy Structural Fabrication, and Refinery Turnaround Support, alongside project milestones like the Nigeria OML13 project."
      },
      {
        heading: "Engineering Decisions & Interface Clarity",
        content: "High-contrast typography paired with prominent call-to-actions ('Request A Quote →', 'Explore Services →') guides procurement officers directly to technical specifications and contact hotlines."
      }
    ],
    nextProjectId: "crex-arena"
  },

  // -------------------------------------------------------------
  // 04. CREX ARENA
  // -------------------------------------------------------------
  {
    id: "crex-arena",
    number: "04",
    slug: "crex-arena",
    title: "Crex Arena",
    subtitle: "Cricket Simulation & Game Systems",
    category: "Cricket Game / Interactive Software",
    filterCategory: "interactive",
    layoutType: "layout-b", // Layout B: 4-Column
    statement: "Interactive browser-based cricket simulation engine featuring realistic ball-by-ball stochastic event generation and live scorecards.",
    liveUrl: "https://crex-arena.vercel.app/",
    liveUrlLabel: "PLAY CREX ARENA ↗",
    githubUrl: "https://github.com/saketh-reddy-29/cricket-simulation-engine",
    isPrivate: false,
    role: "Game Logic Architect & Frontend Developer",
    stack: ["React", "TypeScript", "Web Workers", "Markov Models", "Probability Distributions", "TailwindCSS"],
    heroImage: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80",
    heroImageCaption: "FIG. 04A — STOCHASTIC MATCH SIMULATION RUNTIME & DYNAMIC WIN PROBABILITY",
    thumb1: "https://images.unsplash.com/photo-1531415074868-036b107e7752?auto=format&fit=crop&w=600&q=80",
    thumb1Caption: "FIG. 04B — LIVE SCORECARD & OVER BREAKDOWN",
    thumb2: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80",
    thumb2Caption: "FIG. 04C — PLAYER RATINGS & HEAD-TO-HEAD MATRIX",
    overview: "Crex Arena is an interactive sports game and stochastic simulation platform that models realistic cricket match dynamics. Built with React and TypeScript, it calculates ball-by-ball outcomes using multi-variable Markov probability matrices, player career skill attributes, pitch degradation curves, and in-game pressure contexts across modern match formats. Users can control innings progression, inspect live commentary feeds, examine detailed wagon wheels, and benchmark dynamic win probabilities.",
    bullets: [
      "Stochastic ball-by-ball outcome generator using multi-variable Markov decision models",
      "Player skill vectors incorporating batting strike rates, bowling economies, and pitch factors",
      "Multi-format match logic supporting T20 and ODI match regulations",
      "Offloaded calculation engine running in background Web Workers for smooth 60 FPS UI",
      "Dynamic in-play scoreboard with interactive wagon-wheel and dismissal breakdowns"
    ],
    metadata: {
      "CATEGORY": "INTERACTIVE GAME / SIMULATION",
      "LIVE APPLICATION": "HTTPS://CREX-ARENA.VERCEL.APP/",
      "ROLE": "ENGINEERING & GAME ARCHITECTURE",
      "TECHNOLOGIES": "REACT / TYPESCRIPT / WEB WORKERS",
      "THROUGHPUT": "10,000+ BALL SIMULATIONS / SEC"
    },
    sections: [
      {
        heading: "Simulation Engine & Mathematical Model",
        content: "Rather than purely random dice-roll generators, Crex Arena computes each delivery as an interaction between batter aggression, bowler skill vector, bowler type vs. batter stance history, current required run rate, and pitch wear. The outcome space (dot, single, boundary, wicket type, extras) is dynamically resolved through weighted probability distributions."
      },
      {
        heading: "Frontend Architecture & Performance",
        content: "Simulating tens of thousands of matches in rapid succession would lock the browser main thread. By moving the mathematical engine into Web Workers, the React UI remains completely fluid, updating reactive scoreboards, run rate graphs, and wagon-wheel canvas elements instantaneously."
      },
      {
        heading: "Features & Game Interface",
        content: "Includes team lineup selectors, live ball commentary, partnership meters, DLS rain adjustment rules, and exportable match data in standardized JSON schemas."
      }
    ],
    nextProjectId: "gloster-desktop"
  },

  // -------------------------------------------------------------
  // 05. GLOSTER DESKTOP APPLICATION
  // -------------------------------------------------------------
  {
    id: "gloster-desktop",
    number: "05",
    slug: "gloster-desktop",
    title: "Gloster Desktop Application",
    subtitle: "Desktop Software Engineering",
    category: "Desktop Software / Application Development",
    filterCategory: "desktop",
    layoutType: "layout-a", // Layout A: Two-column
    statement: "Specialized offline desktop software designed for low-latency operational data entry, local storage, and structured reporting.",
    liveUrl: null,
    liveUrlLabel: "PRIVATE PROJECT (TECHNICAL CASE STUDY)",
    githubUrl: null,
    isPrivate: true,
    role: "Desktop Software Developer",
    stack: ["Desktop Application Architecture", "Local SQLite Engine", "Modular Frontend", "File I/O", "Data Validation"],
    heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    heroImageCaption: "FIG. 05A — GLOSTER WORKSPACE INTERFACE & TRANSACTIONAL RECORD MANAGEMENT",
    thumb1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    thumb1Caption: "FIG. 05B — LOCAL QUERY & REPORTING PANEL",
    thumb2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    thumb2Caption: "FIG. 05C — OFFLINE DATA VALIDATION & EXPORT",
    overview: "The Gloster Desktop Application is an independently developed workstation software utility built to support offline operational workflows, structured record creation, local data querying, and report generation. Built specifically to eliminate cloud dependency in bandwidth-constrained local office environments, Gloster pairs a clean ergonomic user interface with an embedded transactional database.",
    bullets: [
      "Offline-first desktop architecture with zero mandatory internet dependency",
      "Embedded relational database for sub-millisecond local query execution",
      "Strict form validation schemas preventing invalid transaction records",
      "Automated CSV, Excel, and structured PDF report export engines",
      "Compact install footprint with native OS window management and keyboard accelerators"
    ],
    metadata: {
      "CATEGORY": "DESKTOP APPLICATION",
      "APPLICATION": "GLOSTER",
      "TARGET OS": "WINDOWS WORKSTATIONS",
      "DATABASE": "LOCAL EMBEDDED SQLITE",
      "ACCESS": "PRIVATE DEPLOYMENT"
    },
    sections: [
      {
        heading: "Problem Statement & Operational Context",
        content: "Many industrial and logistics back-offices operate in environments with intermittent connectivity, where web-based SaaS solutions suffer from loading latency, session timeouts, and network disconnects during bulk data processing. Gloster was engineered to provide instant tactile response and bulletproof data persistence regardless of network health."
      },
      {
        heading: "Application Architecture & Data Integrity",
        content: "The desktop architecture decouples the presentation layer from the database engine using clean repository patterns. All write operations occur within ACID-compliant database transactions with automatic rolling file backups."
      },
      {
        heading: "Interface Design & Keyboard Ergonomics",
        content: "Designed for high-speed clerical entry, allowing users to navigate through forms, trigger searches, and commit records entirely via keyboard shortcuts without reaching for a mouse."
      }
    ],
    nextProjectId: "ai-website-builder"
  },

  // -------------------------------------------------------------
  // 06. AI-POWERED WEBSITE BUILDER
  // -------------------------------------------------------------
  {
    id: "ai-website-builder",
    number: "06",
    slug: "ai-website-builder",
    title: "AI-Powered Website Builder",
    subtitle: "Autonomous Design Analysis & Code Synthesis",
    category: "Generative AI / Developer Tools",
    filterCategory: "ai",
    layoutType: "layout-b", // Layout B: 4-Column
    statement: "Autonomous platform that ingests reference URLs, extracts DOM hierarchies and design tokens, and synthesizes production-ready React components.",
    liveUrl: "https://github.com/saketh-reddy-29",
    liveUrlLabel: "EXPLORE REPOSITORY ↗",
    githubUrl: "https://github.com/saketh-reddy-29",
    isPrivate: false,
    role: "AI/ML Systems & Full-Stack Engineer",
    stack: ["React", "TypeScript", "Vite", "Playwright", "LLM APIs", "RAG", "AST Parsing", "Node.js"],
    heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    heroImageCaption: "FIG. 06A — PLAYWRIGHT HEADLESS BROWSER CRAWLER & DOM TREE TOKEN EXTRACTION",
    thumb1: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
    thumb1Caption: "FIG. 06B — DESIGN TOKEN ANALYSIS & PALETTE MAPPING",
    thumb2: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    thumb2Caption: "FIG. 06C — MULTI-VIEWPORT BROWSER VERIFICATION",
    overview: "The AI-Powered Website Builder is an intelligent website reconstruction and generation system designed to convert reference websites and high-level user prompts into production-grade, responsive React applications. Combining headless browser crawling via Playwright, design token vectorization via RAG, multi-pass LLM code synthesis, and automated visual regression diffing, the platform automates the end-to-end prototyping workflow.",
    bullets: [
      "Automated extraction of computed CSS styles, typography, color palettes, and responsive breakpoints",
      "Design token embedding store with pre-indexed modern UI component archetypes",
      "Multi-pass LLM synthesizer generating typed React, TypeScript, and TailwindCSS components",
      "In-browser runtime sandbox with instant hot-reloaded visual preview",
      "Playwright-driven automated screenshot comparison across mobile, tablet, and desktop viewports"
    ],
    metadata: {
      "CATEGORY": "GENERATIVE AI / DEV TOOLS",
      "CORE PIPELINE": "PLAYWRIGHT + LLM AST",
      "RUNTIME": "REACT / TYPESCRIPT / VITE",
      "STATUS": "ACTIVE RESEARCH & DEV",
      "AUTOMATION": "SELF-HEALING CODE LOOPS"
    },
    sections: [
      {
        heading: "Website Reference Ingestion Workflow",
        content: "A headless Playwright instance navigates to the target URL, waits for network idle, and executes an in-page script that traverses the DOM tree. It calculates computed bounding boxes, active typography tokens, color harmonies, and responsive media queries, generating a dense structural manifest."
      },
      {
        heading: "RAG & LLM Code Generation Pipeline",
        content: "The structural manifest is paired with curated UI design system pattern libraries from a vector retrieval cache. The LLM receives strict JSON schemas and AST guidelines to generate clean, modular React components without hallucinated CSS classes."
      },
      {
        heading: "Visual Verification & Self-Healing Loop",
        content: "Generated code is compiled inside an isolated Vite sandbox. Playwright takes synchronized screenshots of both the original reference and the generated build, computing a pixel-by-pixel perceptual hash. Compile or lint errors are fed back into the LLM context for automated correction."
      }
    ],
    nextProjectId: "hrms-attendance"
  },

  // -------------------------------------------------------------
  // 07. HRMS FIELD ATTENDANCE APPLICATION
  // -------------------------------------------------------------
  {
    id: "hrms-attendance",
    number: "07",
    slug: "hrms-attendance",
    title: "HRMS Field Attendance System",
    subtitle: "Enterprise Workforce Telemetry & Attendance",
    category: "Enterprise Software / Mobile Application",
    filterCategory: "enterprise",
    layoutType: "layout-a", // Layout A: Two-column
    statement: "Mobile-first workforce management platform with high-precision GPS geofencing, biometric check-in, offline SQLite synchronization, and Prisma ORM.",
    liveUrl: "https://github.com/saketh-reddy-29",
    liveUrlLabel: "EXPLORE REPOSITORY ↗",
    githubUrl: "https://github.com/saketh-reddy-29",
    isPrivate: false,
    role: "Full-Stack Mobile Engineer",
    stack: ["React", "TypeScript", "Capacitor", "Node.js", "Express", "Prisma ORM", "SQL Server", "SQLite", "GPS"],
    heroImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    heroImageCaption: "FIG. 07A — FIELD ENGINEER MOBILE ATTENDANCE & GEOFENCE TELEMETRY ENGINE",
    thumb1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    thumb1Caption: "FIG. 07B — REAL-TIME SUPERVISOR ROUTE MONITOR",
    thumb2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    thumb2Caption: "FIG. 07C — DIGITAL CUSTOMER WORK ORDER SIGN-OFF",
    overview: "The HRMS Field Attendance System is a mobile-first enterprise application built for distributed field service engineers, site supervisors, and project operations teams. Designed using React, TypeScript, and Capacitor for cross-platform Android and iOS deployment, the system combines GPS polygonal geofencing, on-device facial check-in photo validation, offline-first SQLite caching, job assignment tracking, and digital customer sign-offs connected to an enterprise SQL Server backend via Prisma ORM.",
    bullets: [
      "Sub-meter GPS polygonal geofence validation confirming presence at designated job sites",
      "Camera integration capturing photo and timestamp metadata during clock-in/out",
      "Offline-first SQLite transactional sync for field engineers working in deep basements or remote plants",
      "Job assignment lifecycle: dispatched, en-route, arrived, in-progress, completed, and customer sign-off",
      "Supervisor dashboard with real-time field route telemetry, overtime auditing, and duty analytics"
    ],
    metadata: {
      "CATEGORY": "ENTERPRISE SOFTWARE / MOBILE",
      "FRONTEND": "REACT / TYPESCRIPT / CAPACITOR",
      "BACKEND": "NODE.JS / EXPRESS / PRISMA",
      "DATABASE": "SQL SERVER + LOCAL SQLITE",
      "VERIFICATION": "GPS GEOFENCE + PHOTO CAPTURE"
    },
    sections: [
      {
        heading: "Mobile Architecture & Offline Resilience",
        content: "Field engineers frequently service equipment in underground facilities or shielded plant rooms with zero cellular connectivity. Capacitor provides native hardware access to GPS and cameras, persisting state locally in encrypted SQLite storage. When network connectivity resumes, a conflict-free reconciliation queue synchronizes transactions to the backend."
      },
      {
        heading: "Backend Security & Enterprise Integration",
        content: "The backend is implemented as a Node.js and Express REST microservice governed by Prisma ORM connected to Microsoft SQL Server. All location coordinates are validated server-side against customer facility bounding coordinates to prevent device-level GPS spoofing."
      },
      {
        heading: "Service Workflow & Digital Sign-Off",
        content: "Engineers can document spare parts consumed, upload service photos, log machine serial numbers, and capture the plant manager's digital signature directly on the mobile screen upon job completion."
      }
    ],
    nextProjectId: "ai-home-security"
  },

  // -------------------------------------------------------------
  // 08. AI HOME SECURITY SYSTEM
  // -------------------------------------------------------------
  {
    id: "ai-home-security",
    number: "08",
    slug: "ai-home-security",
    title: "AI Home Security System",
    subtitle: "Edge Computer Vision & Motion Classification",
    category: "AI / Computer Vision / Security Software",
    filterCategory: "ai",
    layoutType: "layout-b", // Layout B: 4-Column
    statement: "Intelligent computer vision system utilizing custom YOLOv8 object detection and OpenCV for real-time edge perimeter surveillance.",
    liveUrl: "https://github.com/saketh-reddy-29",
    liveUrlLabel: "EXPLORE REPOSITORY ↗",
    githubUrl: "https://github.com/saketh-reddy-29",
    isPrivate: false,
    role: "Computer Vision & AI Engineer",
    stack: ["Python", "OpenCV", "YOLOv8", "Flask", "WebSockets", "WebRTC", "NumPy"],
    heroImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
    heroImageCaption: "FIG. 08A — REAL-TIME EDGE OBJECT DETECTION & BOUNDING BOX TRAJECTORY ANALYSIS",
    thumb1: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=600&q=80",
    thumb1Caption: "FIG. 08B — LOW-LIGHT HUMAN POSTURE CLASSIFICATION",
    thumb2: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    thumb2Caption: "FIG. 08C — EVENT DISPATCH & ALERT NOTIFICATION LOG",
    overview: "The AI Home Security System is an edge-deployable computer vision project developed to process IP camera video streams, classify human silhouettes and postures, eliminate false alarms triggered by pets or wind-blown vegetation, and dispatch instant security notifications. Using Python, OpenCV, and lightweight YOLOv8 models optimized for low-power edge GPUs, the project provides an accessible, privacy-centric alternative to cloud-dependent proprietary cameras.",
    bullets: [
      "RTSP camera feed ingestion with frame decoupling to maintain 30+ FPS edge throughput",
      "YOLOv8 deep learning model fine-tuned for human perimeter breach and posture classification",
      "Intelligent heuristic motion filtering reducing false alarms by up to 90%",
      "User-configurable virtual tripwire zones and exclusion boundaries configured via web UI",
      "Instant encrypted alert dispatching with annotated short video clips"
    ],
    metadata: {
      "CATEGORY": "COMPUTER VISION / EDGE AI",
      "FRAMEWORK": "PYTHON / OPENCV / YOLOV8",
      "INFERENCE": "LOCAL ONNX / TENSORRT",
      "SERVER": "FLASK ASYNC + WEBSOCKETS",
      "STATUS": "COMPLETED RESEARCH PROTOTYPE"
    },
    sections: [
      {
        heading: "Computer Vision Pipeline & Frame Analysis",
        content: "Video streams from RTSP cameras are processed using a multi-threaded frame queue. Background subtraction algorithms identify candidate motion regions, which are passed to the YOLOv8 neural network for object classification and bounding box localization."
      },
      {
        heading: "Eliminating False Positives",
        content: "Conventional motion detectors trigger alerts on swaying trees, moving shadows, and wandering pets. By requiring both a high-confidence human classification and crossing of a geometric virtual tripwire over consecutive frames, spurious alerts are eliminated."
      },
      {
        heading: "Privacy-Preserving Local Inference",
        content: "Video processing occurs entirely on local hardware, ensuring video feeds and household member imagery never traverse third-party cloud servers without explicit user authorization."
      }
    ],
    nextProjectId: "eloan-app"
  },

  // -------------------------------------------------------------
  // 09. E-LOAN APPLICATION
  // -------------------------------------------------------------
  {
    id: "eloan-app",
    number: "09",
    slug: "eloan-app",
    title: "E-Loan Application",
    subtitle: "Web Application & Underwriting Workflow",
    category: "Web Application / Financial Software",
    filterCategory: "web",
    layoutType: "layout-a", // Layout A: Two-column
    statement: "Full-stack web platform facilitating digital loan application submission, document uploading, credit verification, and underwriting workflows.",
    liveUrl: "https://github.com/saketh-reddy-29",
    liveUrlLabel: "EXPLORE REPOSITORY ↗",
    githubUrl: "https://github.com/saketh-reddy-29",
    isPrivate: false,
    role: "Full-Stack Web Developer",
    stack: ["HTML5", "CSS3", "JavaScript", "Python", "Django", "PostgreSQL / SQLite", "REST APIs"],
    heroImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    heroImageCaption: "FIG. 09A — DIGITAL LOAN ORIGINATION DASHBOARD & CREDIT ELIGIBILITY CALCULATOR",
    thumb1: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80",
    thumb1Caption: "FIG. 09B — SECURE APPLICANT DOCUMENT UPLOAD",
    thumb2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    thumb2Caption: "FIG. 09C — UNDERWRITING REVIEW & AMORTIZATION",
    overview: "The E-loan Application is a financial software project engineered to modernize retail lending origination. Developed with a responsive frontend and Python/Django backend, the application guides borrowers through multi-step loan applications, calculates dynamic repayment schedules and interest amortization tables, manages document uploads, and provides loan officers with a structured underwriting evaluation portal.",
    bullets: [
      "Multi-stage borrower application wizard with client-side and server-side form validation",
      "Dynamic loan amortization calculator modeling monthly payments across principal and interest tiers",
      "Encrypted file upload handling for proof of income, tax filings, and identity documents",
      "Role-based access control distinguishing borrower applicants from loan underwriting officers",
      "Underwriter dashboard for application review, credit status tagging, and decision notifications"
    ],
    metadata: {
      "CATEGORY": "FINANCIAL WEB APPLICATION",
      "STACK": "PYTHON / DJANGO / JAVASCRIPT",
      "DATABASE": "RELATIONAL SQL SCHEMA",
      "ROLE": "FULL-STACK DEVELOPER",
      "STATUS": "ACADEMIC / EXPERIMENTAL SOFTWARE"
    },
    sections: [
      {
        heading: "Project Objectives & Financial Workflows",
        content: "Traditional paper-based loan applications suffer from high drop-off rates and tedious document reconciliation. E-loan digitizes the onboarding sequence, guiding the applicant through income verification, loan amount selection, and document upload with clear progress indicators."
      },
      {
        heading: "Backend Architecture & Data Validation",
        content: "The Python/Django backend utilizes strict model validation to ensure loan requests adhere to regulatory boundaries. Amortization formulas compute precise interest allocations across loan terms."
      },
      {
        heading: "Security & Role-Based Permissions",
        content: "Django's authentication system enforces strict access control: applicants can only view their own active submissions, while administrative loan officers have access to underwriting review queues and status decision tools."
      }
    ],
    nextProjectId: "construction-materials"
  },

  // -------------------------------------------------------------
  // 10. CONSTRUCTION MATERIALS APPLICATION
  // -------------------------------------------------------------
  {
    id: "construction-materials",
    number: "10",
    slug: "construction-materials",
    title: "Construction Materials Application",
    subtitle: "Mobile Inventory & Field Logistics",
    category: "Mobile Application / Flutter",
    filterCategory: "mobile",
    layoutType: "layout-b", // Layout B: 4-Column
    statement: "Mobile application interface designed for construction material cataloging, site inventory tracking, and supply requisitions.",
    liveUrl: "https://github.com/saketh-reddy-29",
    liveUrlLabel: "EXPLORE REPOSITORY ↗",
    githubUrl: "https://github.com/saketh-reddy-29",
    isPrivate: false,
    role: "Mobile App Developer",
    stack: ["Flutter", "Dart", "REST APIs", "State Management", "Mobile UI Design", "SQLite"],
    heroImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=800&q=80",
    heroImageCaption: "FIG. 10A — MATERIAL INVENTORY DASHBOARD & SITE REQUISITION LOGISTICS",
    thumb1: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
    thumb1Caption: "FIG. 10B — BULK AGGREGATE & STEEL CATALOG",
    thumb2: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    thumb2Caption: "FIG. 10C — SITE RECEIPT LOG & INVENTORY AUDIT",
    overview: "The Construction Materials Application is a mobile project built with Flutter and Dart, created to assist site contractors, warehouse managers, and project engineers in tracking building supplies, structural steel, cement aggregates, and equipment across construction job sites. The application provides an organized catalog, material stock level tracking, and requisition logging to prevent site shortages.",
    bullets: [
      "Cross-platform Flutter mobile interface featuring clean, high-contrast engineering components",
      "Comprehensive material catalog organizing cement, structural steel, aggregates, and electrical supplies",
      "Job site stock level tracking with minimum inventory threshold indicators",
      "Material requisition submission workflow for site foremen requesting fresh deliveries",
      "Offline cache support for remote construction sites with unreliable cellular coverage"
    ],
    metadata: {
      "CATEGORY": "MOBILE APPLICATION",
      "FRAMEWORK": "FLUTTER & DART",
      "PLATFORM": "ANDROID & IOS",
      "ROLE": "MOBILE UI & APPLICATION LOGIC",
      "STATUS": "DEVELOPMENT PROTOTYPE"
    },
    sections: [
      {
        heading: "Construction Logistics Problem Context",
        content: "Job site delays frequently stem from material stockouts and untracked material receipts. The app gives site foremen a straightforward mobile interface to log deliveries, audit remaining quantities, and initiate requests before critical stock runs out."
      },
      {
        heading: "Flutter UI & Component Architecture",
        content: "Built using Flutter's widget architecture with reactive state management. High-contrast typography and clear touch targets ensure effortless readability even in bright outdoor sunlight on construction sites."
      },
      {
        heading: "Offline Functionality & Data Model",
        content: "Material logs are cached locally on device storage, ensuring foremen can inspect specifications and log receipts in remote yards without internet access. Data reconciles once connectivity is restored."
      }
    ],
    nextProjectId: "techbott"
  }
];

// Helper to find project by slug or ID
export function getProjectBySlug(slug) {
  return PROJECTS_DATA.find(p => p.slug === slug || p.id === slug);
}
