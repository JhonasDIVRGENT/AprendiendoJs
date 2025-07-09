import './App.css';
import { useEffect, useRef, useState } from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { EjerciciosSection } from './components/sections/EjerciciosSection';
import { TeoriaSection } from './components/sections/TeoriaSection';
import { SobreSection } from './components/sections/SobreSection';
import { ContactoSection } from './components/sections/ContactoSection';
import { Footer } from './components/Footer';

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
  const inicioRef = useRef(null);
  const ejerciciosRef = useRef(null);
  const teoriaRef = useRef(null);
  const sobreRef = useRef(null);
  const contactoRef = useRef(null);
  const sectionRefs = [inicioRef, ejerciciosRef, teoriaRef, sobreRef, contactoRef];
  useFadeInOnScroll(sectionRefs);
  return (
    <div className="App">
      <div className="logo-fixed blink-neon">HUMANEx</div>
      <HeroSection innerRef={inicioRef} />
      <main className="main-sections-grid">
        <EjerciciosSection innerRef={ejerciciosRef} />
        <TeoriaSection innerRef={teoriaRef} />
        <SobreSection innerRef={sobreRef} />
        <ContactoSection innerRef={contactoRef} />
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
