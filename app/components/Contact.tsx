export function Contact() {
  return (
    <section className="section bg-[#F5F5F5]">
      <div className="container">
        <div className="text-center mb-16">
          <span className="section-label">Contato</span>
          <div className="w-8 h-px bg-[#D4AF37] mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-serif font-light">
            Fale com a gente
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 mb-16">
          {/* WhatsApp */}
          <div className="bg-[#F5F5F5] p-10 text-center group hover:bg-white transition-colors duration-300">
            <svg className="w-7 h-7 mx-auto mb-6 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <h3 className="font-serif font-light text-xl mb-3">WhatsApp</h3>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Disponíveis para conversar e tirar todas as suas dúvidas
            </p>
            <a
              href="https://wa.me/5531983572204?text=Oi,%20vim%20pelo%20site%20e%20quero%20ver%20as%20novidades"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Enviar mensagem
            </a>
          </div>

          {/* Phone */}
          <div className="bg-[#F5F5F5] p-10 text-center group hover:bg-white transition-colors duration-300">
            <svg className="w-7 h-7 mx-auto mb-6 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <h3 className="font-serif font-light text-xl mb-3">Telefone</h3>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Prefere ligar? Estamos disponíveis durante o horário comercial
            </p>
            <a href="tel:+553138917796" className="btn-primary">
              (31) 3891-7796
            </a>
          </div>

          {/* Email */}
          <div className="bg-[#F5F5F5] p-10 text-center group hover:bg-white transition-colors duration-300">
            <svg className="w-7 h-7 mx-auto mb-6 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
              <rect x="2" y="4" width="20" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 7l10 7 10-7"/>
            </svg>
            <h3 className="font-serif font-light text-xl mb-3">Email</h3>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Tem uma dúvida? Envie um email e responderemos em breve
            </p>
            <a href="mailto:contato@atrito.com" className="btn-primary">
              Enviar email
            </a>
          </div>
        </div>

        {/* Location and hours */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Map */}
          <div className="overflow-hidden aspect-square">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3755.7968434523555!2d-42.8800674!3d-20.7604538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa367e6580ba065%3A0x43512ddd0bd16251!2sATRITO!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between py-4">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <svg className="w-4 h-4 text-[#D4AF37] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <h3 className="font-serif font-light text-xl">Venha nos visitar</h3>
              </div>
              <p className="text-gray-500 mb-4 text-sm leading-relaxed">
                Atendimento em Viçosa, com atenção e tranquilidade
              </p>
              <p className="text-gray-800 text-sm leading-relaxed">
                Rua das Flores, 123<br />
                Viçosa — MG 36570-000
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-5">
                <svg className="w-4 h-4 text-[#D4AF37] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <h3 className="font-serif font-light text-xl">Horário de funcionamento</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Segunda a sexta</span>
                  <span className="text-gray-800">09h às 18h</span>
                </div>
                <div className="w-full h-px bg-gray-100" />
                <div className="flex justify-between">
                  <span>Sábado</span>
                  <span className="text-gray-800">09h às 13h</span>
                </div>
                <div className="w-full h-px bg-gray-100" />
                <p className="text-xs text-gray-400 italic mt-2">
                  Também atendemos com horário combinado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
