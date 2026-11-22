import React from 'react';
import { useLocation } from 'react-router-dom';
import { PROJECTS } from '../data';

const notes: Record<string, string> = {
  '/': 'Antes de escolher um modelo, veja como a distribuição de cômodos ajuda a imaginar o uso da casa no dia a dia.',
  '/empresa': 'Ao conversar sobre seu projeto, use a divisão de ambientes como ponto de partida. O desenho final depende do que você precisa e das condições do terreno.',
  '/projetos': 'Compare os modelos do catálogo pela circulação e pela distribuição dos ambientes, não apenas pelo número de quartos.',
  '/envie-seu-projeto': 'Ao enviar seu projeto, conte quais cômodos são prioridade, se precisa de ambientes separados e o que já sabe sobre o terreno.',
  '/contato': 'Antes de ligar ou escrever, anote os ambientes que você precisa e as dúvidas que quer esclarecer com a equipe.',
  '/atualizacoes': 'Use o exemplo para se familiarizar com a distribuição de ambientes enquanto acompanha as novidades da Casas Pinheirão.',
  '/politica-de-privacidade': 'Se for enviar uma referência para conversar sobre sua futura casa, prefira um desenho que não inclua documentos nem dados pessoais.'
};
const projectIds = new Set(PROJECTS.map(p => p.id));

export const FloorplanExample: React.FC = () => {
  const { pathname } = useLocation();
  const route = pathname.replace(/\/+$/, '') || '/';
  const id = /^\/projetos\/([^/]+)$/.exec(route)?.[1];
  const note = notes[route] ?? (id && projectIds.has(id) ? 'Use esta ilustração para entender o que observar em uma planta. Os ambientes e as medidas do modelo desta página devem ser conferidos na ficha do próprio projeto.' : '');
  if (!note) return null;

  return (
    <section className="pin-plan" aria-labelledby="pin-plan-title">
      <div>
        <p className="pin-plan__eyebrow">Casas Pinheirão · Planejamento da casa</p>
        <h2 id="pin-plan-title">Exemplo ilustrativo de planta baixa</h2>
        <p>{note}</p>
        <p>Uma planta baixa mostra, de cima, como cômodos como sala, cozinha, banheiro e quartos se distribuem. Observe quais ambientes ficam lado a lado e quais percursos seriam feitos entre eles.</p>
        <p><strong>As medidas das imagens são apenas ilustrativas.</strong> Os exemplos não representam modelos do catálogo nem substituem o projeto técnico.</p>
      </div>
      <div className="pin-plan__pair"><figure>
        <img src="/exemplo-planta/planta-baixa-360.webp" srcSet="/exemplo-planta/planta-baixa-360.webp 360w, /exemplo-planta/planta-baixa-600.webp 600w" sizes="(max-width:620px) 17rem, 19rem" width={360} height={447} alt="Vista de cima de uma marcação no terreno com dois quartos, banheiro, cozinha e sala" loading="lazy" decoding="async" />
        <figcaption>Ilustração da divisão dos cômodos no terreno.</figcaption>
        <a className="pin-plan-open" href="/exemplo-planta/planta-baixa-1290.webp">Ampliar marcação</a>
      </figure><figure><img src="/exemplo-planta/planta-mobiliada-360.webp" srcSet="/exemplo-planta/planta-mobiliada-360.webp 360w, /exemplo-planta/planta-mobiliada-600.webp 600w" sizes="(max-width:620px) 17rem, 19rem" width={360} height={450} alt="Vista mobiliada de dois quartos, banheiro, sala e cozinha integrada" loading="lazy" decoding="async" /><figcaption>Vista mobiliada: observe a passagem entre sala e cozinha e o espaço ao redor da mesa.</figcaption><a className="pin-plan-open" href="/exemplo-planta/planta-mobiliada-1080.webp" data-kind="furnished">Ampliar vista mobiliada</a></figure></div>
    </section>
  );
};
