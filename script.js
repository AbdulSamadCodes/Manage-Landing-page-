
//Function to toggle navbar========

function navToggle() {
  const header = document.querySelector("[data-header]");
  const navbar = document.querySelector("[data-navbar]");
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const overlay = document.querySelector("[data-overlay]");
  const navLinks = document.querySelector("[data-nav-link]");
    
  navTogglers.forEach((toggler) => {
    toggler.addEventListener("click",(event) => {
        event.preventDefault();
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    });
  });

  navLinks.forEach((link) => {
    link.addEventListener("click" , (event) => {
      event.preventDefault();  
      navbar.classList.remove("active");
      overlay.classList.remove("active");
    })
  })
}

navToggle();

