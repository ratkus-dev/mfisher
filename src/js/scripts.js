import ".././styles/pages/index.scss";
import "jquery/dist/jquery.js";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

const toggleBtn = document.querySelector(".header__toggle-btn");
const mobMenu = document.querySelector(".mobile-menu");
const logo = document.querySelector(".nav__logo_mob");

toggleBtn.addEventListener("click", function () {
  this.classList.toggle("is-active");
  const isOpen = mobMenu.classList.toggle("is-open");
  if (isOpen) {
    logo.classList.add("white");
    toggleBtn.classList.add("white");
  } else {
    logo.classList.remove("white");
    toggleBtn.classList.remove("white");
  }

  document.documentElement.classList.toggle("no-scroll");
});

document.querySelectorAll(".accordion__header").forEach((button, index) => {
  const updateAccordion = (clickedButton) => {
    document.querySelectorAll(".accordion__header").forEach((btn) => {
      const content = btn.nextElementSibling;
      const isSmallScreen = window.matchMedia("(max-width: 1279px)").matches;

      const shouldExpand = btn === clickedButton;
      btn.setAttribute("aria-expanded", shouldExpand);

      if (content) {
        if (shouldExpand) {
          content.style.maxHeight = isSmallScreen ? content.scrollHeight + "px" : "none";
        } else {
          content.style.maxHeight = null;
        }
      }
    });
  };

  if (index === 0) {
    button.setAttribute("aria-expanded", "true");
    const content = button.nextElementSibling;
    if (content) {
      content.style.maxHeight = window.matchMedia("(max-width: 1279px)").matches
        ? content.scrollHeight + 32 + "px"
        : "none";
    }
  }

  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    if (!isExpanded) {
      updateAccordion(button);
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

let swiper = new Swiper(".testimonials__list", {
  modules: [Navigation, Pagination],
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  watchOverflow: true,
  navigation: {
    nextEl: ".swiper__button-next",
    prevEl: ".swiper__button-prev",
  },
});

let expertSwiper = new Swiper(".team__swiper", {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".swiper__button-next",
    prevEl: ".swiper__button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

function addEllipsisToText(selector, maxLines) {
  document.querySelectorAll(selector).forEach((el) => {
    const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
    const maxHeight = lineHeight * maxLines;

    if (el.scrollHeight > maxHeight) {
      let text = el.textContent;
      while (el.scrollHeight > maxHeight) {
        text = text.slice(0, -1);
        el.textContent = text + "...";
      }
    }
  });
}

addEllipsisToText(".testimonials__item-text", 5);

function handleResize() {
  console.log("Размер экрана изменился:", window.innerWidth, window.innerHeight);
  addEllipsisToText(".testimonials__item-text", 5);
}

window.addEventListener("resize", handleResize);

const options = document.querySelectorAll(".budget-option");

options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((opt) => opt.classList.remove("selected"));
    option.classList.add("selected");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".hero__btn, .team__btn, .cta__btn, .accordion__btn, .process__btn");
  const popup = document.getElementById("popup");
  const closePopup = popup.querySelector(".popup__close");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      popup.classList.add("is-open");
      document.querySelector("html").classList.add("no-scroll");
    });
  });

  closePopup.addEventListener("click", () => {
    popup.classList.remove("is-open");
    document.querySelector("html").classList.remove("no-scroll");
  });

  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.classList.remove("is-open");
      document.querySelector("html").classList.remove("no-scroll");
    }
  });
});
