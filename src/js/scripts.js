import ".././styles/pages/index.scss";
import "jquery/dist/jquery.js";
import $ from "jquery";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

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
        content.style.maxHeight = isSmallScreen ? content.scrollHeight + "px" : "none";
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

let swiper = new Swiper(".testimonials__list", {
  modules: [Navigation, Pagination],
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,
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

let expertSwiper = new Swiper(".team__list", {
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
  loop: true,
});

function addEllipsisToText(selector, maxLines) {
  document.querySelectorAll(selector).forEach((el) => {
    const lineHeight = parseFloat(getComputedStyle(el).lineHeight); // Высота строки
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

// function copyToClipboard(text) {
//   navigator.clipboard
//     .writeText(text)
//     .then(() => {
//       const message = document.getElementById("copy-message");
//       message.style.display = "inline";
//
//       setTimeout(() => {
//         message.style.display = "none";
//       }, 2000);
//     })
//     .catch((err) => {
//       console.error("Не удалось скопировать: ", err);
//     });
// }
//
// document.getElementById("copy-email").addEventListener("click", () => {
//   console.log("jdvnbfnvuurn");
//   const email = document.getElementById("email-address").textContent;
//   copyToClipboard(email);
// });
//
// document.getElementById("copy-phone").addEventListener("click", () => {
//   const phone = document.getElementById("phone-number").textContent;
//   copyToClipboard(phone);
// });
