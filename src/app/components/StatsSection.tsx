'use client';

import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 10, suffix: '+', label: 'Años de Experiencia', description: 'Creando campañas que impactan en Honduras' },
  { value: 500, suffix: '+', label: 'Proyectos Realizados', description: 'Marcas, empresas y eventos exitosos' },
  { value: 4, suffix: '', label: 'Líneas de Servicio', description: 'Impresiones, Film, Digital y Vallas' },
  { value: 100, suffix: '%', label: 'Compromiso', description: 'Con la calidad y satisfacción del cliente' },
];

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ value, suffix, label, description, index }: {
  value: number;
  suffix: string;
  label: string;
  description: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(value, 1800, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="text-center md:text-left reveal-up"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${index * 120}ms, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${index * 120}ms`,
      }}
    >
      <div className="stat-number gold-gradient-text mb-2">
        {count}{suffix}
      </div>
      <p className="text-sm font-bold uppercase tracking-widest text-foreground mb-1">{label}</p>
      <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 bg-secondary border-y border-border"
      aria-labelledby="stats-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="section-label mb-4">Por qué elegirnos</p>
          <h2
            id="stats-heading"
            className="text-section-xl font-bold tracking-tight text-foreground"
          >
            Resultados que{' '}
            <span className="font-serif italic font-normal text-accent">hablan solos.</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 border-t border-border pt-12">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/50427800441?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Hablemos de tu proyecto
          </a>
        </div>
      </div>
    </section>
  );
}