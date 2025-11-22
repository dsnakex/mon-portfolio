'use client';

import { motion } from 'framer-motion';
import { Mail, Download } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript'] },
  { category: 'Styling', items: ['Tailwind CSS', 'CSS-in-JS'] },
  { category: 'Backend', items: ['Python', 'Node.js', 'Firebase'] },
  { category: 'Outils', items: ['Git', 'Figma', 'VS Code'] },
];

const interests = [
  'Applications éducatives',
  'UX/UI Design',
  'Intelligence Artificielle',
  'Open Source',
];

export default function AboutPage() {
  return (
    <motion.div
      className="py-20 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Titre */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          À Propos
        </h1>

        {/* Introduction */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Bonjour! 👋
          </h2>
          <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
            <p>
              Je suis{' '}
              <strong className="text-gray-900 dark:text-white">
                développeur full-stack
              </strong>{' '}
              passionné par la création d&apos;applications web modernes, intuitives
              et accessibles.
            </p>
            <p>
              Mon parcours m&apos;a amené à me spécialiser dans le{' '}
              <strong className="text-gray-900 dark:text-white">
                développement d&apos;applications éducatives
              </strong>
              , où je combine mes compétences techniques avec une forte attention
              à l&apos;expérience utilisateur.
            </p>
            <p>
              J&apos;aime particulièrement travailler avec{' '}
              <strong className="text-gray-900 dark:text-white">
                React, Next.js, TypeScript
              </strong>{' '}
              et{' '}
              <strong className="text-gray-900 dark:text-white">Python</strong>,
              et je suis constamment à la recherche de nouvelles technologies à
              maîtriser.
            </p>
          </div>
        </Card>

        {/* Skills & Interests Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Compétences */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              💻 Compétences Techniques
            </h3>
            <ul className="space-y-3">
              {skills.map((skill) => (
                <li key={skill.category}>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {skill.category}:
                  </span>{' '}
                  <span className="text-gray-600 dark:text-gray-400">
                    {skill.items.join(', ')}
                  </span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Centres d'intérêt */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              🎯 Centres d&apos;Intérêt
            </h3>
            <ul className="space-y-3">
              {interests.map((interest) => (
                <li
                  key={interest}
                  className="text-gray-600 dark:text-gray-400 flex items-center"
                >
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                  {interest}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary-500 to-blue-500 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-2">Travaillons Ensemble!</h3>
          <p className="mb-6 text-white/90">
            Je suis disponible pour de nouveaux projets et collaborations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="secondary">
              <Mail className="mr-2" size={20} />
              Me Contacter
            </Button>
            <Button
              href="/cv.pdf"
              external
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Download className="mr-2" size={20} />
              Télécharger CV
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
