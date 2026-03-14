---
layout: page
title: Gallery
permalink: /gallery/
nav: true
nav_order: 8
---


<button class="gallery-btn" onclick="toggleSection('invited')">
Invited Talks
</button>

<div id="invited" class="gallery-section">

<div class="slideshow-container">

<div class="slide invited">
<img src="/assets/img/generative_ai_workshop_iitj.jpeg" class="gallery-image">

<p class="gallery-caption">
Delivered a tutorial on Generative AI for NLP at the Generative AI Workshop conducted at IIT Jodhpur. GenAI Workshop 2026.
</p>
</div>

<a class="prev" onclick="plusSlides(-1,'invited')">❮</a> <a class="next" onclick="plusSlides(1,'invited')">❯</a>

</div>

</div>

<button class="gallery-btn" onclick="toggleSection('conf')">
Conferences & Presentations
</button>

<div id="conf" class="gallery-section">

<p class="gallery-caption">
Content will be added soon.
</p>

</div>

<style>

.gallery-btn{
background:#007acc;
color:white;
border:none;
padding:12px 20px;
margin-top:20px;
font-size:18px;
border-radius:8px;
cursor:pointer;
}

.gallery-section{
display:none;
margin-top:25px;
}

.slideshow-container{
position:relative;
max-width:900px;
margin:auto;
}

.slide{
display:none;
text-align:center;
}

.gallery-image{
width:100%;
height:auto;
border-radius:12px;
}

.gallery-caption{
text-align:center;
margin-top:12px;
font-size:1rem;
padding:0 10px;
}

.prev,.next{
cursor:pointer;
position:absolute;
top:50%;
padding:12px;
color:white;
font-size:24px;
background:rgba(0,0,0,0.5);
border-radius:50%;
transform:translateY(-50%);
}

.prev{
left:10px;
}

.next{
right:10px;
}

/* mobile responsive */

@media (max-width:600px){

.gallery-btn{
width:100%;
font-size:16px;
}

.prev,.next{
font-size:18px;
padding:10px;
}

.gallery-caption{
font-size:0.9rem;
}

}

</style>

<script>

let slideIndex={
invited:1
};

function toggleSection(id){

let section=document.getElementById(id);

if(section.style.display==="block")
section.style.display="none";
else
section.style.display="block";

showSlides(slideIndex[id]||1,id);

}

function plusSlides(n,type){
slideIndex[type]+=n;
showSlides(slideIndex[type],type);
}

function showSlides(n,type){

let slides=document.getElementsByClassName("slide "+type);

if(slides.length==0) return;

if(n>slides.length){slideIndex[type]=1}
if(n<1){slideIndex[type]=slides.length}

for(let i=0;i<slides.length;i++)
slides[i].style.display="none";

slides[slideIndex[type]-1].style.display="block";

}

</script>
