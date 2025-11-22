# 🚀 Guide Portfolio Next.js - Optimisé pour Claude Code

Ce guide contient tous les prompts à copier-coller dans Claude Code (ou Cursor) pour créer votre portfolio professionnel pas à pas.

---

## 📋 Comment utiliser ce guide

1. **Ouvrez Claude Code** (ou Cursor/Windsurf)
2. **Copiez-collez** chaque prompt dans l'ordre
3. **Attendez** que Claude génère les fichiers
4. **Vérifiez** que tout fonctionne avant de passer au suivant
5. **Testez** régulièrement avec `npm run dev`

---

## 🎯 PHASE 1 : Installation & Setup de Base

### Prompt 1.1 : Créer le projet Next.js

```
Crée un nouveau projet Next.js avec les configurations suivantes :
- TypeScript
- Tailwind CSS
- App Router
- ESLint
- Nom du projet : mon-portfolio

Utilise la commande : npx create-next-app@latest mon-portfolio

Puis installe les dépendances supplémentaires :
- framer-motion (pour les animations)
- lucide-react (pour les icônes)

Commande : npm install framer-motion lucide-react
```

### Prompt 1.2 : Créer la structure des dossiers

```
Dans le projet mon-portfolio, crée la structure de dossiers suivante :

components/
  ui/
  sections/
app/
  projects/
  about/
  contact/
data/
public/
  projects/
    mathcopain/

Assure-toi que tous les dossiers sont créés correctement.
```

### Prompt 1.3 : Configuration Tailwind personnalisée

```
Crée ou modifie le fichier tailwind.config.ts avec cette configuration personnalisée :

- Ajoute une palette de couleurs "primary" (teal/turquoise) avec les nuances 50 à 900
- Couleur principale : #14b8a6 (primary-500)
- Configure la police Inter pour sans-serif
- Configure JetBrains Mono pour monospace
- Garde les chemins de contenu par défaut (pages, components, app)

La configuration doit être en TypeScript avec l'export par défaut.
```

### Prompt 1.4 : Styles globaux

```
Modifie le fichier app/globals.css pour :

1. Garder les directives @tailwind (base, components, utilities)
2. Ajouter des variables CSS pour :
   - Mode clair et sombre
   - Background et foreground colors
3. Configurer le body avec :
   - bg-white (mode clair) et bg-gray-950 (mode sombre)
   - text-gray-900 (mode clair) et text-gray-100 (mode sombre)
4. Ajouter smooth scrolling sur html
5. Personnaliser la scrollbar :
   - Largeur : 8px
   - Track : bg-gray-100 (clair) / bg-gray-900 (sombre)
   - Thumb : bg-gray-300 (clair) / bg-gray-700 (sombre) avec rounded-full
   - Hover thumb : bg-gray-400 (clair) / bg-gray-600 (sombre)
```

### Prompt 1.5 : Layout principal de base

```
Modifie le fichier app/layout.tsx pour :

1. Importer et utiliser la police Inter de next/font/google
2. Configurer les metadata :
   - title: "Votre Nom - Développeur Full-Stack"
   - description: "Portfolio de développeur passionné par la création d'applications éducatives et innovantes"
   - keywords: ["développeur", "portfolio", "Next.js", "React", "Python"]
3. Ajouter la classe "scroll-smooth" à l'élément html
4. Utiliser la langue "fr"
5. Appliquer la police Inter au body

Pour l'instant, garde juste {children} dans le body sans navbar ni footer.
```

---

## 🎨 PHASE 2 : Composants UI

### Prompt 2.1 : Composant Button

```
Crée un composant Button réutilisable dans components/ui/Button.tsx :

Props :
- children (ReactNode)
- href (optionnel - string)
- variant (optionnel - 'primary' | 'secondary' | 'outline', défaut 'primary')
- size (optionnel - 'sm' | 'md' | 'lg', défaut 'md')
- className (optionnel - string)
- onClick (optionnel - fonction)
- external (optionnel - boolean pour liens externes)
- type (optionnel - 'button' | 'submit')

Styles :
- primary : bg-primary-500 avec hover bg-primary-600, texte blanc
- secondary : bg-gray-200 avec hover gray-300, texte gray-900 (mode clair), bg-gray-800 dans le dark mode
- outline : border-2 border-primary-500, texte primary-500, hover bg-primary-50

Tailles :
- sm : px-4 py-2 text-sm
- md : px-6 py-3 text-base
- lg : px-8 py-4 text-lg

Fonctionnalités :
- Si href fourni, utiliser Link de next/link (ou <a> si external=true avec target="_blank" et rel="noopener noreferrer")
- Sinon, utiliser <button>
- Transitions fluides
- Focus ring avec focus:ring-2
```

### Prompt 2.2 : Composant Card

```
Crée un composant Card simple dans components/ui/Card.tsx :

Props :
- children (ReactNode)
- className (optionnel - string)
- hover (optionnel - boolean, défaut false)

Styles :
- Background : bg-white (clair) / bg-gray-900 (sombre)
- Border : border border-gray-200 (clair) / border-gray-800 (sombre)
- Border radius : rounded-xl
- Overflow : hidden
- Si hover=true : ajouter transition-transform avec hover:-translate-y-1 et hover:shadow-xl
```

### Prompt 2.3 : Composant Navbar

```
Crée une Navbar responsive dans components/ui/Navbar.tsx :

Caractéristiques :
- 'use client' en haut du fichier
- Fixed en haut (top-0, w-full, z-50)
- Transparent par défaut, devient bg-white/80 avec backdrop-blur-md après scroll (20px)
- Logo à gauche : "VotreNom" en primary-500
- Navigation desktop (caché sur mobile) avec liens : Accueil, Projets, À propos, Contact
- Bouton hamburger sur mobile (icônes Menu et X de lucide-react)
- Menu mobile déroulant quand ouvert

État :
- useState pour isOpen (menu mobile)
- useState pour scrolled (détection scroll)
- useEffect pour écouter le scroll (window.scrollY > 20)

Liens :
- Accueil : /
- Projets : /projects
- À propos : /about
- Contact : /contact

Hover effects sur les liens avec transition-colors.
```

### Prompt 2.4 : Composant Footer

```
Crée un Footer dans components/ui/Footer.tsx :

Structure :
- Background : bg-gray-50 (clair) / bg-gray-900 (sombre)
- Border top : border-t border-gray-200 (clair) / border-gray-800 (sombre)
- Padding : py-12
- Max width : max-w-7xl mx-auto

Contenu :
- Côté gauche : Copyright "© {année actuelle} Votre Nom. Tous droits réservés."
- Côté droit : Icônes sociales (GitHub, LinkedIn, Mail) de lucide-react
  - Taille : 24px
  - Hover : text-primary-500
  - Liens placeholder : 
    - GitHub : https://github.com/votre-username
    - LinkedIn : https://linkedin.com/in/votre-username
    - Mail : mailto:votre.email@example.com
  - aria-label pour l'accessibilité

Layout responsive : flex-col sur mobile, flex-row sur desktop.
```

### Prompt 2.5 : Intégrer Navbar et Footer au Layout

```
Modifie app/layout.tsx pour :

1. Importer Navbar depuis @/components/ui/Navbar
2. Importer Footer depuis @/components/ui/Footer
3. Structurer le body comme suit :
   - <Navbar />
   - <main className="min-h-screen pt-16">{children}</main>
   - <Footer />

Le pt-16 compense la navbar fixed pour que le contenu ne passe pas dessous.
```

---

## 🏠 PHASE 3 : Page d'Accueil

### Prompt 3.1 : Section Hero

```
Crée une section Hero dans components/sections/Hero.tsx :

Caractéristiques :
- 'use client' en haut
- Section plein écran (min-h-screen) avec contenu centré
- Background gradient : from-primary-50 via-white to-blue-50 (+ versions dark mode)
- Animations avec framer-motion (initial opacity 0, animate opacity 1, duration 0.5s)

Contenu :
1. Badge en haut : "👋 Disponible pour de nouvelles opportunités"
   - bg-primary-100 (clair) / bg-primary-900/30 (sombre)
   - text-primary-600 (clair) / text-primary-400 (sombre)
   - rounded-full, px-4 py-2

2. Titre principal (h1) :
   - "Développeur Full-Stack"
   - Sur une nouvelle ligne : "passionné par l'innovation" en text-primary-500
   - Tailles : text-5xl (mobile) sm:text-6xl lg:text-7xl
   - font-bold, mb-6

3. Description (p) :
   - "Je crée des applications web modernes et intuitives, avec un focus particulier sur l'éducation et l'expérience utilisateur."
   - text-xl, text-gray-600 (clair) / text-gray-300 (sombre)
   - max-w-2xl mx-auto

4. Boutons CTA :
   - "Voir mes projets" (primary, lien vers /projects) avec icône ArrowRight
   - "Me contacter" (outline, lien vers /contact)
   - flex-col sur mobile, flex-row sur desktop

5. Liens sociaux :
   - Icônes GitHub et LinkedIn (size 28)
   - Liens placeholder
   - Hover text-primary-500

6. Indicateur scroll en bas (optionnel) :
   - Animation bounce infinie (framer-motion)
   - Souris stylisée avec barre qui monte/descend

Importer Button depuis @/components/ui/Button et les icônes de lucide-react.
```

### Prompt 3.2 : Section TechStack

```
Crée une section TechStack dans components/sections/TechStack.tsx :

Caractéristiques :
- 'use client' en haut
- Background : bg-gray-50 (clair) / bg-gray-900 (sombre)
- Padding : py-20, px-4
- Animations framer-motion au scroll (whileInView)

Contenu :
1. Header centré :
   - Titre h2 : "Stack Technique" (text-3xl sm:text-4xl font-bold)
   - Description : "Technologies et outils que j'utilise pour créer des applications modernes"

2. Grille de technos :
   - Grid : 1 colonne sur mobile, 2 sur md
   - Gap : gap-6

Technologies à afficher (array d'objets) :
- React (Frontend, 90%)
- Next.js (Frontend, 85%)
- TypeScript (Language, 80%)
- Python (Backend, 85%)
- Tailwind CSS (Styling, 90%)
- Firebase (Backend, 75%)
- Git (Tools, 85%)
- Figma (Design, 80%)

Pour chaque techno :
- Card blanche (bg-white clair / bg-gray-800 sombre) avec rounded-xl, p-6
- Nom en gros (text-lg font-semibold)
- Catégorie en petit dessous (text-sm text-gray-500)
- Pourcentage en text-primary-500 à droite
- Barre de progression :
  - Track : bg-gray-200 (clair) / bg-gray-700 (sombre), h-2, rounded-full
  - Fill : bg-primary-500, largeur animée selon le pourcentage (framer-motion)

Animation : chaque card apparaît avec un délai incrémental (delay: index * 0.1).
```

### Prompt 3.3 : Page d'accueil

```
Modifie le fichier app/page.tsx pour :

1. Importer Hero depuis @/components/sections/Hero
2. Importer TechStack depuis @/components/sections/TechStack
3. Retourner un fragment contenant :
   <Hero />
   <TechStack />

Code simple et propre. Exporter en default function Home().
```

---

## 📁 PHASE 4 : Section Projets

### Prompt 4.1 : Données des projets

```
Crée un fichier data/projects.ts avec :

1. Interface TypeScript Project :
   - id: string
   - title: string
   - shortDescription: string
   - fullDescription: string
   - problem: string
   - solution: string
   - technologies: string[]
   - features: string[]
   - results: string[] (optionnel)
   - status: 'completed' | 'in-progress' | 'planned'
   - category: 'education' | 'web' | 'tool' | 'creative'
   - image: string
   - demoUrl: string (optionnel)
   - githubUrl: string (optionnel)
   - featured: boolean

2. Export un array "projects" contenant UN projet : MathCopain

Données MathCopain :
- id: 'mathcopain'
- title: 'MathCopain'
- shortDescription: 'Application d\'apprentissage des mathématiques gamifiée pour enfants de 6 à 12 ans'
- fullDescription: 'MathCopain transforme l\'apprentissage des mathématiques en une expérience ludique et engageante. L\'application propose des exercices progressifs adaptés au niveau de chaque enfant, avec un système de récompenses qui maintient la motivation.'
- problem: 'Les enfants trouvent souvent les exercices de mathématiques répétitifs et ennuyeux, ce qui réduit leur motivation à pratiquer régulièrement.'
- solution: 'Une application gamifiée qui présente les mathématiques comme un jeu, avec des niveaux progressifs, des badges de réussite, et un suivi personnalisé de la progression.'
- technologies: ['Python', 'Streamlit', 'Pandas', 'Matplotlib']
- features: [
    '500+ exercices progressifs (addition, soustraction, multiplication, division)',
    'Système de niveaux et badges de réussite',
    'Suivi de progression avec graphiques',
    'Interface colorée et intuitive adaptée aux enfants',
    'Génération automatique d\'exercices',
    'Statistiques détaillées pour les parents'
  ]
- results: [
    'Interface intuitive utilisable dès 6 ans sans aide',
    'Temps de réponse < 1 seconde pour tous les exercices',
    'Système de progression motivant testé auprès d\'enfants'
  ]
- status: 'completed'
- category: 'education'
- image: '/projects/mathcopain/hero.png'
- demoUrl: 'https://votre-demo-mathcopain.com'
- githubUrl: 'https://github.com/votre-username/mathcopain'
- featured: true
```

### Prompt 4.2 : Composant ProjectCard

```
Crée un composant ProjectCard dans components/ui/ProjectCard.tsx :

Props :
- project: Project (importer l'interface depuis @/data/projects)

Caractéristiques :
- 'use client' en haut
- Utilise Card depuis @/components/ui/Card avec hover=true
- Animation framer-motion (opacity 0 → 1, y 20 → 0)
- Structure verticale (flex flex-col)

Contenu :
1. Image de projet :
   - Hauteur fixe : h-48
   - Background gris si pas d'image : bg-gray-200 (clair) / bg-gray-800 (sombre)
   - Si pas d'image, afficher emoji 📱 centré (text-4xl)
   - Si image existe, utiliser next/image avec fill et object-cover
   - Badge status en haut à droite :
     - completed : bg-green-100 text-green-800 (+ versions dark) "Terminé"
     - in-progress : bg-blue-100 text-blue-800 (+ versions dark) "En cours"
     - planned : bg-gray-100 text-gray-800 (+ versions dark) "Planifié"

2. Contenu (p-6) :
   - Titre h3 : text-2xl font-bold mb-2
   - Description courte : text-gray-600 (clair) / text-gray-300 (sombre), mb-4
   - Technologies (max 4 affichées) :
     - Pills : bg-primary-50 text-primary-600 (+ versions dark), rounded-full, px-3 py-1
     - Si plus de 4 : afficher "+X" en text-gray-500
   - Boutons d'action (si URLs disponibles) :
     - "Démo" (primary) avec icône ExternalLink si demoUrl
     - "Code" (outline) avec icône Github si githubUrl
     - flex gap-3

Importer Button, Card, icônes (ExternalLink, Github) et framer-motion.
```

### Prompt 4.3 : Page Projets

```
Crée la page app/projects/page.tsx :

Caractéristiques :
- 'use client' en haut
- Importer projects et ProjectCard
- useState pour activeCategory (défaut : 'all')

Contenu :
1. Header centré :
   - h1 : "Mes Projets" (text-4xl sm:text-5xl font-bold mb-4)
   - Description : "Découvrez les applications et outils que j'ai créés"

2. Filtres de catégories :
   - Boutons : Tous, Éducation, Web, Outils, Créatif
   - IDs : 'all', 'education', 'web', 'tool', 'creative'
   - Style actif : bg-primary-500 text-white shadow-lg
   - Style inactif : bg-gray-200 text-gray-700 (+ versions dark) hover:bg-gray-300
   - rounded-full, px-6 py-2
   - flex flex-wrap justify-center gap-3

3. Grille de projets :
   - Grid : 1 col mobile, 2 cols md, 3 cols lg
   - gap-8
   - Filtrer par catégorie sélectionnée (activeCategory === 'all' ? tous : filtrer)
   - Map sur filteredProjects pour afficher ProjectCard

4. État vide :
   - Si aucun projet dans la catégorie :
     - Message centré : "Aucun projet dans cette catégorie pour le moment."
     - text-gray-500 text-lg

Padding : py-20 px-4 sur le container principal
Max-width : max-w-7xl mx-auto
```

---

## 👤 PHASE 5 : Pages About & Contact

### Prompt 5.1 : Page À Propos

```
Crée la page app/about/page.tsx :

Caractéristiques :
- 'use client' en haut
- Animation framer-motion page entière (opacity 0 → 1, y 20 → 0, duration 0.5s)
- max-w-4xl mx-auto, py-20 px-4

Contenu :
1. Titre h1 : "À Propos" (text-4xl sm:text-5xl font-bold mb-6)

2. Section Introduction (Card blanche avec p-8) :
   - Sous-titre h2 : "Bonjour! 👋" (text-2xl font-bold mb-4)
   - 3 paragraphes (text-lg, space-y-4) :
     - P1 : "Je suis **développeur full-stack** passionné par la création d'applications web modernes, intuitives et accessibles."
     - P2 : "Mon parcours m'a amené à me spécialiser dans le **développement d'applications éducatives**, où je combine mes compétences techniques avec une forte attention à l'expérience utilisateur."
     - P3 : "J'aime particulièrement travailler avec **React, Next.js, TypeScript** et **Python**, et je suis constamment à la recherche de nouvelles technologies à maîtriser."
   - Utiliser <strong> avec text-gray-900 (clair) / text-white (sombre) pour les mots en gras

3. Grille 2 colonnes (Cards) :
   - Card 1 : "💻 Compétences Techniques"
     - Liste : Frontend (React, Next.js, TypeScript)
     - Styling (Tailwind CSS, CSS-in-JS)
     - Backend (Python, Node.js, Firebase)
     - Outils (Git, Figma, VS Code)
   
   - Card 2 : "🎯 Centres d'Intérêt"
     - Applications éducatives
     - UX/UI Design
     - Intelligence Artificielle
     - Open Source

4. CTA finale (Card gradient) :
   - Background : bg-gradient-to-r from-primary-500 to-blue-500
   - Text blanc, p-8, rounded-xl
   - h3 : "Travaillons Ensemble!" (text-2xl font-bold)
   - Description : "Je suis disponible pour de nouveaux projets et collaborations"
   - 2 boutons :
     - "Me Contacter" (variant secondary, lien /contact) avec icône Mail
     - "Télécharger CV" (variant outline blanc, lien /cv.pdf, external) avec icône Download

Importer Button et icônes de lucide-react.
```

### Prompt 5.2 : Page Contact

```
Crée la page app/contact/page.tsx :

Caractéristiques :
- 'use client' en haut
- Animation framer-motion (opacity 0 → 1, y 20 → 0)
- useState pour formData (name, email, message)
- max-w-4xl mx-auto, py-20 px-4

Contenu :
1. Header centré :
   - h1 : "Contactez-moi" (text-4xl sm:text-5xl font-bold mb-4)
   - Description : "Une question? Un projet? N'hésitez pas à me contacter!"

2. Grid 2 colonnes (md:grid-cols-2 gap-8) :

   Colonne 1 - Formulaire (Card bg-white p-8) :
   - Form avec onSubmit qui crée un mailto
   - Champs :
     - Nom (input text, required)
     - Email (input email, required)
     - Message (textarea rows=6, required)
   - Tous les inputs avec :
     - w-full, px-4 py-3, rounded-lg
     - border border-gray-300 (clair) / border-gray-700 (sombre)
     - bg-white (clair) / bg-gray-800 (sombre)
     - focus:ring-2 focus:ring-primary-500
   - Bouton submit : Button primary size="lg" w-full "Envoyer le message" avec icône Send
   - handleSubmit : crée mailto avec subject et body encodés, puis window.location.href

   Colonne 2 - Infos contact :
   - Card 1 : "Informations de Contact"
     - Liens cliquables avec icônes (Mail, Linkedin, Github)
     - mailto:votre.email@example.com
     - linkedin.com/in/votre-username
     - github.com/votre-username
     - Hover text-primary-500
   
   - Card 2 (bg-primary-50) : "💡 Besoin d'aide rapidement?"
     - Text : "Pour une réponse plus rapide, vous pouvez me contacter directement sur LinkedIn!"
     - Button primary w-full vers LinkedIn avec icône

Importer Button et icônes de lucide-react.
```

---

## 🚀 PHASE 6 : Déploiement

### Prompt 6.1 : Préparation Git

```
Crée un fichier .gitignore à la racine avec :

/node_modules
/.pnp
.pnp.js
/coverage
/.next/
/out/
/build
.DS_Store
*.pem
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.env*.local
.vercel
*.tsbuildinfo
next-env.d.ts
```

### Étapes manuelles de déploiement

Une fois tous les fichiers créés :

**1. Initialiser Git :**
```bash
git init
git add .
git commit -m "Initial commit - Portfolio Next.js"
```

**2. Créer un repo sur GitHub :**
- Allez sur github.com
- Créez un nouveau repo "mon-portfolio"
- Ne pas initialiser avec README

**3. Connecter et pousser :**
```bash
git remote add origin https://github.com/votre-username/mon-portfolio.git
git branch -M main
git push -u origin main
```

**4. Déployer sur Vercel :**
- Allez sur vercel.com
- Sign up avec GitHub
- "Add New Project"
- Sélectionnez "mon-portfolio"
- Deploy (paramètres par défaut)
- Attendez 2-3 minutes
- ✅ Portfolio en ligne !

---

## ✅ Checklist Finale

Avant de montrer votre portfolio :

- [ ] Remplacer "Votre Nom" par votre vrai nom (Navbar, Footer, Layout)
- [ ] Remplacer les liens sociaux placeholder par les vrais (Navbar, Footer, Hero, About, Contact)
- [ ] Ajouter des screenshots de MathCopain dans `/public/projects/mathcopain/`
- [ ] Mettre à jour les URLs de démo et GitHub dans `data/projects.ts`
- [ ] Ajouter votre CV en PDF dans `/public/cv.pdf`
- [ ] Tester toutes les pages (/, /projects, /about, /contact)
- [ ] Tester sur mobile (responsive)
- [ ] Vérifier que tous les liens fonctionnent

---

## 🎨 Personnalisation Avancée (Optionnel)

### Changer la couleur principale

```
Dans tailwind.config.ts, modifie la palette "primary" :

- Teal actuel : #14b8a6
- Alternatives populaires :
  - Bleu : #3b82f6
  - Violet : #8b5cf6
  - Rose : #ec4899
  - Orange : #f97316

Utilise un générateur de palette comme :
https://uicolors.app/create

Remplace les valeurs 50-900 dans tailwind.config.ts.
```

### Ajouter Google Analytics

```
1. Obtiens ton ID Google Analytics (G-XXXXXXXXXX)

2. Crée app/components/Analytics.tsx :
   - Client component avec next/script
   - Charge gtag.js avec ton ID

3. Ajoute <Analytics /> dans app/layout.tsx

4. Configure consentement cookies si RGPD nécessaire
```

### Ajouter un blog (MDX)

```
1. Installe @next/mdx et dependencies

2. Crée app/blog/
   - page.tsx (liste articles)
   - [slug]/page.tsx (article individuel)

3. Crée content/blog/ pour tes articles .mdx

4. Configure next.config.js pour MDX

5. Ajoute "Blog" à la navbar
```

---

## 🔧 Troubleshooting

### Erreur : Module not found '@/...'

```
Vérifier tsconfig.json contient :
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Erreur : Hydration failed

```
Problème souvent causé par :
- Balises HTML invalides
- Contenu différent entre serveur et client

Solution :
- Utiliser 'use client' pour composants avec useState/useEffect
- Vérifier la structure HTML (pas de <div> dans <p>, etc.)
```

### Styles Tailwind ne s'appliquent pas

```
1. Vérifier que globals.css contient @tailwind directives
2. Vérifier que globals.css est importé dans layout.tsx
3. Vérifier tailwind.config.ts content paths
4. Redémarrer le serveur (npm run dev)
```

### Images ne se chargent pas

```
1. Vérifier chemins : /public/... → dans code utiliser juste /...
2. Pour next/image, configurer next.config.js si domaines externes
3. Vérifier extensions (.png, .jpg, .webp)
```

---

## 📚 Ressources Utiles

**Documentation :**
- Next.js : https://nextjs.org/docs
- Tailwind CSS : https://tailwindcss.com/docs
- Framer Motion : https://www.framer.com/motion/
- Lucide Icons : https://lucide.dev

**Outils :**
- Couleurs Tailwind : https://uicolors.app/create
- Gradients : https://uigradients.com
- Fonts : https://fonts.google.com
- Icons : https://lucide.dev

**Inspiration portfolios :**
- https://brittanychiang.com
- https://jacekjeznach.com
- https://www.adhamdannaway.com

---

## 🎉 Félicitations !

Vous avez maintenant tous les prompts pour créer votre portfolio avec Claude Code !

**Ordre recommandé :**
1. Copiez chaque prompt dans l'ordre (1.1 → 6.1)
2. Vérifiez après chaque phase que le code fonctionne
3. Testez avec `npm run dev` régulièrement
4. Personnalisez les textes et liens une fois tout créé
5. Déployez sur Vercel

**Temps estimé total : 6-8 heures**

Bon courage ! 🚀