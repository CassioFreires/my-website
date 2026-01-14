import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let particles: any[] = [];
    const maxParticles = 120;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function randomOutsidePosition() {
      const side = Math.floor(Math.random() * 4);
      if (side === 0) return { x: Math.random() * canvas.width, y: -20 };
      if (side === 1) return { x: canvas.width + 20, y: Math.random() * canvas.height };
      if (side === 2) return { x: Math.random() * canvas.width, y: canvas.height + 20 };
      return { x: -20, y: Math.random() * canvas.height };
    }

    function createParticle() {
      const pos = randomOutsidePosition();
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const angle = Math.atan2(centerY - pos.y, centerX - pos.x);
      const speed = Math.random() * 1.5 + 0.5;

      return {
        x: pos.x,
        y: pos.y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.3,
      };
    }

    particles = Array.from({ length: maxParticles }, createParticle);

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        ctx.beginPath();
        ctx.fillStyle = `rgba(138,162,255,${p.alpha})`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (
          p.x < -50 ||
          p.x > canvas.width + 50 ||
          p.y < -50 ||
          p.y > canvas.height + 50
        ) {
          particles[i] = createParticle();
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} id="bg-particles" />;
}
