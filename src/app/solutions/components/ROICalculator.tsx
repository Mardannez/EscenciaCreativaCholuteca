'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ROICalculatorProps {
  className?: string;
}

const ROICalculator = ({ className = '' }: ROICalculatorProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [monthlyRevenue, setMonthlyRevenue] = useState<string>('50000');
  const [conversionRate, setConversionRate] = useState<string>('2');
  const [averageTicket, setAverageTicket] = useState<string>('500');
  const [results, setResults] = useState({
    currentMonthlyLeads: 0,
    projectedMonthlyLeads: 0,
    additionalRevenue: 0,
    roi: 0
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const revenue = parseFloat(monthlyRevenue) || 0;
    const rate = parseFloat(conversionRate) || 0;
    const ticket = parseFloat(averageTicket) || 0;

    const currentLeads = (revenue / ticket) * (rate / 100);
    const projectedLeads = currentLeads * 2.5; // 150% increase
    const additionalRev = (projectedLeads - currentLeads) * ticket;
    const investment = 15000; // Average monthly investment
    const roiCalc = ((additionalRev - investment) / investment) * 100;

    setResults({
      currentMonthlyLeads: Math.round(currentLeads),
      projectedMonthlyLeads: Math.round(projectedLeads),
      additionalRevenue: Math.round(additionalRev),
      roi: Math.round(roiCalc)
    });
  }, [monthlyRevenue, conversionRate, averageTicket, isHydrated]);

  if (!isHydrated) {
    return (
      <div className={`bg-gradient-to-br from-secondary to-primary rounded-xl shadow-brand p-8 ${className}`}>
        <div className="animate-pulse">
          <div className="h-8 bg-white/20 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-white/20 rounded w-full mb-8"></div>
          <div className="space-y-4">
            <div className="h-20 bg-white/20 rounded"></div>
            <div className="h-20 bg-white/20 rounded"></div>
            <div className="h-20 bg-white/20 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-br from-secondary to-primary rounded-xl shadow-brand p-8 ${className}`}>
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
          <Icon name="CalculatorIcon" size={24} variant="solid" className="text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold font-poppins text-white">Calculadora de ROI</h3>
          <p className="text-white/80 font-inter text-sm">Descubre tu potencial de crecimiento</p>
        </div>
      </div>

      {/* Input Fields */}
      <div className="space-y-4 mb-8">
        <div>
          <label className="block text-white font-inter font-semibold mb-2">
            Ingresos Mensuales Actuales (L.)
          </label>
          <input
            type="number"
            value={monthlyRevenue}
            onChange={(e) => setMonthlyRevenue(e.target.value)}
            className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-inter placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
            placeholder="50000"
          />
        </div>

        <div>
          <label className="block text-white font-inter font-semibold mb-2">
            Tasa de Conversión Actual (%)
          </label>
          <input
            type="number"
            value={conversionRate}
            onChange={(e) => setConversionRate(e.target.value)}
            className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-inter placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
            placeholder="2"
            step="0.1"
          />
        </div>

        <div>
          <label className="block text-white font-inter font-semibold mb-2">
            Ticket Promedio (L.)
          </label>
          <input
            type="number"
            value={averageTicket}
            onChange={(e) => setAverageTicket(e.target.value)}
            className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-inter placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
            placeholder="500"
          />
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <p className="text-white/80 font-inter text-sm mb-1">Clientes Actuales/Mes</p>
          <p className="text-3xl font-bold font-poppins text-white">{results.currentMonthlyLeads}</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <p className="text-white/80 font-inter text-sm mb-1">Clientes Proyectados/Mes</p>
          <p className="text-3xl font-bold font-poppins text-accent">{results.projectedMonthlyLeads}</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <p className="text-white/80 font-inter text-sm mb-1">Ingresos Adicionales/Mes</p>
          <p className="text-3xl font-bold font-poppins text-white">L. {results.additionalRevenue.toLocaleString('es-HN')}</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <p className="text-white/80 font-inter text-sm mb-1">ROI Estimado</p>
          <p className="text-3xl font-bold font-poppins text-accent">{results.roi}%</p>
        </div>
      </div>

      {/* CTA */}
      <a
        href="https://wa.me/50498765432"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full px-6 py-4 bg-accent text-white rounded-lg font-nunito font-bold text-center hover:bg-opacity-90 transition-all duration-300 shadow-lg"
      >
        Solicitar Análisis Personalizado
      </a>
    </div>
  );
};

export default ROICalculator;