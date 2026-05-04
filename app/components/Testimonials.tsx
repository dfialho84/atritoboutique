export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Achei perfeito! Recomendo muito a Atrito para quem quer se vestir bem sem complicação.",
      author: "Cliente anônima",
      rating: 5,
    },
    {
      id: 2,
      text: "As peças são de ótima qualidade e o atendimento é super atencioso. Já fiz várias compras!",
      author: "Cliente satisfeita",
      rating: 5,
    },
    {
      id: 3,
      text: "Adorei a forma como a Atrito escolhe as peças. Cada coisa que comprei combinou perfeitamente comigo.",
      author: "Cliente fiel",
      rating: 5,
    },
  ];

  return (
    <section className="section bg-[#F5F5F5]">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">
            <span className="text-[#D4AF37]">Quem compra,</span> recomenda
          </h2>
          <p className="text-gray-600 text-lg">
            Veja o que nossas clientes dizem sobre a Atrito
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-[#D4AF37] text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <p className="font-semibold text-black">— {testimonial.author}</p>
            </div>
          ))}
        </div>

        {/* Social proof section */}
        <div className="mt-16 bg-white p-8 rounded-lg text-center">
          <p className="text-gray-600 mb-4">
            Mais de 100+ clientes satisfeitas com nossas peças
          </p>
          <p className="text-sm text-gray-500">
            Nossos comentários mais recentes estão no Instagram @atritoboutique
          </p>
        </div>
      </div>
    </section>
  );
}
