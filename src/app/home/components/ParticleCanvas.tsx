'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  color: string;
  opacity: number;
  fadeHalfway: boolean;
  startY: number;
  trailLength: number;
}

const COLORS = ['#00D4FF', '#00FF88', '#FF2D75', '#FFFFFF', '#66E0FF'];

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resize();

    const createParticle = (randomY = false): Particle => {
      const fadeHalfway = Math.random() < 0.5;
      const startY = randomY
        ? canvas.height * 0.5 + Math.random() * canvas.height * 0.5
        : canvas.height + Math.random() * 80;
      return {
        x: Math.random() * canvas.width,
        y: startY,
        startY,
        size: 1 + Math.random() * 1.5,
        speedY: 1.5 + Math.random() * 3.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        opacity: 0.6 + Math.random() * 0.4,
        fadeHalfway,
        trailLength: 30 + Math.random() * 60,
      };
    };

    for (let i = 0; i < 80; i++) {
      particlesRef.current.push(createParticle(true));
    }

    const animate = () => {
      // Dim the canvas each frame for trail fade effect
      ctx.fillStyle = 'rgba(10, 0, 21, 0.18)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p, i) => {
        p.y -= p.speedY;

        const traveled = p.startY - p.y;
        const halfwayPoint = p.startY / 2;

        let alpha = p.opacity;

        if (p.fadeHalfway) {
          const fadeStart = halfwayPoint * 0.5;
          if (traveled > fadeStart) {
            const fadeProgress = (traveled - fadeStart) / (halfwayPoint - fadeStart);
            alpha = p.opacity * Math.max(0, 1 - fadeProgress);
          }
          if (traveled >= halfwayPoint || alpha <= 0.02) {
            particlesRef.current[i] = createParticle(false);
            return;
          }
        } else {
          if (p.y < -10) {
            particlesRef.current[i] = createParticle(false);
            return;
          }
        }

        // Draw shooting star trail (gradient line going downward from particle)
        const trailLen = p.trailLength;
        const grad = ctx.createLinearGradient(p.x, p.y, p.x, p.y + trailLen);
        grad.addColorStop(0, `${p.color}${Math.round(alpha * 255).toString(16).padStart(2, '0')}`);
        grad.addColorStop(1, `${p.color}00`);

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = grad;
        ctx.lineWidth = p.size * 0.8;
        ctx.shadowBlur = p.size * 6;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x, p.y + trailLen);
        ctx.stroke();

        // Draw bright head dot
        ctx.shadowBlur = p.size * 10;
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.9, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      // Occasionally spawn a new particle to keep density
      if (Math.random() < 0.3) {
        particlesRef.current.push(createParticle(false));
        // Cap total particles
        if (particlesRef.current.length > 120) {
          particlesRef.current.splice(0, 1);
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => resize();
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}