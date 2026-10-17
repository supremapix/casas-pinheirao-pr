import React from 'react';
import { ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './home-hero.css';

export const Hero: React.FC = () => (
  <section className="home-hero" aria-labelledby="home-hero-title">
    <div className="home-hero__layout">
      <div className="home-hero__copy">
        <p className="home-hero__eyebrow"><ShieldCheck size={16} aria-hidden="true" /> Tradição em Pinhais • CREA-PR</p>
        <h1 id="home-hero-title">Realize o sonho da <span>casa própria</span> com segurança.</h1>
        <p className="home-hero__description">Especialistas em casas pré-fabricadas de madeira nobre e alvenaria sob medida. Mais de 20 anos construindo com excelência em Curitiba e Região Metropolitana.</p>
        <div className="home-hero__actions">
          <div>
            <Link className="home-hero__cta home-hero__cta--primary" to="/projetos">Ver nossos modelos <ArrowRight size={18} aria-hidden="true" /></Link>
            <span className="home-hero__hint">Plantas, fotos e medidas</span>
          </div>
          <div>
            <Link className="home-hero__cta home-hero__cta--secondary" to="/envie-seu-projeto">Solicitar orçamento <ArrowRight size={18} aria-hidden="true" /></Link>
            <span className="home-hero__hint">Sem compromisso</span>
          </div>
        </div>
        <p className="home-hero__location"><MapPin size={15} aria-hidden="true" /> Sede própria em Pinhais / PR</p>
      </div>
      <figure className="home-hero__visual">
        <img
          src="/hero-catalogo-1280.webp"
          srcSet="/hero-catalogo-480.webp 480w, /hero-catalogo-800.webp 800w, /hero-catalogo-1280.webp 1280w, /hero-catalogo-1920.webp 1920w"
          sizes="(min-width: 1280px) 680px, (min-width: 900px) 55vw, 100vw"
          width="2048"
          height="1082"
          alt="Modelo de casa de madeira do catálogo Casas Pinheirão, com telhado de duas águas e varanda lateral"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <figcaption>Casas Pinheirão <span>Madeira e alvenaria sob medida</span></figcaption>
      </figure>
    </div>
  </section>
);
