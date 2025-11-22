'use client';

import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', category: 'Frontend', level: 90 },
  { name: 'Next.js', category: 'Frontend', level: 85 },
  { name: 'TypeScript', category: 'Language', level: 80 },
  { name: 'Python', category: 'Backend', level: 85 },
  { name: 'Tailwind CSS', category: 'Styling', level: 90 },
  { name: 'Firebase', category: 'Backend', level: 75 },
  { name: 'Git', category: 'Tools', level: 85 },
  { name: 'Figma', category: 'Design', level: 80 },
];

export default function TechStack() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Stack Technique
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies et outils que j&apos;utilise pour créer des applications modernes
          </p>
        </motion.div>

        {/* Grille de technos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {tech.category}
                  </p>
                </div>
                <span className="text-primary-500 font-bold">{tech.level}%</span>
              </div>

              {/* Barre de progression */}
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
