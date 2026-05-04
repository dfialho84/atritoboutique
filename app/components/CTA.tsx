export function CTA() {
  return (
    <section className="section bg-white">
      <div className="container text-center">
        <span className="section-label">Comece agora</span>
        <div className="w-8 h-px bg-[#D4AF37] mx-auto mb-8" />

        <h2 className="text-5xl md:text-6xl font-serif font-light mb-4 leading-tight">
          Encontre sua próxima<br />
          <span className="italic text-[#D4AF37]">peça favorita</span>
        </h2>

        <p className="text-gray-500 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          Converse com a gente e descubra o que combina com você
        </p>

        <a
          href="https://wa.me/5531983572204?text=Oi,%20vim%20pelo%20site%20e%20quero%20ver%20as%20novidades"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
