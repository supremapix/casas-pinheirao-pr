
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Hero image from uploaded assets
  const heroImage = "https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/u9zireyc_hero-image.png";

  return (
    <section className="relative h-screen min-h-[700px] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-pinheirao-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={heroImage}
            alt="Casa Pinheirão - Especialista em Casas Pré-Fabricadas"
            onLoad={() => setIsLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 animate-slow-zoom ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="eager"
          />
        </div>
        
        {/* Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-pinheirao-black/95 via-pinheirao-black/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-3 bg-pinheirao-green/20 backdrop-blur-md border border-pinheirao-green/30 px-4 py-2 mb-8 rounded-sm animate-fade-in-down">
            <ShieldCheck size={16} className="text-pinheirao-green" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Qualidade e tradição desde 2004</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black leading-[1.1] mb-8 uppercase tracking-tighter italic animate-fade-in">
            Sua casa <br />
            <span className="text-pinheirao-green">em tempo recorde.</span>
          </h1>
          <p className="text-lg md:text-xl text-pinheirao-concrete/80 mb-12 leading-relaxed font-medium max-w-xl animate-fade-in-up">
            Referência em casas de madeira nobre e alvenaria em Curitiba e Região. Projetos personalizados que cabem no seu bolso e realizam seu sonho.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up">
            <Link
              to="/envie-seu-projeto"
              className="bg-pinheirao-green hover:bg-pinheirao-deep text-white px-12 py-5 rounded-sm font-black text-xs uppercase tracking-widest transition-all shadow-2xl hover:-translate-y-1 flex items-center justify-center"
            >
              Solicitar Orçamento
              <ArrowRight size={18} className="ml-3" />
            </Link>
            <Link
              to="/projetos"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-sm font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center"
            >
              Ver Nossos Modelos
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            {[
              'Madeira de Lei',
              'Entrega Ágil',
              'Projetos Autorais',
              'Custo-Benefício'
            ].map((feature, i) => (
              <div key={i} className="flex items-center space-x-3">
                <CheckCircle size={14} className="text-pinheirao-green shrink-0" />
                <span className="text-[9px] font-black uppercase tracking-widest">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-40">
        <div className="w-px h-12 bg-white mb-2"></div>
        <span className="text-[8px] font-black uppercase tracking-[0.3em] vertical-text">Role</span>
      </div>
    </section>
  );
};
