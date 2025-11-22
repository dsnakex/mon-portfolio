'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';

const categories = [
  { id: 'all', label: 'Tous' },
  { id: 'education', label: 'Éducation' },
  { id: 'web', label: 'Web' },
  { id: 'tool', label: 'Outils' },
  { id: 'creative', label: 'Créatif' },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Projets
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Découvrez les applications et outils que j&apos;ai créés
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Aucun projet dans cette catégorie pour le moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
