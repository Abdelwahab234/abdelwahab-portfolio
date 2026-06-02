"use client";
import { useEffect, useRef, useState } from "react";

export default function Electrons() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if window is defined (for safety) and check width
    if (typeof window !== "undefined") {
      setIsDesktop(window.innerWidth >= 1024);
      
      const handleResizeCheck = () => {
        setIsDesktop(window.innerWidth >= 1024);
      };
      
      window.addEventListener("resize", handleResizeCheck);
      return () => window.removeEventListener("resize", handleResizeCheck);
    }
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    // Track mouse position with easing
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    class Electron {
      angle: number;
      speed: number;
      orbitRadiusX: number;
      orbitRadiusY: number;
      orbitAngle: number;
      size: number;
      color: string;

      constructor() {
        this.angle = Math.random() * Math.PI * 2;
        // speed of orbit
        this.speed = 0.015 + Math.random() * 0.03;
        // semi-major and semi-minor axes of the ellipse
        this.orbitRadiusX = 40 + Math.random() * 180;
        this.orbitRadiusY = 10 + Math.random() * 80;
        // Rotation of the orbit itself
        this.orbitAngle = Math.random() * Math.PI * 2;
        // Particle size
        this.size = 1.5 + Math.random() * 2;

        // Colors matching the neon theme
        const colors = ["#8200a6", "#ff00cc", "#00ffff", "#6b00ff"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.angle += this.speed;
      }

      draw(ctx: CanvasRenderingContext2D, centerX: number, centerY: number) {
        // Calculate position on standard ellipse
        const x = Math.cos(this.angle) * this.orbitRadiusX;
        const y = Math.sin(this.angle) * this.orbitRadiusY;

        // Apply orbit rotation to the position
        const rotatedX = x * Math.cos(this.orbitAngle) - y * Math.sin(this.orbitAngle);
        const rotatedY = x * Math.sin(this.orbitAngle) + y * Math.cos(this.orbitAngle);

        const finalX = centerX + rotatedX;
        const finalY = centerY + rotatedY;

        // 3D Depth effect: Calculate depth based on original y before rotation
        // sin(angle) gives us the front/back position
        const depth = Math.sin(this.angle);
        const scale = (depth + 2) / 2.5; // Scales from 0.4 to 1.2
        const opacity = (depth + 1.5) / 2.5; // Opacity based on depth

        // Fake Glow (faster than shadowBlur)
        ctx.beginPath();
        ctx.arc(finalX, finalY, this.size * scale * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = Math.max(0, opacity * 0.25);
        ctx.fill();

        // Core Electron
        ctx.beginPath();
        ctx.arc(finalX, finalY, this.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, opacity));
        ctx.fill();
      }
    }

    // Initialize 70 electrons orbiting the cursor
    const electrons: Electron[] = Array.from({ length: 70 }, () => new Electron());

    // Free floating background particles
    class Particle {
      x: number; y: number; vx: number; vy: number; size: number; color: string;
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.size = Math.random() * 1.5;
        this.color = "rgba(130, 0, 166, 0.4)";
      }
      update() {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0) this.x = width; if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height; if (this.y > height) this.y = 0;
      }
      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 1;
        ctx.fill();
      }
    }
    const backgroundParticles: Particle[] = Array.from({ length: 80 }, () => new Particle());

    let animationFrameId: number;

    const render = () => {
      // Easing the nucleus toward the mouse for smooth tracking
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      // Clear the frame completely for clean rendering
      ctx.clearRect(0, 0, width, height);

      // Render floating background dust
      backgroundParticles.forEach(p => {
        p.update();
        p.draw(ctx);
      });

      // Render Nucleus Glow
      ctx.beginPath();
      const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 180);
      gradient.addColorStop(0, "rgba(130, 0, 166, 0.12)");
      gradient.addColorStop(1, "rgba(130, 0, 166, 0)");
      ctx.fillStyle = gradient;
      ctx.globalAlpha = 1;
      ctx.arc(mouseX, mouseY, 180, 0, Math.PI * 2);
      ctx.fill();

      // Sort electrons so the ones in "back" are drawn first, and "front" on top
      electrons.sort((a, b) => Math.sin(a.angle) - Math.sin(b.angle));

      // Render Electrons
      electrons.forEach(e => {
        e.update();
        e.draw(ctx, mouseX, mouseY);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9998,
      }}
    />
  );
}
