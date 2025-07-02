import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen bg-white text-neutral-900">
            <section className="bg-gray-100 text-center py-20 px-6">
                <h2 className="text-4xl fonr-bold mb-4">
                    Nova coleção de primavera
                </h2>
                <p className="text-gray-600 mx-w-xl mx-auto">
                    Explore nossas peças exclusivas com design sofisticado e
                    conforto premium.
                </p>
            </section>

            <section className="px-6 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[1, 2, 3, 4, 5].map((num) => (
                        <div
                            key={num}
                            className="group rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all"
                        >
                            <div className="aspect-square relative overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=400&fit=crop"
                                    alt="Coleção de primavera"
                                    width={400}
                                    height={400}
                                    className="object-cover group-hover:scale-105 transition-transform w-full h-full"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">
                                    Nome do Produto
                                </h3>
                                <p className="text-sm text-gray-500">
                                    R$ 11,99
                                </p>
                                <button className="mt-3 inline-block text-sm font-medium text-primary hover:underline">
                                    Ver detalhes
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
