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

/* REMOVE LINE */
.section-btn:focus{
  outline:none;
}

.section-content{
  display:none;
  padding:15px 0;
}

/* Student Row */
.person-row{
  margin:12px 0;
}

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

/* Button */
.toggle-btn{
  font-size:12px;
  border:1px solid #aaa;
  border-radius:12px;
  padding:3px 10px;
  background:none;
  cursor:pointer;
}

/* Description */
.person-desc{
  display:none;
  margin-top:8px;
  font-size:14px;
  line-height:1.6;
  padding:10px;
  border-radius:8px;
  background:rgba(120,120,120,0.15);
  color:inherit;
}

/* Saikat */
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

.person-highlight .person-name{
  font-size:20px;
  font-weight:600;
}

.person-highlight .person-desc{
  font-size:15px;
}

/* Mobile */
@media(max-width:768px){
  .section-btn{ font-size:18px; }
  .person-highlight img{ width:110px; height:110px; }
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

/* FIXED FUNCTION */
function toggleDesc(btn){
  let container = btn.closest('.person-highlight') || btn.closest('.person-row');
  let desc = container.querySelector('.person-desc');

  let isOpen = desc.style.display === "block";
  desc.style.display = isOpen ? "none" : "block";
  btn.textContent = isOpen ? "Research Area ▾" : "Hide ▴";
}
</script>

<!-- Ph.D. -->
<button class="section-btn" onclick="toggleSection('phd')">Ph.D.</button>
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

<!-- M.Tech -->
<button class="section-btn" onclick="toggleSection('mtech')">M.Tech</button>
<div id="mtech" class="section-content">

  <div class="person-row"><div class="person-header"><div class="person-name">Rounak Sen</div><button class="toggle-btn" onclick="toggleDesc(this)">Research Area ▾</button></div><div class="person-desc">Content will be added soon.</div></div>

  <div class="person-row"><div class="person-header"><div class="person-name">Sikkireddy Lakshmi Shanmukha</div><button class="toggle-btn" onclick="toggleDesc(this)">Research Area ▾</button></div><div class="person-desc">Content will be added soon.</div></div>

  <div class="person-row"><div class="person-header"><div class="person-name">Sharad Kumar Singh</div><button class="toggle-btn" onclick="toggleDesc(this)">Research Area ▾</button></div><div class="person-desc">Content will be added soon.</div></div>

  <div class="person-row"><div class="person-header"><div class="person-name">Avni Singh</div><button class="toggle-btn" onclick="toggleDesc(this)">Research Area ▾</button></div><div class="person-desc">
    Researching AI-driven clinical decision systems for Pulmonary Embolism detection using LLMs and knowledge graphs.
  </div></div>

  <div class="person-row"><div class="person-header"><div class="person-name">Veekshan</div><button class="toggle-btn" onclick="toggleDesc(this)">Research Area ▾</button></div><div class="person-desc">Content will be added soon.</div></div>

  <div class="person-row"><div class="person-header"><div class="person-name">Kashmeera</div><button class="toggle-btn" onclick="toggleDesc(this)">Research Area ▾</button></div><div class="person-desc">Content will be added soon.</div></div>

  <div class="person-row"><div class="person-header"><div class="person-name">Shumbham</div><button class="toggle-btn" onclick="toggleDesc(this)">Research Area ▾</button></div><div class="person-desc">Content will be added soon.</div></div>

  <div class="person-row"><div class="person-header"><div class="person-name">Anshul</div><button class="toggle-btn" onclick="toggleDesc(this)">Research Area ▾</button></div><div class="person-desc">Content will be added soon.</div></div>

  <div class="person-row"><div class="person-header"><div class="person-name">Neha</div><button class="toggle-btn" onclick="toggleDesc(this)">Research Area ▾</button></div><div class="person-desc">Content will be added soon.</div></div>

  <div class="person-row"><div class="person-header"><div class="person-name">Netaji</div><button class="toggle-btn" onclick="toggleDesc(this)">Research Area ▾</button></div><div class="person-desc">Content will be added soon.</div></div>

</div>

<!-- BTech -->
<button class="section-btn" onclick="toggleSection('btech')">BTech</button>
<div id="btech" class="section-content">

  <!-- TOP PRIORITY -->
  <div class="person-row"><div class="person-name">Mihir Pancal</div></div>
  <div class="person-row"><div class="person-name">Prajeet Katari</div></div>

  <div class="person-row"><div class="person-name">Kolapkar Vipul Kishor</div></div>
  <div class="person-row"><div class="person-name">Kartik Jain</div></div>
  <div class="person-row"><div class="person-name">Shreehitha Talari</div></div>
  <div class="person-row"><div class="person-name">Lagudu Pooja Rani</div></div>
  <div class="person-row"><div class="person-name">Jangili Mahalaxmi</div></div>
  <div class="person-row"><div class="person-name">Nallaiahgari Deadeepya</div></div>
  <div class="person-row"><div class="person-name">B Bharadhwaj Naik</div></div>
  <div class="person-row"><div class="person-name">D Ashish Rathnam</div></div>
  <div class="person-row"><div class="person-name">Pundru Nehith Reddy</div></div>

</div>
