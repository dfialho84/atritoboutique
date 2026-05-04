export function About() {
  return (
    <section className="section bg-[#F5F5F5]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="aspect-square bg-gray-300 rounded-lg overflow-hidden hover-scale">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-400 to-gray-500">
              <p className="text-gray-600 text-lg">Foto da Dona</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-serif font-bold mb-8 leading-tight">
              Sobre a <span className="text-[#D4AF37]">Atrito</span>
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                A Atrito nasceu do cuidado em escolher peças que realmente façam
                sentido para quem veste.
              </p>

              <p>
                Mais do que vender roupas, buscamos entender cada cliente — seu
                estilo, seu momento, sua personalidade.
              </p>

              <p className="font-semibold text-black">
                Por isso, quem compra na Atrito volta. Não só pelas peças, mas
                pela experiência.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="https://wa.me/553183572204?text=Oi,%20vim%20pelo%20site%20e%20quero%20ver%20as%20novidades"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
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
