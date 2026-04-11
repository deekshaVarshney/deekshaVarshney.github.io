---
layout: default
permalink: /research_lab/
title: Research lab
nav: true
nav_order: 1
---

{% assign research_projects = site.projects | where: "category", "research" %}

<div class="projects">
  {% if research_projects %}
    {% for project in research_projects %}
      {% include projects.html %}
    {% endfor %}
  {% endif %}
</div>
