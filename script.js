// Mobile Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// Scroll Animation

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "0.6s ease";
});

window.addEventListener("scroll", () => {

  sections.forEach((section) => {

    const top = window.scrollY;
    const offset = section.offsetTop - 200;

    if (top >= offset) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0px)";
    }

  });

});