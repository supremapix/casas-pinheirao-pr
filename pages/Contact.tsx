
import React from 'react';
import { Mail, Phone, MessageSquare, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';

export const Contact: React.FC = () => {
  return (
    <div className="pt-20">
      <EnhancedSEO
        title="Contato - Fale Conosco"
        description="Entre em contato com a Casas Pinheirão. Estamos em Pinhais, Curitiba/PR. Telefone: (41) 3667-8015 | WhatsApp: (41) 99630-1028. Atendimento de segunda a sábado."
        canonical="/contato"
        keywords="contato Casas Pinheirão, telefone casas pré-fabricadas Pinhais, WhatsApp Casas Pinheirão, endereço Pinhais, orçamento casa pré-fabricada"
      />
      {/* Page Header */}
      <section className="bg-pinheirao-concrete/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-pinheirao-green mb-6">Fale Conosco</h2>
          <h1 className="text-4xl md:text-5xl font-black text-pinheirao-black mb-4 leading-tight">Estamos prontos para atender você.</h1>
          <p className="text-pinheirao-gray max-w-2xl mx-auto font-medium">
            Tire suas dúvidas, solicite uma visita técnica ou peça um orçamento sem compromisso.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info Column */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-black text-pinheirao-black mb-10 uppercase tracking-tighter">Canais de Atendimento</h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-pinheirao-concrete p-4 rounded-sm text-pinheirao-green mr-6 shadow-sm">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase tracking-widest text-pinheirao-black mb-1">Nosso Endereço</h4>
                      <p className="text-pinheirao-gray font-medium">Av. Jacob Macanhan, 1369 - Pinhais/PR</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-pinheirao-concrete p-4 rounded-sm text-pinheirao-black mr-6 shadow-sm">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase tracking-widest text-pinheirao-black mb-1">Telefone Fixo</h4>
                      <p className="text-pinheirao-gray font-medium">(41) 3667-8015</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-pinheirao-green/10 p-4 rounded-sm text-pinheirao-green mr-6 shadow-sm">
                      <MessageSquare size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase tracking-widest text-pinheirao-green mb-1">WhatsApp</h4>
                      <p className="text-pinheirao-gray font-medium">(41) 99630-1028</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-pinheirao-concrete p-4 rounded-sm text-pinheirao-black mr-6 shadow-sm">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase tracking-widest text-pinheirao-black mb-1">E-mail</h4>
                      <p className="text-pinheirao-gray font-medium break-all">casaspinheirao@casaspinheirao.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-pinheirao-concrete p-4 rounded-sm text-pinheirao-gray mr-6 shadow-sm">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase tracking-widest text-pinheirao-black mb-1">Horário de Funcionamento</h4>
                      <p className="text-pinheirao-gray font-medium">Seg. a Sex. das 08:30 às 18:00</p>
                      <p className="text-pinheirao-gray font-medium">Sábado das 09:00 às 13:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-pinheirao-green mb-6">Siga Nossas Obras</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-pinheirao-black text-white p-5 rounded-sm hover:bg-pinheirao-green transition-all shadow-lg">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="bg-pinheirao-black text-white p-5 rounded-sm hover:bg-pinheirao-green transition-all shadow-lg">
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="bg-white p-10 md:p-14 rounded-sm shadow-2xl border border-gray-50">
              <h2 className="text-2xl font-black text-pinheirao-black mb-10 uppercase tracking-tighter italic">Envie uma Mensagem</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-pinheirao-black mb-3">Seu Nome</label>
                    <input type="text" className="w-full px-5 py-4 bg-pinheirao-concrete/20 border border-gray-100 rounded-sm focus:outline-none focus:border-pinheirao-green transition-all font-medium" placeholder="Ex: João" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-pinheirao-black mb-3">WhatsApp</label>
                    <input type="tel" className="w-full px-5 py-4 bg-pinheirao-concrete/20 border border-gray-100 rounded-sm focus:outline-none focus:border-pinheirao-green transition-all font-medium" placeholder="(41) 99999-9999" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-pinheirao-black mb-3">E-mail</label>
                  <input type="email" className="w-full px-5 py-4 bg-pinheirao-concrete/20 border border-gray-100 rounded-sm focus:outline-none focus:border-pinheirao-green transition-all font-medium" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-pinheirao-black mb-3">Assunto</label>
                  <select className="w-full px-5 py-4 bg-pinheirao-concrete/20 border border-gray-100 rounded-sm focus:outline-none focus:border-pinheirao-green transition-all font-medium appearance-none">
                    <option>Orçamento</option>
                    <option>Dúvidas Técnicas</option>
                    <option>Financeiro</option>
                    <option>Outros</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-pinheirao-black mb-3">Mensagem</label>
                  <textarea rows={5} className="w-full px-5 py-4 bg-pinheirao-concrete/20 border border-gray-100 rounded-sm focus:outline-none focus:border-pinheirao-green transition-all font-medium" placeholder="Como podemos ajudar?"></textarea>
                </div>
                <button className="w-full bg-pinheirao-green text-white font-black text-xs uppercase tracking-widest py-6 rounded-sm hover:bg-pinheirao-deep transition-all shadow-xl active:scale-95">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Visite Nossa Sede Section */}
      <section className="h-[600px] md:h-[700px] relative border-t border-pinheirao-concrete overflow-hidden">
        <div className="absolute inset-0 bg-pinheirao-black/20 flex items-center justify-center">
          {/* Imagem de fundo da sede */}
          <img
            src="/visite-nossa-sede.png"
            alt="Casas Pinheirão - Visite Nossa Sede em Pinhais"
            className="w-full h-full object-cover"
          />
          {/* Overlay para melhor legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-t from-pinheirao-black/90 via-pinheirao-black/40 to-transparent"></div>

          {/* Card de informações */}
          <div className="absolute z-10 bottom-12 sm:bottom-16 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm p-8 sm:p-12 rounded-lg shadow-2xl border border-pinheirao-concrete/20 text-center">
              <div className="bg-gradient-to-br from-pinheirao-green to-pinheirao-deep text-white p-6 rounded-full w-fit mx-auto mb-6 shadow-xl">
                <MapPin size={36} />
              </div>
              <h4 className="font-black text-2xl sm:text-3xl mb-4 uppercase tracking-tight text-pinheirao-black">Visite Nossa Sede</h4>
              <p className="text-pinheirao-gray text-base sm:text-lg mb-3 leading-relaxed font-semibold">
                Av. Jacob Macanhan, 1369
              </p>
              <p className="text-pinheirao-gray/80 text-sm mb-8 font-medium">
                Jardim Claudia, Pinhais - PR, 83321-000
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.google.com/maps/dir//Av.+Jacob+Macanhan,+1369+-+Jardim+Claudia,+Pinhais+-+PR,+83321-000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-pinheirao-green text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-wider hover:bg-pinheirao-deep hover:-translate-y-1 transition-all shadow-lg"
                >
                  <MapPin size={18} />
                  <span>Abrir Google Maps</span>
                </a>
                <a
                  href="tel:4136678015"
                  className="inline-flex items-center justify-center gap-2 bg-pinheirao-black text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-wider hover:bg-pinheirao-green hover:-translate-y-1 transition-all shadow-lg"
                >
                  <Phone size={18} />
                  <span>(41) 3667-8015</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
