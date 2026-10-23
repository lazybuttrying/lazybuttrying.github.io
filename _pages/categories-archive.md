---
title: "Posts by Category"
permalink: /categories/
layout: single
author_profile: true
comment: false
---

{% assign sorted_categories = site.categories | sort %}
{% for category in sorted_categories %}
  {% assign cat_name = category[0] %}
  {% assign cat_posts = category[1] %}

## {{ cat_name }}

  {% assign series_posts = cat_posts | where_exp: "p", "p.series" | sort: "series_part" %}
  {% assign series_groups = series_posts | group_by: "series" %}
  {% for group in series_groups %}
### 📚 시리즈: {{ group.name }}{% if group.items.first.series_url %} ([목차]({{ group.items.first.series_url }})){% endif %}

    {% for post in group.items %}
- [{{ post.title }}]({{ post.url | relative_url }}) · {{ post.date | date: "%Y-%m-%d" }}
    {% endfor %}
  {% endfor %}

  {% assign single_posts = "" | split: "" %}
  {% for p in cat_posts %}
    {% unless p.series %}
      {% assign single_posts = single_posts | push: p %}
    {% endunless %}
  {% endfor %}
  {% if single_posts.size > 0 %}
### 단일 글

    {% for post in single_posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) · {{ post.date | date: "%Y-%m-%d" }}
    {% endfor %}
  {% endif %}

{% endfor %}
