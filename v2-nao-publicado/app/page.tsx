import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero container">
        <p className="hero__eyebrow">Portfólio • V2 — Next.js + TypeScript</p>
        <h1>NATANAEL EUGÊNIO RESENDE</h1>
        <p className="hero__subtitle">Estudante de Análise e Desenvolvimento de Sistemas<br />Desenvolvimento • TI • Suporte Técnico</p>
        <p className="hero__desc">Construindo minha carreira em tecnologia através de projetos, estudos e experiência prática.</p>
        <div className="hero__actions">
          <Link href="/projetos" className="btn btn--primary">Ver projetos</Link>
          <Link href="/sobre" className="btn btn--ghost">Sobre mim</Link>
        </div>
        <div className="hero__meta">
          <span>Garça, SP</span><span>Fatec Garça — ADS</span><span>Estagiário de TI</span>
        </div>
      </section>

      <section className="section container">
        <h2 className="section__title">Tecnologias principais</h2>
        <p className="section__desc">Stack V2 — tipado e componentizado.</p>
        <div className="tech-grid">
          <div className="tech-card"><strong>TypeScript</strong><span>Tipagem • Next.js • React</span></div>
          <div className="tech-card"><strong>React / Next.js</strong><span>App Router • SSR • API Routes</span></div>
          <div className="tech-card"><strong>NestJS</strong><span>API • Validação • Banco</span></div>
          <div className="tech-card"><strong>MySQL / PostgreSQL</strong><span>SQL • CRUD • JOIN</span></div>
        </div>
      </section>

      <section className="section container" style={{ textAlign: "center" }}>
        <h2 className="section__title">Projetos em destaque</h2>
        <p className="muted">Meus projetos estarão disponíveis em breve.</p>
        <p style={{ marginTop: "1rem" }}><Link href="/projetos" className="btn btn--ghost">Ver projetos</Link></p>
      </section>

      <section className="section section--alt">
        <div className="container center">
          <h2>Vamos conversar?</h2>
          <p>Estou aberto a oportunidades de estágio em TI e Desenvolvimento.</p>
          <Link href="/contato" className="btn btn--primary">Entrar em contato</Link>
        </div>
      </section>
    </>
  );
}
