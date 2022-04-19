"use strict";

const HERO_NAV_ACT_CLASS = "hero-carrousel-active";
const HERO_ITEM_ACT_CLASS = "unhide-hero";

const maxIndex = 5;

let lastIndex = 4;
let newIndex = 0;

function slideHero(heroElementClass, heroNavClass) {
  const heroArray = document.getElementsByClassName(heroElementClass);
  const heroNavArray = document.getElementsByClassName(heroNavClass);

  console.log(heroArray[lastIndex], heroNavArray[lastIndex]);

  newIndex = (newIndex + 1) % 5;
  console.log(newIndex, lastIndex);

  heroArray[lastIndex].classList.toggle(HERO_ITEM_ACT_CLASS);
  heroArray[newIndex].classList.toggle(HERO_ITEM_ACT_CLASS);

  heroNavArray[lastIndex].classList.toggle(HERO_NAV_ACT_CLASS);
  heroNavArray[newIndex].classList.toggle(HERO_NAV_ACT_CLASS);

  lastIndex = newIndex;
}

setInterval(slideHero.bind(this, "hero-item", "hero-carrousel-item"), 10000);
