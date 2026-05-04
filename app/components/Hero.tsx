export function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center justify-center text-center">
        {/* Logo */}
        <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
          ATRITO
        </h1>

        {/* Main title */}
        <h2 className="text-3xl md:text-5xl font-serif mb-4 leading-tight">
          Estilo único,<br />
          <span className="text-[#D4AF37]">sem complicação</span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
          Peças escolhidas com cuidado, para quem quer se vestir bem todos os dias
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="https://wa.me/5531983572204?text=Oi,%20vim%20pelo%20site%20e%20quero%20ver%20as%20novidades"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            💬 Falar no WhatsApp
          </a>
          <a
            href="https://www.instagram.com/atritoboutique/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            📸 Ver no Instagram
          </a>
        </div>

        {/* Hero Image placeholder */}
        <div className="w-full max-w-4xl aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-gray-600">
            <div className="text-center">
              <p className="text-2xl mb-2">✨</p>
              <p className="text-lg">Imagem da coleção</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
