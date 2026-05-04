export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Veja as novidades",
      description:
        "Acompanhe nossas peças no Instagram @atritoboutique ou solicite o catálogo pelo WhatsApp",
    },
    {
      number: "02",
      title: "Fale no WhatsApp",
      description:
        "Entre em contato conosco para tirar dúvidas e conhecer melhor a peça que você quer",
    },
    {
      number: "03",
      title: "Reserve sua peça",
      description:
        "Escolha a peça perfeita e reserve com antecedência. Entregamos rápido e com segurança",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Como <span className="text-[#D4AF37]">Comprar</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Três passos simples para encontrar seu próximo estilo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step number background */}
              <div className="mb-8">
                <div className="text-6xl font-serif font-bold text-[#D4AF37] opacity-20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-8 text-[#D4AF37] text-3xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/5531983572204?text=Oi,%20vim%20pelo%20site%20e%20quero%20ver%20as%20novidades"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-block"
          >
            Começar agora
          </a>
        </div>
      </div>
    </section>
  );
}
