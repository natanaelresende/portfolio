"use client";
import { useState } from "react";

export default function Contato() {
  const [msg, setMsg] = useState("");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const nome = String(fd.get("nome") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const mensagem = String(fd.get("mensagem") || "").trim();
    if (!nome || !email || !mensagem) { setMsg("Preencha nome, e-mail e mensagem."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setMsg("Digite um e-mail válido."); return; }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, mensagem }),
      });
      if (res.ok) setMsg(`Obrigado, ${nome}! Mensagem enviada via API.`);
      else throw new Error();
    } catch {
      // fallback V1: mailto enquanto NestJS não está no ar
      setMsg(`Obrigado, ${nome}! Abrindo seu e-mail...`);
      window.location.href = `mailto:natanaelresende17@gmail.com?subject=${encodeURIComponent(`Contato portfólio — ${nome}`)}&body=${encodeURIComponent(`${mensagem}\n\nDe: ${nome} <${email}>`)}`;
    }
    (e.target as HTMLFormElement).reset();
  }
  return (
    <div className="container">
      <section className="page-head">
        <h1>Vamos conversar?</h1>
        <p>Formulário V2 — tenta API NestJS, fallback mailto.</p>
      </section>
      <section className="two-col">
        <div className="contact-links">
          <a href="https://github.com/natanaelresende" target="_blank" rel="noopener noreferrer" className="btn btn--ghost">GitHub</a>
          <a href="https://www.linkedin.com/in/natanael-eug%C3%AAnio-resende-041a163b0/" target="_blank" rel="noopener noreferrer" className="btn btn--ghost">LinkedIn</a>
          <a href="mailto:natanaelresende17@gmail.com" className="btn btn--ghost">natanaelresende17@gmail.com</a>
        </div>
        <form className="form" onSubmit={onSubmit} noValidate>
          <label>Nome<input name="nome" required placeholder="Seu nome" /></label>
          <label>E-mail<input name="email" type="email" required placeholder="voce@email.com" /></label>
          <label>Mensagem<textarea name="mensagem" rows={5} required placeholder="Olá, Natanael..." /></label>
          <button type="submit" className="btn btn--primary">Enviar mensagem</button>
          <p className="form__msg" role="status">{msg}</p>
        </form>
      </section>
    </div>
  );
}
