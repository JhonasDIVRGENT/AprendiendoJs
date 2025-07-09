import React from 'react';
import fondo from '../../assets/fondo2.png';
import { ParticulasInteractivo } from './ParticulasInteractivo';

export function HeroSection({ innerRef }) {
  return (
    <section
      ref={innerRef}
      className="section hero-section"
      id="inicio"
      style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <img
        src={fondo}
        alt="Fondo Humanex"
        className="hero-bg-img"
        style={{ zIndex: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
      <ParticulasInteractivo cantidad={60} moverSiempre />
      <div className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
        <h1 className="hero-title">
          Redefiniendo la <span className="highlight">existencia</span>.<br />
          El futuro del ser humano es <span className="highlight">hoy</span>.
        </h1>
        <div className="hero-subtitle">Explorando el transhumanismo by Jhonas</div>
      </div>
    </section>
  );
} 