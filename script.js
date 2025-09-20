// script.js
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  toggleButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
});

// Dark mode toggle
const darkModeButton = document.getElementById("dark-mode-toggle");
darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


