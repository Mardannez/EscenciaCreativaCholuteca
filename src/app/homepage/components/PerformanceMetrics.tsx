'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Metric {
  id: number;
  icon: string;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

interface PerformanceMetricsProps {
  className?: string;
}

const PerformanceMetrics = ({ className = '' }: PerformanceMetricsProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0, 0]);

  const metrics: Metric[] = [
    {
      id: 1,
      icon: "ChartBarIcon",
      value: 150,
      suffix: "%",
      label: "Crecimiento Promedio de Clientes",
      color: "text-brand-secondary"
    },
    {
      id: 2,
      icon: "UserGroupIcon",
      value: 50,
      suffix: "+",
      label: "Negocios Locales Atendidos",
      color: "text-primary"
    },
    {
      id: 3,
      icon: "CurrencyDollarIcon",
      value: 2.5,
      suffix: "M",
      label: "Lempiras en Ventas Generadas",
      color: "text-brand-accent"
    },
    {
      id: 4,
      icon: "StarIcon",
      value: 4.9,
      suffix: "/5",
      label: "Calificación de Satisfacción",
      color: "text-warning"
    }
  ];

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setAnimatedValues(
        metrics.map((metric) => {
          const value = metric.value * progress;
          return Math.min(value, metric.value);
        })
      );

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isHydrated]);

  return (
    <section className={`py-16 lg:py-24 bg-card ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-primary mb-4">
            Resultados que Hablan por Sí Mismos
          </h2>
          <p className="text-lg font-inter text-text-secondary max-w-2xl mx-auto">
            Métricas reales de impacto en negocios locales de Choluteca
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={metric.id}
              className="bg-surface rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-8 text-center border-2 border-transparent hover:border-brand-accent"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-6">
                <Icon name={metric.icon as any} size={32} variant="solid" className="text-primary-foreground" />
              </div>

              {/* Animated Value */}
              <div className="mb-2">
                <span className={`text-4xl lg:text-5xl font-bold font-poppins ${metric.color}`}>
                  {isHydrated ? animatedValues[index].toFixed(metric.suffix === "/5" ? 1 : 0) : metric.value}
                </span>
                <span className={`text-2xl lg:text-3xl font-bold font-poppins ${metric.color}`}>
                  {metric.suffix}
                </span>
              </div>

              {/* Label */}
              <p className="text-base font-inter text-text-secondary">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-base font-inter text-text-secondary mb-6">
            Datos actualizados a enero 2026 basados en resultados reales de nuestros clientes
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 px-4 py-2 bg-surface rounded-full">
              <Icon name="CheckBadgeIcon" size={20} variant="solid" className="text-brand-secondary" />
              <span className="text-sm font-inter text-text-primary">Resultados Verificados</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-surface rounded-full">
              <Icon name="ShieldCheckIcon" size={20} variant="solid" className="text-brand-secondary" />
              <span className="text-sm font-inter text-text-primary">Reportes Transparentes</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-surface rounded-full">
              <Icon name="ClockIcon" size={20} variant="solid" className="text-brand-secondary" />
              <span className="text-sm font-inter text-text-primary">Soporte 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;