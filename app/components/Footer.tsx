export function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="w-full h-px bg-[#D4AF37] opacity-20" />
            <div className="container py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <h3 className="font-andes text-2xl font-bold tracking-tight mb-3">
                            Atrito
                        </h3>
                        <p className="text-gray-500 text-xs leading-relaxed tracking-wide">
                            Curadoria de roupas exclusivas,
                            <br />
                            com preço justo e atendimento próximo
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-[0.62rem] tracking-[0.3em] uppercase text-[#D4AF37] mb-5">
                            Sobre
                        </h4>
                        <ul className="space-y-3 text-gray-500 text-xs">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors duration-200"
                                >
                                    Sobre nós
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors duration-200"
                                >
                                    Diferenciais
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors duration-200"
                                >
                                    Como comprar
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-[0.62rem] tracking-[0.3em] uppercase text-[#D4AF37] mb-5">
                            Contato
                        </h4>
                        <ul className="space-y-3 text-gray-500 text-xs">
                            <li>
                                <a
                                    href="https://wa.me/5531983572204"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors duration-200"
                                >
                                    WhatsApp
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+553138917796"
                                    className="hover:text-white transition-colors duration-200"
                                >
                                    (31) 3891-7796
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:contato@atrito.com"
                                    className="hover:text-white transition-colors duration-200"
                                >
                                    contato@atrito.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-[0.62rem] tracking-[0.3em] uppercase text-[#D4AF37] mb-5">
                            Redes Sociais
                        </h4>
                        <ul className="space-y-3 text-gray-500 text-xs">
                            <li>
                                <a
                                    href="https://www.instagram.com/atritoboutique/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors duration-200"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors duration-200"
                                >
                                    Facebook
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-[0.65rem] tracking-wide">
                        <p>&copy; 2026 Atrito. Todos os direitos reservados.</p>
                        <div className="flex gap-8 mt-4 md:mt-0">
                            <a
                                href="#"
                                className="hover:text-gray-400 transition-colors duration-200"
                            >
                                Política de Privacidade
                            </a>
                            <a
                                href="#"
                                className="hover:text-gray-400 transition-colors duration-200"
                            >
                                Termos de Uso
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
