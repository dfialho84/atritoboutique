export function Gallery() {
  const items = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `Look ${i + 1}`,
  }));

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Looks & <span className="text-[#D4AF37]">Destaques</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Inspiração e estilo. Veja como nossas clientes combinam as peças
            Atrito
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover-scale cursor-pointer group"
            >
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center relative">
                <p className="text-gray-600 text-lg">{item.title}</p>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Quer ver mais? Acompanhe nossas novidades no Instagram
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-block"
          >
            @atritoboutique
          </a>
        </div>
      </div>
    </section>
  );
}
