
//Function to toggle navbar========

function navToggle() {
  const header = document.querySelector("[data-header]");
  const navbar = document.querySelector("[data-navbar]");
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const overlay = document.querySelector("[data-overlay]");
  const navLinks = document.querySelectorAll("[data-nav-link]");

  navTogglers.forEach((toggler) => {
    toggler.addEventListener("click", (event) => {
      event.preventDefault();
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      navbar.classList.remove("active");
      overlay.classList.remove("active");
    })
  })
}

navToggle();


/*============Function to render swiper JS==========*/

function swiperRenderer() {
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }
  });
}

swiperRenderer();
