---
layout: default
title: Articles
permalink: /pages/articles/
---

<div class="card">
  <h1>Articles</h1>
  <input class="search-input" placeholder="Rechercher...">
  <div class="grid">
  {% for post in site.posts %}
    <div class="card" data-filter-item="{{ post.title }} {{ post.excerpt | strip_html | truncate: 120 }} {{ post.tags | join: ' ' }} {{ post.categories | join: ' ' }}">
      <a href="{{ post.url | relative_url }}"><strong>{{ post.title }}</strong></a>
      <div class="meta">{{ post.date | date: "%d %B %Y" }} · {{ post.categories | array_to_sentence_string }}</div>
      <p>{{ post.excerpt | strip_html | truncate: 140 }}</p>
    </div>
  {% endfor %}
  </div>
</div>
