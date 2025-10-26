---
layout: default
title: Accueil
---

<section class="hero">
  <div class="callout">
    <span class="badge">🔐 Cybersecurity · Québec</span>
    <h1 style="margin:10px 0 6px">Défendre, attaquer, expliquer.</h1>
    <p>Bienvenue sur mon portfolio. Vous trouverez ici mes articles, fiches techniques offensive (Red Team) et défensive (Blue Team), ainsi que des projets, talks et ressources utiles pour les PME et le grand public.</p>
    <div class="kpis">
      <div class="kpi"><strong>{{ site.posts | size }}</strong><br>Articles</div>
      <div class="kpi"><strong>{{ site.projects | size }}</strong><br>Projets</div>
      <div class="kpi"><strong>FR</strong><br>Contenu francophone</div>
    </div>
  </div>
  <div class="card">
    <h3>Sections rapides</h3>
    <div class="grid">
      <a class="card list-item" href="{{ '/pages/articles/' | relative_url }}"><strong>📝 Articles</strong><span class="meta">Billets et analyses</span></a>
      <a class="card list-item" href="{{ '/pages/red-team/' | relative_url }}"><strong>🗡️ Red Team</strong><span class="meta">Notes d'attaque / labs</span></a>
      <a class="card list-item" href="{{ '/pages/blue-team/' | relative_url }}"><strong>🛡️ Blue Team</strong><span class="meta">Détection & réponse</span></a>
      <a class="card list-item" href="{{ '/pages/projects/' | relative_url }}"><strong>🧰 Projets</strong><span class="meta">Dépôts & démos</span></a>
      <a class="card list-item" href="{{ '/pages/resources/' | relative_url }}"><strong>📚 Ressources</strong><span class="meta">Guides & liens utiles</span></a>
      <a class="card list-item" href="{{ '/pages/contact/' | relative_url }}"><strong>✉️ Contact</strong><span class="meta">Me joindre</span></a>
    </div>
  </div>
</section>
