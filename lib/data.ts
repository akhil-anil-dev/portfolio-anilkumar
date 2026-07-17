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
export const coreSkills: { name: string; level: number }[] = [
  { name: "MEP BIM Coordination", level: 5 },
  { name: "Clash Detection & Resolution", level: 5 },
  { name: "BIM Model Management", level: 5 },
  { name: "Multidisciplinary Coordination", level: 5 },
  { name: "Shop Drawing Production", level: 5 },
  { name: "BIM Standards & QA/QC", level: 5 },
  { name: "RFI Management", level: 4 },
  { name: "Construction Documentation", level: 5 },
];

/* ─────────── Technical Skills ─────────── */
export const technicalSkills: string[] = [
  "BIM Modeling (MEP)",
  "Revit MEP & Family Management",
  "BIM Model Management",
  "Template Creation & Project Setup",
  "Clash Detection & Resolution",
  "Multidisciplinary Coordination",
  "Shop Drawings & Construction Documentation",
  "BIM 360 / Autodesk Construction Cloud (ACC)",
  "Dynamo Automation",
  "HVAC, Plumbing & Firefighting Modeling",
  "Quantity Take-Off (QTO)",
  "IFC / IFA / As-Built Deliverables",
  "Model QA/QC & BIM Standards",
  "Coordination Meetings & RFI Management",
  "Technical Problem Solving & Coordination Solutions",
  "Team Leadership & Resource Coordination",
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
  sector?: string;
  role: string;
  overview: string;
  tools: string[];
  learnings?: string;
  image?: string;
  /** Featured projects get a hero card with photo carousel + "View Project" button. */
  featured?: boolean;
  /** URL-safe project ID. Used to build folder paths under /public/projects/<slug>/ */
  slug?: string;
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
    sector: "Commercial",
    role: "MEP Coordinator & Modeler",
    overview:
      "Coordinated mechanical and electrical systems in Revit, with clash detection and resolution managed through Revit and Navisworks workflows.",
    tools: ["Revit", "Navisworks", "AutoCAD", "Dynamo"],
    featured: true,
    slug: "quad-malta",
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
    name: "Noru Hotel",
    location: "Paceville, St. Julian's, Malta",
    sector: "Hospitality",
    role: "MEP BIM Coordinator — Pump Room",
    overview:
      "Modern hospitality development in Paceville, Malta. My involvement focused on BIM development, coordination, and documentation of the pump room — ensuring efficient integration of mechanical and plumbing services within the allocated space.",
    tools: ["Revit", "AutoCAD"],
    featured: true,
    slug: "noru-hotel",
    photos: ["noru-1.jpg", "noru-2.jpg", "noru-3.jpg"],
    diagrams: [
      {
        src: "noru-dia-1.jpg",
        label: "Pump Room — Plumbing Schematic Layout (CE-046-23-DET-01)",
        discipline: "Plumbing",
      },
    ],
    coordination: [
      {
        src: "noru-bim-1.jpg",
        alt: "Pump room — Revit BIM 3D coordination view (overall)",
        caption: "Pump room — 3D BIM coordination model showing boilers, DHW tanks and primary pipework.",
      },
      {
        src: "noru-bim-2.jpg",
        alt: "Pump room — Revit BIM 3D coordination view (detail)",
        caption: "Detailed isometric view — equipment connections, valving and supports.",
      },
    ],
    responsibilities: [
      "Developed detailed BIM models for the pump room using Autodesk Revit.",
      "Coordinated mechanical, plumbing, and fire-fighting services within the pump room environment.",
      "Identified and resolved clashes between building services and structural elements.",
      "Optimized equipment layout and service routing to improve accessibility and maintainability.",
      "Produced coordinated shop drawings, sections, elevations, and detailed construction documentation.",
      "Supported coordination reviews and implemented design updates based on project requirements.",
      "Maintained model quality and compliance with project BIM standards.",
    ],
  },

  {
    name: "MIDI T14 — MKHL",
    location: "Malta",
    sector: "Commercial · Coworking",
    client: "Midknight Holdings",
    role: "MEP BIM Coordinator",
    overview:
      "Fit-out MEP coordination for the MIDI Tower 14 workspace floors, delivered across Ground Floor and Mezzanine levels. Coordinated mechanical, electrical, and plumbing services within the exposed-ceiling office aesthetic to keep services organised, accessible, and installation-ready.",
    tools: ["Revit", "Navisworks", "AutoCAD"],
    featured: true,
    slug: "mkhl",
    photos: ["mkhl-1.jpg", "mkhl-2.jpg", "mkhl-3.jpg", "mkhl-4.jpg", "mkhl-5.jpg"],
    diagrams: [
      { src: "ac-gf.jpg",  label: "Air Conditioning — Ground Floor", discipline: "Mechanical" },
      { src: "vnt-gf.jpg", label: "Ventilation — Ground Floor",       discipline: "Ventilation" },
      { src: "vnt-mz.jpg", label: "Ventilation — Mezzanine",          discipline: "Ventilation" },
      { src: "ff-mz.jpg",  label: "Fire Fighting — Mezzanine",        discipline: "Fire Fighting" },
      { src: "pl-gf.jpg",  label: "Plumbing — Ground Floor",          discipline: "Plumbing" },
      { src: "pl-mz.jpg",  label: "Plumbing — Mezzanine",             discipline: "Plumbing" },
      { src: "ltg-gf.jpg", label: "Lighting — Ground Floor",          discipline: "Electrical" },
      { src: "ltg-mz.jpg", label: "Lighting — Mezzanine",             discipline: "Electrical" },
      { src: "pwr-gf.jpg", label: "Power — Ground Floor",             discipline: "Electrical" },
      { src: "pwr-mz.jpg", label: "Power — Mezzanine",                discipline: "Electrical" },
    ],
    responsibilities: [
      "Developed coordinated MEP BIM models for Ground Floor and Mezzanine levels in Autodesk Revit.",
      "Coordinated Mechanical, Electrical, Plumbing, and Fire-Fighting services with the architectural fit-out.",
      "Resolved services routing within an exposed-services ceiling design — kept the aesthetic clean while maintaining access.",
      "Produced shop-drawing sets per discipline for both levels: AC, Ventilation, Fire Fighting, Plumbing, Lighting, and Power.",
      "Supported coordination reviews and applied approved design changes to keep the model in step with site progress.",
      "Maintained BIM standards and QA/QC across the full document deliverable set.",
    ],
  },

  {
    name: "Gasan Legacy Offices",
    location: "Mrieħel, Malta",
    sector: "Commercial · Office Fit-out",
    client: "Gasan Group",
    role: "MEP BIM Coordinator",
    overview:
      "MEP BIM coordination for the Legacy Offices at Mrieħel, Malta — Level 5 fit-out. Delivered coordinated services across electrical containment, extra-low voltage, lighting, plumbing, and drainage — with dedicated shop-drawing sets and pipework/cable schedules for a build-ready package.",
    tools: ["Revit", "AutoCAD"],
    featured: true,
    slug: "gasan-legacy",
    photos: ["gasan-legacy-1.jpg"],
    diagrams: [
      { src: "l5-ac.jpg",  label: "Air Conditioning System — Level 5", discipline: "Mechanical" },
      { src: "l5-vnt.jpg", label: "Ventilation System — Level 5",       discipline: "Ventilation" },
      { src: "l5-pl.jpg",  label: "Plumbing System — Level 5",          discipline: "Plumbing" },
      { src: "rf-pl.jpg",  label: "Roof Plumbing — Water Tanks & Pumps", discipline: "Plumbing" },
      { src: "l5-dr.jpg",  label: "Drainage System — Level 5",          discipline: "Plumbing" },
      { src: "l5-ltg.jpg", label: "Lighting Layout — Level 5",          discipline: "Electrical" },
      { src: "l5-pwr.jpg", label: "Power Layout — Level 5",             discipline: "Electrical" },
      { src: "l5-elv.jpg", label: "Extra Low Voltage — Level 5",        discipline: "Electrical" },
      { src: "l5-cm.jpg",  label: "Cable Management — Level 5",         discipline: "Electrical" },
    ],
    coordination: [
      {
        src: "gasan-bim-1.jpg",
        alt: "Gasan Legacy Offices — Revit BIM aerial perspective of the rooftop plant",
        caption: "Rooftop plant — Revit BIM aerial view showing the full condenser array, plant-room housing, and parapet enclosure coordinated along the length of the building.",
      },
      {
        src: "gasan-bim-2.jpg",
        alt: "Gasan Legacy Offices — Revit BIM top-down view of the rooftop tank room and condensers",
        caption: "Top-down BIM view — cold-water tank room, condenser blocks, and plant housing laid out inside the rooftop enclosure with clear maintenance access.",
      },
      {
        src: "gasan-site-1.jpg",
        alt: "Gasan Legacy Offices — coordinated ceiling services and light panels on site",
        caption: "Coordinated services above the glazed office — insulated ductwork, ceiling light panels, and containment installed to match the BIM model.",
      },
      {
        src: "gasan-site-2.jpg",
        alt: "Gasan Legacy Offices — installed plumbing detail with water heater",
        caption: "Installed plumbing detail — DHW/DCW distribution, copper riser, and Tesy water heater matching the coordinated pipework schedule.",
      },
    ],
    responsibilities: [
      "Developed coordinated Revit BIM models for the Level 5 office fit-out.",
      "Coordinated Electrical (Power, Lighting, ELV, Cable Management) and Plumbing (Water & Drainage) services with the architectural design.",
      "Produced shop-drawing sets, schedules, and containment/pipework take-offs per discipline.",
      "Maintained BIM standards and QA/QC across the model and drawing deliverables.",
      "Supported coordination reviews and applied approved design updates during the delivery cycle.",
    ],
  },

  // ─── Add additional projects here as you share details ─────────────
  // Same shape as Quad Central above. For featured projects: include
  // `featured: true` and `slug: "<folder-name>"`. Photos / diagrams /
  // coordination images live under /public/projects/<slug>/.
];

/* ─────────── Certifications ─────────── */
export const certifications: {
  name: string;
  issuer?: string;
  year?: string;
  /** Filename inside /public/certifications/ — renders a "View Certificate" link. */
  file?: string;
}[] = [
  {
    name: "Revit MEP Advanced Workshop (Revit MEP 2024)",
    issuer: "Autodesk Authorized Training Center · Symetri",
    year: "2025",
    file: "revit-mep-advanced.pdf",
  },
  {
    name: "Certified ISO 19650 Information Manager — Level 3 Expert",
    issuer: "Plannerly",
    year: "2025",
    file: "plannerly-iso19650-expert.pdf",
  },
  {
    name: "Certified Information Manager — Level 1 Basics",
    issuer: "Plannerly",
    year: "2025",
    file: "plannerly-cim-basics.pdf",
  },
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
