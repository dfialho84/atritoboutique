export function ValueProps() {
    const values = [
        {
            number: "01",
            title: "Exclusividade",
            description:
                "Nada de roupas iguais em todo mundo. Cada peça é única.",
        },
        {
            number: "02",
            title: "Curadoria",
            description:
                "Cada peça é escolhida com critério e cuidado editorial.",
        },
        {
            number: "03",
            title: "Preço Justo",
            description:
                "Qualidade e exclusividade com um preço que cabe no bolso.",
        },
        {
            number: "04",
            title: "Atendimento",
            description:
                "Atendimento humano, próximo e verdadeiramente personalizado.",
        },
    ];

    return (
        <section className="section bg-off-white" id="valueprops">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="bg-off-white p-8 group hover:bg-white transition-colors duration-300"
                        >
                            {/* Linha dourada expande no hover — elemento decorativo, não de espaço */}
                            <div className="w-8 h-px bg-gold mb-6 group-hover:w-14 transition-all duration-500" />
                            <p className="text-xs tracking-spaced uppercase text-gold mb-2">
                                {value.number}
                            </p>
                            <h3 className="font-serif text-xl font-light mb-3">
                                {value.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
