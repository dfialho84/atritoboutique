export function Gallery() {
  const items = Array.from({ length: 6 }, (_, i) => ({ id: i + 1 }));

  return (
    <section className="section bg-[#F5F5F5]">
      <div className="container">
        <div className="text-center mb-16">
          <span className="section-label">Looks & Destaques</span>
          <div className="w-8 h-px bg-[#D4AF37] mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">
            Inspiração & Estilo
          </h2>
          <p className="text-gray-500 text-sm tracking-wide max-w-sm mx-auto">
            Veja como nossas clientes combinam as peças Atrito
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {items.map((item) => (
            <div
              key={item.id}
              className="aspect-square overflow-hidden bg-gray-200 cursor-pointer group relative"
            >
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-[0.62rem] tracking-[0.4em] uppercase text-gray-400 mb-6">
            Acompanhe nossas novidades
          </p>
          <a
            href="https://www.instagram.com/atritoboutique/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            @atritoboutique
          </a>
        </div>
      </div>
    </section>
  );
}
