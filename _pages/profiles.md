---
layout: page
title: People
permalink: /people/
nav: true
nav_order: 4
---

<style>

/* ===== GRID ===== */

.people-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
  gap:60px 40px;
  margin-top:70px;
}

/* ===== CARD ===== */

.person{
  text-align:center;
  position:relative;
}

/* PHOTO */

.person img{
  width:140px;
  height:140px;
  border-radius:50%;
  object-fit:cover;
  position:absolute;
  top:-70px;
  left:50%;
  transform:translateX(-50%);
  border:6px solid #fff;
  background:#fff;
  box-shadow:0 6px 18px rgba(0,0,0,0.15);
}

/* CARD BOX */

.person-info{
  background:#e9e0d9;
  padding:90px 20px 25px;
  border-radius:22px;
  box-shadow:0 10px 25px rgba(0,0,0,0.08);
}

/* NAME */

.person-name{
  font-size:20px;
  font-weight:600;
  margin-bottom:6px;
}

/* TOPIC BUTTON */

.topic-toggle{
  font-size:13px;
  background:none;
  border:none;
  color:#555;
  cursor:pointer;
}

/* DESCRIPTION */

.person-topic{
  display:none;
  margin-top:12px;
  font-size:13px;
  color:#333;
  line-height:1.5;
}

/* SCOPUS */

.person-scopus{
  display:none;
  margin-top:8px;
  font-size:13px;
}

.person-scopus a{
  color:#1a73e8;
  text-decoration:none;
}

/* MOBILE */

@media (max-width:768px){
  .people-grid{
    grid-template-columns:repeat(1,1fr);
  }
}

</style>

<script>
function toggleTopic(btn){
  const person = btn.closest('.person');
  const topic = person.querySelector('.person-topic');
  const scopus = person.querySelector('.person-scopus');

  const isOpen = topic.style.display === 'block';

  topic.style.display = isOpen ? 'none' : 'block';
  if(scopus) scopus.style.display = isOpen ? 'none' : 'block';

  btn.textContent = btn.getAttribute('data-label') + (isOpen ? ' ▾' : ' ▴');
}
</script>


# PhD
### Current Students
*Indian Institute of Technology Jodhpur, India*

<div class="people-grid">

<div class="person">
  <img src="{{ site.baseurl }}/assets/img/saikat.jpeg"
       onerror="this.src='{{ site.baseurl }}/assets/img/default-avatar.png'">

  <div class="person-info">
    <div class="person-name">Saikat Mondal</div>

    <button class="topic-toggle"
            data-label="AI Safety · LLM Alignment"
            onclick="toggleTopic(this)">
      AI Safety · LLM Alignment ▾
    </button>

    <div class="person-topic">
      I am Saikat Mondal, a PhD scholar in AI & DS. My research focuses on AI Safety, LLM alignment, and multilingual safety evaluation.
    </div>

    <div class="person-scopus">
      <a href="#" target="_blank">📄 Scopus</a>
    </div>
  </div>
</div>

</div>



# M.Tech
### Current Students
*Indian Institute of Technology Jodhpur, India*

<div class="people-grid">

<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Rounak Sen (AR/VR)</div>
  </div>
</div>

<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Sikkireddy Lakshmi Shanmukha</div>
  </div>
</div>

<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Rohan Karna</div>
  </div>
</div>

<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Sharad Kumar Singh</div>
  </div>
</div>

</div>



# B.Tech – DC
### Current Students
*Indian Institute of Technology Jodhpur, India*

<div class="people-grid">

<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Nallaiahgari Deadeepya</div>
  </div>
</div>

</div>
