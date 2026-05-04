export function ValueProps() {
  const values = [
    {
      icon: "✨",
      title: "Exclusividade",
      description: "Nada de roupas iguais em todo mundo",
    },
    {
      icon: "👗",
      title: "Curadoria",
      description: "Cada peça é escolhida com cuidado",
    },
    {
      icon: "💰",
      title: "Preço Justo",
      description: "Qualidade acessível",
    },
    {
      icon: "❤️",
      title: "Atendimento Próximo",
      description: "Atendimento humano e personalizado",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-8 text-center hover-scale rounded-lg border border-gray-100 hover:border-[#D4AF37] transition-all duration-300"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-serif font-semibold mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
