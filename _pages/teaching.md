---
layout: page
permalink: /Teaching/
title: Teaching
description: 
nav: true
nav_order: 3
---

<style>
/* Hides the large page title but keeps it in the navigation menu */
header.post-header, 
.post-title, 
h1.page-title {
  display: none !important;
}

.teaching-item {
  margin-bottom: 12px;
  font-size: 18px;
  color: inherit; /* Ensures text inherits theme color */
}

.teaching-date {
  color: #d32f2f; /* A clean, readable red for light mode */
  font-weight: 500;
}

.teaching-course {
  font-weight: bold;
}

/* --- Link Preview Card Styles --- */
.preview-container {
  position: relative;
  display: inline-block;
}

.course-link {
  color: #0366d6;
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
}

.preview-card {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 100%;
  left: 0;
  width: 360px;
  background-color: #ffffff;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  padding: 12px;
  margin-top: 8px;
  z-index: 100;
  transition: opacity 0.2s ease, visibility 0.2s ease;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  text-align: left;
  line-height: 1.4;
  color: #24292e;
  font-size: 14px;
  font-weight: normal;
}

/* Show on hover or when clicked/focused */
.preview-container:hover .preview-card,
.course-link:focus + .preview-card,
.preview-card:hover {
  visibility: visible;
  opacity: 1;
}

.preview-header {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
}

.preview-icon {
  width: 24px;
  height: 24px;
  background-color: #111;
  border-radius: 4px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.preview-title {
  font-size: 14px;
  font-weight: 600;
  color: #0366d6;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
}

.preview-title:hover {
  text-decoration: underline;
}

.preview-copy-icon {
  color: #586069;
  cursor: pointer;
  margin-left: 8px;
  flex-shrink: 0;
}

.preview-copy-icon:hover {
  color: #24292e;
}

.preview-url {
  font-size: 12px;
  color: #586069;
  margin-bottom: 8px;
  padding-left: 34px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.preview-desc {
  font-size: 12px;
  color: #586069;
  padding-left: 34px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Explicit Dark Mode Overrides */
@media (prefers-color-scheme: dark) {
  .teaching-date {
    color: #ff8787; /* Softer, brighter red for dark backgrounds */
  }
  .preview-card {
    background-color: #1c2128;
    border-color: #444c56;
    color: #adbac7;
  }
  .preview-title, .course-link {
    color: #539bf5;
  }
  .preview-url, .preview-desc, .preview-copy-icon {
    color: #768390;
  }
  .preview-copy-icon:hover {
    color: #c9d1d9;
  }
}
</style>

<div class="teaching-item">
➔ <span class="teaching-date">[July 2025 – December 2025]</span>: 
<span class="teaching-course">CSL7610 – Artificial Intelligence</span> 
(Ph.D. & M.Tech, IIT Jodhpur)
</div>

<div class="teaching-item">
➔ <span class="teaching-date">[July 2025 – December 2025]</span>: 
<span class="teaching-course">AIL7260 – Foundations of Vision and Language</span> 
(Ph.D., M.Tech & B.Tech, IIT Jodhpur)
</div>

<div class="teaching-item">
➔ <span class="teaching-date">[January 2026 – April 2026]</span>: 
<span class="teaching-course">AIL7390 – Deep Learning for Natural Language Processing</span> 
(Ph.D., M.Tech & B.Tech, IIT Jodhpur)
</div>

<div class="teaching-item">
➔ <span class="teaching-date">[January 2026 – April 2026]</span>: 
<span class="preview-container">
  <a href="https://futurense.com/iit-jodhpur/bachelor-of-science" target="_blank" tabindex="0" class="course-link">Machine learning - 1</a>
  
  <div class="preview-card">
    <div class="preview-header">
      <div class="preview-icon">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
      </div>
      <a href="https://futurense.com/iit-jodhpur/bachelor-of-science" target="_blank" class="preview-title" title="IIT Jodhpur's BS/B.Sc in Applied AI and Data Science">IIT Jodhpur's BS/B.Sc in Applied...</a>
      <div class="preview-copy-icon" onclick="navigator.clipboard.writeText('https://futurense.com/iit-jodhpur/bachelor-of-science')" title="Copy link">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
      </div>
    </div>
    <div class="preview-url">futurense.com/iit-jodhpur/bachelor-of...</div>
    <div class="preview-desc">
      Join IIT Jodhpur's B.S/B.Sc in Applied AI & Data Science. Gain expertise in AI, machine...
    </div>
  </div>
</span> 
(B.S./B.Sc. in Applied AI and Data Science (Online Programme), IIT Jodhpur)
</div>
