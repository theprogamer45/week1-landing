document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu").querySelector("ul");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});

