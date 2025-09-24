// script.js
// --------------------
// Mensaje inicial para confirmar que el script se está cargando
console.log("script.js cargado ✅");

document.addEventListener("DOMContentLoaded", () => {
  // --------------------
  // Menú hamburguesa
  // --------------------
  const toggleButton = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  if (toggleButton && navMenu) {
    toggleButton.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  } else {
    console.warn("menu-toggle o nav-menu no encontrado");
  }

  // --------------------
  // Dark mode
  // --------------------
  const darkModeButton = document.getElementById("dark-mode-toggle");
  if (darkModeButton) {
    // aplicar preferencia guardada
    if (localStorage.getItem("dark-mode") === "on") {
      document.body.classList.add("dark-mode");
      darkModeButton.textContent = "☀️";
    }

    darkModeButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem("dark-mode", isDark ? "on" : "off");
      darkModeButton.textContent = isDark ? "☀️" : "🌙";
    });
  }

  // --------------------
  // Back to top
  // --------------------
  const backToTopButton = document.getElementById("back-to-top");
  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) backToTopButton.classList.add("show");
      else backToTopButton.classList.remove("show");
    });

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // --------------------
  // Formulario (validación + localStorage)
  // --------------------
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = (document.getElementById("name") || {}).value?.trim() || "";
      const email = (document.getElementById("email") || {}).value?.trim() || "";
      const message = (document.getElementById("message") || {}).value?.trim() || "";
      const formMessage = document.getElementById("formMessage");

      if (name.length < 3) {
        formMessage.textContent = "El nombre debe tener al menos 3 caracteres.";
        formMessage.style.color = "red";
        return;
      }
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
      if (!email.match(emailPattern)) {
        formMessage.textContent = "Por favor, ingresa un correo válido.";
        formMessage.style.color = "red";
        return;
      }
      if (message.length < 10) {
        formMessage.textContent = "El mensaje debe tener al menos 10 caracteres.";
        formMessage.style.color = "red";
        return;
      }

      // guardar en localStorage
      const contactData = { name, email, message, date: new Date().toLocaleString() };
      const messages = JSON.parse(localStorage.getItem("messages") || "[]");
      messages.push(contactData);
      localStorage.setItem("messages", JSON.stringify(messages));

      formMessage.textContent = "✅ ¡Mensaje enviado con éxito!";
      formMessage.style.color = "green";
      form.reset();
      // opcional: refrescar lista mostrada si la tienes
      if (typeof showMessages === "function") showMessages();
    });
  }

  // --------------------
  // ScrollReveal - inicializar SÓLO si está cargado
  // --------------------
  try {
    if (window.ScrollReveal) {
      console.log("ScrollReveal detectado ✅");
      const sr = ScrollReveal({
        distance: "60px",
        duration: 900,
        delay: 150,
        reset: false // poner false para que no repita al subir
      });

      sr.reveal(".hero", { origin: "top", interval: 100 });
      sr.reveal("#about", { origin: "left", interval: 100 });
      sr.reveal("#projects", { origin: "bottom", interval: 100 });
      sr.reveal("#contact", { origin: "right", interval: 100 });
      sr.reveal(".project-card", { origin: "bottom", interval: 120 });
    } else {
      console.warn("ScrollReveal no está definido (no se cargó la librería).");
    }
  } catch (err) {
    console.error("Error inicializando ScrollReveal:", err);
  }
}); // DOMContentLoaded


// Tabs
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // Quitar "active" de todos
    tabBtns.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    // Activar el botón y contenido seleccionado
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});
