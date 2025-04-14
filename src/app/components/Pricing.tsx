import React, { useState } from "react";

const PricingCard = ({
  title,
  originalPrice,
  price,
  features,
  installments,
  subtitle,
  paymentMethods,
  index,
  showAllFeatures,
  onToggleFeatures,
}: {
  title: string;
  originalPrice?: string;
  price: string;
  features: string[];
  installments?: { times: number; value: string }[];
  subtitle?: string;
  paymentMethods?: boolean;
  index: number;
  showAllFeatures: boolean;
  onToggleFeatures: () => void;
}) => {
  const MIN_FEATURES = 5;
  const hasMoreFeatures = features.length > MIN_FEATURES;
  const displayedFeatures = showAllFeatures
    ? features
    : features.slice(0, MIN_FEATURES);

  return (
    <div
      className="group relative bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-emerald-500/30
               hover:border-emerald-400 transition-all duration-500 hover:transform hover:scale-105
               before:absolute before:inset-0 before:bg-gradient-to-r 
               before:from-emerald-500/10 before:to-cyan-500/10 before:opacity-0
               before:transition-opacity hover:before:opacity-100
               opacity-0 translate-y-10 flex flex-col min-h-[600px]"
      data-aos="fade-up"
      data-aos-delay={index * 200}
    >
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-emerald-400 mb-3">{title}</h3>
          {subtitle && (
            <p className="text-emerald-300 mb-4 text-lg">{subtitle}</p>
          )}
          {originalPrice && (
            <p className="text-red-400 line-through mb-3">
              De R$ {originalPrice}
            </p>
          )}
          <p className="text-3xl font-bold text-emerald-300">R$ {price}</p>
        </div>

        <div className="flex-1 flex flex-col">
          <ul className="space-y-4 mb-8">
            {displayedFeatures.map((feature, i) => (
              <li key={i} className="text-gray-300 flex items-start gap-3">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {hasMoreFeatures && (
            <div className="mt-auto mb-8">
              <button
                onClick={onToggleFeatures}
                className="w-full text-center py-2 px-4 bg-black/40 border border-emerald-500/50 
                         text-emerald-400 hover:text-emerald-300 transition-all duration-300 
                         rounded-md font-bold text-base tracking-wider uppercase
                         hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]
                         hover:bg-emerald-950/30 backdrop-blur-sm
                         flex items-center justify-center gap-2"
              >
                {showAllFeatures ? (
                  <>
                    <span className="text-sm tracking-[0.2em]">Recolher</span>
                    <span className="text-lg scale-y-75">△</span>
                  </>
                ) : (
                  <>
                    <span className="text-sm tracking-[0.2em]">Expandir</span>
                    <span className="text-lg scale-y-75">▽</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="relative z-10">
        {installments && (
          <div className="border-t border-emerald-500/50 pt-6">
            <p className="text-emerald-500 mb-4 text-lg">Ou parcelado em:</p>
            {installments.map((installment, i) => (
              <p key={i} className="text-gray-100 flex items-center gap-3 mb-3">
                <span className="text-emerald-400">✓</span>
                {installment.times}x de R$ {installment.value}
              </p>
            ))}
          </div>
        )}
        {paymentMethods && (
          <div className="mt-6 pt-6 border-t border-emerald-500/50">
            <p className="text-emerald-400 mb-3">💳 Formas de Pagamento:</p>
            <p className="text-gray-100">Boleto | PIX | Cartão de Crédito</p>
          </div>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default function Pricing() {
  const [expandedCards, setExpandedCards] = useState<boolean[]>(
    Array(6).fill(false)
  );

  const handleToggleFeatures = (index: number) => {
    setExpandedCards((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <section id="plans" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
          Nossos Planos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PricingCard
            title="Plano Anual"
            subtitle="Google Perfil de Empresas"
            originalPrice="1.297,00"
            price="897,00"
            features={[
              "Otimização do Google Perfil de Empresas",
              "Postagens na Página do Google Perfil de Empresas",
              "Suporte Técnico",
              "Relatórios Mensais",
            ]}
            installments={[
              { times: 4, value: "249,25 - Boleto" },
              { times: 12, value: "83,09 - Cartão" },
            ]}
            paymentMethods={true}
            index={0}
            showAllFeatures={expandedCards[0]}
            onToggleFeatures={() => handleToggleFeatures(0)}
          />

          <PricingCard
            title="Plano Semestral"
            subtitle="Google Perfil de Empresas"
            originalPrice="997,00"
            price="600,00"
            features={[
              "Otimização do Google Perfil de Empresas",
              "Postagens na Página do Google Perfil de Empresas",
              "Suporte Técnico",
              "Relatórios Mensais",
            ]}
            installments={[
              { times: 4, value: "174,25 - Boleto" },
              { times: 12, value: "58,08 - Cartão" },
            ]}
            paymentMethods={true}
            index={1}
            showAllFeatures={expandedCards[1]}
            onToggleFeatures={() => handleToggleFeatures(1)}
          />

          <PricingCard
            title="Landing Page"
            originalPrice="3.690,00"
            price="1.290,00"
            features={[
              "Otimização SEO",
              "Formulário de Contato",
              "Botão de WhatsApp",
              "Integração com E-mail Marketing",
              "Design Personalizado",
              "Suporte Técnico",
              "Backup do Projeto",
            ]}
            installments={[
              { times: 4, value: "922,50  - Boleto" },
              { times: 12, value: "307,50 - Cartão" },
            ]}
            paymentMethods={true}
            index={2}
            showAllFeatures={expandedCards[2]}
            onToggleFeatures={() => handleToggleFeatures(2)}
          />

          <PricingCard
            title="Google Perfil de Empresas + Landing Page + Instagram + Site Institucional"
            originalPrice="4.890,00"
            price="4.499,00"
            features={[
              "Otimização do Google Perfil de Empresas",
              "Página de Captura",
              "Integração com Instagram",
              "Integração com Google Ads",
              "Integração com Facebook Ads",
              "Integração com WhatsApp",
              "Integração com E-mail Marketing",
              "Otimização de Velocidade",
              "Formulário de Contato",
              "Design Personalizado",
              "Conexão com API",
              "Postagens na Página do Google Perfil de Empresas",
              "Relatórios Mensais",
              "Backup do Projeto",
              "Suporte Técnico",
              "Integração com Google Analytics",
            ]}
            installments={[
              { times: 4, value: "1.222,50 - Boleto" },
              { times: 12, value: "407,50  - Cartão" },
            ]}
            paymentMethods={true}
            index={3}
            showAllFeatures={expandedCards[3]}
            onToggleFeatures={() => handleToggleFeatures(3)}
          />

          <PricingCard
            title="Loja Virtual"
            subtitle="Pacote 1"
            originalPrice="4.390,00"
            price="3.990,00"
            features={[
              "Até 15 páginas",
              "Cadastro de Categorias",
              "Cadastro de até 30 produtos",
              "Integração com Gateway de Pagamento",
              "Aula sobre uso e cadastro de produtos na loja",
              "Otimização de Velocidade",
              "Formulário de Contato",
              "Integração com WhatsApp",
              "Design Personalizado",
              "Conexão com API",
              "Otimização SEO",
              "Integração com E-mail Marketing",
              "Backup do Projeto",
              "Suporte Técnico",
            ]}
            installments={[
              { times: 4, value: "1.097,50 - Boleto" },
              { times: 12, value: "365,80  - Cartão" },
            ]}
            paymentMethods={true}
            index={4}
            showAllFeatures={expandedCards[4]}
            onToggleFeatures={() => handleToggleFeatures(4)}
          />

          <PricingCard
            title="Loja Virtual"
            originalPrice="5.390,00"
            subtitle="Pacote 2"
            price="4.990,00"
            features={[
              "Até 20 páginas",
              "Cadastro de Categorias",
              "Cadastro de até 50 produtos",
              "Integração com Gateway de Pagamento",
              "Aula sobre uso e cadastro de produtos na loja",
              "Otimização de Velocidade",
              "Formulário de Contato",
              "Integração com WhatsApp",
              "Design Personalizado",
              "Conexão com API",
              "Otimização SEO",
              "Integração com E-mail Marketing",
              "Backup do Projeto",
              "Suporte Técnico",
            ]}
            installments={[
              { times: 4, value: "1.347,50 - Boleto" },
              { times: 12, value: "449,00  - Cartão" },
            ]}
            paymentMethods={true}
            index={5}
            showAllFeatures={expandedCards[5]}
            onToggleFeatures={() => handleToggleFeatures(5)}
          />
        </div>

        <div
          className="mt-12 p-6 relative bg-black/50 backdrop-blur-sm rounded-2xl border border-emerald-500/30"
          data-aos="fade-up"
        >
          <h3 className="text-2xl font-bold mb-4 text-emerald-400">
            📢 Observação:
          </h3>
          <p className="text-gray-300">
            Não oferecemos diretamente serviços de domínio e hospedagem, mas
            estamos à disposição para auxiliá-lo na contratação desses serviços.
            Nosso objetivo é garantir que seu negócio tenha a melhor estrutura
            para o sucesso online.
          </p>
          <p className="mt-4 text-emerald-300">
            📩 Entre em contato para mais informações e personalização do seu
            projeto!
          </p>
          <a
            href="https://wa.me/yourphonenumber"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
          >
            <svg
              className="w-6 h-6 mr-2"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path
                fill="currentColor"
                d="M16.02 2.94c-7.1 0-12.88 5.78-12.88 12.89 0 2.27.59 4.48 1.71 6.42l-1.81 6.63 6.8-1.79c1.85 1.01 3.95 1.54 6.18 1.54h.01c7.1 0 12.89-5.78 12.89-12.89s-5.79-12.89-12.9-12.89zm0 23.32c-1.94 0-3.83-.52-5.48-1.52l-.39-.23-4.04 1.06 1.08-3.95-.25-.4a10.93 10.93 0 0 1-1.66-5.78c0-6.07 4.94-11.01 11.02-11.01 6.07 0 11.02 4.94 11.02 11.01 0 6.08-4.95 11.02-11.03 11.02z"
              />
              <path
                fill="currentColor"
                d="M23.12 18.92c-.33-.16-1.94-.95-2.24-1.06-.3-.11-.52-.16-.73.16-.22.3-.84 1.06-1.04 1.27-.19.22-.38.24-.7.08-.33-.16-1.37-.5-2.61-1.6-.96-.85-1.6-1.9-1.78-2.22-.19-.33-.02-.5.14-.66.14-.14.33-.38.5-.57.05-.05.08-.11.14-.19.08-.14.14-.24.19-.38.05-.11.02-.3-.03-.43-.08-.14-.7-1.68-.96-2.3-.25-.61-.52-.52-.73-.52-.19 0-.41 0-.63 0-.22 0-.58.08-.88.38-.3.3-1.15 1.12-1.15 2.73s1.18 3.16 1.34 3.38c.16.22 2.32 3.57 5.64 4.95 2.67 1.14 3.21 1.04 3.79.97.58-.08 1.94-.79 2.21-1.56.27-.76.27-1.42.19-1.56-.07-.13-.3-.24-.63-.38z"
              />
            </svg>
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
