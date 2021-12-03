const showNavbar = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  if (nav && toggle) {
    toggle.addEventListener("click", () => {
      nav.classList.add("show");
      nav.classList.remove("hidden");
      toggle.classList.add("hidden");
    });
  }
};
showNavbar("header-toggle", "nav-bar");
const closeNavbar = (toggleId, navId, showToggleId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  const showToggle = document.getElementById(showToggleId);
  if (showToggle && nav && toggle) {
    toggle.addEventListener("click", () => {
      nav.classList.remove("show");
      nav.classList.add("hidden");
      showToggle.classList.remove("hidden");
    });
  }
};
closeNavbar("close-toggle", "nav-bar", "header-toggle");

// Slider
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  slidesPerView: 1,
  freeMode: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
