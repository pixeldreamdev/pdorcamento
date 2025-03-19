import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(request: Request) {
  try {
    // Verificar se o corpo da requisição é JSON válido
    const contentType = request.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return NextResponse.json(
        { error: "Conteúdo deve ser JSON" },
        { status: 400 }
      );
    }

    const { name, email, message } = await request.json();

    // Validar campos obrigatórios
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: `🌐 Nova Mensagem | Pixel Dream Network`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                margin: 0;
                padding: 0;
                background-color: #0a0a0a;
                color: #fff;
                font-family: 'Arial', sans-serif;
                background-image: url('/images/1.gif');
                background-size: cover;
                background-position: center;
              }
              .overlay {
                background: linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(16,185,129,0.1) 100%);
                padding: 40px 20px;
              }
              .neon-text {
                color: #0ff;
                text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff;
                animation: glow 1.5s ease-in-out infinite alternate;
              }
              @keyframes glow {
                from { text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 15px #0ff; }
                to { text-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff; }
              }
              .matrix-bg {
                background-image: url('/images/1.gif');
                background-size: cover;
                padding: 20px;
                margin: 20px 0;
                position: relative;
              }
              .matrix-bg::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(45deg, rgba(16,185,129,0.3), rgba(0,255,255,0.3));
                pointer-events: none;
              }
              .content {
                position: relative;
                z-index: 1;
                line-height: 1.6;
              }
              .field-label {
                color: #0ff;
                text-transform: uppercase;
                letter-spacing: 2px;
                margin-bottom: 5px;
                font-size: 14px;
              }
              .field-value {
                color: #fff;
                background: rgba(0,0,0,0.5);
                padding: 15px;
                margin-bottom: 20px;
                border-left: 3px solid #0ff;
              }
              .separator {
                height: 2px;
                background: linear-gradient(to right, transparent, #0ff, transparent);
                margin: 30px 0;
              }
              .cyber-line {
                height: 1px;
                background: linear-gradient(90deg, 
                  transparent 0%, 
                  #0ff 20%, 
                  #0ff 80%, 
                  transparent 100%
                );
                position: relative;
                margin: 40px 0;
              }
              .cyber-line::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 1px;
                background: inherit;
                top: -4px;
                filter: blur(4px);
              }
            </style>
          </head>
          <body>
            <div class="overlay">
              <div class="content">
                <h1 class="neon-text" style="text-align: center; font-size: 32px; margin-bottom: 40px;">
                  PIXEL DREAM NETWORK
                </h1>
                
                <div class="matrix-bg">
                  <div style="position: relative; z-index: 2;">
                    <div class="field-label">IDENTIFICAÇÃO DO USUÁRIO</div>
                    <div class="field-value">
                      <span style="color: #0ff;">></span> ${name}
                    </div>

                    <div class="field-label">ENDEREÇO DE CONEXÃO</div>
                    <div class="field-value">
                      <span style="color: #0ff;">></span> ${email}
                    </div>

                    <div class="field-label">CONTEÚDO DA TRANSMISSÃO</div>
                    <div class="field-value" style="white-space: pre-line;">
                      <span style="color: #0ff;">></span> ${message}
                    </div>
                  </div>
                </div>

                <div class="cyber-line"></div>

                <div style="text-align: center; font-size: 12px; color: #666;">
                  <p>TRANSMISSÃO SEGURA - ${new Date().toLocaleString()}</p>
                  <p style="color: #0ff;">[PIXEL DREAM NETWORK - TODOS OS DIREITOS RESERVADOS]</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Mensagem enviada com sucesso!" },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Erro ao processar requisição:", error);
    return NextResponse.json(
      { success: false, error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
