import { NextRequest, NextResponse } from "next/server";

// V2: Next API Route - depois será proxy para NestJS (http://localhost:3001/contact)
// Por enquanto persiste em memória / loga. Quando NestJS + DB estiver pronto, redireciona.
export async function POST(req: NextRequest) {
  try {
    const { nome, email, mensagem } = await req.json();
    if (!nome || !email || !mensagem) return NextResponse.json({ error: "Campos obrigatórios" }, { status: 400 });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "E-mail inválido" }, { status: 400 });

    // TODO: forward para NestJS: await fetch(`${process.env.API_URL}/contact`, {...})
    // TODO: salvar no banco via Prisma/TypeORM
    console.log("[contact] recebido:", { nome, email, mensagem: mensagem.slice(0,120) });

    return NextResponse.json({ ok: true, message: "Mensagem recebida" });
  } catch {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
