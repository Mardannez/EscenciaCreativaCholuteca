'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface SolutionFinderProps {
  onFilterChange: (filters: FilterState) => void;
}

interface FilterState {
  industry: string;
  budget: string;
  goal: string;
}

const SolutionFinder = ({ onFilterChange }: SolutionFinderProps) => {
  const [filters, setFilters] = useState<FilterState>({
    industry: 'all',
    budget: 'all',
    goal: 'all'
  });

  const industries = [
    { value: 'all', label: 'Todas las Industrias' },
    { value: 'restaurant', label: 'Restaurantes' },
    { value: 'clinic', label: 'Clínicas y Salud' },
    { value: 'retail', label: 'Tiendas y Retail' },
    { value: 'beauty', label: 'Salones de Belleza' },
    { value: 'education', label: 'Escuelas y Educación' }
  ];

  const budgets = [
    { value: 'all', label: 'Todos los Presupuestos' },
    { value: 'low', label: 'L. 5.000 - L. 15.000' },
    { value: 'medium', label: 'L. 15.000 - L. 30.000' },
    { value: 'high', label: 'L. 30.000+' }
  ];

  const goals = [
    { value: 'all', label: 'Todos los Objetivos' },
    { value: 'leads', label: 'Generar Más Clientes' },
    { value: 'brand', label: 'Aumentar Visibilidad' },
    { value: 'sales', label: 'Incrementar Ventas' },
    { value: 'engagement', label: 'Mejorar Engagement' }
  ];

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    const resetState = { industry: 'all', budget: 'all', goal: 'all' };
    setFilters(resetState);
    onFilterChange(resetState);
  };

  return (
    <div className="bg-card rounded-xl shadow-md p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Icon name="FunnelIcon" size={24} variant="solid" className="text-primary" />
          <h3 className="text-xl font-bold font-poppins text-text-primary">Encuentra tu Solución Ideal</h3>
        </div>
        <button
          onClick={resetFilters}
          className="text-sm font-inter font-semibold text-primary hover:text-secondary transition-colors duration-300 flex items-center space-x-1"
        >
          <Icon name="ArrowPathIcon" size={16} variant="outline" />
          <span>Limpiar</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Industry Filter */}
        <div>
          <label className="block text-sm font-inter font-semibold text-text-primary mb-2">
            Tu Industria
          </label>
          <select
            value={filters.industry}
            onChange={(e) => handleFilterChange('industry', e.target.value)}
            className="w-full px-4 py-2.5 bg-background border border-border rounded-lg font-inter text-text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
          >
            {industries.map((industry) => (
              <option key={industry.value} value={industry.value}>
                {industry.label}
              </option>
            ))}
          </select>
        </div>

        {/* Budget Filter */}
        <div>
          <label className="block text-sm font-inter font-semibold text-text-primary mb-2">
            Presupuesto Mensual
          </label>
          <select
            value={filters.budget}
            onChange={(e) => handleFilterChange('budget', e.target.value)}
            className="w-full px-4 py-2.5 bg-background border border-border rounded-lg font-inter text-text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
          >
            {budgets.map((budget) => (
              <option key={budget.value} value={budget.value}>
                {budget.label}
              </option>
            ))}
          </select>
        </div>

        {/* Goal Filter */}
        <div>
          <label className="block text-sm font-inter font-semibold text-text-primary mb-2">
            Objetivo Principal
          </label>
          <select
            value={filters.goal}
            onChange={(e) => handleFilterChange('goal', e.target.value)}
            className="w-full px-4 py-2.5 bg-background border border-border rounded-lg font-inter text-text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
          >
            {goals.map((goal) => (
              <option key={goal.value} value={goal.value}>
                {goal.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SolutionFinder;