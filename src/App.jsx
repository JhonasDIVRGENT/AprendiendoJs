import './App.css';
import { useEffect, useRef, useState } from 'react';

// Importa los nuevos componentes de sección (deberás crearlos)
import { HeroSection } from './components/sections/HeroSection';
import { EjerciciosSection } from './components/sections/EjerciciosSection';
import { TeoriaSection } from './components/sections/TeoriaSection';
import { SobreSection } from './components/sections/SobreSection';
import { ContactoSection } from './components/sections/ContactoSection';
import { Footer } from './components/Footer';

// Hook optimizado (ver siguiente punto)
function useFadeInOnScroll(refs) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    );

    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach((ref) => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [refs]);
}

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button
      className="scroll-to-top-btn"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Subir arriba"
    >
      ↑
    </button>
  );
}

function App() {
  // Referencias para scroll suave
  const inicioRef = useRef(null);
  const ejerciciosRef = useRef(null);
  const teoriaRef = useRef(null);
  const sobreRef = useRef(null);
  const contactoRef = useRef(null);

  // Array de refs para el hook de animación
  const sectionRefs = [inicioRef, ejerciciosRef, teoriaRef, sobreRef, contactoRef];
  
  // Usamos el hook optimizado
  useFadeInOnScroll(sectionRefs);
  
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

      <HeroSection innerRef={inicioRef} />
      <EjerciciosSection innerRef={ejerciciosRef} />
      <TeoriaSection innerRef={teoriaRef} />
      <SobreSection innerRef={sobreRef} />
      <ContactoSection innerRef={contactoRef} />

      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
