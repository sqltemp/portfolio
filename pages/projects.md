---
layout: default
title: Projets
permalink: /pages/projects/
---

<div class="card">
  <h1>🧰 Projets</h1>
  <p>Quelques dépôts et démonstrations techniques.</p>
  <div class="grid">
  {% for project in site.projects %}
    <div class="card">
      <a href="{{ project.url | relative_url }}"><strong>{{ project.title }}</strong></a>
      {% if project.stack %}<div class="meta">{{ project.stack | array_to_sentence_string }}</div>{% endif %}
      <p>{{ project.excerpt | strip_html | truncate: 140 }}</p>
    </div>
  {% endfor %}
  </div>
  <p>Ajoutez un fichier dans <code>_projects/</code> pour en créer un nouveau (voir README).</p>
</div>
