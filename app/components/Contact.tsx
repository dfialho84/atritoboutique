export function Contact() {
  return (
    <section className="section bg-[#F5F5F5]">
      <div className="container">
        <h2 className="text-4xl font-serif font-bold text-center mb-16">
          Fale <span className="text-[#D4AF37]">com a gente</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* WhatsApp */}
          <div className="text-center">
            <div className="text-5xl mb-6">💬</div>
            <h3 className="text-2xl font-serif font-semibold mb-4">WhatsApp</h3>
            <p className="text-gray-600 mb-6">
              Prefere conversar pelo WhatsApp? Estamos sempre disponíveis!
            </p>
            <a
              href="https://wa.me/553183572204?text=Oi,%20vim%20pelo%20site%20e%20quero%20ver%20as%20novidades"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-block"
            >
              Enviar mensagem
            </a>
          </div>

          {/* Phone */}
          <div className="text-center">
            <div className="text-5xl mb-6">☎️</div>
            <h3 className="text-2xl font-serif font-semibold mb-4">Telefone</h3>
            <p className="text-gray-600 mb-6">
              Prefere ligar? Estamos disponíveis também
            </p>
            <a
              href="tel:+553183572204"
              className="btn-primary inline-block"
            >
              (31) 8357-2204
            </a>
          </div>

          {/* Email */}
          <div className="text-center">
            <div className="text-5xl mb-6">✉️</div>
            <h3 className="text-2xl font-serif font-semibold mb-4">Email</h3>
            <p className="text-gray-600 mb-6">
              Tem dúvidas? Envie um email para nós
            </p>
            <a
              href="mailto:contato@atrito.com"
              className="btn-primary inline-block"
            >
              Enviar email
            </a>
          </div>
        </div>

        {/* Location and hours */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-lg overflow-hidden aspect-square">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3755.7968434523555!2d-42.8800674!3d-20.7604538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa367e6580ba065%3A0x43512ddd0bd16251!2sATRITO!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-4">
                📍 Venha nos visitar
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Atendimento em Viçosa, com atenção e tranquilidade
              </p>
              <p className="font-semibold text-black mb-6">
                Rua das Flores, 123<br />
                Viçosa - MG 36570-000
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-semibold mb-4">
                🕒 Horário de funcionamento
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-semibold">Segunda a sexta:</span> 09h às 18h
                </p>
                <p>
                  <span className="font-semibold">Sábado:</span> 09h às 13h
                </p>
                <p className="text-sm text-gray-600 italic mt-4">
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
