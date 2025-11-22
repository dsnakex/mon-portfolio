'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Github } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'votre.email@example.com',
    href: 'mailto:votre.email@example.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/votre-username',
    href: 'https://linkedin.com/in/votre-username',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/votre-username',
    href: 'https://github.com/votre-username',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact Portfolio - ${formData.name}`);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:votre.email@example.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      className="py-20 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Contactez-moi
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Une question? Un projet? N&apos;hésitez pas à me contacter!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Formulaire */}
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Envoyer le message
                <Send className="ml-2" size={20} />
              </Button>
            </form>
          </Card>

          {/* Infos contact */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Informations de Contact
              </h3>
              <ul className="space-y-4">
                {contactInfo.map((info) => (
                  <li key={info.label}>
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      <info.icon size={20} className="mr-3" />
                      {info.value}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                💡 Besoin d&apos;aide rapidement?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Pour une réponse plus rapide, vous pouvez me contacter
                directement sur LinkedIn!
              </p>
              <Button
                href="https://linkedin.com/in/votre-username"
                external
                className="w-full"
              >
                <Linkedin className="mr-2" size={20} />
                Contacter sur LinkedIn
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
