import React from 'react';
import { CheckCircle, Home, Tag, MessageSquare, Phone } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';

const Promotions: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <EnhancedSEO 
        title="Promoção Especial - Casa 45m²"
        description="🏡 CASA 45m² EM PROMOÇÃO ESPECIAL! Por apenas R$ 32.000. Realize o sonho da casa própria agora."
        canonical="/promocoes"
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-[400px] lg:h-auto overflow-hidden group">
              <img 
                src="https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/WhatsApp_Image_2026-02-03_at_14.58.57_1770143273519.jpeg"
                alt="Promoção Casa 45m²"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-6 left-6">
                <div className="bg-pinheirao-green text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-lg animate-pulse">
                  Oferta Limitada
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white relative">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="text-pinheirao-green" size={24} />
                  <span className="text-pinheirao-green font-bold text-sm tracking-widest uppercase">PROMOÇÃO EXCLUSIVA</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-black text-pinheirao-black mb-6 leading-tight uppercase">
                  Casa 45m² <br />
                  <span className="text-pinheirao-green">Prática e Confortável</span>
                </h1>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Uma opção acessível para sair do aluguel ou investir no seu próprio imóvel. Pensada para oferecer praticidade e o melhor custo-benefício do mercado.
                </p>
              </div>

              <div className="bg-pinheirao-concrete/10 rounded-2xl p-6 mb-10 border-l-4 border-pinheirao-green">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-gray-500 text-lg font-bold">Por apenas</span>
                  <span className="text-4xl sm:text-5xl font-black text-pinheirao-black">R$ 32.000</span>
                </div>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-tighter">* Valor promocional válido até 28/02/26</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  'Telha 4mm – resistência',
                  'Vitrôs em ferro – segurança',
                  'Projeto eficiente',
                  'Ideal para terrenos pequenos'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="text-pinheirao-green" size={20} />
                    <span className="font-bold text-pinheirao-black text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <a 
                href="https://wa.me/554136678015?text=Olá! Gostaria de saber mais sobre a promoção da Casa de 45m²"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-pinheirao-black text-white px-10 py-5 rounded-full font-black text-lg hover:bg-pinheirao-green transition-all shadow-xl hover:-translate-y-1"
              >
                <Phone size={24} />
                <span>APROVEITAR AGORA</span>
              </a>
              
              <p className="mt-6 text-center text-xs text-gray-400 font-bold uppercase">
                Válido para construção até 15km da nossa unidade
              </p>
            </div>
          </div>
        </div>

        {/* Floating elements background */}
        <div className="absolute -z-10 top-0 right-0 w-96 h-96 bg-pinheirao-green/5 blur-3xl rounded-full"></div>
        <div className="absolute -z-10 bottom-0 left-0 w-96 h-96 bg-pinheirao-deep/5 blur-3xl rounded-full"></div>
      </section>
    </div>
  );
};

export default Promotions;
