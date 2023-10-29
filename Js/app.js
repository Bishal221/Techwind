// DOM Element Selection
const nav = document.querySelector(".scroll-down-toggle");
const shadowcus = document.querySelector(".shadow-cus");
const shadowcusV2 = document.querySelector(".shadow-cusV2");
const mode = document.querySelector(".fa-moon");
const menuControls = document.querySelector(".menu-controls");
const menuMasterControls = document.getElementById("menu-master-controls");
const darkBtn = document.getElementById("darkBtn");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

// Toggle Dark Mode
function toggleDarkMode() {
  document.documentElement.classList.toggle("dark");
  nav.classList.toggle("scroll-down-toggle-dark");
  nav.classList.toggle("scroll-down-toggle-light");
  shadowcus.classList.toggle("shadow-cus-dark");
  shadowcus.classList.toggle("shadow-cus-light");
  mode.classList.toggle("fa-sun");
  mode.classList.toggle("fa-moon");
}

// Toggle Menu Master Controls
function togglemenuMasterControls() {
  menuControls.classList.toggle("menu-deactive");
  menuControls.classList.toggle("menu-active");
  shadowcusV2.classList.toggle("shadow-cus-dark");
  shadowcusV2.classList.toggle("shadow-cus-light");
  menuMasterControls.querySelector(".fa-solid").classList.toggle("fa-bars");
  menuMasterControls.querySelector(".fa-solid").classList.toggle("fa-xmark");
}

// Play Video
function playVideo() {
  document.getElementById("modal-video").style.display = "block";
}

// Pause Video
function pauseVideo() {
  document.getElementById("modal-video").style.display = "none";
}

// Event Listeners
darkBtn.addEventListener("click", toggleDarkMode);
menuMasterControls.addEventListener("click", togglemenuMasterControls);
playBtn.addEventListener("click", playVideo);
pauseBtn.addEventListener("click", pauseVideo);

// Scroll Event Listeners
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    nav.classList.add("scroll-down");
  } else {
    nav.classList.remove("scroll-down");
  }
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    document.getElementById("back-to-top").classList.add("block");
    document.getElementById("back-to-top").classList.remove("hidden");
  } else {
    document.getElementById("back-to-top").classList.remove("block");
    document.getElementById("back-to-top").classList.add("hidden");
  }
});

// Initialize Swiper
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1050: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// FAQ Accordion
const buttons = document.querySelectorAll("[data-accordion-target]");
const contentDivs = document.querySelectorAll(".FAQ-div > div");

for (let i = 1; i < contentDivs.length; i++) {
  contentDivs[i].style.display = "none";
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    contentDivs.forEach((div) => {
      div.style.display = "none";
    });

    const isDisplayed = contentDivs[index].style.display === "block";

    buttons.forEach((btn) => {
      const icon = btn.querySelector("i.fa-angle-up");
      if (icon) {
        icon.classList.remove("fa-angle-up");
        icon.classList.add("fa-angle-down");
      }
    });

    if (!isDisplayed) {
      contentDivs[index].style.display = "block";
      const icon = button.querySelector("i.fa-angle-down");
      if (icon) {
        icon.classList.remove("fa-angle-down");
        icon.classList.add("fa-angle-up");
      }
    }
  });
});

// Set Current Year
document.getElementById("year").innerHTML = new Date().getFullYear();
