export function CTA() {
  return (
    <section className="section bg-black text-white">
      <div className="container text-center">
        <h2 className="text-5xl font-serif font-bold mb-6">
          ✨ Encontre sua próxima<br />
          <span className="text-[#D4AF37]">peça favorita</span>
        </h2>

        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Não espere mais. Converse com a gente agora mesmo e descubra o que
          combina com você
        </p>

        <a
          href="https://wa.me/553183572204?text=Oi,%20vim%20pelo%20site%20e%20quero%20ver%20as%20novidades"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp inline-block text-lg"
        >
          💬 Falar no WhatsApp agora
        </a>
      </div>
    </section>
  );
}
