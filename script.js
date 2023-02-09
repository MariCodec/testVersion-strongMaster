// // tach mobile
// let isMobile = {
//   Android: function () {
//     return navigator.userAgent.match(/Android/i);
//   },
//   BlackBerry: function () {
//     return navigator.userAgent.match(/BlackBerry/i);
//   },
//   iOS: function () {
//     return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//   },
//   Opera: function () {
//     return navigator.userAgent.match(/Opera Mini/i);
//   },
//   Windows: function () {
//     return navigator.userAgent.match(/IEMobile/i);
//   },
//   any: function () {
//     return (
//       isMobile.Android() ||
//       isMobile.BlackBerry() ||
//       isMobile.iOS() ||
//       isMobile.Opera() ||
//       isMobile.Windows()
//     );
//   },
// };
//
const buttonUp = document.querySelector(".buttonUp");
const feadBack = document.querySelector(".feadBack");
const dropList = document.querySelector(".menu__list");
const menuDrop = document.querySelector(".menuDrop");
const parent = document.querySelector(".menu-link-parent");
const subMenu = document.querySelector(".sub-menu__list");
buttonUp.addEventListener("click", toUp);
function toUp() {
  window.scrollTo(0, 0);
}

function toggleMenu() {
  dropList.classList.toggle("hide");

  //
}

menuDrop.addEventListener("click", toggleMenu);

function openSubMenu() {
  subMenu.classList.toggle("open");
}
parent.addEventListener("click", openSubMenu);
//випадалку зробити!

// function feadBackShow() {
//   feadBack.style.display = "block";
// }
// function feadBackHidden() {
//   feadBack.style.display = "none";
// }

// setInterval(feadBackShow, 6000);
//
// slider
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 3,
  loop: true,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 5,
    },

    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1020: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
