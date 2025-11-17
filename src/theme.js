// Aplica o tema salvo antes de tudo
(function () {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-bs-theme", savedTheme);
})();


// Quando o HTML estiver carregado
document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  const icon = btn.querySelector(".theme-icon");
  const logo = document.querySelector(".logo-img");


  // Função que atualiza ícone e logo conforme o tema
  function updateElements(current) {

    // --- ÍCONE ---
    if (current === "dark") {
      icon.className = "theme-icon bi bi-sun-fill";
    } else {
      icon.className = "theme-icon bi bi-moon-fill";
    }

    // --- LOGO ---
    if (logo) {
      if (current === "dark") {
        logo.src = "images/mapadev-logo-dark.svg";
      } else {
        logo.src = "images/mapadev-logo-light.svg";
      }
    }
  }


  // Pega o tema atual aplicado no <html>
  let current = document.documentElement.getAttribute("data-bs-theme");

  // Atualiza ícone e logo assim que a página carrega
  updateElements(current);


  // Clique do botão → alterna tema
  btn.addEventListener("click", () => {

    // Alternância do tema (toggle)
    if (current === "light") {
      current = "dark";
    } else {
      current = "light";
    }

    // Aplica no HTML
    document.documentElement.setAttribute("data-bs-theme", current);

    // Salva no localStorage
    localStorage.setItem("theme", current);

    // Atualiza ícone e logo
    updateElements(current);
  });
});