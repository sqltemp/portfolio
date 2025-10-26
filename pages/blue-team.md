---
layout: default
title: Blue Team
permalink: /pages/blue-team/
---

<div class="card">
  <h1>🛡️ Blue Team</h1>
  <p>Détection, réponse à incident, et ingénierie défensive. Catégorie: <code>blue-team</code></p>
  <div class="grid">
  {% assign blue_posts = site.posts | where_exp: "p", "p.categories contains 'blue-team'" %}
  {% for post in blue_posts %}
    <div class="card">
      <a href="{{ post.url | relative_url }}"><strong>{{ post.title }}</strong></a>
      <div class="meta">{{ post.date | date: "%d %B %Y" }} · Tags: {{ post.tags | array_to_sentence_string }}</div>
    </div>
  {% endfor %}
  </div>
</div>
