import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone, MessageSquare, ChevronRight, Heart, ShieldCheck, Clock } from 'lucide-react';

export function SupremaCredit() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-5 border-t border-white/10 flex justify-center items-center">
      <div className="bg-[#0B0D10]/85 border border-white/15 hover:border-pinheirao-green/50 rounded-full px-6 py-2.5 shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]">
        <p className="text-gray-200 hover:text-white transition-colors duration-200 text-xs sm:text-sm font-bold flex flex-wrap items-center justify-center gap-2">
          <span className="opacity-90">Desenvolvido com</span> 
          
          {/* Coração pulsante com efeito de sombra */}
          <Heart 
            size={14} 
            className="text-red-500 fill-red-500 animate-[pulse_1.5s_infinite] shrink-0 filter drop-shadow-[0_0_3px_rgba(239,68,68,0.7)]" 
          /> 
          
          <span className="opacity-90">por</span>
          
          {/* Link para o site da Suprema */}
          <a 
            id="developer-suprema-link"
            href="https://supremasite.com.br" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-yellow-400 hover:text-yellow-300 transition-all font-black inline-flex items-center gap-2 cursor-pointer border-b border-dashed border-yellow-400/50 hover:border-yellow-300"
          >
            Suprema Sites Express
            
            {/* Logotipo oficial com efeito de iluminação */}
            <img 
              src="https://img.supremamidia.com/suprema-img.png" 
              alt="Suprema" 
              className="h-[18px] w-auto inline select-none shrink-0 filter drop-shadow-[0_0_2px_rgba(250,204,21,0.5)] transition-transform duration-300 hover:scale-110" 
              referrerPolicy="no-referrer"
            />
          </a>
        </p>
      </div>
    </div>
  );
}

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0A0C0E] text-white pt-20 pb-10 border-t-2 border-pinheirao-green overflow-hidden">
      {/* Background Container */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Mobile Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="sm:hidden absolute inset-0 w-full h-full object-cover object-center scale-105 opacity-55 filter brightness-90 contrast-105"
          src="https://img.supremasite.com.br/pinheirao/casa.mp4"
        />

        {/* Desktop Background Image */}
        <img
          src="https://img.supremasite.com.br/pinheirao/casas-pinhais-pr.jpg"
          alt="Casas Pinheirão - Sede e Showroom em Pinhais PR"
          className="hidden sm:block w-full h-full object-cover object-center scale-105 opacity-55 filter brightness-90 contrast-105 transition-opacity duration-700"
          loading="lazy"
        />
        {/* Balanced Photographic Tint - Enhances image visibility while preserving crystal-clear typography */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0C0E]/90 via-[#0C0E12]/80 to-[#0A0C0E]/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          
          {/* Column 1: Brand & Identity (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block">
              <img 
                src="https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/rdj2t1qt_logo-rodape%20%282%29.png" 
                alt="Casas Pinheirão" 
                className="h-16 sm:h-20 w-auto object-contain filter drop-shadow-md"
              />
            </Link>
            
            <p className="text-gray-200 text-sm leading-relaxed font-normal max-w-sm">
              Tradição de mais de 20 anos construindo com excelência em madeira nobre e alvenaria sob medida. A realização do seu sonho com segurança e registro CREA-PR.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/casas_pinheirao"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Oficial Casas Pinheirão"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-pinheirao-green text-white border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com/casasprefabricadapinheirao"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Oficial Casas Pinheirão"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-pinheirao-green text-white border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5541996301028"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Casas Pinheirão"
                className="w-10 h-10 rounded-full bg-pinheirao-green hover:bg-pinheirao-deep text-white border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-pinheirao-green flex items-center gap-2">
              <span>Navegação</span>
            </h3>
            
            <ul className="space-y-2.5 text-xs font-bold uppercase tracking-wider text-gray-200">
              <li>
                <Link to="/" className="hover:text-pinheirao-green transition-colors flex items-center group py-0.5">
                  <ChevronRight size={14} className="mr-1.5 text-pinheirao-green group-hover:translate-x-1 transition-transform" />
                  <span>Início</span>
                </Link>
              </li>
              <li>
                <Link to="/empresa" className="hover:text-pinheirao-green transition-colors flex items-center group py-0.5">
                  <ChevronRight size={14} className="mr-1.5 text-pinheirao-green group-hover:translate-x-1 transition-transform" />
                  <span>A Empresa</span>
                </Link>
              </li>
              <li>
                <Link to="/projetos" className="hover:text-pinheirao-green transition-colors flex items-center group py-0.5">
                  <ChevronRight size={14} className="mr-1.5 text-pinheirao-green group-hover:translate-x-1 transition-transform" />
                  <span>Modelos de Casas</span>
                </Link>
              </li>
              <li>
                <Link to="/envie-seu-projeto" className="hover:text-pinheirao-green transition-colors flex items-center group py-0.5">
                  <ChevronRight size={14} className="mr-1.5 text-pinheirao-green group-hover:translate-x-1 transition-transform" />
                  <span>Envie sua Planta</span>
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-pinheirao-green transition-colors flex items-center group py-0.5">
                  <ChevronRight size={14} className="mr-1.5 text-pinheirao-green group-hover:translate-x-1 transition-transform" />
                  <span>Showroom / Contato</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-pinheirao-green">
              Atendimento Direto
            </h3>

            <div className="space-y-3.5 text-xs text-gray-200">
              <a
                href="https://www.google.com/maps/dir//Av.+Jacob+Macanhan,+1369+-+Jardim+Claudia,+Pinhais+-+PR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-2.5 rounded bg-black/40 hover:bg-black/60 border border-white/10 transition-colors group"
              >
                <MapPin size={18} className="text-pinheirao-green shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-snug text-white font-medium">
                  Av. Jacob Macanhan, 1369<br />Jardim Cláudia • Pinhais/PR
                </span>
              </a>

              <a
                href="tel:4136678015"
                className="flex items-center gap-3 p-2.5 rounded bg-black/40 hover:bg-black/60 border border-white/10 transition-colors group"
              >
                <Phone size={18} className="text-pinheirao-green shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-white font-bold text-sm tracking-wide">(41) 3667-8015</span>
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=5541996301028&text=Olá! Gostaria de falar sobre orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded bg-black/40 hover:bg-black/60 border border-white/10 transition-colors group"
              >
                <MessageSquare size={18} className="text-pinheirao-green shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-white font-bold text-sm tracking-wide">(41) 99630-1028</span>
              </a>

              <a
                href="mailto:casaspinheirao@casaspinheirao.com.br"
                className="flex items-center gap-3 p-2.5 rounded bg-black/40 hover:bg-black/60 border border-white/10 transition-colors group"
              >
                <Mail size={16} className="text-pinheirao-green shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 hover:text-white lowercase text-[11px] font-medium break-all">
                  casaspinheirao@casaspinheirao.com.br
                </span>
              </a>
            </div>
          </div>

          {/* Column 4: Schedule & CREA Authority Card (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-pinheirao-green flex items-center gap-2">
              <Clock size={14} className="text-pinheirao-green" />
              <span>Horários da Sede</span>
            </h3>

            <div className="p-4 rounded bg-black/50 border border-white/10 space-y-2 text-xs">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-gray-300 font-medium">Segunda a Sexta:</span>
                <span className="text-white font-bold">08:30 às 18:00</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-gray-300 font-medium">Sábados:</span>
                <span className="text-white font-bold">09:00 às 13:00</span>
              </div>
            </div>

            {/* CREA-PR Authority Badge */}
            <div className="p-3.5 rounded bg-gradient-to-r from-pinheirao-green/20 via-black/60 to-black/60 border border-pinheirao-green/40 flex items-center gap-3 shadow-sm">
              <div className="p-1.5 bg-white rounded shrink-0">
                <ShieldCheck size={20} className="text-pinheirao-green" />
              </div>
              <div>
                <p className="text-[11px] font-black uppercase tracking-wider text-white">
                  CREA-PR Registrada
                </p>
                <p className="text-[10px] text-gray-300 font-medium leading-tight">
                  Construção com Responsabilidade Técnica
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Legal & Privacy Line */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-gray-300">
          <p className="text-center sm:text-left font-medium">
            © {new Date().getFullYear()} <span className="text-white font-bold">Casas Pinheirão</span> • Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <Link to="/politica-de-privacidade" className="hover:text-pinheirao-green transition-colors font-medium">
              Política de Privacidade
            </Link>
          </div>
        </div>

        {/* Global SupremaCredit Badge */}
        <SupremaCredit />

      </div>
    </footer>
  );
};
