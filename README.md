# Afuté — Livre Blanc Envol Pro 2026

Site web interactif présentant le dispositif Afuté Envol Pro.

## Structure

```
afute-site/
├── index.html      # Page principale
├── styles.css      # Styles (couleur bleue Afuté #1A4FD6)
├── script.js       # Interactions & modales
├── vercel.json     # Config Vercel
└── README.md
```

## Déploiement sur Vercel

### Option 1 — Via GitHub + Vercel (recommandé)

1. **Push sur GitHub**
   ```bash
   git init
   git add .
   git commit -m "feat: Afuté Livre Blanc site"
   git branch -M main
   git remote add origin https://github.com/VOTRE_USER/afute-livre-blanc.git
   git push -u origin main
   ```

2. **Connecter à Vercel**
   - Aller sur [vercel.com](https://vercel.com)
   - Cliquer **"Add New Project"**
   - Importer le repo GitHub
   - Framework : **Other** (site statique)
   - Cliquer **Deploy** ✅

### Option 2 — Via Vercel CLI

```bash
npm i -g vercel
cd afute-site
vercel --prod
```

## Fonctionnalités

- **Hero animé** avec mini-process cliquable
- **Parcours en parallèle** : côté Candidat / côté Entreprise, cliquable
- **Modales détaillées** pour chaque étape (déroulé + exemple Pierre + parties prenantes)
- **Section Parties Prenantes** avec 5 acteurs cliquables
- **15 outils** organisés en 4 catégories avec onglets
- **Conditions de réussite** par partie prenante
- Animations au scroll, navbar sticky, responsive mobile

## Couleurs

- Bleu principal : `#1A4FD6`
- Bleu foncé : `#0F35A0`
- Bleu clair : `#3D6FEE`
- Accent orange : `#F5A623`
- Vert emploi : `#22C55E`
