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

/* List */
.people-list div{
  margin:10px 0;
  font-size:15px;
}

/* DARK MODE SUPPORT */
.person-desc, .person-card-desc{
  display:none;
  margin-top:8px;
  font-size:14px;
  max-width:500px;
  line-height:1.5;
  margin-left:auto;
  margin-right:auto;
}

/* Light mode */
body:not(.dark-mode) .person-desc,
body:not(.dark-mode) .person-card-desc{
  color:#333;
  background:#f5f5f5;
  padding:8px;
  border-radius:8px;
}

/* Dark mode */
body.dark-mode .person-desc,
body.dark-mode .person-card-desc{
  color:#eee;
  background:#2a2a2a;
  padding:8px;
  border-radius:8px;
}

/* Buttons */
.toggle-btn{
  margin-top:5px;
  font-size:13px;
  border:1px solid #aaa;
  border-radius:12px;
  padding:4px 10px;
  background:none;
  cursor:pointer;
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

/* Avni card */
.person-card{
  border:1px solid #eee;
  padding:12px;
  border-radius:10px;
  margin-top:10px;
  background:#fafafa;
}

/* Mobile */
@media(max-width:768px){
  .section-btn{ font-size:18px; }
  .person-highlight img{ width:110px; height:110px; }
}
</style>

<script>
function toggleSection(id){
  // close all sections first
  document.querySelectorAll('.section-content').forEach(sec=>{
    if(sec.id !== id) sec.style.display = "none";
  });

  let el = document.getElementById(id);
  el.style.display = (el.style.display === "block") ? "none" : "block";
}

function toggleDesc(btn){
  let desc = btn.nextElementSibling;
  let isOpen = desc.style.display === "block";
  desc.style.display = isOpen ? "none" : "block";
  btn.textContent = isOpen ? "Research Area ▾" : "Hide ▴";
}
</script>

<!-- PHD -->
<button class="section-btn" onclick="toggleSection('phd')">PhD</button>
<div id="phd" class="section-content">

  <div class="person-highlight">
    <img src="{{ site.baseurl }}/assets/img/saikat.jpeg">
    <div class="person-name">Saikat Mondal</div>
    <button class="toggle-btn" onclick="toggleDesc(this)">Research Area ▾</button>
    <div class="person-desc">
  Saikat Mandal is a Ph.D. Scholar at the School of AIDE, IIT Jodhpur. He began his Ph.D. in 2025. His research lies in the domain of AI safety, with a primary focus on building trustworthy, safe, and responsible AI systems. He works on analyzing model vulnerabilities and understanding model behaviors to improve reliability. His interests also include developing robust multilingual models to cater to the needs of regional languages and diverse user communities with a particular focus on Indian Languages.
    </div>
  </div>

</div>

<!-- MTECH (MERGED) -->
<button class="section-btn" onclick="toggleSection('mtech')">M.Tech</button>
<div id="mtech" class="section-content">

  <div class="people-list">

    <div>
      Rounak Sen (AR/VR)
      <button class="toggle-btn" onclick="toggleDesc(this)">Research Area ▾</button>
      <div class="person-desc">Content will be added soon.</div>
    </div>

    <div>
      Sikkireddy Lakshmi Shanmukha
      <button class="toggle-btn" onclick="toggleDesc(this)">Research Area ▾</button>
      <div class="person-desc">Content will be added soon.</div>
    </div>

    <div>
      Sharad Kumar Singh
      <button class="toggle-btn" onclick="toggleDesc(this)">Research Area ▾</button>
      <div class="person-desc">Content will be added soon.</div>
    </div>

    <!-- Avni -->
    <div class="person-card">
      <div class="person-name">Avni Singh</div>
      <button class="toggle-btn" onclick="toggleDesc(this)">Research Area ▾</button>
      <div class="person-card-desc">
        Researching AI-driven clinical decision systems for Pulmonary Embolism detection by combining Large Language Models with medical knowledge graphs to improve accuracy, interpretability, and trust in healthcare AI.
      </div>
    </div>

    <!-- MTech Executive merged -->
    <div>
      Veekshan Arroju
      <button class="toggle-btn" onclick="toggleDesc(this)">Research Area ▾</button>
      <div class="person-desc">Content will be added soon.</div>
    </div>

    <div>
      Kashmeera K S
      <button class="toggle-btn" onclick="toggleDesc(this)">Research Area ▾</button>
      <div class="person-desc">Content will be added soon.</div>
    </div>

    <div>
      Shumbham Sharma
      <button class="toggle-btn" onclick="toggleDesc(this)">Research Area ▾</button>
      <div class="person-desc">Content will be added soon.</div>
    </div>

    <div>
      Anshul Kumar
      <button class="toggle-btn" onclick="toggleDesc(this)">Research Area ▾</button>
      <div class="person-desc">Content will be added soon.</div>
    </div>

    <div>
      Neha Prasad
      <button class="toggle-btn" onclick="toggleDesc(this)">Research Area ▾</button>
      <div class="person-desc">Content will be added soon.</div>
    </div>

    <div>
      Kancharapu Netaji
      <button class="toggle-btn" onclick="toggleDesc(this)">Research Area ▾</button>
      <div class="person-desc">Content will be added soon.</div>
    </div>

  </div>

</div>

<!-- BTECH -->
<button class="section-btn" onclick="toggleSection('btech')">BTech</button>
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
