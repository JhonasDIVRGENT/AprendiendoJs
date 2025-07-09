import React from 'react';

export function SobreSection({ innerRef }) {
  return (
    <section ref={innerRef} className="section fade-in" id="sobre">
      <div className="section-card" style={{display: 'flex', flexDirection: 'row', gap: '2rem', alignItems: 'flex-start'}}>
        <div style={{flex: 2}}>
          <h2 className="section-title">La Visión de Humanex</h2>
          <p>
            Humanex nace de la convicción de que el diálogo sobre el futuro humano es crucial. Nuestra misión es ser la brújula que te oriente en el vasto y complejo panorama del transhumanismo, informando, analizando, inspirando y conectando a la comunidad.
          </p>
        </div>
        <div style={{flex: 1, minWidth: '180px', zIndex: 2}}>
          <ul>
            <li><b>Fundador:</b> Jhonas</li>
            <li><b>Experiencia:</b> Danza, marketing digital, programación</li>
            <li><b>Valores:</b> Creatividad, ética, comunidad</li>
            <li><b>Visión:</b> Un futuro humano y tecnológicamente consciente</li>
          </ul>
        </div>
        <div className="geo-accent"></div>
        <div className="geo-square"></div>
      </div>
    </section>
  );
} 