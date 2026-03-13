---
layout: page
title: People
permalink: /people/
nav: true
nav_order: 7
---

<style>
.section-title{
  font-size:28px;
  font-weight:700;
  margin-top:40px;
}

.sub-title{
  font-size:20px;
  font-weight:600;
  margin-top:10px;
}

.people-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(160px,1fr));
  gap:30px;
  margin-top:25px;
}

.person{
  text-align:center;
}

.person img{
  width:130px;
  height:130px;
  border-radius:50%;
  object-fit:cover;
  border:3px solid #eee;
}

.person-name{
  margin-top:10px;
  font-size:15px;
  font-weight:500;
}

.person-topic{
  margin-top:6px;
  font-size:12px;
  color:#666;
  font-style:italic;
  display:none;
}

.person-links{
  margin-top:6px;
  font-size:12px;
}

.person-links a{
  color:#1a73e8;
  text-decoration:none;
  margin: 0 4px;
}

.person-links a:hover{
  text-decoration:underline;
}

/* Toggle button */
.topic-toggle{
  margin-top:6px;
  font-size:11px;
  background:none;
  border:1px solid #ccc;
  border-radius:10px;
  padding:2px 8px;
  cursor:pointer;
  color:#555;
}

.topic-toggle:hover{
  background:#f0f0f0;
}

/* Bio popup overlay */
.bio-overlay{
  display:none;
  position:fixed;
  top:0; left:0;
  width:100%; height:100%;
  background:rgba(0,0,0,0.5);
  z-index:1000;
  justify-content:center;
  align-items:center;
}

.bio-overlay.active{
  display:flex;
}

.bio-card{
  background:#fff;
  border-radius:12px;
  padding:30px;
  max-width:480px;
  width:90%;
  position:relative;
  text-align:center;
  box-shadow:0 10px 40px rgba(0,0,0,0.2);
}

.bio-card img{
  width:100px;
  height:100px;
  border-radius:50%;
  object-fit:cover;
  border:3px solid #eee;
  margin-bottom:12px;
}

.bio-card h3{
  margin:0 0 4px;
  font-size:18px;
}

.bio-card .bio-topic{
  font-size:13px;
  font-weight:600;
  color:#1a73e8;
  margin-bottom:10px;
}

.bio-card p{
  font-size:13px;
  color:#444;
  line-height:1.6;
  text-align:left;
}

.bio-card .bio-links{
  margin-top:12px;
}

.bio-card .bio-links a{
  color:#1a73e8;
  text-decoration:none;
  font-size:13px;
  margin:0 6px;
}

.bio-close{
  position:absolute;
  top:12px; right:16px;
  background:none;
  border:none;
  font-size:22px;
  cursor:pointer;
  color:#888;
}

.bio-close:hover{ color:#333; }

@media (max-width:768px){
  .people-grid{
    grid-template-columns:repeat(2,1fr);
  }
  .person img{
    width:100px;
    height:100px;
  }
}
</style>

<!-- Bio Modal -->
<div class="bio-overlay" id="bioOverlay" onclick="closeBioIfOutside(event)">
  <div class="bio-card" id="bioCard">
    <button class="bio-close" onclick="closeBio()">×</button>
    <img id="bioImg" src="" alt="">
    <h3 id="bioName"></h3>
    <div class="bio-topic" id="bioTopic"></div>
    <p id="bioBio"></p>
    <div class="bio-links" id="bioLinks"></div>
  </div>
</div>

<script>
const peopleData = {
  "saikat": {
    name: "Saikat Mondal",
    img: "/assets/img/saikat.jpg",
    topic: "AI Safety & LLM Alignment",
    bio: "I am Saikat Mondal, a PhD scholar in the School of Artificial Intelligence and Data Science. My research focuses on AI Safety, Large Language Model (LLM) alignment, and multilingual safety evaluation. Hobbies: Reading Bengali novels, listening to music, and exploring topics related to social sciences and politics.",
    scopus: "https://www.scopus.com/authid/detail.uri?authorId=SAIKAT_ID"
  },
  "avni": {
    name: "Avni Singh",
    img: "/assets/img/avni.jpg",
    topic: "AI-Driven Pulmonary Embolism Diagnosis",
    bio: "I am developing an AI framework that combines the reasoning power of Large Language Models (LLMs) with the factual accuracy of Knowledge Graphs to improve Pulmonary Embolism diagnosis. By anchoring generative AI in structured medical knowledge, I aim to eliminate 'black box' outcomes and provide clinicians with both highly accurate diagnostic insights and clear, evidence-based explanations for every decision.",
    scopus: "https://www.scopus.com/authid/detail.uri?authorId=AVNI_ID"
  }
};

function openBio(key) {
  const d = peopleData[key];
  if (!d) return;
  document.getElementById('bioImg').src = d.img;
  document.getElementById('bioName').textContent = d.name;
  document.getElementById('bioTopic').textContent = d.topic;
  document.getElementById('bioBio').textContent = d.bio;
  document.getElementById('bioLinks').innerHTML = d.scopus
    ? `<a href="${d.scopus}" target="_blank">📄 Scopus</a>`
    : '';
  document.getElementById('bioOverlay').classList.add('active');
}

function closeBio() {
  document.getElementById('bioOverlay').classList.remove('active');
}

function closeBioIfOutside(e) {
  if (e.target === document.getElementById('bioOverlay')) closeBio();
}
</script>


# PhD

### Current Students  
*Indian Institute of Technology Jodhpur, India*

<div class="people-grid">

<div class="person">
  <img src="/assets/img/saikat.jpg" onerror="this.src='/assets/img/default-avatar.png'">
  <div class="person-name">Saikat Mondal</div>
  <button class="topic-toggle" onclick="openBio('saikat')">AI Safety · LLM Alignment ▾</button>
</div>

</div>



# M.Tech

### Current Students  
*Indian Institute of Technology Jodhpur, India*

<div class="people-grid">

<div class="person">
<img src="/assets/img/default-avatar.png">
<div class="person-name">Rounak Sen (AR/VR)</div>
</div>

<div class="person">
<img src="/assets/img/default-avatar.png">
<div class="person-name">Sikkireddy Lakshmi Shanmukha</div>
</div>

<div class="person">
<img src="/assets/img/default-avatar.png">
<div class="person-name">Rohan Karna</div>
</div>

<div class="person">
<img src="/assets/img/default-avatar.png">
<div class="person-name">Sharad Kumar Singh</div>
</div>

<div class="person">
<img src="/assets/img/default-avatar.png">
<div class="person-name">Gautam Kumar Kushwaha</div>
</div>

<div class="person">
<img src="/assets/img/default-avatar.png">
<div class="person-name">Akash Banik</div>
</div>

<div class="person">
  <img src="/assets/img/avni.jpg" onerror="this.src='/assets/img/default-avatar.png'">
  <div class="person-name">Avni Singh</div>
  <button class="topic-toggle" onclick="openBio('avni')">Pulmonary Embolism AI ▾</button>
</div>

<div class="person">
<img src="/assets/img/default-avatar.png">
<div class="person-name">Deepak Kumar</div>
</div>

<div class="person">
<img src="/assets/img/default-avatar.png">
<div class="person-name">Krothinyi Medeo</div>
</div>

</div>



# M.Tech Executive

### Current Students  
*Indian Institute of Technology Jodhpur, India*

<div class="people-grid">

<div class="person"><img src="/assets/img/default-avatar.png"><div class="person-name">Veekshan</div></div>
<div class="person"><img src="/assets/img/default-avatar.png"><div class="person-name">Kashmeera</div></div>
<div class="person"><img src="/assets/img/default-avatar.png"><div class="person-name">Shumbham</div></div>
<div class="person"><img src="/assets/img/default-avatar.png"><div class="person-name">Anshul</div></div>
<div class="person"><img src="/assets/img/default-avatar.png"><div class="person-name">Neha</div></div>
<div class="person"><img src="/assets/img/default-avatar.png"><div class="person-name">Netaji</div></div>
<div class="person"><img src="/assets/img/default-avatar.png"><div class="person-name">Nitin Jain</div></div>

</div>



# B.Tech – DC

### Current Students  
*Indian Institute of Technology Jodhpur, India*

<div class="people-grid">

<div class="person"><img src="/assets/img/default-avatar.png"><div class="person-name">Kolapkar Vipul Kishor</div></div>
<div class="person"><img src="/assets/img/default-avatar.png"><div class="person-name">Kartik Jain</div></div>
<div class="person"><img src="/assets/img/default-avatar.png"><div class="person-name">Shreehitha Talari</div></div>
<div class="person"><img src="/assets/img/default-avatar.png"><div class="person-name">Lagudu Pooja Rani</div></div>
<div class="person"><img src="/assets/img/default-avatar.png"><div class="person-name">Jangili Mahalaxmi</div></div>
<div class="person"><img src="/assets/img/default-avatar.png"><div class="person-name">Nallaiahgari Deadeepya</div></div>
<div class="person"><img src="/assets/img/default-avatar.png"><div class="person-name">B Bharadhwaj Naik</div></div>
<div class="person"><img src="/assets/img/default-avatar.png"><div class="person-name">D Ashish Rathnam</div></div>
<div class="person"><img src="/assets/img/default-avatar.png"><div class="person-name">Pundru Nehith Reddy</div></div>
<div class="person"><img src="/assets/img/default-avatar.png"><div class="person-name">Mihir Pancal</div></div>
<div class="person"><img src="/assets/img/default-avatar.png"><div class="person-name">Prajeet Katari</div></div>

</div>



### Previous Students

<div class="people-grid">

<div class="person"><img src="/assets/img/default-avatar.png"><div class="person-name">Iftikhar</div></div>
<div class="person"><img src="/assets/img/default-avatar.png"><div class="person-name">Mukkera</div></div>
<div class="person"><img src="/assets/img/default-avatar.png"><div class="person-name">Rutuja</div></div>
<div class="person"><img src="/assets/img/default-avatar.png"><div class="person-name">Rishabh</div></div>
<div class="person"><img src="/assets/img/default-avatar.png"><div class="person-name">Suvarn</div></div>
<div class="person"><img src="/assets/img/default-avatar.png"><div class="person-name">Sai Manav</div></div>
<div class="person"><img src="/assets/img/default-avatar.png"><div class="person-name">Priyansu Narendra Rajput</div></div>
<div class="person"><img src="/assets/img/default-avatar.png"><div class="person-name">Vaniya Ankit Sureshbhai</div></div>

</div>
