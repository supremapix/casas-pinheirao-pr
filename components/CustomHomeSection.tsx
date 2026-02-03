import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Ruler, MapPin, Users, CheckCircle, Sparkles, ArrowRight, Building2, HardHat, ShieldCheck, CreditCard, X, Maximize2 } from 'lucide-react';

export const CustomHomeSection: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(0);

  const projectImages = [
    {
      url: '/casas-pinheirao-1.jpg',
      label: 'Casa dos Sonhos sem Sair do Orçamento',
      description: 'Realize o sonho da casa própria com projetos completos e personalizados. Na Casas Pinheirão, você constrói sem comprometer seu orçamento, com qualidade garantida e acabamentos premium. Transforme sua família em proprietários do lar perfeito!'
    },
    {
      url: '/casas-pinheirao-2.jpg',
      label: 'Pronta Entrega ou Sob Medida',
      description: 'Você escolhe! Precisa de agilidade? Temos casas prontas para entrega imediata. Quer algo único? Desenvolvemos projetos totalmente personalizados sob medida para suas necessidades. Flexibilidade total para realizar seu sonho da forma que você preferir!'
    },
    {
      url: '/casas-pinheirao-3.jpg',
      label: 'Visualize Antes de Construir',
      description: 'Veja sua casa ganhar vida em projetos 3D ultra-realistas antes mesmo de começar a construção. Tecnologia de ponta para você visualizar cada detalhe, fazer ajustes e ter certeza absoluta de que está construindo exatamente o que sempre sonhou!'
    },
    {
      url: '/casas-pinheirao-4.jpg',
      label: 'Condições Especiais de Pagamento',
      description: 'Facilitamos a realização do seu sonho com condições de pagamento especiais e personalizadas. Parcelamento flexível, financiamento aprovado e opções que cabem no seu bolso. Construa agora e pague de forma inteligente!'
    },
    {
      url: '/casas-pinheirao-5.jpg',
      label: 'Do Terreno Vazio à Casa dos Sonhos',
      description: 'Acompanhe a transformação completa! Do terreno vazio até a entrega das chaves da sua casa pronta. Gestão total da obra, qualidade em cada etapa e o resultado que você sempre sonhou. Sua nova vida começa aqui!'
    }
  ];

  const benefits = [
    { icon: <CheckCircle size={20} />, text: 'Ajuste milimétrico de cada ambiente' },
    { icon: <CheckCircle size={20} />, text: 'Adequação perfeita ao seu terreno' },
    { icon: <CheckCircle size={20} />, text: 'Escolha de acabamentos premium' },
    { icon: <CheckCircle size={20} />, text: 'Acompanhamento técnico personalizado' }
  ];

  const miniFeatures = [
    { label: 'Projeto 3D', icon: <Building2 size={20} /> },
    { label: 'Acompanhamento', icon: <HardHat size={20} /> },
    { label: 'Garantia', icon: <ShieldCheck size={20} /> },
    { label: 'Financiamento', icon: <CreditCard size={20} /> }
  ];

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#2c3e50] via-[#1a1a1a] to-[#2c3e50] overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        backgroundSize: '60px 60px'
      }}></div>

      <div className="absolute top-0 left-0 w-96 h-96 bg-pinheirao-green/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pinheirao-deep/10 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="space-y-6 lg:space-y-8">
            <div className="inline-flex items-center gap-2 bg-pinheirao-green/10 border border-pinheirao-green/30 px-4 py-2 rounded-full backdrop-blur-sm">
              <Sparkles size={18} className="text-pinheirao-green" />
              <span className="text-pinheirao-green font-bold text-sm tracking-wider uppercase">
                PERSONALIZAÇÃO SEM LIMITES
              </span>
            </div>

            <div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-[1.05] tracking-tight">
                <span className="bg-gradient-to-r from-pinheirao-green via-[#16a085] to-pinheirao-green bg-clip-text text-transparent animate-gradient">
                  SEU NOVO LAR
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-pinheirao-green to-pinheirao-deep animate-expand"></div>
            </div>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Transforme sua visão em realidade com projetos completamente personalizados.
              Cada detalhe, cada medida, cada acabamento pensado para criar o lar perfeito para você e sua família.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-3 text-white group">
                  <span className="flex-shrink-0 text-pinheirao-green group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </span>
                  <span className="text-base md:text-lg">{benefit.text}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-4 gap-4 pt-4">
              {miniFeatures.map((feature, idx) => (
                <div key={idx} className="text-center group">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <p className="text-xs text-gray-400 font-semibold">{feature.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/envie-seu-projeto"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-pinheirao-green via-[#16a085] to-pinheirao-green text-white font-bold text-base uppercase tracking-wider rounded-lg shadow-[0_8px_25px_rgba(26,188,156,0.4)] hover:shadow-[0_12px_35px_rgba(26,188,156,0.5)] hover:-translate-y-1 transition-all overflow-hidden"
              >
                <Ruler size={20} />
                <span className="relative z-10">Personalizar Este Modelo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              </Link>

              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-base uppercase tracking-wider rounded-lg hover:bg-white/10 hover:border-pinheirao-green hover:text-pinheirao-green hover:-translate-y-1 transition-all"
              >
                <MapPin size={20} />
                <span>Visitar Showroom</span>
              </Link>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-3">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-pinheirao-green to-pinheirao-deep flex items-center justify-center text-white font-bold text-sm border-2 border-[#2c3e50]"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-400">
                <p className="font-semibold text-white">
                  Junte-se a mais de 500 famílias
                </p>
                <p className="text-xs">
                  que realizaram o sonho da casa própria
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-pinheirao-green/5 border border-pinheirao-green/20 px-4 py-2 rounded-lg">
              <div className="w-2 h-2 bg-pinheirao-green rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">
                <span className="text-pinheirao-green font-bold">15 famílias</span> personalizando agora
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pinheirao-green/20 to-pinheirao-deep/20 blur-3xl scale-110"></div>

            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4 group cursor-pointer" onClick={() => { setLightboxImage(activeImage); setLightboxOpen(true); }}>
                {projectImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img.url}
                    alt={img.label}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                      idx === activeImage ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                  />
                ))}
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-white font-bold text-sm">
                    {projectImages[activeImage].label}
                  </p>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                  <Maximize2 size={48} className="text-white opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100" />
                </div>
              </div>

              <div className="flex gap-2 justify-center">
                {projectImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === activeImage
                        ? 'bg-pinheirao-green w-8'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Ver imagem ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#f39c12] to-[#e67e22] text-white px-6 py-3 rounded-full shadow-xl rotate-12 animate-bounce-slow">
              <div className="text-center">
                <p className="text-xs font-bold uppercase">Mais de</p>
                <p className="text-2xl font-black">500</p>
                <p className="text-xs font-bold uppercase">Projetos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setLightboxOpen(false)}>
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-pinheirao-green transition-colors z-10"
            aria-label="Fechar"
          >
            <X size={32} />
          </button>

          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img
                src={projectImages[lightboxImage].url}
                alt={projectImages[lightboxImage].label}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {projectImages[lightboxImage].label}
                </h3>
                <p className="text-gray-200 text-base leading-relaxed">
                  {projectImages[lightboxImage].description}
                </p>
              </div>

              {lightboxImage > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); setLightboxImage(lightboxImage - 1); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all"
                  aria-label="Imagem anterior"
                >
                  <ArrowRight size={24} className="rotate-180" />
                </button>
              )}

              {lightboxImage < projectImages.length - 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); setLightboxImage(lightboxImage + 1); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all"
                  aria-label="Próxima imagem"
                >
                  <ArrowRight size={24} />
                </button>
              )}
            </div>

            <div className="flex gap-2 justify-center mt-4">
              {projectImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setLightboxImage(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === lightboxImage
                      ? 'bg-pinheirao-green w-8'
                      : 'bg-gray-500 hover:bg-gray-400'
                  }`}
                  aria-label={`Ver imagem ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }
        @keyframes expand {
          0% { width: 0; }
          100% { width: 80px; }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-10px) rotate(12deg); }
        }
        .animate-float { animation: float 10s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 12s ease-in-out infinite; }
        .animate-expand { animation: expand 1s ease-out forwards; }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
      `}</style>
    </section>
  );
};
