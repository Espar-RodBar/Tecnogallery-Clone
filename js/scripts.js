"use strict";

const HERO_NAV_ACT_CLASS = "hero-carrousel-active";
const HERO_ITEM_ACT_CLASS = "unhide-hero";
const heroArray = document.getElementsByClassName("hero-item");
const heroNavArray = document.getElementsByClassName("hero-carrousel-item");

const menuBtn = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

menuBtn.addEventListener("click", () => headerEl.classList.toggle("nav-open"));

const maxIndex = 5;

let lastIndex = 4;
let newIndex = 0;

for (let i = 0; i < heroNavArray.length; i++) {
  heroNavArray[i].addEventListener("click", navArrayHandler.bind(this, i));
}

function navArrayHandler(index) {
  slideHero(index);
}

function slideHero(index = "") {
  newIndex = !index ? (newIndex + 1) % 5 : index;

  heroArray[lastIndex].classList.toggle(HERO_ITEM_ACT_CLASS);
  heroArray[newIndex].classList.toggle(HERO_ITEM_ACT_CLASS);

  heroNavArray[lastIndex].classList.toggle(HERO_NAV_ACT_CLASS);
  heroNavArray[newIndex].classList.toggle(HERO_NAV_ACT_CLASS);

  lastIndex = newIndex;
}

setInterval(slideHero, 10000);
