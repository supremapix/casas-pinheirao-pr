
import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, MapPin, Clock, Facebook, Instagram, Send } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';

export const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    subject: 'Orçamento',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <div className="pt-20">
      <EnhancedSEO
        title="Contato - Fale Conosco"
        description="Entre em contato com a Casas Pinheirão. Estamos em Pinhais, Curitiba/PR. Telefone: (41) 3667-8015 | WhatsApp: (41) 99630-1028. Atendimento de segunda a sábado."
        canonical="/contato"
        keywords="contato Casas Pinheirão, telefone casas pré-fabricadas Pinhais, WhatsApp Casas Pinheirão, endereço Pinhais, orçamento casa pré-fabricada"
      />
      {/* Page Header Elegante com Imagem de Fundo em Destaque */}
      <section className="relative bg-pinheirao-black py-20 md:py-28 border-b border-white/10 overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="https://img.supremasite.com.br/pinheirao/casas-pinhais-pr.jpg"
            alt="Casas Pinheirão - Atendimento e Showroom em Pinhais PR"
            className="w-full h-full object-cover object-center scale-105 opacity-60 filter brightness-95 contrast-110"
            loading="eager"
          />
          {/* Degradê elegante para destacar a imagem com máxima legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-r from-pinheirao-black/95 via-pinheirao-black/75 to-pinheirao-black/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-pinheirao-black via-transparent to-pinheirao-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-pinheirao-green/50 backdrop-blur-md shadow-lg mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-pinheirao-green">
              Fale Conosco
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight uppercase tracking-tight drop-shadow-md">
            Estamos prontos para <span className="text-pinheirao-green">atender você</span>
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto font-medium text-base sm:text-lg leading-relaxed drop-shadow">
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
                      <a href="https://www.google.com/maps/dir//Av.+Jacob+Macanhan,+1369+-+Jardim+Claudia,+Pinhais+-+PR,+83321-000" target="_blank" rel="noopener" className="text-pinheirao-gray font-medium hover:text-pinheirao-green transition-colors">Av. Jacob Macanhan, 1369 - Pinhais/PR</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-pinheirao-concrete p-4 rounded-sm text-pinheirao-black mr-6 shadow-sm">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase tracking-widest text-pinheirao-black mb-1">Telefone Fixo</h4>
                      <a href="tel:4136678015" className="text-pinheirao-gray font-medium hover:text-pinheirao-green transition-colors">(41) 3667-8015</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-pinheirao-green/10 p-4 rounded-sm text-pinheirao-green mr-6 shadow-sm">
                      <MessageSquare size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase tracking-widest text-pinheirao-green mb-1">WhatsApp</h4>
                      <a href="https://api.whatsapp.com/send?phone=5541996301028" target="_blank" rel="noopener" className="text-pinheirao-gray font-medium hover:text-pinheirao-green transition-colors">(41) 99630-1028</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-pinheirao-concrete p-4 rounded-sm text-pinheirao-black mr-6 shadow-sm">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase tracking-widest text-pinheirao-black mb-1">E-mail</h4>
                      <a href="mailto:casaspinheirao@casaspinheirao.com.br" className="text-pinheirao-gray font-medium break-all hover:text-pinheirao-green transition-colors">casaspinheirao@casaspinheirao.com.br</a>
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
                  <a href="https://facebook.com/casasprefabricadapinheirao" target="_blank" rel="noopener noreferrer" className="bg-pinheirao-black text-white p-5 rounded-sm hover:bg-pinheirao-green transition-all shadow-lg">
                    <Facebook size={24} />
                  </a>
                  <a href="https://instagram.com/casas_pinheirao" target="_blank" rel="noopener noreferrer" className="bg-pinheirao-black text-white p-5 rounded-sm hover:bg-pinheirao-green transition-all shadow-lg">
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="bg-white p-10 md:p-14 rounded-sm shadow-2xl border border-gray-50">
              <h2 className="text-2xl font-black text-pinheirao-black mb-10 uppercase tracking-tighter italic">Envie uma Mensagem</h2>
              {success ? (
                <div className="bg-pinheirao-concrete/10 border border-pinheirao-green/30 p-8 rounded-sm text-center">
                  <div className="bg-pinheirao-green text-white p-4 rounded-full w-fit mx-auto mb-4">
                    <Send size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-pinheirao-black mb-3 uppercase">Mensagem Enviada!</h3>
                  <p className="text-pinheirao-gray mb-6 text-sm font-medium">Recebemos sua mensagem. Entraremos em contato em breve.</p>
                  <button 
                    onClick={() => setSuccess(false)}
                    className="bg-pinheirao-green text-white px-8 py-3 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-pinheirao-deep transition-all"
                  >
                    Enviar Nova Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-pinheirao-black mb-3">Seu Nome *</label>
                      <input required name="name" type="text" value={formData.name} onChange={handleInputChange} className="w-full px-5 py-4 bg-pinheirao-concrete/20 border border-gray-100 rounded-sm focus:outline-none focus:border-pinheirao-green transition-all font-medium" placeholder="Ex: João" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-pinheirao-black mb-3">WhatsApp *</label>
                      <input required name="whatsapp" type="tel" value={formData.whatsapp} onChange={handleInputChange} className="w-full px-5 py-4 bg-pinheirao-concrete/20 border border-gray-100 rounded-sm focus:outline-none focus:border-pinheirao-green transition-all font-medium" placeholder="(41) 99999-9999" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-pinheirao-black mb-3">E-mail *</label>
                    <input required name="email" type="email" value={formData.email} onChange={handleInputChange} className="w-full px-5 py-4 bg-pinheirao-concrete/20 border border-gray-100 rounded-sm focus:outline-none focus:border-pinheirao-green transition-all font-medium" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-pinheirao-black mb-3">Assunto</label>
                    <select name="subject" value={formData.subject} onChange={handleInputChange} className="w-full px-5 py-4 bg-pinheirao-concrete/20 border border-gray-100 rounded-sm focus:outline-none focus:border-pinheirao-green transition-all font-medium appearance-none">
                      <option>Orçamento</option>
                      <option>Dúvidas Técnicas</option>
                      <option>Financeiro</option>
                      <option>Outros</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-pinheirao-black mb-3">Mensagem *</label>
                    <textarea required name="message" rows={5} value={formData.message} onChange={handleInputChange} className="w-full px-5 py-4 bg-pinheirao-concrete/20 border border-gray-100 rounded-sm focus:outline-none focus:border-pinheirao-green transition-all font-medium" placeholder="Como podemos ajudar?"></textarea>
                  </div>
                  <div className="flex flex-col">
                    <button type="submit" disabled={loading} className="w-full bg-pinheirao-green text-white font-bold text-xs uppercase tracking-wider py-4 rounded-sm hover:bg-pinheirao-deep transition-all shadow-md disabled:opacity-50 flex items-center justify-center">
                      {loading ? 'Enviando...' : 'Enviar'}
                    </button>
                    <span className="text-[10px] text-pinheirao-gray mt-1 text-center font-medium">Retorno rápido em horário comercial</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Visite Nossa Sede Section */}
      <section className="h-[600px] md:h-[700px] relative border-t border-pinheirao-concrete overflow-hidden">
        <div className="absolute inset-0 bg-pinheirao-black/20 flex items-center justify-center">
          {/* Imagem de fundo da sede */}
          <img
            src="https://img.supremasite.com.br/pinheirao/construa-casa.jpg"
            alt="Casas Pinheirão - Visite Nossa Sede em Pinhais"
            className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
            loading="lazy"
          />
          {/* Overlay para melhor legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-t from-pinheirao-black/90 via-pinheirao-black/40 to-pinheirao-black/30"></div>

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
