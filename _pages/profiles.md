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
PhD
Current Students
Indian Institute of Technology Jodhpur, India
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

M.Tech
Current Students
Indian Institute of Technology Jodhpur, India
<div class="people-grid">
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Rounak Sen</div>
    <button class="topic-toggle"
            data-label="AR/VR"
            onclick="toggleTopic(this)">
      AR/VR ▾
    </button>
    <div class="person-topic">
      M.Tech student at IIT Jodhpur working in the domain of Augmented and Virtual Reality.
    </div>
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
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Gautam Kumar Kushwaha</div>
  </div>
</div>
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Akash Banik</div>
  </div>
</div>
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Avni Singh</div>
    <button class="topic-toggle"
            data-label="Pulmonary Embolism AI"
            onclick="toggleTopic(this)">
      Pulmonary Embolism AI ▾
    </button>
    <div class="person-topic">
      M.Tech student at IIT Jodhpur working on AI-driven approaches for Pulmonary Embolism detection and analysis.
    </div>
  </div>
</div>
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Deepak Kumar</div>
    <button class="topic-toggle"
            data-label="Pulmonary Embolism AI"
            onclick="toggleTopic(this)">
      Pulmonary Embolism AI ▾
    </button>
    <div class="person-topic">
      M.Tech student at IIT Jodhpur working on AI-driven approaches for Pulmonary Embolism detection and analysis.
    </div>
  </div>
</div>
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Krothinyi Medeo</div>
    <button class="topic-toggle"
            data-label="Pulmonary Embolism AI"
            onclick="toggleTopic(this)">
      Pulmonary Embolism AI ▾
    </button>
    <div class="person-topic">
      M.Tech student at IIT Jodhpur working on AI-driven approaches for Pulmonary Embolism detection and analysis.
    </div>
  </div>
</div>
</div>

M.Tech Executive
Current Students
Indian Institute of Technology Jodhpur, India
<div class="people-grid">
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Veekshan</div>
  </div>
</div>
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Kashmeera</div>
  </div>
</div>
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Shumbham</div>
  </div>
</div>
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Anshul</div>
  </div>
</div>
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Neha</div>
  </div>
</div>
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Netaji</div>
  </div>
</div>
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Nitin Jain</div>
  </div>
</div>
</div>

B.Tech – DC
Current Students
Indian Institute of Technology Jodhpur, India
<div class="people-grid">
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Kolapkar Vipul Kishor</div>
  </div>
</div>
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Kartik Jain</div>
  </div>
</div>
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Shreehitha Talari</div>
  </div>
</div>
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Lagudu Pooja Rani</div>
  </div>
</div>
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Jangili Mahalaxmi</div>
  </div>
</div>
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Nallaiahgari Deadeepya</div>
  </div>
</div>
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">B Bharadhwaj Naik</div>
  </div>
</div>
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">D Ashish Rathnam</div>
  </div>
</div>
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Pundru Nehith Reddy</div>
  </div>
</div>
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Mihir Pancal</div>
  </div>
</div>
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Prajeet Katari</div>
  </div>
</div>
</div>

Previous Students
Indian Institute of Technology Jodhpur, India
<div class="people-grid">
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Iftikhar</div>
  </div>
</div>
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Mukkera</div>
  </div>
</div>
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Rutuja</div>
  </div>
</div>
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Rishabh</div>
  </div>
</div>
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Suvarn</div>
  </div>
</div>
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Sai Manav</div>
  </div>
</div>
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Priyansu Narendra Rajput</div>
  </div>
</div>
<div class="person">
  <img src="{{ site.baseurl }}/assets/img/default-avatar.png">
  <div class="person-info">
    <div class="person-name">Vaniya Ankit Sureshbhai</div>
  </div>
</div>
</div>
