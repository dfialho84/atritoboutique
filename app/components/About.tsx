export function About() {
    return (
        <section className="section bg-white" id="about">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image */}
                    <div className="aspect-square overflow-hidden bg-gray-100 relative">
                        <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200">
                            <p className="text-xs tracking-spaced uppercase text-gray-400">
                                Foto em breve
                            </p>
                        </div>
                        <div className="absolute top-5 left-5 w-10 h-10 border-t border-l border-gold" />
                        <div className="absolute bottom-5 right-5 w-10 h-10 border-b border-r border-gold" />
                    </div>

                    {/* Content — label, divider e h2 como bloco coeso; depois o texto respira */}
                    <div>
                        <span className="section-label">Nossa História</span>
                        <div className="w-8 h-px bg-gold mb-6" />

                        <h2 className="text-xl md:text-3xl font-serif font-light mb-8 leading-tight">
                            Sobre a Atrito
                        </h2>

                        <div className="space-y-5 text-gray-600 text-base leading-relaxed">
                            <p>
                                A Atrito nasceu do cuidado em escolher peças que
                                realmente façam sentido para quem veste.
                            </p>
                            <p>
                                Mais do que vender roupas, buscamos entender
                                cada cliente — seu estilo, seu momento, sua
                                personalidade.
                            </p>
                            <p className="border-l border-gold pl-5 text-gray-800 tracking-widest uppercase">
                                Por isso, quem compra na Atrito volta. Não só
                                pelas peças, mas pela experiência.
                            </p>
                        </div>

                        <div className="mt-10 md:text-left text-center">
                            <a
                                href="https://wa.me/5531983572204?text=Oi,%20vim%20pelo%20site%20e%20quero%20ver%20as%20novidades"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                            >
                                Conhecer nossas peças
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
