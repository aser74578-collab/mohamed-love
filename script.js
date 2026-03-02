function checkPassword(){
let pass = document.getElementById("password").value;

if(pass === "3/3"){

document.body.classList.add("shake");
setTimeout(()=>{document.body.classList.remove("shake");},300);

for(let i=0;i<30;i++){
let heart=document.createElement("div");
heart.innerHTML="💖";
heart.className="heart";
heart.style.left=Math.random()*100+"vw";
heart.style.top=Math.random()*100+"vh";
heart.style.fontSize=(Math.random()*20+15)+"px";
document.body.appendChild(heart);
setTimeout(()=>{heart.remove();},3000);
}

let loading=document.getElementById("loadingScreen");
loading.classList.add("active");

setTimeout(()=>{
window.location.href="message.html";
},3000);

}else{
document.getElementById("error").innerText="الباسورد غلط 😅";
}
}

window.onload=function(){
let music=document.getElementById("bgMusic");
if(music){
music.play().catch(()=>{});
}
};

let slideIndex=0;

function showSlide(index){
let slides=document.querySelectorAll(".slide");
let dots=document.querySelectorAll(".dot");

slides.forEach(s=>s.classList.remove("active"));
dots.forEach(d=>d.classList.remove("active"));

slides[index].classList.add("active");
dots[index].classList.add("active");
slideIndex=index;
}

function nextSlide(){
let slides=document.querySelectorAll(".slide");
slideIndex++;
if(slideIndex>=slides.length){slideIndex=0;}
showSlide(slideIndex);
}

function prevSlide(){
let slides=document.querySelectorAll(".slide");
slideIndex--;
if(slideIndex<0){slideIndex=slides.length-1;}
showSlide(slideIndex);
}

function currentSlide(index){
showSlide(index);
}

setInterval(nextSlide,4000);