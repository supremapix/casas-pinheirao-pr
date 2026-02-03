
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

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
    { name: 'Promoções', path: '/promocoes', highlight: true },
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
                className={`text-xs font-bold uppercase tracking-widest transition-all relative group ${
                  location.pathname === link.path ? 'text-pinheirao-green' : 'text-pinheirao-black hover:text-pinheirao-green'
                } ${link.highlight ? 'bg-pinheirao-green text-white px-4 py-2 rounded-full animate-pulse-slow shadow-lg hover:scale-105' : ''}`}
              >
                {link.name}
                {!link.highlight && (
                  <span className={`absolute bottom-[-4px] left-0 w-full h-0.5 bg-pinheirao-green transform transition-transform duration-300 ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                )}
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
            <button onClick={() => setIsOpen(!isOpen)} className="text-pinheirao-black">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
          <style>{`
            @keyframes pulse-slow {
              0%, 100% { opacity: 1; transform: scale(1); }
              50% { opacity: 0.8; transform: scale(1.05); }
            }
            .animate-pulse-slow {
              animation: pulse-slow 2s ease-in-out infinite;
            }
          `}</style>
        </div>
      </div>

      <div className={`lg:hidden transition-all duration-300 overflow-hidden bg-white ${isOpen ? 'max-h-screen border-t' : 'max-h-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-3 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider ${
                location.pathname === link.path ? 'text-pinheirao-green' : 'text-pinheirao-black border-b border-gray-100'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 grid grid-cols-1 gap-3">
            <a href="tel:4136678015" className="flex items-center justify-center py-3 text-sm bg-pinheirao-concrete rounded text-pinheirao-black font-bold">
              <Phone size={18} className="mr-2" /> (41) 3667-8015
            </a>
            <a href="https://api.whatsapp.com/send?phone=5541996301028" className="flex items-center justify-center py-3 text-sm bg-pinheirao-green text-white rounded font-bold">
              <MessageSquare size={18} className="mr-2" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
