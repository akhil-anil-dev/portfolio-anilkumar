/**
 * Portfolio content — single source of truth.
 *
 * To update the site, edit values here. Components read from this file.
 * Fields marked TODO are missing in the source CV and should be filled in.
 */

export const profile = {
  name: "Anilkumar Nenmaniyil Jagadeesan",
  shortName: "Anilkumar N.J.",
  title: "MEP BIM Coordinator",
  location: "Malta, Europe",
  summary:
    "MEP BIM Coordinator with 7 years of experience in BIM modeling, multidisciplinary coordination, and project delivery across residential, commercial, healthcare, hospitality, industrial, and infrastructure projects. Proficient in Autodesk Revit, Navisworks Manage, and Dynamo, with expertise in clash detection, model coordination, BIM standards implementation, and workflow automation. Skilled in delivering accurate and coordinated MEP models that improve project efficiency, minimize design conflicts, and support successful construction outcomes.",
  tagline: "Designing precision into every layer of the build.",
  email: "anilkumarnj208@gmail.com",
  phones: [
    { label: "Malta", value: "+356 9909 9453", href: "tel:+35699099453" },
    { label: "India", value: "+91 70346 47058", href: "tel:+917034647058" },
  ],
  linkedin: {
    label: "linkedin.com/in/anilkumar-n-j",
    href: "https://www.linkedin.com/in/anilkumar-n-j",
  },
  /** Replace with a real CV file placed in /public/cv/ */
  cvPath: "/cv/Anilkumar-NJ-CV.pdf",
};

/* ─────────── Core / Soft Skills ─────────── */
/** Source PDF showed star ratings without labels — replace these with the actual list. */
export const coreSkills: { name: string; level: number }[] = [
  { name: "MEP Coordination", level: 5 },
  { name: "Clash Detection & Resolution", level: 5 },
  { name: "BIM Modeling (LOD 300–500)", level: 5 },
  { name: "Team Collaboration", level: 5 },
  { name: "Problem Solving", level: 4 },
  { name: "Communication", level: 4 },
  { name: "Attention to Detail", level: 5 },
  { name: "Time Management", level: 4 },
];

/* ─────────── Technical Skills ─────────── */
export const technicalSkills: string[] = [
  "Mechanical Systems Modeling",
  "Electrical Systems Modeling",
  "Plumbing & Firefighting",
  "HVAC Layout & Ductwork",
  "Pump Room Design",
  "Quantity Estimation",
  "MEP Drawings & Documentation",
  "IFA / IFC / As-Built Stages",
  "Clash Detection & Coordination",
  "Multi-Discipline Reviews",
];

/* ─────────── Software ─────────── */
export const software: {
  name: string;
  level: "Expert" | "Advanced" | "Proficient";
  note?: string;
}[] = [
  { name: "Autodesk Revit", level: "Expert", note: "MEP modeling, families, schedules" },
  { name: "Navisworks Manage", level: "Expert", note: "Clash detection, coordination" },
  { name: "Dynamo", level: "Advanced", note: "Workflow automation & scripting" },
  { name: "AutoCAD", level: "Expert", note: "2D drafting, MEP layouts" },
  { name: "BIM 360 / ACC", level: "Advanced", note: "Cloud-based coordination" },
  { name: "Carrier HAP", level: "Proficient", note: "Heat load calculations" },
];

/* ─────────── Experience ─────────── */
export const experience: {
  role: string;
  company: string;
  location: string;
  period?: string; // TODO: fill exact dates
  highlights: string[];
}[] = [
  {
    role: "Experienced Draughtsperson",
    company: "Mekanika Ltd",
    location: "Malta, Europe",
    period: "Current",
    highlights: [
      "Coordinating MEP packages for hotel and commercial developments across Malta.",
      "Producing IFA / IFC / As-Built models and drawings to LOD 300–500.",
      "Driving clash resolution sessions with architectural and structural teams.",
    ],
  },
  {
    role: "MEP BIM Coordinator",
    company: "Prompt Engineering Consulting Services",
    location: "India",
    highlights: [
      "Led MEP coordination on international hotel and high-rise projects.",
      "Managed model federation, clash workflows, and design reviews in Navisworks.",
      "Reviewed deliverables for accuracy, constructability, and consultant standards.",
    ],
  },
  {
    role: "Draughtsperson",
    company: "Steel Engineering Technology",
    location: "Qatar",
    highlights: [
      "Produced shop and coordination drawings for mechanical and plumbing systems.",
      "Supported on-site teams with revised layouts and as-built documentation.",
    ],
  },
  {
    role: "MEP BIM Modeler",
    company: "Anel MEP",
    location: "Qatar",
    highlights: [
      "Modeled MEP systems for large mixed-use and commercial developments.",
      "Coordinated with multi-disciplinary teams to deliver clash-free models.",
    ],
  },
  {
    role: "MEP BIM Modeller",
    company: "Gulftech MEP Design Solution",
    location: "India",
    highlights: [
      "Built foundational expertise in Revit MEP modeling and AutoCAD detailing.",
      "Delivered drawings, schedules, and quantity take-offs for MEP packages.",
    ],
  },
];

/* ─────────── Projects ─────────── */
export type Project = {
  name: string;
  location: string;
  client?: string;
  consultant?: string;
  role: string;
  overview: string;
  tools: string[];
  learnings?: string;
  image?: string;
  /** Featured projects get a hero card with photo carousel + "View Project" button. */
  featured?: boolean;
  /** Photo filenames (in /public/projects/<slug>/photos/) for the auto-rotating carousel. */
  photos?: string[];
  /** Engineering diagrams shown in the project panel (watermarked JPG previews only — no PDFs served). */
  diagrams?: {
    /** JPG preview shown in the gallery (in /public/projects/<slug>/diagrams/). */
    src: string;
    label: string;
    discipline: "Mechanical" | "Electrical" | "Plumbing" | "Fire Fighting" | "Ventilation";
  }[];
  /** Key responsibilities & contributions — rendered as a bulleted block in the panel. */
  responsibilities?: string[];
  /** BIM-coordination highlight images (3D model views, as-built photos, collages). */
  coordination?: {
    /** Filename inside /public/projects/<slug>/coordination/ */
    src: string;
    alt: string;
    caption?: string;
  }[];
};

export const projects: Project[] = [
  {
    name: "Quad Central Business Center",
    location: "Mrieħel, Malta",
    consultant: "ECL",
    role: "MEP Coordinator & Modeler",
    overview:
      "Coordinated mechanical and electrical systems in Revit, with clash detection and resolution managed through Revit and Navisworks workflows.",
    tools: ["Revit", "Navisworks", "AutoCAD", "Dynamo"],
    featured: true,
    photos: [
      "quad-1.jpg",
      "quad-2.jpg",
      "quad-3.jpg",
    ],
    diagrams: [
      { src: "ac1-l12.jpg", label: "Air Conditioning — Level 12 (Sheet 1)", discipline: "Mechanical" },
      { src: "ac2-l12.jpg", label: "Air Conditioning — Level 12 (Sheet 2)", discipline: "Mechanical" },
      { src: "ac3-l12.jpg", label: "Air Conditioning — Level 12 (Sheet 3)", discipline: "Mechanical" },
      { src: "vnt-l12.jpg", label: "Ventilation — Level 12", discipline: "Ventilation" },
      { src: "ff-l12.jpg", label: "Fire Fighting — Level 12", discipline: "Fire Fighting" },
      { src: "ff-b03-pump-room.jpg", label: "Fire Fighting Pump Room — Basement 03", discipline: "Fire Fighting" },
      { src: "pl-l12.jpg", label: "Plumbing — Level 12", discipline: "Plumbing" },
      { src: "ltg-l12.jpg", label: "Lighting — Level 12", discipline: "Electrical" },
    ],
    responsibilities: [
      "Developed Architectural and Structural BIM models from 2D CAD drawings and set up Revit BIM environments.",
      "Created and maintained central models, integrating multidisciplinary models for coordination.",
      "Led MEPF system development, coordination, and integration in BIM.",
      "Performed clash detection and multidisciplinary coordination to resolve design conflicts.",
      "Optimized MEP routing in limited spaces through duct resizing and system adjustments.",
      "Coordinated with architects, engineers, consultants, and stakeholders to ensure accuracy and constructability.",
      "Prepared and managed RFIs for design and coordination issues.",
      "Attended coordination meetings and implemented approved resolutions.",
      "Produced coordinated shop drawings, construction drawings, plans, sections, elevations, schedules, and installation details.",
      "Maintained BIM quality and compliance with project standards and documentation requirements.",
      "Delivered coordinated BIM models and documentation supporting execution, installation, and project delivery.",
    ],
    coordination: [
      {
        src: "bim-coordination.jpg",
        alt: "BIM coordination — MEP model overview with as-built installation",
        caption: "Where Design Meets Function — 3D MEP coordination model alongside the installed services.",
      },
    ],
  },
  {
    name: "Noru Hotel, Paceville",
    location: "Malta",
    consultant: "ECL",
    role: "MEP Modeler — Mechanical Pump Room",
    overview:
      "Developed and coordinated the mechanical pump room — modeling, clash resolution, and optimised layouts in coordination with MEP and structural teams. Delivered accurate pump-room documentation and models.",
    tools: ["Revit", "AutoCAD"],
    learnings:
      "Hands-on experience across project stages in pump-room design and inter-discipline coordination.",
    image: "/projects/noru-hotel.jpg",
  },
  {
    name: "Hyatt Centric Hotel",
    location: "Malta",
    consultant: "B.Nell",
    role: "MEP Coordinator & Modeler",
    overview:
      "Coordinated mechanical and electrical systems in Revit, with clash detection and resolution managed through Revit and Navisworks workflows.",
    tools: ["Revit", "AutoCAD", "Navisworks"],
    learnings:
      "Managed LOD 300–500 models across IFA, IFC, and As-Fitted stages with strong inter-discipline collaboration.",
    image: "/projects/hyatt-centric.jpg",
  },
  {
    name: "Gasan Mamo Insurance, Qormi",
    location: "Malta",
    consultant: "ECL",
    role: "MEP Coordinator & Modeler",
    overview:
      "Modeled and coordinated MEP systems with architectural design across 3B + GF + L4 + RF, including duct redesign and quantity estimation in constrained service zones.",
    tools: ["Revit", "AutoCAD"],
    learnings:
      "Strengthened duct redesign skills and effective coordination within tight ceiling voids.",
    image: "/projects/gasan-mamo.jpg",
  },
  {
    name: "Sarah Gasan Villa",
    location: "Malta",
    role: "MEP Modeler",
    overview:
      "MEP modeling and coordination for a private residential villa, delivering services layouts aligned with architectural intent.",
    tools: ["Revit", "AutoCAD"],
    image: "/projects/sarah-gasan-villa.jpg",
  },
  {
    name: "Park Hyatt Hotel, Old Ad'Diriyah",
    location: "Riyadh, KSA",
    client: "Diriyah Company",
    consultant: "SE Consultant",
    role: "MEP Coordinator & Modeler",
    overview:
      "Modeled mechanical systems to high precision standards and used Navisworks for clash detection — collaborating across teams to resolve conflicts efficiently.",
    tools: ["Revit", "AutoCAD", "Navisworks", "HAP"],
    learnings:
      "Improved real-time problem-solving and integration of complex mechanical systems into heritage-influenced architecture.",
    image: "/projects/park-hyatt-riyadh.jpg",
  },
  {
    name: "Address The Bay",
    location: "Dubai, UAE",
    client: "EMAAR",
    consultant: "CKR (MEP)",
    role: "MEP Modeler & Coordinator",
    overview:
      "Led development and coordination of MEP systems with seamless integration across disciplines. Proactively identified and resolved clashes in Navisworks to minimise rework.",
    tools: ["Revit", "AutoCAD", "Navisworks"],
    learnings:
      "Sharpened communication and developed innovative solutions for complex modeling challenges.",
    image: "/projects/address-the-bay.jpg",
  },
  {
    name: "220 Ritz Carlton Hotel & Branded Residences",
    location: "Middle East",
    role: "MEP BIM Modeler",
    overview:
      "Modeled MEP systems for a flagship hotel and branded-residence development, coordinating with discipline leads throughout design stages.",
    tools: ["Revit", "Navisworks", "AutoCAD"],
    image: "/projects/ritz-carlton.jpg",
  },
  {
    name: "Lusail Plaza Tower (Plot-C & Plot-D)",
    location: "Lusail, Qatar",
    client: "Lusail Real Estate Development Co.",
    role: "MEP Modeler (Utility Mechanical Systems)",
    overview:
      "Modeled mechanical utility systems in Revit and managed clash detection workflows. Delivered LOD 300–500 models across IFA, IFC, and As-Fitted stages.",
    tools: ["Revit", "AutoCAD", "Navisworks"],
    learnings:
      "Deepened expertise in tower-scale model coordination and integration with multi-discipline teams.",
    image: "/projects/lusail-plaza.jpg",
  },
  {
    name: "Geogreen Shield Refinery Expansion",
    location: "Qatar",
    role: "MEP BIM Modeler",
    overview:
      "Contributed to the BIM coordination and modeling for a major refinery expansion programme, delivering accurate services layouts in a heavy-industrial context.",
    tools: ["Revit", "Navisworks", "AutoCAD"],
    image: "/projects/geogreen.jpg",
  },
];

/* ─────────── Certifications ─────────── */
/** TODO: replace with real certifications when provided. */
export const certifications: { name: string; issuer?: string; year?: string }[] =
  [
    { name: "Autodesk Revit MEP — Coordination", issuer: "TODO", year: "TODO" },
    { name: "Navisworks Manage — Clash Detection", issuer: "TODO", year: "TODO" },
    { name: "AutoCAD Professional", issuer: "TODO", year: "TODO" },
  ];

/* ─────────── Education ─────────── */
/** TODO: replace with real education history. */
export const education: { degree: string; institution: string; period?: string }[] =
  [
    {
      degree: "Diploma / Degree in Mechanical Engineering (TODO)",
      institution: "TODO — Institution name",
      period: "TODO — Years",
    },
  ];

/* ─────────── Navigation ─────────── */
export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Software", href: "#software" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];
