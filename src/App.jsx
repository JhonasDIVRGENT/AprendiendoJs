import './App.css';
import Saludo from './components/Saludo';
import Contador from './components/Contador';
import { useEffect, useRef, useState } from 'react';

function useFadeInOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    const onScroll = () => {
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          el.style.animationPlayState = 'running';
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}

function App() {
  useFadeInOnScroll();
  // Referencias para scroll suave
  const inicioRef = useRef(null);
  const ejerciciosRef = useRef(null);
  const teoriaRef = useRef(null);
  const sobreRef = useRef(null);
  const contactoRef = useRef(null);
  // Estado para el contador interactivo
  const [count, setCount] = useState(0);

  const handleNavClick = (ref) => (e) => {
    e.preventDefault();
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App app-bg parallax-bg">
      <nav className="navbar">
        <a href="#inicio" onClick={handleNavClick(inicioRef)}>INICIO</a>
        <a href="#ejercicios" onClick={handleNavClick(ejerciciosRef)}>EJERCICIOS</a>
        <a href="#teoria" onClick={handleNavClick(teoriaRef)}>TEORÍA</a>
        <a href="#sobre" onClick={handleNavClick(sobreRef)}>SOBRE EL PROYECTO</a>
        <a href="#contacto" onClick={handleNavClick(contactoRef)}>CONTACTO</a>
      </nav>
      <section className="hero fade-in" id="inicio" ref={inicioRef} style={{marginBottom:'7rem'}}>
        <div className="hero-content">
          <Saludo nombre="DIBUJITO" />
          <h1 className="hero-title">APRENDE JAVASCRIPT</h1>
          <p className="hero-desc">
            Bienvenido a tu espacio de aprendizaje interactivo. Aquí podrás explorar ejercicios prácticos, teoría esencial y recursos útiles para dominar JavaScript desde cero.
          </p>
          <ul style={{color:'#eafbe0', fontSize:'1.1rem', marginTop:'1.5rem', marginBottom:0, paddingLeft:'1.2rem'}}>
            <li>Ejercicios interactivos y explicados paso a paso</li>
            <li>Teoría clara y ejemplos visuales</li>
            <li>Consejos y buenas prácticas para programar</li>
            <li>Contacto directo para dudas y sugerencias</li>
          </ul>
        </div>
      </section>
      <section className="section-card fade-in" id="ejercicios" ref={ejerciciosRef}>
        <h2 className="section-title">Ejercicios</h2>
        <p className="section-desc">Pon a prueba tus conocimientos con ejercicios prácticos y resueltos. Cada ejercicio incluye una explicación detallada y consejos para mejorar tu lógica de programación.</p>
        <h3 style={{color:'#fff', fontWeight:700, marginTop:'2rem'}}>Ejemplo interactivo:</h3>
        <div style={{background:'rgba(255,255,255,0.08)', borderRadius:'1rem', padding:'1.2rem', marginTop:'1rem', marginBottom:'1.5rem'}}>
          <strong style={{color:'#fff'}}>Contador interactivo:</strong>
          <p style={{color:'#eafbe0'}}>Haz clic en el botón para aumentar el contador y observa cómo cambia el valor en tiempo real.</p>
          <Contador value={count} onIncrement={() => setCount(c => c + 1)} />
        </div>
        <h4 style={{color:'#fff', fontWeight:600, marginTop:'2rem'}}>¿Qué aprenderás aquí?</h4>
        <ul style={{color:'#eafbe0', fontSize:'1.05rem', marginTop:'1.2rem', paddingLeft:'1.2rem'}}>
          <li>Ejercicios de variables y operadores</li>
          <li>Condicionales y bucles</li>
          <li>Funciones y arrays</li>
          <li>Ejercicios de lógica y desafíos</li>
        </ul>
        <p style={{color:'#eafbe0', marginTop:'1.5rem'}}>¡Pronto más ejercicios interactivos y retos!</p>
      </section>
      <section className="section-card fade-in" id="teoria" ref={teoriaRef}>
        <h2 className="section-title">Teoría</h2>
        <p className="section-desc">Aprende los conceptos fundamentales de JavaScript con explicaciones sencillas y ejemplos visuales. Ideal para quienes inician o quieren repasar.</p>
        <h3 style={{color:'#fff', fontWeight:700, marginTop:'2rem'}}>Temas destacados:</h3>
        <ul style={{color:'#eafbe0', fontSize:'1.05rem', marginTop:'1rem', paddingLeft:'1.2rem'}}>
          <li>¿Qué es JavaScript y para qué sirve?</li>
          <li>Sintaxis básica y tipos de datos</li>
          <li>Variables, constantes y operadores</li>
          <li>Control de flujo: if, else, switch</li>
          <li>Bucles: for, while, do-while</li>
          <li>Funciones y alcance</li>
          <li>Arrays y objetos</li>
        </ul>
        <h4 style={{color:'#fff', fontWeight:600, marginTop:'2rem'}}>Ejemplo teórico:</h4>
        <div style={{background:'rgba(255,255,255,0.08)', borderRadius:'1rem', padding:'1.2rem', marginTop:'1rem'}}>
          <strong style={{color:'#fff'}}>¿Qué es una variable?</strong>
          <p style={{color:'#eafbe0'}}>Una variable es un espacio en memoria donde puedes guardar información para usarla después. En JavaScript se declara con <code style={{color:'#fff'}}>let</code>, <code style={{color:'#fff'}}>const</code> o <code style={{color:'#fff'}}>var</code>.</p>
        </div>
      </section>
      <section className="section-card fade-in" id="sobre" ref={sobreRef}>
        <h2 className="section-title">Sobre el Proyecto</h2>
        <p className="section-desc">Este proyecto está dedicado a quienes desean aprender JavaScript de manera sencilla, visual e interactiva. Nació con el objetivo de compartir recursos y experiencias para que más personas puedan programar.</p>
        <h3 style={{color:'#fff', fontWeight:700, marginTop:'2rem'}}>¿Por qué aprender JavaScript aquí?</h3>
        <ul style={{color:'#eafbe0', fontSize:'1.05rem', marginTop:'1rem', paddingLeft:'1.2rem'}}>
          <li>Contenido actualizado y en español</li>
          <li>Ejercicios y teoría en un solo lugar</li>
          <li>Enfoque práctico y visual</li>
          <li>Comunidad y soporte personalizado</li>
        </ul>
        <h4 style={{color:'#fff', fontWeight:600, marginTop:'2rem'}}>Nuestra misión</h4>
        <p style={{color:'#eafbe0'}}>Crear una comunidad donde aprender a programar sea divertido, accesible y motivador para todos.</p>
      </section>
      <section className="section-card fade-in" id="contacto" ref={contactoRef} style={{marginBottom:'5rem'}}>
        <h2 className="section-title">Contacto</h2>
        <p className="section-desc">¿Tienes dudas, sugerencias o quieres colaborar? ¡Contáctame y hagamos crecer juntos este espacio de aprendizaje!</p>
        <div style={{color:'#eafbe0', fontSize:'1.05rem', marginTop:'1.5rem'}}>
          <p><strong>Email:</strong> jhonas@email.com</p>
          <p><strong>GitHub:</strong> github.com/jhonasdev</p>
        </div>
        <h4 style={{color:'#fff', fontWeight:600, marginTop:'2rem'}}>¡Tu opinión es importante!</h4>
        <p style={{color:'#eafbe0'}}>No dudes en escribir para sugerir nuevos temas, ejercicios o mejoras para la web.</p>
      </section>
      <footer className="footer-resalta">
        Proyecto de aprendizaje creado con React · Jhonas
      </footer>
    </div>
  );
}

export default App;
