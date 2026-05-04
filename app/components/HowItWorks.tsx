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
                "Entre em contato para tirar dúvidas e conhecer melhor a peça que você quer",
        },
        {
            number: "03",
            title: "Reserve sua peça",
            description:
                "Escolha a peça perfeita e reserve. Entregamos rápido e com segurança",
        },
    ];

    return (
        <section className="section bg-black text-white" id="comocomprar">
            <div className="container">
                {/* Header: bloco coeso, gap proporcional ao conteúdo que segue */}
                <div className="text-center mb-14">
                    <span className="section-label">Processo</span>
                    <div className="w-8 h-px bg-gold mx-auto mb-5" />
                    <h2 className="text-3xl md:text-4xl font-serif font-light">
                        Como Comprar
                    </h2>
                </div>

                {/* Gap entre steps menor — são itens do mesmo nível */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {steps.map((step, index) => (
                        <div key={index} className="group">
                            <div className="w-8 h-px bg-gold mb-5 group-hover:w-14 transition-all duration-500" />
                            <p className="text-tiny tracking-extra-spaced uppercase text-gold mb-4">
                                {step.number}
                            </p>
                            <h3 className="text-xl font-serif font-light text-white mb-3">
                                {step.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-14">
                    <a
                        href="https://wa.me/5531983572204?text=Oi,%20vim%20pelo%20site%20e%20quero%20ver%20as%20novidades"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline-white"
                    >
                        Começar agora
                    </a>
                </div>
            </div>
        </section>
    );
}
