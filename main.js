// ===== DESGIN ===== //
const words = ["Frontend Developer", "Web Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const textEl = document.getElementById("change-text");
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    textEl.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  } else {
    textEl.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 100 : 120);
}

typeEffect();

// ===== HAMBURGER MENU ===== //
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");

// Toggle menu on hamburger click
menuToggle.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

// Close menu when clicking any nav link
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}

//Arrow scrolling
const scrollBtn = document.getElementById("scrollBtn");

window.addEventListener("scroll", function (){
  if(window.scrollY > 300){
    scrollBtn.style.display ="block";
  }else{
    scrollBtn.style.display = "none";
  }
});
