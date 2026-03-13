---
layout: page
title: People
permalink: /people/
nav: true
nav_order: 7
---

<style>
.section-title{
  font-size:28px !important;
  font-weight:700 !important;
  margin-top:40px !important;
}

.sub-title{
  font-size:20px !important;
  font-weight:600 !important;
  margin-top:10px !important;
}

.people-grid{
  display:grid !important;
  grid-template-columns:repeat(auto-fit,minmax(160px,1fr)) !important;
  gap:30px !important;
  margin-top:25px !important;
}

.person{
  text-align:center !important;
}

.person img{
  width:130px !important;
  height:130px !important;
  border-radius:50% !important;
  object-fit:cover !important;
  border:3px solid #eee !important;
  display:block !important;
  margin:0 auto !important;
}

.person-name{
  margin-top:10px !important;
  font-size:15px !important;
  font-weight:500 !important;
}

.topic-toggle{
  margin-top:6px !important;
  font-size:11px !important;
  background:none !important;
  border:1px solid #aaa !important;
  border-radius:10px !important;
  padding:2px 8px !important;
  cursor:pointer !important;
  color:#555 !important;
  display:block !important;
  margin-left:auto !important;
  margin-right:auto !important;
  font-family:inherit !important;
}

.topic-toggle:hover{
  background:#f0f0f0 !important;
}

/* Bio Modal Overlay */
#bioOverlay{
  display:none;
  position:fixed !important;
  top:0 !important;
  left:0 !important;
  width:100% !important;
  height:100% !important;
  background:rgba(0,0,0,0.6) !important;
  z-index:99999 !important;
  justify-content:center !important;
  align-items:center !important;
}

#bioOverlay.active{
  display:flex !important;
}

#bioCard{
  background:#ffffff !important;
  border-radius:12px !important;
  padding:30px !important;
  max-width:480px !important;
  width:90% !important;
  position:relative !important;
  text-align:center !important;
  box-shadow:0 10px 40px rgba(0,0,0,0.3) !important;
  color:#222 !important;
}

#bioCard img{
  width:100px !important;
  height:100px !important;
  border-radius:50% !important;
  object-fit:cover !important;
  border:3px solid #ddd !important;
  margin-bottom:12px !important;
  display:block !important;
  margin-left:auto !important;
  margin-right:auto !important;
}

#bioCard h3{
  margin:0 0 6px !important;
  font-size:18px !important;
  color:#111 !important;
}

#bioTopic{
  font-size:13px !important;
  font-weight:600 !important;
  color:#1a73e8 !important;
  margin-bottom:12px !important;
}

#bioBio{
  font-size:13px !important;
  color:#444 !important;
  line-height:1.7 !important;
  text-align:left !important;
  margin:0 !important;
}

#bioLinks{
  margin-top:16px !important;
  display:flex !important;
  justify-content:center !important;
  gap:12px !important;
  flex-wrap:wrap !important;
}

#bioLinks a{
  color:#1a73e8 !important;
  text-decoration:none !important;
  font-size:13px !important;
  border:1px solid #1a73e8 !important;
  border-radius:8px !important;
  padding:5px 14px !important;
  display:inline-block !important;
}

#bioLinks a:hover{
  background:#1a73e8 !important;
  color:#fff !important;
}

#bioClose{
  position:absolute !important;
  top:10px !important;
  right:14px !important;
  background:none !important;
  border:none !important;
  font-size:24px !important;
  cursor:pointer !important;
  color:#888 !important;
  line-height:1 !important;
}

#bioClose:hover{
  color:#222 !important;
}

@media (max-width:768px){
  .people-grid{
    grid-template-columns:repeat(2,1fr) !important;
  }
  .person img{
    width:100px !important;
    height:100px !important;
  }
}
</style>

<!-- Bio Modal -->
<div id="bioOverlay">
  <div id="bioCard">
    <button id="bioClose">&#x2715;</button>
    <img id="bioImg" src="" alt="profile photo">
    <h3 id="bioName"></h3>
    <div id="bioTopic"></div>
    <p id="bioBio"></p>
    <div id="bioLinks"></div>
  </div>
</div>


# PhD

### Current Students  
*Indian Institute of Technology Jodhpur, India*

<div class="people-grid">

<div class="person">
  <img src="{{ site.baseurl }}/assets/img/saikat.jpg" onerror="this.src='{{ site.baseurl }}/assets/img/default-avatar.png'">
  <div class="person-name">Saikat Mondal</div>
  <button class="topic-toggle" onclick="openBio('saikat')">AI Safety · LLM Alignment ▾</button>
</div>

</div>


# M.Tech

### Current Students  
*Indian Institute of Technology Jodhpur, India*

<div class="people-grid">

<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-name">Rounak Sen (AR/VR)</div>
</div>

<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-name">Sikkireddy Lakshmi Shanmukha</div>
</div>

<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-name">Rohan Karna</div>
</div>

<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-name">Sharad Kumar Singh</div>
</div>

<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-name">Gautam Kumar Kushwaha</div>
</div>

<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-name">Akash Banik</div>
</div>

<div class="person">
  <img src="{{ site.baseurl }}/assets/img/avni.jpg" onerror="this.src='{{ site.baseurl }}/assets/img/default-avatar.png'">
  <div class="person-name">Avni Singh</div>
  <button class="topic-toggle" onclick="openBio('avni')">Pulmonary Embolism AI ▾</button>
</div>

<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-name">Deepak Kumar</div>
</div>

<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-name">Krothinyi Medeo</div>
</div>

</div>


# M.Tech Executive

### Current Students  
*Indian Institute of Technology Jodhpur, India*

<div class="people-grid">

<div class="person"><img src="{{ site.baseurl }}/assets/img/default-avatar.png"><div class="person-name">Veekshan</div></div>
<div class="person"><img src="{{ site.baseurl }}/assets/img/default-avatar.png"><div class="person-name">Kashmeera</div></div>
<div class="person"><img src="{{ site.baseurl }}/assets/img/default-avatar.png"><div class="person-name">Shumbham</div></div>
<div class="person"><img src="{{ site.baseurl }}/assets/img/default-avatar.png"><div class="person-name">Anshul</div></div>
<div class="person"><img src="{{ site.baseurl }}/assets/img/default-avatar.png"><div class="person-name">Neha</div></div>
<div class="person"><img src="{{ site.baseurl }}/assets/img/default-avatar.png"><div class="person-name">Netaji</div></div>
<div class="person"><img src="{{ site.baseurl }}/assets/img/default-avatar.png"><div class="person-name">Nitin Jain</div></div>

</div>


# B.Tech – DC

### Current Students  
*Indian Institute of Technology Jodhpur, India*

<div class="people-grid">

<div class="person"><img src="{{ site.baseurl }}/assets/img/default-avatar.png"><div class="person-name">Kolapkar Vipul Kishor</div></div>
<div class="person"><img src="{{ site.baseurl }}/assets/img/default-avatar.png"><div class="person-name">Kartik Jain</div></div>
<div class="person"><img src="{{ site.baseurl }}/assets/img/default-avatar.png"><div class="person-name">Shreehitha Talari</div></div>
<div class="person"><img src="{{ site.baseurl }}/assets/img/default-avatar.png"><div class="person-name">Lagudu Pooja Rani</div></div>
<div class="person"><img src="{{ site.baseurl }}/assets/img/default-avatar.png"><div class="person-name">Jangili Mahalaxmi</div></div>
<div class="person"><img src="{{ site.baseurl }}/assets/img/default-avatar.png"><div class="person-name">Nallaiahgari Deadeepya</div></div>
<div class="person"><img src="{{ site.baseurl }}/assets/img/default-avatar.png"><div class="person-name">B Bharadhwaj Naik</div></div>
<div class="person"><img src="{{ site.baseurl }}/assets/img/default-avatar.png"><div class="person-name">D Ashish Rathnam</div></div>
<div class="person"><img src="{{ site.baseurl }}/assets/img/default-avatar.png"><div class="person-name">Pundru Nehith Reddy</div></div>
<div class="person"><img src="{{ site.baseurl }}/assets/img/default-avatar.png"><div class="person-name">Mihir Pancal</div></div>
<div class="person"><img src="{{ site.baseurl }}/assets/img/default-avatar.png"><div class="person-name">Prajeet Katari</div></div>

</div>


### Previous Students

<div class="people-grid">

<div class="person"><img src="{{ site.baseurl }}/assets/img/default-avatar.png"><div class="person-name">Iftikhar</div></div>
<div class="person"><img src="{{ site.baseurl }}/assets/img/default-avatar.png"><div class="person-name">Mukkera</div></div>
<div class="person"><img src="{{ site.baseurl }}/assets/img/default-avatar.png"><div class="person-name">Rutuja</div></div>
<div class="person"><img src="{{ site.baseurl }}/assets/img/default-avatar.png"><div class="person-name">Rishabh</div></div>
<div class="person"><img src="{{ site.baseurl }}/assets/img/default-avatar.png"><div class="person-name">Suvarn</div></div>
<div class="person"><img src="{{ site.baseurl }}/assets/img/default-avatar.png"><div class="person-name">Sai Manav</div></div>
<div class="person"><img src="{{ site.baseurl }}/assets/img/default-avatar.png"><div class="person-name">Priyansu Narendra Rajput</div></div>
<div class="person"><img src="{{ site.baseurl }}/assets/img/default-avatar.png"><div class="person-name">Vaniya Ankit Sureshbhai</div></div>

</div>


<!-- ===================== SCRIPT AT BOTTOM ===================== -->
<script>
var peopleData = {
  "saikat": {
    name: "Saikat Mondal",
    img: "{{ site.baseurl }}/assets/img/saikat.jpg",
    fallback: "{{ site.baseurl }}/assets/img/default-avatar.png",
    topic: "AI Safety · LLM Alignment · Multilingual Safety Evaluation",
    bio: "I am Saikat Mondal, a PhD scholar in the School of Artificial Intelligence and Data Science. My research focuses on AI Safety, Large Language Model (LLM) alignment, and multilingual safety evaluation. Hobbies: Reading Bengali novels, listening to music, and exploring topics related to social sciences and politics.",
    scopus: "https://www.scopus.com/authid/detail.uri?authorId=SAIKAT_SCOPUS_ID"
  },
  "avni": {
    name: "Avni Singh",
    img: "{{ site.baseurl }}/assets/img/avni.jpg",
    fallback: "{{ site.baseurl }}/assets/img/default-avatar.png",
    topic: "AI-Driven Pulmonary Embolism Diagnosis using LLMs & Knowledge Graphs",
    bio: "I am developing an AI framework that combines the reasoning power of Large Language Models (LLMs) with the factual accuracy of Knowledge Graphs to improve Pulmonary Embolism diagnosis. By anchoring generative AI in structured medical knowledge, I aim to eliminate 'black box' outcomes and provide clinicians with both highly accurate diagnostic insights and clear, evidence-based explanations for every decision.",
    scopus: "https://www.scopus.com/authid/detail.uri?authorId=AVNI_SCOPUS_ID"
  }
};

function openBio(key) {
  var d = peopleData[key];
  if (!d) return;
  var img = document.getElementById('bioImg');
  img.src = d.img;
  img.onerror = function(){ this.src = d.fallback; };
  document.getElementById('bioName').textContent = d.name;
  document.getElementById('bioTopic').textContent = d.topic;
  document.getElementById('bioBio').textContent = d.bio;
  var linksHtml = '';
  if (d.scopus) {
    linksHtml += '<a href="' + d.scopus + '" target="_blank">&#128196; Scopus</a>';
  }
  document.getElementById('bioLinks').innerHTML = linksHtml;
  document.getElementById('bioOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeBio() {
  document.getElementById('bioOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('bioClose').addEventListener('click', closeBio);

document.getElementById('bioOverlay').addEventListener('click', function(e){
  if (e.target === this) closeBio();
});

document.addEventListener('keydown', function(e){
  if (e.key === 'Escape') closeBio();
});
</script>
