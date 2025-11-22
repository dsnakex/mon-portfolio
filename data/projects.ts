export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  results?: string[];
  status: 'completed' | 'in-progress' | 'planned';
  category: 'education' | 'web' | 'tool' | 'creative';
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'mathcopain',
    title: 'MathCopain',
    shortDescription: "Application d'apprentissage des mathématiques gamifiée pour enfants de 6 à 12 ans",
    fullDescription: "MathCopain transforme l'apprentissage des mathématiques en une expérience ludique et engageante. L'application propose des exercices progressifs adaptés au niveau de chaque enfant, avec un système de récompenses qui maintient la motivation.",
    problem: "Les enfants trouvent souvent les exercices de mathématiques répétitifs et ennuyeux, ce qui réduit leur motivation à pratiquer régulièrement.",
    solution: "Une application gamifiée qui présente les mathématiques comme un jeu, avec des niveaux progressifs, des badges de réussite, et un suivi personnalisé de la progression.",
    technologies: ['Python', 'Streamlit', 'Pandas', 'Matplotlib'],
    features: [
      '500+ exercices progressifs (addition, soustraction, multiplication, division)',
      'Système de niveaux et badges de réussite',
      'Suivi de progression avec graphiques',
      'Interface colorée et intuitive adaptée aux enfants',
      "Génération automatique d'exercices",
      'Statistiques détaillées pour les parents',
    ],
    results: [
      'Interface intuitive utilisable dès 6 ans sans aide',
      'Temps de réponse < 1 seconde pour tous les exercices',
      "Système de progression motivant testé auprès d'enfants",
    ],
    status: 'completed',
    category: 'education',
    image: '/projects/mathcopain/hero.png',
    demoUrl: 'https://mathcopain-v6.streamlit.app/',
    githubUrl: 'https://github.com/dsnakex/MathCopain_v6.2',
    featured: true,
  },
];
