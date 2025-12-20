
import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5541996301028&text=Olá! Gostaria de fazer um orçamento."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 flex items-center group overflow-hidden"
    >
      <div className="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-ping group-hover:hidden"></div>
      <MessageCircle size={28} />
      <span className="max-w-0 group-hover:max-w-xs transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 ml-0 group-hover:ml-2 font-bold whitespace-nowrap overflow-hidden">
        Fale Conosco
      </span>
    </a>
  );
};
