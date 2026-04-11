---
layout: default
permalink: /research_lab/
title: Research lab
nav: true
nav_order: 1
---

<div class="projects">
  {% if site.projects %}
    {% for project in site.projects %}
      {% include projects.html %}
    {% endfor %}
  {% endif %}
</div>
