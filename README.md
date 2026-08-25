# Portfolio — Haja Tina Razavonjifanahy

Application web moderne en React (Vite + Tailwind CSS) pour un portfolio de
développeuse Full Stack .NET. Thème inspiré d'un éditeur de code
(coloration syntaxique C#, onglets de fichiers, gouttière de lignes, barre
de statut façon VS Code).

## Stack technique

- React 18 + Vite
- Tailwind CSS
- lucide-react (icônes)

## Démarrer en local

```bash
npm install
npm run dev
```

L'app est disponible sur http://localhost:5173

## Build de production

```bash
npm run build
```

Les fichiers optimisés sont générés dans `dist/`. Vous pouvez prévisualiser
le build avec :

```bash
npm run preview
```

## Déploiement

Le dossier `dist/` généré par `npm run build` peut être déployé tel quel sur
Vercel, Netlify, GitHub Pages ou tout hébergeur de fichiers statiques.

## Structure du projet

```
src/
  components/     composants d'interface (Hero, About, Skills, Experience,
                   Projects, Education, Contact, TabBar, StatusBar...)
  data/
    content.js     toutes les données du CV (à modifier pour mettre à jour
                    le contenu sans toucher aux composants)
  hooks/
    useTypewriter.js   effet machine à écrire du rôle dans le Hero
    useScrollSpy.js    suivi de la section visible pour la navigation
  App.jsx           assemble toutes les sections
  main.jsx          point d'entrée
  index.css         variables de couleurs et styles globaux
```

## Personnaliser le contenu

Toutes les informations (expériences, compétences, projets, formation,
coordonnées) sont centralisées dans `src/data/content.js`. Modifiez ce
fichier pour mettre à jour le portfolio sans avoir à toucher aux composants.
