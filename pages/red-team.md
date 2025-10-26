---
layout: default
title: Red Team
permalink: /pages/red-team/
---

<div class="card">
  <h1>🗡️ Red Team</h1>
  <p>Notes d'attaque, TTPs, et laboratoires. Catégorie: <code>red-team</code></p>
  <div class="grid">
  {% assign red_posts = site.posts | where_exp: "p", "p.categories contains 'red-team'" %}
  {% for post in red_posts %}
    <div class="card">
      <a href="{{ post.url | relative_url }}"><strong>{{ post.title }}</strong></a>
      <div class="meta">{{ post.date | date: "%d %B %Y" }} · Tags: {{ post.tags | array_to_sentence_string }}</div>
    </div>
  {% endfor %}
  </div>
</div>
