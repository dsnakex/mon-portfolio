'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/data/projects';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface ProjectCardProps {
  project: Project;
}

const statusConfig = {
  completed: {
    label: 'Terminé',
    className: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  },
  'in-progress': {
    label: 'En cours',
    className: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  },
  planned: {
    label: 'Planifié',
    className: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400',
  },
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const status = statusConfig[project.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card hover className="flex flex-col h-full">
        {/* Image */}
        <div className="relative h-48 bg-gray-200 dark:bg-gray-800">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-4xl">📱</span>
            </div>
          )}

          {/* Badge status */}
          <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${status.className}`}>
            {status.label}
          </span>
        </div>

        {/* Contenu */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {project.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
            {project.shortDescription}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full px-3 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-gray-500 text-sm py-1">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Boutons d'action */}
          <div className="flex gap-3">
            {project.demoUrl && (
              <Button href={project.demoUrl} external size="sm">
                Démo
                <ExternalLink className="ml-2" size={16} />
              </Button>
            )}
            {project.githubUrl && (
              <Button href={project.githubUrl} external variant="outline" size="sm">
                Code
                <Github className="ml-2" size={16} />
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
