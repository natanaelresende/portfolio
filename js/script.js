// Menu mobile + ano + formulário (V1 sem backend)
(function () {
  const btn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");
  function closeMenu() {
    if (nav) nav.classList.remove("nav--open");
    if (btn) btn.setAttribute("aria-expanded", "false");
  }
  if (btn && nav) {
    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("nav--open");
      btn.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
    document.addEventListener("click", (e) => {
      if (!nav.classList.contains("nav--open")) return;
      if (!nav.contains(e.target) && !btn.contains(e.target)) closeMenu();
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMsg");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const nome = String(data.get("nome") || "").trim();
      const email = String(data.get("email") || "").trim();
      const mensagem = String(data.get("mensagem") || "").trim();

      if (!nome || !email || !mensagem) {
        if (msg) msg.textContent = "Preencha nome, e-mail e mensagem.";
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (msg) msg.textContent = "Digite um e-mail válido.";
        return;
      }
      // V1: sem backend — abre o cliente de e-mail como fallback
      if (msg) msg.textContent = `Obrigado, ${nome}! Abrindo seu e-mail para enviar... (formulário real entra na V2 com API)`;
      const subject = encodeURIComponent(`Contato portfólio — ${nome}`);
      const body = encodeURIComponent(`${mensagem}\n\nDe: ${nome} <${email}>`);
      window.location.href = `mailto:natanaelresende17@gmail.com?subject=${subject}&body=${body}`;
      form.reset();
    });
  }
})();
