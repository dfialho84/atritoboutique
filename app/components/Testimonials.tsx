export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Achei perfeito! Recomendo muito a Atrito para quem quer se vestir bem sem complicação.",
      author: "Cliente anônima",
    },
    {
      id: 2,
      text: "As peças são de ótima qualidade e o atendimento é super atencioso. Já fiz várias compras!",
      author: "Cliente satisfeita",
    },
    {
      id: 3,
      text: "Adorei a forma como a Atrito escolhe as peças. Cada coisa que comprei combinou perfeitamente comigo.",
      author: "Cliente fiel",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <span className="section-label">Depoimentos</span>
          <div className="w-8 h-px bg-[#D4AF37] mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-serif font-light">
            Quem compra, recomenda
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-10 border border-gray-100 hover:border-[#D4AF37] transition-colors duration-400 relative"
            >
              <span className="font-serif text-7xl text-[#D4AF37] leading-none opacity-30 absolute top-4 left-7 select-none">
                "
              </span>

              <p className="font-serif italic text-gray-600 leading-relaxed mt-8 mb-8 text-[0.95rem]">
                {testimonial.text}
              </p>

              <div className="w-6 h-px bg-[#D4AF37] mb-4" />
              <p className="text-[0.62rem] tracking-[0.25em] uppercase text-gray-400">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[0.62rem] tracking-[0.35em] uppercase text-gray-400">
            Mais de 100 clientes satisfeitas · @atritoboutique
          </p>
        </div>
      </div>
    </section>
  );
}
