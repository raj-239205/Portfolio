"use client";

import React, { useEffect, useRef } from "react";

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    const maxParticles = 45; // Reduced by 50% for subtle decorative layout
    const connectionDistance = 120;
    let animationFrameId: number;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      color: string;

      constructor(x?: number, y?: number) {
        this.x = x ?? Math.random() * (canvas?.width ?? 0);
        this.y = y ?? Math.random() * (canvas?.height ?? 0);
        this.size = Math.random() * 1.2 + 0.8; // Smaller decorative particles
        this.speedY = -(Math.random() * 0.3 + 0.08); // float upward even slower
        this.speedX = Math.random() * 0.3 - 0.15; // drift slightly

        // Colors: 60% Gold (#f7c948), 40% Blue (#3b82f6) with 50% reduced opacity
        const rand = Math.random();
        if (rand < 0.6) {
          this.color = "rgba(247, 201, 72, 0.16)"; // Gold
        } else {
          this.color = "rgba(59, 130, 246, 0.13)"; // Blue
        }
      }

      update() {
        if (!canvas) return;
        this.y += this.speedY;
        this.x += this.speedX;

        // Loop particles when they exit the top
        if (this.y < 0) {
          this.y = canvas.height;
          this.x = Math.random() * canvas.width;
        }

        // Keep particles inside canvas sides
        if (this.x < 0 || this.x > canvas.width) {
          this.speedX = -this.speedX;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
      }
    }

    function initParticles() {
      if (!canvas) return;
      particlesArray = [];
      for (let i = 0; i < maxParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    function connectParticles(context: CanvasRenderingContext2D) {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            // Gradient line based on distance with 50% reduced opacity
            const alpha = (1 - dist / connectionDistance) * 0.035;
            context.strokeStyle = `rgba(184, 193, 209, ${alpha})`;
            context.lineWidth = 0.75;
            context.beginPath();
            context.moveTo(particlesArray[a].x, particlesArray[a].y);
            context.lineTo(particlesArray[b].x, particlesArray[b].y);
            context.stroke();
          }
        }
      }
    }

    function resizeCanvas() {
      if (!canvas || !canvas.parentElement) return;
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      initParticles();
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    function animateParticles() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesArray.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      connectParticles(ctx);
      animationFrameId = requestAnimationFrame(animateParticles);
    }

    animateParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particles-canvas"
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
