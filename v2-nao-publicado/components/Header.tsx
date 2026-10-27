"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" className="logo">NR<span>.</span></Link>
        <nav className={`nav ${open ? "nav--open" : ""}`} aria-label="Navegação principal">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav__link ${pathname === l.href ? "nav__link--active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          className="menu-btn"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
