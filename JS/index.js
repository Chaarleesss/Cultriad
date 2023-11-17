const navLinkEls = document.querySelectorAll(".nav_links");
const sectionEls = document.querySelectorAll(".section");

let currentSection = "home";
window.addEventListener("scroll", () => {
  sectionEls.forEach((sectionEl) => {
    if (window.scrollY >= sectionEl.offsetTop - 150) {
      currentSection = sectionEl.id;
    }
  });

  navLinkEls.forEach((navLinkEl) => {
    if (navLinkEl.href.includes(currentSection)) {
      document.querySelector(".active").classList.remove("active");
      navLinkEl.classList.add("active");
    }
  });
});

const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");

menu_btn.addEventListener("click", () => {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});

var btn_tujuan = document.getElementById("btn_tujuan");
var btn_manfaat = document.getElementById("btn_manfaat");
var btn_background = document.getElementById("btn_background");

var about = document.getElementById("about");
var manfaat = document.getElementById("manfaat");
var background = document.getElementById("background");

const clicked = () => {
  console.log("hei");
};

btn_tujuan.addEventListener("click", () => {
  about.style.display = "block";
  manfaat.style.display = "none";
  background.style.display = "none";
});

btn_manfaat.addEventListener("click", () => {
  about.style.display = "none";
  manfaat.style.display = "block";
  background.style.display = "none";
});

btn_bacground.addEventListener("click", () => {
  about.style.display = "none";
  manfaat.style.display = "none";
  background.style.display = "block";
});
