"use strict";

import ".././styles/pages/index.scss";
import "jquery/dist/jquery.js";
import $ from "jquery";
import "slick-carousel/slick/slick.js";

const toggleBtn = document.querySelector(".header__toggle-btn");
const mobMenu = document.querySelector(".mobile-menu");

toggleBtn.addEventListener("click", function () {
  this.classList.toggle("is-active");
  mobMenu.classList.toggle("is-open");
  document.documentElement.classList.toggle("no-scroll");
});

document.querySelectorAll(".accordion__header").forEach((button, index) => {
  const isSmallScreen = window.matchMedia("(max-width: 1279px)").matches;

  if (!isSmallScreen && index === 0) {
    button.setAttribute("aria-expanded", "true");
    const content = button.nextElementSibling;
    if (content) {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";

    if (!isSmallScreen && expanded) return;

    document.querySelectorAll(".accordion__header").forEach((btn) => {
      btn.setAttribute("aria-expanded", "false");
      const content = btn.nextElementSibling;
      if (content) {
        content.style.maxHeight = null;
      }
    });

    if (!expanded) {
      button.setAttribute("aria-expanded", "true");
      const content = button.nextElementSibling;
      if (content) {
        content.style.maxHeight = isSmallScreen
          ? content.scrollHeight + "px"
          : "none";
      }
    }
  });
});

let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    header.style.transform = "translateY(-100%)";
    header.classList.remove("scroll");
  } else {
    header.style.transform = "translateY(0)";
    header.classList.add("scroll");
  }
  if (window.scrollY === 0) {
    header.style.transform = "translateY(0)";
    header.classList.remove("scroll");
  }

  lastScrollY = window.scrollY;
});

$(".team__list").slick({
  dots: true,
  infinite: true,
  speed: 500,
  cssEase: "linear",
});
