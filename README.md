# Portfolio SQLTemp Cybersécurité

Un template visuel et simple pour présenter vos contenus offensive/defensive, articles, projets et ressources — optimisé pour GitHub Pages.

## 🚀 Déploiement rapide

1. **Créez un dépôt** sur votre compte GitHub (ex: `portfolio`).
2. **Téléversez** tous les fichiers de ce dossier à la racine du dépôt.
3. Allez dans **Settings → Pages** :
   - Source: **GitHub Actions** (ou `Deploy from a branch` si proposé).
   - Branche: `main` (ou `master`), dossier **root**.
4. Attendez la publication, puis visitez l’URL fournie (ex: `https://<username>.github.io/portfolio`).

> Si vous utilisez un *User Site* (`<username>.github.io`), laissez `baseurl: ""` dans `_config.yml`.
> Si vous utilisez un *Project Site* (`<username>.github.io/portfolio`), mettez `baseurl: "/portfolio"` et ajustez `url`.

## ✍️ Éditer le contenu

- **Articles**: créez des fichiers Markdown dans `_posts/` au format `YYYY-MM-DD-titre.md`. Ajoutez `categories: [articles]` ou `red-team` / `blue-team`.
- **Pages**: modifiez les fichiers dans `pages/`.
- **Projets**: (optionnel) créez des fichiers Markdown dans `_projects/` (créez le dossier) avec front matter:
  ```yaml
  ---
  title: "Nom du projet"
  stack: [Python, Sigma]
  link: "https://github.com/<username>/<repo>"
  ---
  Description du projet...
  ```

## 🎨 Personnalisation

- Couleurs & style: `assets/css/style.css` (variables CSS en haut, thème sombre/clair).
- Logo/emoji: modifiez `.logo-mark` dans `_layouts/default.html`.
- Menu: modifiez la navigation dans `_layouts/default.html`.

## 🧭 Catégories & filtres

- `articles`: billets généralistes ou pédagogiques.
- `red-team`: notes offensives, labs.
- `blue-team`: détection, réponse à incidents.
- Les pages listent automatiquement les posts par catégorie.

## 🛡️ Avertissement

Le contenu offensif est fourni **strictement à des fins de recherche** en environnement contrôlé. Respectez la loi et l’éthique professionnelle.

## 🔧 Développement local (optionnel)

Installez Ruby/Jekyll, puis :
```bash
bundle exec jekyll serve
```
Ouvrez `http://127.0.0.1:4000`.

---

Made by SQ & ChatGPT.
