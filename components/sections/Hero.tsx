'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <div className="inline-block mb-8">
            <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full px-4 py-2 text-sm font-medium">
              👋 Disponible pour de nouvelles opportunités
            </span>
          </div>

          {/* Titre principal */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
            Développeur Full-Stack
            <br />
            <span className="text-primary-500">passionné par l&apos;innovation</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
            Je crée des applications web modernes et intuitives, avec un focus
            particulier sur l&apos;éducation et l&apos;expérience utilisateur.
          </p>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button href="/projects" size="lg">
              Voir mes projets
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Me contacter
            </Button>
          </div>

          {/* Liens sociaux */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/votre-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/votre-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </motion.div>

        {/* Indicateur scroll */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
