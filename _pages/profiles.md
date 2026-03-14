---
layout: page
title: People
permalink: /people/
nav: true
nav_order: 7
---

<style>
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
  display:block;
  margin:0 auto;
}

.person-name{
  margin-top:10px;
  font-size:15px;
  font-weight:500;
}

.person-topic{
  display:none;
  margin-top:5px;
  font-size:11px;
  color:#555;
  font-style:italic;
  padding:4px 6px;
  background:#f5f5f5;
  border-radius:6px;
  line-height:1.4;
}

.person-scopus{
  display:none;
  margin-top:4px;
  font-size:11px;
}

.person-scopus a{
  color:#1a73e8;
  text-decoration:none;
}

.person-scopus a:hover{
  text-decoration:underline;
}

.topic-toggle{
  margin-top:6px;
  font-size:11px;
  background:none;
  border:1px solid #aaa;
  border-radius:10px;
  padding:2px 8px;
  cursor:pointer;
  color:#555;
  display:block;
  margin-left:auto;
  margin-right:auto;
  font-family:inherit;
}

.topic-toggle:hover{
  background:#f0f0f0;
}

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

<script>
function toggleTopic(btn) {
  var person = btn.closest('.person');
  var topic = person.querySelector('.person-topic');
  var scopus = person.querySelector('.person-scopus');
  var isOpen = topic.style.display === 'block';
  topic.style.display = isOpen ? 'none' : 'block';
  if (scopus) scopus.style.display = isOpen ? 'none' : 'block';
  var label = btn.getAttribute('data-label');
  btn.textContent = label + (isOpen ? ' ▾' : ' ▴');
}
</script>


# PhD

### Current Students
*Indian Institute of Technology Jodhpur, India*

<div class="people-grid">

<div class="person">
  <img src="{{ site.baseurl }}/assets/img/saikat.png" onerror="this.src='{{ site.baseurl }}/assets/img/default-avatar.png'">
  <div class="person-name">Saikat Mondal</div>
  <button class="topic-toggle" data-label="AI Safety · LLM Alignment" onclick="toggleTopic(this)">AI Safety · LLM Alignment ▾</button>
  <div class="person-topic">I am Saikat Mondal, a PhD scholar in the School of Artificial Intelligence and Data Science. My research focuses on AI Safety, Large Language Model (LLM) alignment, and multilingual safety evaluation. Hobbies: Reading Bengali novels, listening to music, and exploring topics related to social sciences and politics.</div>
  <div class="person-scopus"><a href="https://www.scopus.com/authid/detail.uri?authorId=SAIKAT_SCOPUS_ID" target="_blank">📄 Scopus</a></div>
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
  <img src="{{ site.baseurl }}/assets/img/avni.png" onerror="this.src='{{ site.baseurl }}/assets/img/default-avatar.png'">
  <div class="person-name">Avni Singh</div>
  <button class="topic-toggle" data-label="Pulmonary Embolism AI" onclick="toggleTopic(this)">Pulmonary Embolism AI ▾</button>
  <div class="person-topic">I am developing an AI framework that combines the reasoning power of Large Language Models (LLMs) with the factual accuracy of Knowledge Graphs to improve Pulmonary Embolism diagnosis. By anchoring generative AI in structured medical knowledge, I aim to eliminate 'black box' outcomes and provide clinicians with both highly accurate diagnostic insights and clear, evidence-based explanations for every decision.</div>
  <div class="person-scopus"><a href="https://www.scopus.com/authid/detail.uri?authorId=AVNI_SCOPUS_ID" target="_blank">📄 Scopus</a></div>
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
