import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const bedroomChoices = [
  { rooms: 1, title: 'Casa de 1 quarto', summary: 'Um dormitório separado da sala: um ponto de partida para uma planta compacta, sem abrir mão de privacidade.', detail: 'O catálogo não informa um modelo de 1 quarto com planta confirmada. Peça uma opção para o seu terreno.', to: '/envie-seu-projeto', action: 'Consultar planta de 1 quarto' },
  { rooms: 2, title: 'Casa de 2 quartos', summary: 'Um quarto extra pode atender uma criança, visitas ou um escritório com porta.', detail: 'Veja a planta publicada de 37,5 m² com dois quartos. Confira as medidas e a adequação ao seu lote com a equipe.', photo: '/planta-1.jpg', action: 'Ver planta de 2 quartos' },
  { rooms: 3, title: 'Casa de 3 quartos', summary: 'Compare a circulação, a necessidade de suíte e o uso de cada dormitório antes de definir a metragem.', detail: 'O catálogo descreve o triplex de alvenaria de 200 m² com uma suíte e dois dormitórios.', to: '/projetos/1', action: 'Ver triplex de 3 quartos' }
];

export function BedroomGuide({ compact = false }: { compact?: boolean }) {
  return (
    <section className="bg-[#eef5f2] border-y border-[#ceded7] py-12 md:py-16" aria-labelledby="quartos-titulo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm tracking-widest uppercase font-bold text-[#285b4e]">Compare plantas</p>
        <h2 id="quartos-titulo" className="mt-2 text-3xl md:text-4xl font-black text-[#142f28]">Quantos quartos a sua casa precisa?</h2>
        <p className="mt-3 text-base leading-relaxed text-[#344d45] max-w-2xl">Comece pelos dormitórios. Depois compare a metragem, o tipo de construção e o que cabe no terreno.</p>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {bedroomChoices.map(({rooms,title,summary,detail,to,photo,action}) => (
            <article key={rooms} className="overflow-hidden rounded-xl border border-[#ceded7] bg-white flex flex-col" aria-label={title}>
              <img src={`/modelos/${rooms}-quarto${rooms > 1 ? 's' : ''}.webp`} width="900" height="710" alt={`Ilustração de uma casa para a categoria de ${rooms} ${rooms === 1 ? 'quarto' : 'quartos'}`} className="w-full h-auto" loading="lazy" decoding="async" />
              <div className="p-5 flex flex-col grow">
                <h3 className="text-xl font-black text-[#142f28]">{title}</h3>
                <p className="mt-2 text-base leading-relaxed text-[#344d45]">{summary}</p>
                {!compact && <p className="mt-3 text-sm leading-relaxed text-[#344d45]">{detail}</p>}
                {compact ? <Link to={`/projetos?quartos=${rooms}`} className="mt-auto pt-4 pb-2 inline-flex items-center gap-2 underline underline-offset-4 font-bold text-[#145442]">Explorar {rooms} {rooms === 1 ? 'quarto' : 'quartos'} <ArrowUpRight size={17} aria-hidden="true" /></Link>
                  : photo ? <a href={photo} className="mt-auto pt-4 pb-2 underline underline-offset-4 font-bold text-[#145442]">{action}</a>
                  : to ? <Link to={to} className="mt-auto pt-4 pb-2 underline underline-offset-4 font-bold text-[#145442]">{action}</Link> : null}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-4 text-sm text-[#344d45]">Imagens ilustrativas: a fachada não identifica a planta nem representa uma obra entregue.</p>
      </div>
    </section>
  );
}
