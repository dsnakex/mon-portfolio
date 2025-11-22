import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    href: 'https://github.com/dsnakex/',
    icon: Github,
    label: 'GitHub',
  },
  {
    href: 'https://linkedin.com/in/votre-username',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'mailto:dpascal0@gmail.com',
    icon: Mail,
    label: 'Email',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {2025} Pascal Dao. Tous droits réservés.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                aria-label={link.label}
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
