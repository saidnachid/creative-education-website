function addEventOnElements(elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    element.addEventListener(eventType, callback);
  }
}

let navbar = document.querySelector("[data-navbar]");
let navTogglers = document.querySelectorAll("[data-nav-toggler]");
let overlay = document.querySelector("[data-overlay]");
let navLinks = document.querySelectorAll(".navbar-link");

function toggleNavbar() {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

function closeNavbar() {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElements(navLinks, "click", closeNavbar);

let header = document.querySelector("[data-header]");
let backToBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
  backToBtn.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});
