import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GlowButton from "@/components/ui/GlowButton";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; vy: number; size: number; opacity: number; life: number }[] = [];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (Math.random() < 0.3) {
        particles.push({
          x: Math.random() * canvas.width,
          y: canvas.height + 10,
          vy: -(0.5 + Math.random() * 1.5),
          size: 1 + Math.random() * 2,
          opacity: Math.random() * 0.8 + 0.2,
          life: 0,
        });
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.y += p.vy;
        p.x += Math.sin(p.life * 0.02) * 0.3;
        p.life++;
        p.opacity -= 0.003;

        if (p.opacity <= 0 || p.y < -10) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(51, 100%, 50%, ${p.opacity})`;
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };
    const raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(263_70%_50%_/_0.08)_0%,_transparent_70%)]" />
      {/* Particles canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-xs md:text-sm tracking-[0.2em] uppercase text-muted-foreground border border-border rounded-full px-4 py-1.5 mb-6">
            FemSpire Club × Raghu Engineering College
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <span className="text-3xl animate-float inline-block">👑</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-cinzel text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-gold-gradient mb-4 leading-tight"
        >
          CHAKRAVYUH
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">2K26</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-cinzel text-lg md:text-2xl tracking-[0.3em] text-foreground/80 mb-3"
        >
          THE QUEENS ARENA
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-sm md:text-base bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent mb-10"
        >
          The Ultimate Coding Challenge for Girls
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/register">
            <GlowButton size="lg">⚔️ Register Now</GlowButton>
          </Link>
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            <GlowButton variant="outline" size="lg">📜 Know More</GlowButton>
          </button>
        </motion.div>

        {/* Floating decorations */}
        <div className="absolute top-1/4 left-10 text-2xl animate-float opacity-30 hidden md:block">🛡️</div>
        <div className="absolute top-1/3 right-12 text-2xl animate-float opacity-30 hidden md:block" style={{ animationDelay: "2s" }}>⚔️</div>
        <div className="absolute bottom-1/3 left-20 text-xl animate-float opacity-20 hidden md:block" style={{ animationDelay: "4s" }}>👑</div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-bounce">
        <div className="w-5 h-8 border-2 border-primary/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-primary/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
