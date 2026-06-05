// FullSales — Aula Gratuita: interações da página

// Ano dinâmico no rodapé
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Formulário de captura (aula gratuita) — validação simples no cliente
const form = document.getElementById("signup-form");
const note = document.getElementById("form-note");

if (form && note) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();

    note.classList.remove("ok", "err");

    if (!emailRegex.test(email)) {
      note.textContent = "Ops! Digite um e-mail válido para liberar o acesso.";
      note.classList.add("err");
      return;
    }

    // Aqui entraria a integração real (API/CRM). Por enquanto, confirmação local.
    note.textContent = "✅ Tudo certo! Avisaremos em " + email + " assim que a aula for liberada.";
    note.classList.add("ok");
    form.reset();
  });
}
