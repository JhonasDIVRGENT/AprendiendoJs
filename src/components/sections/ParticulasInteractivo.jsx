import React, { useRef, useEffect } from 'react';

export function ParticulasInteractivo({ cantidad = 40, moverSiempre = false }) {
  const canvasRef = useRef(null);
  const particulas = useRef([]);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    particulas.current = Array.from({ length: cantidad }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      r: 2 + Math.random() * 2,
      color: 'rgba(198,255,0,0.7)'
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      particulas.current.forEach(p => {
        // Movimiento aleatorio suave
        p.vx += (Math.random() - 0.5) * 0.04;
        p.vy += (Math.random() - 0.5) * 0.04;
        // Interacción con el mouse
        if ((mouse.current.x !== null && mouse.current.y !== null) || moverSiempre) {
          let dx = 0, dy = 0, dist = 0;
          if (mouse.current.x !== null && mouse.current.y !== null) {
            dx = p.x - mouse.current.x;
            dy = p.y - mouse.current.y;
            dist = Math.sqrt(dx * dx + dy * dy);
          } else {
            dx = p.x - width / 2;
            dy = p.y - height / 2;
            dist = Math.sqrt(dx * dx + dy * dy);
          }
          if (dist < 80) {
            p.vx += dx / (dist || 1) * 0.10;
            p.vy += dy / (dist || 1) * 0.10;
          }
        }
        // Movimiento
        p.x += p.vx;
        p.y += p.vy;
        // Fricción
        p.vx *= 0.97;
        p.vy *= 0.97;
        // Rebote en bordes
        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        if (p.x > width) { p.x = width; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        if (p.y > height) { p.y = height; p.vy *= -1; }
        // Dibujo
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = '#c6ff00';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      requestAnimationFrame(draw);
    }
    draw();

    function handleMouse(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    }
    function handleMouseOut() {
      mouse.current.x = null;
      mouse.current.y = null;
    }
    function handleResize() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    }
    function handleClick(e) {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      particulas.current.forEach(p => {
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 90) {
          // Impulso aleatorio
          p.vx += (Math.random() - 0.5) * 3;
          p.vy += (Math.random() - 0.5) * 3;
        }
      });
    }
    canvas.addEventListener('mousemove', handleMouse);
    canvas.addEventListener('mouseleave', handleMouseOut);
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('click', handleClick);
    return () => {
      canvas.removeEventListener('mousemove', handleMouse);
      canvas.removeEventListener('mouseleave', handleMouseOut);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('click', handleClick);
    };
  }, [cantidad, moverSiempre]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        pointerEvents: 'auto',
      }}
    />
  );
} 