"use client";
import React, { useState } from "react";

const Contato: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Verificar o tipo de conteúdo da resposta
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Resposta inválida do servidor");
      }

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: data.message });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Erro ao enviar mensagem",
        });
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      setStatus({
        type: "error",
        message: "Erro de conexão. Por favor, tente novamente.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#1F2326] py-16 relative overflow-hidden">
      {/* Efeito de gradiente cyberpunk */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-purple-500/10" />

      {/* Círculos decorativos estilo Nubank */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Logo com efeito neon */}
          <div className="mb-12 text-center"></div>

          <div className="bg-black/30 backdrop-blur-lg rounded-3xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 text-center mb-8">
              Entre em Contato
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="peer w-full p-4 rounded-xl bg-gray-800/50 text-white border border-emerald-500/30 
                           focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 
                           placeholder-transparent transition-all duration-300"
                  placeholder="Seu nome"
                  required
                />
                <label
                  className="absolute left-4 -top-2.5 text-sm text-emerald-400 bg-[#1F2326] px-2
                                transition-all duration-300 peer-placeholder-shown:text-base 
                                peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400
                                peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-emerald-400"
                >
                  Nome
                </label>
              </div>

              {/* Email input com mesmo estilo */}
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="peer w-full p-4 rounded-xl bg-gray-800/50 text-white border border-emerald-500/30 
                           focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 
                           placeholder-transparent transition-all duration-300"
                  placeholder="Seu email"
                  required
                />
                <label
                  className="absolute left-4 -top-2.5 text-sm text-emerald-400 bg-[#1F2326] px-2
                                transition-all duration-300 peer-placeholder-shown:text-base 
                                peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400
                                peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-emerald-400"
                >
                  Email
                </label>
              </div>

              {/* Textarea com mesmo estilo */}
              <div className="relative">
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="peer w-full p-4 rounded-xl bg-gray-800/50 text-white border border-emerald-500/30 
                           focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 
                           placeholder-transparent transition-all duration-300"
                  placeholder="Sua mensagem"
                  required
                />
                <label
                  className="absolute left-4 -top-2.5 text-sm text-emerald-400 bg-[#1F2326] px-2
                                transition-all duration-300 peer-placeholder-shown:text-base 
                                peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400
                                peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-emerald-400"
                >
                  Mensagem
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold 
                         py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02]
                         hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] disabled:opacity-50 
                         disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? "Enviando..." : "Enviar Mensagem"}
              </button>

              {status.message && (
                <div
                  className={`text-center p-4 rounded-xl backdrop-blur-sm ${
                    status.type === "success"
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      : "bg-red-500/20 text-red-400 border border-red-500/30"
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
