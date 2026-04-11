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
  border-bottom:1px solid #ddd;
}

.section-content{
  display:none;
  padding:15px 0;
}

.people-list{
  margin-top:10px;
  padding-left:10px;
}

.people-list div{
  margin:6px 0;
  font-size:15px;
}

/* Saikat */
.person-highlight{
  text-align:center;
  margin:20px 0;
}

.person-highlight img{
  width:140px;
  height:140px;
  border-radius:50%;
  object-fit:cover;
  border:3px solid #eee;
}

.person-name{
  margin-top:10px;
  font-size:18px;
  font-weight:600;
}

.person-desc{
  display:none;
  margin-top:10px;
  font-size:14px;
  color:#444;
  max-width:500px;
  margin-left:auto;
  margin-right:auto;
}

.toggle-btn{
  margin-top:8px;
  font-size:13px;
  border:1px solid #aaa;
  border-radius:12px;
  padding:4px 10px;
  background:none;
  cursor:pointer;
}

/* Avni */
.person-card{
  border:1px solid #eee;
  padding:12px;
  border-radius:10px;
  margin-top:10px;
  background:#fafafa;
}

.person-card-title{
  font-weight:600;
  font-size:16px;
}

.person-card-desc{
  display:none;
  margin-top:6px;
  font-size:13px;
  color:#444;
}

/* Mobile */
@media(max-width:768px){
  .section-btn{
    font-size:18px;
  }
  .person-highlight img{
    width:110px;
    height:110px;
  }
}
</style>

<script>
function toggleSection(id){
  let el = document.getElementById(id);
  el.style.display = (el.style.display === "block") ? "none" : "block";
}

function toggleDesc(btn){
  let desc = btn.nextElementSibling;
  let isOpen = desc.style.display === "block";
  desc.style.display = isOpen ? "none" : "block";
  btn.textContent = isOpen ? "Show Details ▾" : "Hide Details ▴";
}
</script>

<!-- PHD -->
<button class="section-btn" onclick="toggleSection('phd')">PhD</button>
<div id="phd" class="section-content">

  <div class="person-highlight">
    <img src="{{ site.baseurl }}/assets/img/saikat.jpeg">
    <div class="person-name">Saikat Mondal</div>
    <button class="toggle-btn" onclick="toggleDesc(this)">Show Details ▾</button>
    <div class="person-desc">
      PhD scholar working in AI Safety and LLM Alignment. His research focuses on building reliable, safe and multilingual AI systems. He is also interested in social sciences and policy implications of AI.
    </div>
  </div>

</div>

<!-- MTECH -->
<button class="section-btn" onclick="toggleSection('mtech')">M.Tech</button>
<div id="mtech" class="section-content">

  <div class="people-list">
    <div>Rounak Sen (AR/VR)</div>
    <div>Sikkireddy Lakshmi Shanmukha</div>
    <div>Sharad Kumar Singh</div>
  </div>

  <div class="person-card">
    <div class="person-card-title">Avni Singh</div>
    <button class="toggle-btn" onclick="toggleDesc(this)">View Research ▾</button>
    <div class="person-card-desc">
      Working on AI-driven clinical decision support systems for Pulmonary Embolism detection. Her work integrates Large Language Models with structured medical knowledge graphs to enhance diagnostic accuracy, interpretability, and trust in healthcare AI systems.
    </div>
  </div>

</div>

<!-- MTECH EXEC -->
<button class="section-btn" onclick="toggleSection('mtechexec')">M.Tech Executive</button>
<div id="mtechexec" class="section-content">

  <div class="people-list">
    <div>Veekshan Arroju</div>
    <div>Kashmeera</div>
    <div>Shumbham Sharma</div>
    <div>Anshul</div>
    <div>Neha Prasad</div>
    <div>Netaji</div>
  </div>

</div>

<!-- BTECH -->
<button class="section-btn" onclick="toggleSection('btech')">B.Tech – DC</button>
<div id="btech" class="section-content">

  <div class="people-list">
    <div>Kolapkar Vipul Kishor</div>
    <div>Kartik Jain</div>
    <div>Shreehitha Talari</div>
    <div>Lagudu Pooja Rani</div>
    <div>Jangili Mahalaxmi</div>
    <div>Nallaiahgari Deadeepya</div>
    <div>B Bharadhwaj Naik</div>
    <div>D Ashish Rathnam</div>
    <div>Pundru Nehith Reddy</div>
    <div>Mihir Pancal</div>
    <div>Prajeet Katari</div>
    <div>Iftikhar</div>
    <div>Mukkera</div>
    <div>Rutuja</div>
    <div>Rishabh</div>
    <div>Suvarn</div>
    <div>Sai Manav</div>
    <div>Priyansu Narendra Rajput</div>
    <div>Vaniya Ankit Sureshbhai</div>
  </div>

</div>
