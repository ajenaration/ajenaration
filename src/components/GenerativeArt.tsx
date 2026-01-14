import React, { useEffect, useRef } from 'react';

// --- Interactive Generative Art Component (Processing inspo) ---

const GenerativeArt = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    class Particle {
      x: number; y: number; vx: number; vy: number; size: number;
      constructor() {
        // Use the unscaled client dimensions for positioning
        this.x = Math.random() * canvas!.clientWidth;
        this.y = Math.random() * canvas!.clientHeight;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.size = Math.random() * 2 + 1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas!.clientWidth) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.clientHeight) this.vy *= -1;
      }
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = '#22d3ee';
        ctx.fill();
      }
    }

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 60;

    const resize = () => {
        // Handle high DPI screens for crisp render
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas!.getBoundingClientRect();
      canvas!.width = rect.width * dpr;
      canvas!.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const init = () => {
      resize();
      particles = []; // Set canvas size
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas!.clientWidth, canvas!.clientHeight);
      ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
      ctx.fillRect(0, 0, canvas!.clientWidth, canvas!.clientHeight);

      const shouldMove = window.scrollY > 50;
      
      if (shouldMove) {
        particles.forEach((p, i) => {
          p.update();
          p.draw();
          
          // Draw lines between nearby particles
          for (let j = i + 1; j < particles.length; j++) {
            const dx = p.x - particles[j].x;
            const dy = p.y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 100) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(34, 211, 238, ${1 - dist / 100})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        });
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    // Debounced resize handler for better performance
    let resizeTimeout: number;
    const handleResize = () => {
      window.cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        init();
        animate();
      }, 250);
    };

    window.addEventListener('resize', handleResize);
    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

export default GenerativeArt;