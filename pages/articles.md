---
layout: page
title: "📰 Articles"
permalink: /articles/
---

<style>
  .cards-wrap {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 18px;
    margin: 20px 0 10px;
  }
  .card {
    background: #0a0a0a;
    color: #e6f1ff;
    border: 1px solid #1e2a3a;
    border-radius: 14px;
    padding: 18px;
    box-shadow: 0 6px 16px rgba(0,0,0,.25);
    display: flex; flex-direction: column; justify-content: space-between;
  }
  .card h3 { margin: 0 0 8px; font-size: 1.15rem; line-height: 1.3; }
  .card p { margin: 0 0 14px; color: #b8c7e0; }
  .card .tags { font-size: .85rem; opacity: .85; margin-bottom: 12px; }
  .btn {
    display:inline-block; text-align:center;
    padding: 10px 14px; border-radius: 10px; text-decoration:none;
    border: 1px solid #2a7fff; background: #0b1b39; color:#dbe7ff;
    transition: transform .08s ease, box-shadow .08s ease;
  }
  .btn:hover { transform: translateY(-1px); box-shadow: 0 8px 18px rgba(42,127,255,.25);}
</style>

> Des contenus **clairs, concrets et actionnables** pour particuliers et PME.  
> Ajoute/retire des cartes ci-dessous selon tes besoins.

<div class="cards-wrap">

  <!-- Carte 1 : l'article fourni -->
  <div class="card">
    <div>
      <h3>🏠 10 actions incontournables pour sécuriser son domicile numérique</h3>
      <p>Les gestes essentiels (Wi-Fi, 2FA, sauvegardes, mises à jour…) pour protéger la maison sans jargon.</p>
      <div class="tags">Particuliers · Bonnes pratiques · Guide pas-à-pas</div>
    </div>
    <div>
      <a class="btn" href="/articles/10-actions-incontournables/">Lire l’article</a>
    </div>
  </div>

  <!-- Carte 2 : exemple à venir -->
  <div class="card">
    <div>
      <h3>🛡️ PME : 5 erreurs qui ouvrent la porte aux attaques</h3>
      <p>Shadow IT, sauvegardes inexistantes, comptes partagés… Comment corriger rapidement les angles morts.</p>
      <div class="tags">PME · Gouvernance · Priorités</div>
    </div>
    <div>
      <a class="btn" href="/articles/pme-5-erreurs/">Bientôt disponible</a>
    </div>
  </div>

  <!-- Carte 3 : exemple à venir -->
  <div class="card">
    <div>
      <h3>🔐 SPF, DKIM, DMARC : le trio anti-usurpation</h3>
      <p>Pourquoi et comment configurer ces protections pour éviter le phishing qui usurpe votre domaine.</p>
      <div class="tags">Email · Anti-fraude · Configuration</div>
    </div>
    <div>
      <a class="btn" href="/articles/spf-dkim-dmarc/">Bientôt disponible</a>
    </div>
  </div>

  <!-- Carte 4 : exemple à venir -->
  <div class="card">
    <div>
      <h3>🧯 Rançongiciel : le plan d’action en 60 minutes</h3>
      <p>Isoler, diagnostiquer, communiquer, restaurer. Un protocole simple et réaliste pour petites structures.</p>
      <div class="tags">Incident · Sauvegardes · Réponse</div>
    </div>
    <div>
      <a class="btn" href="/articles/plan-rancongiciel/">Bientôt disponible</a>
    </div>
  </div>

</div>
