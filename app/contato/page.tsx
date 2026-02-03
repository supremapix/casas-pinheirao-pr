"use client"

import { MapPin, Phone, Mail, MessageSquare, Clock } from "lucide-react"

export default function ContatoPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-pinheirao-black text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Entre em Contato
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Estamos prontos para ajudar você a realizar o sonho da casa própria.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-black mb-8 text-pinheirao-black">
                Informações de Contato
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-pinheirao-green/10 p-3 rounded-lg">
                    <MapPin size={24} className="text-pinheirao-green" />
                  </div>
                  <div>
                    <h3 className="font-black text-pinheirao-black mb-1">
                      Endereço
                    </h3>
                    <p className="text-pinheirao-gray">
                      Av. Jacob Macanhan, 1369
                      <br />
                      Pinhais/PR - CEP 83323-060
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pinheirao-green/10 p-3 rounded-lg">
                    <Phone size={24} className="text-pinheirao-green" />
                  </div>
                  <div>
                    <h3 className="font-black text-pinheirao-black mb-1">
                      Telefone
                    </h3>
                    <p className="text-pinheirao-gray">(41) 3667-8015</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pinheirao-green/10 p-3 rounded-lg">
                    <MessageSquare size={24} className="text-pinheirao-green" />
                  </div>
                  <div>
                    <h3 className="font-black text-pinheirao-black mb-1">
                      WhatsApp
                    </h3>
                    <p className="text-pinheirao-gray">(41) 99630-1028</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pinheirao-green/10 p-3 rounded-lg">
                    <Mail size={24} className="text-pinheirao-green" />
                  </div>
                  <div>
                    <h3 className="font-black text-pinheirao-black mb-1">
                      E-mail
                    </h3>
                    <p className="text-pinheirao-gray">
                      casaspinheirao@casaspinheirao.com.br
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pinheirao-green/10 p-3 rounded-lg">
                    <Clock size={24} className="text-pinheirao-green" />
                  </div>
                  <div>
                    <h3 className="font-black text-pinheirao-black mb-1">
                      Horário de Atendimento
                    </h3>
                    <p className="text-pinheirao-gray">
                      Segunda a Sexta: 08:30 - 18:00
                      <br />
                      Sábados: 09:00 - 13:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://api.whatsapp.com/send?phone=5541996301028"
                  className="bg-pinheirao-green text-white px-6 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-pinheirao-deep transition-all flex items-center justify-center"
                >
                  <MessageSquare size={18} className="mr-2" />
                  WhatsApp
                </a>
                <a
                  href="tel:4136678015"
                  className="bg-pinheirao-black text-white px-6 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-pinheirao-gray transition-all flex items-center justify-center"
                >
                  <Phone size={18} className="mr-2" />
                  Ligar Agora
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-pinheirao-concrete/10 rounded-xl overflow-hidden h-[400px] lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.8956973714347!2d-49.19417468498366!3d-25.444749983783684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce5e96b8b8a9f%3A0x8e8e8e8e8e8e8e8e!2sAv.%20Jacob%20Macanhan%2C%201369%20-%20Pinhais%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Casas Pinheirão"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Consultants */}
      <section className="py-16 sm:py-20 bg-pinheirao-concrete/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-pinheirao-green mb-4">
              Nossa Equipe
            </h2>
            <h3 className="text-2xl sm:text-3xl font-black text-pinheirao-black">
              Fale com nossos consultores
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <img
                src="https://casaspinheirao.com.br/medias/Realize-o-sonho-da-casa-propria-com-a-Casas-Pinheirao-2.png"
                alt="Alisson"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="font-black text-pinheirao-black">Alisson</h4>
              <p className="text-pinheirao-gray text-sm mb-4">
                Especialista em Projetos
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=5541996301028"
                className="text-pinheirao-green font-bold text-sm hover:underline"
              >
                (41) 99630-1028
              </a>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <img
                src="https://casaspinheirao.com.br/medias/casas-pinheirao-em-pinhais-1.png"
                alt="Denise"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="font-black text-pinheirao-black">Denise</h4>
              <p className="text-pinheirao-gray text-sm mb-4">
                Consultora de Vendas
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=5541996376486"
                className="text-pinheirao-green font-bold text-sm hover:underline"
              >
                (41) 99637-6486
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
