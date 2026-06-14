/* =========================
HERO SLIDER
========================= */

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function changeSlide(){

slides[currentSlide].classList.remove("active");

currentSlide++;

if(currentSlide >= slides.length){

currentSlide = 0;

}

slides[currentSlide].classList.add("active");

}

setInterval(changeSlide,5000);

/* =========================
FLOATING PARTICLES
========================= */

const particlesContainer =
document.getElementById("particles");

for(let i=0;i<60;i++){

const particle =
document.createElement("span");

particle.classList.add("particle");

// Spread particles across full width including left edge
particle.style.left =
(Math.random()*110 - 5)+"%";

particle.style.animationDuration =
(8 + Math.random()*10)+"s";

particle.style.animationDelay =
(Math.random()*8)+"s";

particle.style.opacity =
Math.random()*0.8 + 0.2;

const size = (Math.random()*4+2)+"px";
particle.style.width = size;
particle.style.height = size;

particlesContainer.appendChild(particle);

}

/* =========================
SCROLL REVEAL
========================= */

const revealElements =
document.querySelectorAll(
".story-card,.service-card,.contact-list li"
);

const revealObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.2
}

);

revealElements.forEach(item=>{

item.classList.add("hidden");

revealObserver.observe(item);

});

/* =========================
MOBILE MENU
========================= */

const hamburger =
document.querySelector(".hamburger");

const navLinks =
document.querySelector(".nav-links");

hamburger.addEventListener("click",()=>{

navLinks.classList.toggle("mobile-active");

});

/* =========================
SMOOTH ACTIVE NAVIGATION
========================= */

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop =
section.offsetTop;

if(
pageYOffset >= sectionTop - 150
){

current = section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(
link.getAttribute("href")
=== "#" + current
){

link.classList.add("active");

}

});

});

/* =========================
CAKE SVG EXTRA GLOW
========================= */

const cakeOutline =
document.querySelector(".cake-outline");

setInterval(()=>{

cakeOutline.style.filter = `drop-shadow(0 0 10px #C07F4E)
drop-shadow(0 0 25px #C07F4E)
drop-shadow(0 0 50px #C07F4E)`;

setTimeout(()=>{

cakeOutline.style.filter = `drop-shadow(0 0 5px #C07F4E)
drop-shadow(0 0 15px #C07F4E)`;

},1000);

},2000);

/* =========================
SCROLL TO TOP ON REFRESH
========================= */

window.onbeforeunload = function(){

window.scrollTo(0,0);

};

/* =========================
BUTTON HOVER EFFECT
========================= */

const buttons =
document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform =
"translateY(-5px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform =
"translateY(0) scale(1)";

});

});