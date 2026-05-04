export function About() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="aspect-square overflow-hidden bg-gray-100 relative">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
              <p className="text-[0.62rem] tracking-[0.35em] uppercase text-gray-400">
                Foto em breve
              </p>
            </div>
            <div className="absolute top-5 left-5 w-12 h-12 border-t border-l border-[#D4AF37]" />
            <div className="absolute bottom-5 right-5 w-12 h-12 border-b border-r border-[#D4AF37]" />
          </div>

          {/* Content */}
          <div>
            <span className="section-label">Nossa História</span>
            <div className="w-8 h-px bg-[#D4AF37] mb-10" />

            <h2 className="text-4xl md:text-5xl font-serif font-light mb-10 leading-tight">
              Sobre a Atrito
            </h2>

            <div className="space-y-6 text-gray-600 text-[0.95rem] leading-relaxed">
              <p>
                A Atrito nasceu do cuidado em escolher peças que realmente façam
                sentido para quem veste.
              </p>
              <p>
                Mais do que vender roupas, buscamos entender cada cliente — seu
                estilo, seu momento, sua personalidade.
              </p>
              <p className="border-l border-[#D4AF37] pl-5 text-gray-800">
                Por isso, quem compra na Atrito volta. Não só pelas peças, mas
                pela experiência.
              </p>
            </div>

            <div className="mt-12">
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
