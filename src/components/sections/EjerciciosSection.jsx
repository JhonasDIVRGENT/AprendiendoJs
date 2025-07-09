import React from 'react';

export function EjerciciosSection({ innerRef }) {
  return (
    <section ref={innerRef} className="section fade-in" id="ejercicios">
      <div className="section-card" style={{display: 'flex', flexDirection: 'row', gap: '2rem', alignItems: 'flex-start'}}>
        <div style={{flex: 2}}>
          <h2 className="section-title">El Universo del Transhumanismo</h2>
          <p>
            Adéntrate en la vasta biblioteca de Humanex y explora el multifacético universo del transhumanismo. Aquí encontrarás un cúmulo de conocimientos, desde análisis exhaustivos hasta las noticias más frescas y reflexiones provocadoras que trazan el camino del aumento humano.
          </p>
        </div>
        <div style={{flex: 1, minWidth: '180px', zIndex: 2}}>
          <ul>
            <li>Neurotecnología y BCIs</li>
            <li>Genética y Bioingeniería</li>
            <li>Cibernética y Prótesis Avanzadas</li>
            <li>Farmacología de la Mejora Cognitiva</li>
            <li>Biohacking y Cultura DIY</li>
            <li>Ética y Sociedad</li>
            <li>Arte, Danza y Cultura Popular</li>
          </ul>
        </div>
        <div className="geo-accent"></div>
        <div className="geo-square"></div>
      </div>
    </section>
  );
} 