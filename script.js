// script.js
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  toggleButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
});


