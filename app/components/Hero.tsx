export function Hero() {
    return (
        <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-radial-dark" />

            <div className="relative z-10 flex flex-col items-center justify-center text-center px-8">
                {/* Top divider — menor espaço: estamos no início, logo abaixo há o logo grande */}
                <div className="w-12 h-px bg-gold mb-2" />

                {/* Logo + label são uma unidade, espaçamento apertado entre eles */}
                <h1 className="text-7xl md:text-9xl font-andes font-normal tracking-wide leading-none">
                    Atrito
                </h1>

                <p className="text-tiny tracking-spaced uppercase text-gold mb-2">
                    Boutique
                </p>

                {/* Bottom divider — pausa antes do tagline */}
                <div className="w-12 h-px bg-gold mb-10" />

                {/* Tagline — mais próxima dos botões (são a mesma ação) */}
                <p className="font-serif italic text-gray-400 text-md md:text-lg leading-relaxed mb-10 max-w-lg">
                    Peças escolhidas com cuidado,
                    <br />
                    para quem quer se vestir bem
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href="https://wa.me/5531983572204?text=Oi,%20vim%20pelo%20site%20e%20quero%20ver%20as%20novidades"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline-white"
                    >
                        Falar no WhatsApp
                    </a>
                    <a
                        href="https://www.instagram.com/atritoboutique/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline-white"
                    >
                        Ver no Instagram
                    </a>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
                <span className="text-xtiny tracking-extra-spaced uppercase text-gray-600">
                    Rolar
                </span>
                <div className="w-px h-10 bg-linear-to-b from-gray-600 to-transparent" />
            </div>
        </section>
    );
}
