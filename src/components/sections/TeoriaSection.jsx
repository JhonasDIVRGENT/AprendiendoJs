import React from 'react';

export function TeoriaSection({ innerRef }) {
  return (
    <section ref={innerRef} className="section fade-in" id="teoria">
      <div className="section-card" style={{display: 'flex', flexDirection: 'row', gap: '2rem', alignItems: 'flex-start'}}>
        <div style={{flex: 2}}>
          <h2 className="section-title">Ética y Sociedad del Transhumanismo</h2>
          <p>
            Abordamos los complejos debates sobre la identidad, la desigualdad, la privacidad y el significado de "ser humano" en la era de la mejora. Analizamos las ramificaciones sociales, los dilemas éticos y los impactos culturales de la mejora humana, para que puedas reflexionar y participar activamente en la construcción de un futuro más consciente y equitativo.
          </p>
        </div>
        <div style={{flex: 1, minWidth: '180px', zIndex: 2}}>
          <ul>
            <li>Identidad y autodefinición</li>
            <li>Desigualdad y acceso</li>
            <li>Privacidad y datos biométricos</li>
            <li>Ética de la mejora genética</li>
            <li>Impacto cultural y social</li>
            <li>Futuro del trabajo y la creatividad</li>
          </ul>
        </div>
        <div className="geo-accent"></div>
        <div className="geo-square"></div>
      </div>
    </section>
  );
} 