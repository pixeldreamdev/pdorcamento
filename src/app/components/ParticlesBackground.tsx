import React, { useEffect, useRef } from "react";

const ParticlesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 80; // Aumentado número de partículas
    const connectionDistance = 150; // Distância máxima para conexão
    const colors = [
      "rgba(0, 255, 255, ", // Cyan
      "rgba(255, 0, 255, ", // Magenta
      "rgba(0, 255, 170, ", // Neon Green
    ];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
      pulse: number;
      pulseSpeed: number;

      constructor() {
        this.x = Math.random() * (canvas?.width || 0);
        this.y = Math.random() * (canvas?.height || 0);
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.pulse = 0;
        this.pulseSpeed = 0.02;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (canvas) {
          if (this.x > canvas.width) this.x = 0;
          if (this.x < 0) this.x = canvas.width;
          if (this.y > canvas.height) this.y = 0;
          if (this.y < 0) this.y = canvas.height;
        }

        // Efeito de pulsar
        this.pulse += this.pulseSpeed;
        if (this.pulse > 1 || this.pulse < 0) this.pulseSpeed *= -1;
      }

      draw() {
        if (!ctx) return;

        // Partícula principal
        ctx.beginPath();
        ctx.arc(
          this.x,
          this.y,
          this.size * (1 + this.pulse * 0.3),
          0,
          Math.PI * 2
        );
        ctx.fillStyle =
          this.color + this.opacity * (1 - this.pulse * 0.5) + ")";
        ctx.fill();

        // Brilho
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = this.color + "0.1)";
        ctx.fill();
      }
    }

    // Função para desenhar conexões
    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.3;
            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
            ctx!.lineWidth = 0.5;
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      if (!ctx) return;
      if (canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      drawConnections();
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-1 opacity-50 mix-blend-screen"
    />
  );
};

export default ParticlesBackground;
