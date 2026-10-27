# Portfólio — Natanael Eugênio Resende

Portfólio V1 (HTML + CSS + JS) + V2 (Next.js + TypeScript + NestJS) — tema Nuremberg sépia.

**Deploy Netlify (grátis, 30s, arrasta e solta):**
1. Acesse `https://app.netlify.com/drop`
2. Arraste a pasta `portfolio-v1` inteira
3. Pronto: link `https://SEU-NOME.netlify.app`

Ou via Git:
```bash
git init && git add . && git commit -m "portfolio" 
git remote add origin https://github.com/natanaelresende/portfolio.git
git push -u origin main
# Netlify → Add new site → Import from GitHub → Deploy
```

Config já inclusa: `netlify.toml` + `_redirects` (rotas /sobre, /projetos, /contato).

## Estrutura
```
├── index.html / sobre.html / projetos.html / contato.html
├── css/style.css (sincronizado com app/globals.css)
├── js/script.js
├── app/ (Next.js V2)
│   ├── page.tsx / sobre/ / projetos/ / contato/
│   └── api/contact/route.ts
├── backend/ (NestJS)
├── netlify.toml
└── _redirects
```

## Como executar local
- V1: duplo clique `executar.bat` ou `python -m http.server 8000`
- V2: `instalar.bat` → `executar.bat` (precisa Node.js LTS) → http://localhost:3000

## Contato
- GitHub: https://github.com/natanaelresende
- LinkedIn: https://www.linkedin.com/in/natanael-eugênio-resende-041a163b0/
- E-mail: natanaelresende17@gmail.com
