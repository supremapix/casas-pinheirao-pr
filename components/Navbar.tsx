
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, MapPin, Clock } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Empresa', path: '/empresa' },
    { name: 'Projetos', path: '/projetos' },
    { name: 'Envie seu Projeto', path: '/envie-seu-projeto' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img
              src="/casas-pinheirao-logo-transparente.png"
              alt="Casas Pinheirão"
              className="h-10 md:h-12 lg:h-14 w-auto object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-pinheirao-green ${
                  location.pathname === link.path ? 'text-pinheirao-green' : 'text-pinheirao-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <a href="tel:4136678015" className="flex items-center text-sm font-bold text-pinheirao-black hover:text-pinheirao-green">
              <Phone size={16} className="mr-2 text-pinheirao-green" />
              (41) 3667-8015
            </a>
            <a 
              href="https://api.whatsapp.com/send?phone=5541996301028" 
              className="bg-pinheirao-green text-white px-5 py-2.5 rounded-sm flex items-center text-xs font-black uppercase tracking-widest hover:bg-pinheirao-deep transition-all shadow-md"
            >
              <MessageSquare size={16} className="mr-2" />
              WhatsApp
            </a>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-pinheirao-black p-2" aria-label="Menu">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`lg:hidden transition-all duration-300 overflow-hidden bg-white shadow-2xl ${isOpen ? 'max-h-[85vh] overflow-y-auto border-t' : 'max-h-0'}`}>
        <div className="px-5 pt-4 pb-8 space-y-3">
          <div className="text-xs font-black uppercase tracking-widest text-pinheirao-green mb-2">Menu Principal (Escolha)</div>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-md ${
                location.pathname === link.path ? 'bg-pinheirao-green/10 text-pinheirao-green' : 'text-pinheirao-black bg-gray-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="pt-4 border-t border-gray-200 space-y-3">
            <div className="text-xs font-black uppercase tracking-widest text-pinheirao-green">Atendimento Direto & Decisão</div>
            <a href="tel:4136678015" className="flex items-center justify-center py-3.5 text-sm bg-pinheirao-concrete rounded-md text-pinheirao-black font-black shadow-sm">
              <Phone size={18} className="mr-2 text-pinheirao-green" /> Ligar: (41) 3667-8015
            </a>
            <a href="https://api.whatsapp.com/send?phone=5541996301028" target="_blank" rel="noopener" className="flex items-center justify-center py-3.5 text-sm bg-pinheirao-green text-white rounded-md font-black shadow-md">
              <MessageSquare size={18} className="mr-2" /> Chamar no WhatsApp
            </a>

            <div className="bg-gray-50 p-4 rounded-md space-y-2 text-xs text-pinheirao-black font-medium border border-gray-100">
              <p className="font-bold flex items-center text-pinheirao-green">
                <MapPin size={16} className="mr-1.5 shrink-0" /> Sede em Pinhais / PR:
              </p>
              <a href="https://www.google.com/maps/dir//Av.+Jacob+Macanhan,+1369+-+Jardim+Claudia,+Pinhais+-+PR,+83321-000" target="_blank" rel="noopener" className="block text-pinheirao-gray underline hover:text-pinheirao-green font-bold">
                Av. Jacob Macanhan, 1369 - Pinhais/PR
              </a>
              <p className="font-bold flex items-center text-pinheirao-green pt-1">
                <Clock size={16} className="mr-1.5 shrink-0" /> Horário de Atendimento:
              </p>
              <p className="text-pinheirao-gray">Seg. a Sex. 08:30 às 18:00 | Sáb. 09:00 às 13:00</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
