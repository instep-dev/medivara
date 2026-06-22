export const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT US', href: '#about' },
  { label: 'SOLUTION', href: '#solution' },
  { label: 'TEAM', href: '#team' },
  { label: 'CONTACT', href: '#contact' },
]

export const navHrefs = ['#home', '#about', '#solution', '#teams', '#clients', '#contact', 'news']

export const heroServiceCardImages = [
  '/DEVELOP HOSPITAL.png',
  '/EXPAND THE HOSPITAL.png',
  '/HOSPITAL TURN ARROUND.png',
  '/strategic.png',
  '/oprational.png',
  '/infra.png',
  '/Quali.png',
  '/IMPLEMENT BUSSINESS.png',
]

export const heroData = {
  heading: 'Shaping the Future of Healthcare Institutions',
  description:
    'Medivara is a healthcare consulting, management, and development firm helping hospitals and healthcare organizations from strategy and system design to actual operations.',
  serviceCards: [
    { label: 'Develop a New Hospital', desc:"The Indonesian government estimate around half a million new hospital beds", image: '/DEVELOP HOSPITAL.png' },
    { label: 'Expand a Hospital', desc:"Our business tools and experienced consultants can also support initiatives..", image: '/EXPAND THE HOSPITAL.png' },
    { label: 'Make a Business Plan', desc:"A watertight business plan may sound like a really obvious place to startstrategy...", image: '/MAKE A BUSINESS PLAN.png' },
    { label: 'Implement a Business Plan', desc:"Not only does HCM excellence providea precise and exacting business strategy...", image: '/IMPLEMENT BUSSINESS.png' },
    { label: 'Hospital Turn-Around', desc:"Hospital beds are at a premium and more and more are needed but what if the ones...", image: '/HOSPITAL TURN ARROUND.png' },
  ],
}

export type AboutSubsection = {
  title: string
  titleColor: 'coral' | 'teal'
  type: 'paragraph' | 'bullets'
  content?: string
  intro?: string
  bulletPoints?: string[]
  outro?: string
}

export type AboutSection = {
  id: string
  image: string
  imageAlt: string
  type: 'paragraphs' | 'bullets' | 'subsections'
  title?: string
  titleColor?: 'coral' | 'teal'
  content?: string[]
  intro?: string
  bulletPoints?: string[]
  outro?: string
  subsections?: AboutSubsection[]
}

export const aboutSections: AboutSection[] = [
  {
    id: 'beginning',
    title: 'The Beginning of MEDIVARA',
    titleColor: 'coral',
    image: '/about1.png',
    imageAlt: 'Healthcare institution building blocks',
    type: 'paragraphs',
    content: [
      'Indonesia requires more healthcare institutions that are both accessible and deeply trusted. The country needs more than just new hospital buildings; it needs healthcare institutions that are professionally managed, sustainable, and capable of delivering quality care that meets international standards.',
      'However, operating and establishing a hospital is inherently complex. Many hospitals begin with noble intentions—driven by family visions, community needs, or a desire to serve society. But without the essential strategy, systems, and leadership, the process of running a hospital can become extremely difficult.',
      'MEDIVARA was designed to address this challenge, empowering hospitals to become stronger, operate more effectively, and better serve their communities.',
    ],
  },
  {
    id: 'challenges',
    title: 'The Challenges facing Hospitals in Indonesia',
    titleColor: 'teal',
    image: '/about3.jpeg',
    imageAlt: 'Hospital technology challenges',
    type: 'bullets',
    intro:
      'Even with increasing demand for healthcare, many hospitals face difficulties in achieving their maximum potential. Common obstacles include:',
    bulletPoints: [
      'Slow pace of return on investment',
      'Underdeveloped organizational structure',
      'Over-reliance on individual practitioners',
      'Disjointed operational systems',
      'Marketing strategies that lack focus',
      'Low patient occupancy during the initial years',
      'Consequently, despite the continuous growth in healthcare demand, many hospitals are unable to fully realize their potential.',
    ],
  },
  {
    id: 'gap-philosophy',
    image: '/about4.jpeg',
    imageAlt: 'Healthcare gap and philosophy',
    type: 'subsections',
    subsections: [
      {
        title: 'The Gap',
        titleColor: 'coral',
        type: 'paragraph',
        content:
          'A critical gap exists. On one side, communities demand better healthcare services. On the other, many hospitals need the right support to grow professionally and sustainably. MEDIVARA was created to bridge this gap.',
      },
      {
        title: 'Our Philosophy',
        titleColor: 'coral',
        type: 'bullets',
        intro:
          'MEDIVARA believes that strong hospitals and healthcare institutions are not built merely with capital and physical infrastructure. They are built with:',
        bulletPoints: [
          'The right organizational structure',
          'Professional management',
          'Clear strategic direction',
          'A strong commitment to serving the community',
        ],
        outro:
          'MEDIVARA does not replace the vision of hospital owners - we help strengthen and realize it.',
      },
    ],
  },
  {
    id: 'partner',
    title: 'Medivara, Your Trusted Business Partner',
    titleColor: 'coral',
    image: '/about.png',
    imageAlt: 'Medivara trusted business partner team',
    type: 'bullets',
    intro:
      'We are not merely advisors. We work alongside hospital owners, investors, and healthcare institutions to build strong and sustainable systems, from strategy to operations. Our expertise includes:',
    bulletPoints: [
      'Defining clear healthcare business strategies',
      'Building professional hospital operating systems',
      'Developing efficient infrastructure and processes',
      'Driving sustainable and profitable growth',
    ],
    outro:
      'Our purpose is simple: to help healthcare institutions become stronger, sustainable, and trusted by the communities they serve.',
  },
]

export const aboutSectionMeta = [
  { id: 'beginning', image: '/about1.png', imageAlt: 'Healthcare institution building blocks', type: 'paragraphs' as const, titleColor: 'coral' as const, subsectionColors: [] },
  { id: 'challenges', image: '/about3.jpeg', imageAlt: 'Hospital technology challenges', type: 'bullets' as const, titleColor: 'coral' as const, subsectionColors: [] },
  { id: 'gap-philosophy', image: '/about4.jpeg', imageAlt: 'Healthcare gap and philosophy', type: 'subsections' as const, titleColor: 'coral' as const, subsectionColors: ['coral', 'coral'] },
  { id: 'partner', image: '/about.png', imageAlt: 'Medivara trusted business partner team', type: 'bullets' as const, titleColor: 'coral' as const, subsectionColors: [] },
]

export const solutionMeta = [
  { id: 1, cardColor: 'teal' as const, image: '/DEVELOP HOSPITAL.png', type: 'bullets' as const },
  { id: 2, cardColor: 'coral' as const, image: '/EXPAND THE HOSPITAL.png', type: 'bullets' as const },
  { id: 3, cardColor: 'teal' as const, image: '/HOSPITAL TURN ARROUND.png', type: 'bullets' as const },
  { id: 4, cardColor: 'coral' as const, image: '/strategic.png', type: 'bullets' as const },
  { id: 5, cardColor: 'teal' as const, image: '/oprational.png', type: 'bullets' as const },
  { id: 6, cardColor: 'coral' as const, image: '/infra.png', type: 'bullets' as const },
  { id: 7, cardColor: 'teal' as const, image: '/Quali.png', type: 'bullets' as const },
  { id: 8, cardColor: 'coral' as const, image: '/IMPLEMENT BUSSINESS.png', type: 'bullets' as const },
]

export const teamImages = [
  '/Firas.png',
  '/Rima.png',
  '/Dian.png',
  '/Wahyu.png',
  '/foto_bu dili 2.png',
  '/foto_jojo 2.png',
  '/foto_dr mega 2.png',
]

export type Solution = {
  id: number
  title: string
  cardColor: 'teal' | 'coral'
  image: string
  type: 'lorem' | 'bullets'
  content?: string
  bulletPoints?: string[]
  goal?: string
}

const loremText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

export const solutions: Solution[] = [
  {
    id: 1,
    title: 'Development\na New Hospital',
    cardColor: 'teal',
    image: '/DEVELOP HOSPITAL.png',
    type: 'lorem',
    content: loremText,
  },
  {
    id: 2,
    title: 'Hospital\nExpansion',
    cardColor: 'coral',
    image: '/EXPAND THE HOSPITAL.png',
    type: 'lorem',
    content: loremText,
  },
  {
    id: 3,
    title: 'Hospital\nTurn-Around',
    cardColor: 'teal',
    image: '/HOSPITAL TURN ARROUND.png',
    type: 'lorem',
    content: loremText,
  },
  {
    id: 4,
    title: 'Strategic & Business\nDevelopment',
    cardColor: 'coral',
    image: '/strategic.png',
    type: 'bullets',
    bulletPoints: [
      'Feasibility study',
      'Land banking & hospital planning',
      'Business plan & financial modelling',
      'Strategic marketing planning',
      'Investment structuring & capital funding',
    ],
    goal: 'Goal: Your hospital is built on clear numbers and realistic expectations.',
  },
  {
    id: 5,
    title: 'Operational &\nManagement Service',
    cardColor: 'teal',
    image: '/oprational.png',
    type: 'bullets',
    bulletPoints: [
      'Daily Operational Management',
      'HR system & workforce planning',
      'KPI & productivity management',
      'Growth & development',
      'Operational performance monitoring',
      'Clinical service optimization',
    ],
    goal: 'Goal: Although patient feels empathy, but Your hospital need operates professionally — not emotionally.',
  },
  {
    id: 6,
    title: 'Infrastructure &\nTechnology Service',
    cardColor: 'coral',
    image: '/infra.png',
    type: 'bullets',
    bulletPoints: [
      'Medical equipment planning',
      'Equipment maintenance & compliance',
      'Hospital Information System (HIS)',
      'IoT & Medical Equipment Integration',
    ],
    goal: 'Goal: Operational efficiency and long-term infrastructure sustainability.',
  },
  {
    id: 7,
    title: 'Quality &\nAccreditation Service',
    cardColor: 'teal',
    image: '/Quali.png',
    type: 'bullets',
    bulletPoints: [
      'KARS & JCI Accreditation Advisory',
      'Patient Safety & Quality Programs',
      'Workforce Development & Clinical Training',
    ],
    goal: 'Goal: hospitals achieve higher standards of healthcare quality, governance and compliance',
  },
  {
    id: 8,
    title: 'Strategic &\nbusiness development',
    cardColor: 'coral',
    image: '/IMPLEMENT BUSSINESS.png',
    type: 'bullets',
    bulletPoints: [
      'Feasibility study',
      'Land banking & hospital planning',
      'Business plan & financial modelling',
      'Strategic marketing planning',
      'Investment structuring & capital funding',
    ],
    goal: 'Goal: Your hospital is built on clear numbers and realistic expectations.',
  },
]

export const teamMembers = [
  {
    name: 'Amira Ganis',
    role: 'Senior Strategic Advisor, Healthcare Transformation',
    image: '/Mira.png',
  },
  {
    name: 'Misyal Bahwal',
    role: 'Senior Strategic Advisor, Corporate Strategy & Investment',
    image: '/Misyal.png',
  },
  {
    name: 'Rima Fatmasari',
    role: 'Lead Advisor, Clinical Operations & Governance Excellence',
    image: '/Rima.png',
  },
  {
    name: 'M. Firas',
    role: 'Director of Medical Strategy & Business Development',
    image: '/Firas.png',
  },
  {
    name: 'Dian Sunardi',
    role: 'Director of Growth, Brand & Market Expansion',
    image: '/Dian.png',
  },
  {
    name: 'Wahyu Hanito',
    role: 'Director of Digital Health & Systems Innovation',
    image: '/Wahyu.png',
  },
  {
    name: 'Renold Darmasyah',
    role: 'Director of Hospital Operations & Performance Excellence',
    image: '/Renold.png',
  },
]

export const newsArticleImages: Record<string, string> = {
  'transformasi-besar-dharma-nugraha-hospital':
    '/crop.jpeg',
  'akses-layanan-kesehatan-humanis-terjangkau':
    'https://img.herstory.co.id/articles/archive_20260422/rumah-sakit-20260422-070341.webp',
  'wajah-baru-dharma-nugraha-hospital-modern-nyaman':
    'https://img.herstory.co.id/articles/archive_20260422/rumah-sakit-20260422-070341.webp',
  'industri-rs-makin-kompetitif-transformasi-sistem':
    'https://mediaindonesia.gumlet.io/news/2026/04/22/1776867641_d62efdcced373220724a.jpeg?w=700&dpr=1.3',
}

export const contactInfo = {
  web: 'www.medivara.id',
  email: 'info@medivara.co.id',
  phone: '+62 21 7179-XXXX',
  address: [
    'Forest Building 4th Floor',
    'Jl. Kemang Raya no.17 Jakarta Selatan 12730',
    'INDONESIA',
  ],
}
