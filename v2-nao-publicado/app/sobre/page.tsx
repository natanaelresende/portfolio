export const metadata = { title: "Sobre — Natanael" };
export default function Sobre() {
  return (
    <div className="container">
      <section className="page-head">
        <h1>Sobre mim</h1>
        <p>Sou estudante de Análise e Desenvolvimento de Sistemas na Fatec Garça e atualmente atuo como estagiário de Tecnologia da Informação.</p>
      </section>
      <section className="section two-col">
        <div>
          <h2 className="section__title">Resumo</h2>
          <p>Minha experiência envolve suporte a usuários, manutenção e configuração de computadores e auxílio no uso de ferramentas tecnológicas.</p>
          <p>Paralelamente, venho desenvolvendo minha base em programação, bancos de dados e desenvolvimento web através de estudos e projetos próprios — agora em TypeScript, React/Next.js e NestJS.</p>
          <h2 className="section__title" style={{ marginTop: "2rem" }}>Habilidades</h2>
          <div className="tech-grid">
            <div className="tech-card"><strong>TypeScript / React</strong><span>Next.js • Componentes • Hooks</span></div>
            <div className="tech-card"><strong>NestJS / API</strong><span>REST • Validação • Banco</span></div>
            <div className="tech-card"><strong>HTML / CSS</strong><span>Semântica • Flexbox • Grid</span></div>
            <div className="tech-card"><strong>TI / Suporte</strong><span>Windows • Drivers • Troubleshooting</span></div>
          </div>
        </div>
        <aside className="aside-card">
          <h3>Formação</h3>
          <p><strong>ADS — Fatec Garça</strong><br />2023 — 2027</p>
          <p><strong>Ensino Médio Técnico Integrado — Desenvolvimento de Sistemas</strong><br />2023 — 2025</p>
          <hr />
          <h3>Experiência</h3>
          <p><strong>Estagiário de TI</strong><br />Prefeitura Municipal — Escola Orane Avelino<br />2026 — atual</p>
          <ul className="list">
            <li>Suporte a professores, alunos e equipe gestora</li>
            <li>Configuração e manutenção de computadores</li>
            <li>Auxílio na utilização de sistemas</li>
          </ul>
        </aside>
      </section>
    </div>
  );
}
