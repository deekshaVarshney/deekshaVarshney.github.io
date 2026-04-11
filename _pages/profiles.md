---
layout: page
title: People
permalink: /people/
nav: true
nav_order: 4
---

<style>
.section-btn{
  display:block;
  width:100%;
  text-align:left;
  font-size:22px;
  font-weight:600;
  padding:12px 0;
  border:none;
  background:none;
  cursor:pointer;
}
.section-btn:focus{ outline:none; }

.section-content{
  display:none;
  padding:15px 0;
}

.person-row{ margin:12px 0; }

.person-header{
  display:flex;
  align-items:center;
  gap:10px;
  flex-wrap:wrap;
}

.person-name{
  font-size:16px;
  font-weight:500;
}

.toggle-btn{
  font-size:12px;
  border:1px solid #aaa;
  border-radius:12px;
  padding:3px 10px;
  background:none;
  cursor:pointer;
}

.person-desc{
  display:none;
  margin-top:8px;
  font-size:14px;
  line-height:1.6;
  padding:10px;
  border-radius:8px;
  background:rgba(120,120,120,0.15);
}

.person-highlight{
  text-align:center;
  margin:30px auto;
  max-width:650px;
}

.person-highlight img{
  width:140px;
  height:140px;
  border-radius:50%;
  object-fit:cover;
  border:3px solid #eee;
}
</style>

<script>
function toggleSection(id){
  document.querySelectorAll('.section-content').forEach(sec=>{
    if(sec.id !== id) sec.style.display = "none";
  });

  let el = document.getElementById(id);
  el.style.display = (el.style.display === "block") ? "none" : "block";
}

function toggleDesc(btn){
  let container = btn.closest('.person-highlight') || btn.closest('.person-row');
  let desc = container.querySelector('.person-desc');

  let isOpen = desc.style.display === "block";
  desc.style.display = isOpen ? "none" : "block";
  btn.textContent = isOpen ? "Research Area ▾" : "Hide ▴";
}
</script>

<!-- PhD -->
<button class="section-btn" onclick="toggleSection('phd')">Ph.D.</button>
<div id="phd" class="section-content">
  <div class="person-highlight">
    <img src="{{ site.baseurl }}/assets/img/saikat.jpeg">
    <div class="person-name">Saikat Mondal</div>
    <button class="toggle-btn" onclick="toggleDesc(this)">Research Area ▾</button>

    <div class="person-desc">
      Saikat Mandal is a Ph.D. Scholar at IIT Jodhpur working on AI safety and trustworthy systems.
    </div>
  </div>
</div>

<!-- MTech -->
<button class="section-btn" onclick="toggleSection('mtech')">M.Tech</button>
<div id="mtech" class="section-content">

  <div class="person-row">
    <div class="person-header">
      <div class="person-name">Rounak Sen</div>
      <button class="toggle-btn" onclick="toggleDesc(this)">Research Area ▾</button>
    </div>
    <div class="person-desc">Content will be added soon.</div>
  </div>

</div>

<!-- BTech -->
<button class="section-btn" onclick="toggleSection('btech')">BTech</button>
<div id="btech" class="section-content">

  <!-- ✅ MIHIR FIXED -->
  <div class="person-row">
    <div class="person-header">
      <div class="person-name">Mihir Panchal</div>
      <button class="toggle-btn" onclick="toggleDesc(this)">Research Area ▾</button>
    </div>

    <div class="person-desc">
      Hi, I’m Mihir Panchal, an aspiring researcher exploring Natural Language Processing, Large Language Models and Graph Representation Learning. I enjoy collaborating with researchers across disciplines and geographies and am always open to new opportunities that push the boundaries of AI and human machine collaboration.
    </div>
  </div>

  <div class="person-row"><div class="person-name">Prajeet Katari</div></div>
  <div class="person-row"><div class="person-name">Kartik Jain</div></div>

</div>
