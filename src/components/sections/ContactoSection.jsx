import React from 'react';

export function ContactoSection({ innerRef }) {
  return (
    <section ref={innerRef} className="section fade-in" id="contacto">
      <div className="section-card" style={{display: 'flex', flexDirection: 'row', gap: '2rem', alignItems: 'flex-start'}}>
        <div style={{flex: 2}}>
          <h2 className="section-title">Conecta con Humanex</h2>
          <p>
            ¿Tienes una pregunta, una idea innovadora o te gustaría colaborar con Humanex? Tu participación es esencial. El futuro del transhumanismo es un diálogo global, y tu voz puede ayudar a dar forma a la conversación.
          </p>
        </div>
        <div style={{flex: 1, minWidth: '180px', zIndex: 2}}>
          <ul>
            <li><b>Formulario:</b> [Enlace al formulario]</li>
            <li><b>Instagram:</b> <a href="#" style={{color: '#c6ff00'}}>@humanex</a></li>
            <li><b>LinkedIn:</b> <a href="#" style={{color: '#c6ff00'}}>Humanex</a></li>
            <li><b>Twitter/X:</b> <a href="#" style={{color: '#c6ff00'}}>@humanex</a></li>
            <li><b>Email:</b> <a href="mailto:contacto@humanex.com" style={{color: '#c6ff00'}}>contacto@humanex.com</a></li>
          </ul>
        </div>
        <div className="geo-accent"></div>
        <div className="geo-square"></div>
      </div>
    </section>
  );
} 