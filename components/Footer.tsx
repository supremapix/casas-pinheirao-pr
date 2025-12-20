
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone, MessageSquare, ChevronRight } from 'lucide-react';
import { ConstructionType } from '../types';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-pinheirao-black text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {/* Column 1: Brand & Socials */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <img 
                src="https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/rdj2t1qt_logo-rodape%20%282%29.png" 
                alt="Casas Pinheirão Logo" 
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-pinheirao-gray mb-8 leading-relaxed font-medium text-sm">
              Realizando o sonho da casa própria com qualidade, tradição e o melhor custo-benefício de Curitiba e região há mais de 20 anos.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/casas_pinheirao" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-4 rounded-full hover:bg-pinheirao-green transition-colors text-white">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/casasprefabricadapinheirao" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-4 rounded-full hover:bg-pinheirao-green transition-colors text-white">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Hierarchical Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-pinheirao-green mb-10 underline decoration-2 underline-offset-8 decoration-pinheirao-green/30">Links Rápidos</h3>
            <ul className="space-y-4 text-xs font-bold text-pinheirao-concrete/70 uppercase tracking-widest">
              <li>
                <Link to="/" className="hover:text-pinheirao-green transition-colors flex items-center group">
                  <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" /> Home
                </Link>
              </li>
              <li>
                <Link to="/empresa" className="hover:text-pinheirao-green transition-colors flex items-center group">
                  <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" /> Empresa
                </Link>
              </li>
              <li className="space-y-3">
                <Link to="/projetos" className="hover:text-pinheirao-green transition-colors flex items-center group">
                  <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" /> Projetos
                </Link>
                <ul className="ml-6 space-y-3 text-[10px] text-pinheirao-gray">
                  <li><Link to="/projetos" className="hover:text-white transition-colors flex items-center">• {ConstructionType.WOOD}</Link></li>
                  <li><Link to="/projetos" className="hover:text-white transition-colors flex items-center">• {ConstructionType.MASONRY}</Link></li>
                  <li><Link to="/projetos" className="hover:text-white transition-colors flex items-center">• {ConstructionType.SOBRADO}</Link></li>
                  <li><Link to="/projetos" className="hover:text-white transition-colors flex items-center">• {ConstructionType.TRIPLEX}</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/envie-seu-projeto" className="hover:text-pinheirao-green transition-colors flex items-center group">
                  <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" /> Envie seu Projeto
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-pinheirao-green transition-colors flex items-center group">
                  <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" /> Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-pinheirao-green mb-10 underline decoration-2 underline-offset-8 decoration-pinheirao-green/30">Contato</h3>
            <ul className="space-y-6 text-xs text-pinheirao-concrete/80 uppercase tracking-widest font-bold">
              <li className="flex items-start">
                <MapPin size={18} className="mr-4 text-pinheirao-green shrink-0" />
                <span className="leading-relaxed">Av. Jacob Macanhan, 1369<br />Pinhais/PR</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-4 text-pinheirao-green shrink-0" />
                <span>(41) 3667-8015</span>
              </li>
              <li className="flex items-center">
                <MessageSquare size={18} className="mr-4 text-pinheirao-green shrink-0" />
                <span>(41) 99630-1028</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-4 text-pinheirao-green shrink-0" />
                <span className="break-all lowercase tracking-normal font-medium">casaspinheirao@casaspinheirao.com.br</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Schedule */}
          <div className="lg:col-span-1">
             <h3 className="text-xs font-black uppercase tracking-[0.3em] text-pinheirao-green mb-10 underline decoration-2 underline-offset-8 decoration-pinheirao-green/30">Atendimento</h3>
             <div className="space-y-4 text-xs font-bold text-pinheirao-concrete/80 uppercase tracking-widest">
               <p className="flex justify-between border-b border-white/5 pb-2">
                 <span>Seg a Sex:</span>
                 <span className="text-white">08:30 - 18:00</span>
               </p>
               <p className="flex justify-between border-b border-white/5 pb-2">
                 <span>Sábados:</span>
                 <span className="text-white">09:00 - 13:00</span>
               </p>
             </div>
             <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-sm">
               <p className="text-[10px] font-black uppercase tracking-widest text-pinheirao-green mb-2">Presença em Todo PR</p>
               <p className="text-[11px] text-pinheirao-concrete/60 font-medium">Pinhais, Curitiba, Região Metropolitana e Litoral do Paraná.</p>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-pinheirao-gray border-t border-white/5 pt-12 gap-4">
          <p className="mb-4 md:mb-0 text-center md:text-left">
            © 2024 Casas Pinheirão. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
            <span className="text-white/20 italic">Preços sujeitos a alteração</span>
            <Link to="#" className="hover:text-white transition-colors">Política de Privacidade</Link>
          </div>
          <a
            href="https://supremasite.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-pinheirao-green transition-colors group"
          >
            <span className="text-white/70 normal-case tracking-normal font-medium">Desenvolvido</span>
            <span className="text-red-500 animate-heartbeat inline-block">❤️</span>
            <span className="text-white/70 normal-case tracking-normal font-medium">por</span>
            <span className="text-white group-hover:text-pinheirao-green transition-colors font-bold">Suprema Sites Express</span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          10%, 30% { transform: scale(1.1); }
          20% { transform: scale(0.9); }
        }

        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
          display: inline-block;
        }
      `}</style>
    </footer>
  );
};
