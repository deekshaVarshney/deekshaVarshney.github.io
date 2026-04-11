---
layout: page
title: Research lab
permalink: /research_lab/
nav: true
nav_order: 1
display_categories: [research, work, fun]
horizontal: false
---

<div class="projects">
  {% assign sorted_projects = site.projects | sort: "importance" %}

  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
