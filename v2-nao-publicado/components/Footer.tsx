"use client";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {year} Natanael Eugênio Resende</span>
        <span className="footer__links">
          <a href="https://github.com/natanaelresende" target="_blank" rel="noopener noreferrer">GitHub</a> {" • "}
          <a href="https://www.linkedin.com/in/natanael-eug%C3%AAnio-resende-041a163b0/" target="_blank" rel="noopener noreferrer">LinkedIn</a> {" • "}
          <a href="mailto:natanaelresende17@gmail.com">E-mail</a>
        </span>
      </div>
    </footer>
  );
}
