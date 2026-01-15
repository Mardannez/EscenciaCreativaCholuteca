'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterBarProps {
  selectedIndustry: string;
  selectedResultType: string;
  onIndustryChange: (industry: string) => void;
  onResultTypeChange: (resultType: string) => void;
  onReset: () => void;
}

const FilterBar = ({
  selectedIndustry,
  selectedResultType,
  onIndustryChange,
  onResultTypeChange,
  onReset,
}: FilterBarProps) => {
  const industries = [
    { value: 'all', label: 'Todas las Industrias' },
    { value: 'restaurant', label: 'Restaurantes' },
    { value: 'clinic', label: 'Clínicas' },
    { value: 'retail', label: 'Retail' },
    { value: 'beauty', label: 'Belleza' },
    { value: 'education', label: 'Educación' },
  ];

  const resultTypes = [
    { value: 'all', label: 'Todos los Resultados' },
    { value: 'sales', label: 'Aumento de Ventas' },
    { value: 'leads', label: 'Generación de Leads' },
    { value: 'engagement', label: 'Engagement' },
    { value: 'brand', label: 'Reconocimiento de Marca' },
  ];

  return (
    <div className="bg-card rounded-lg shadow-md p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div className="flex-1">
            <label className="block text-sm font-inter font-semibold text-text-primary mb-2">
              Industria
            </label>
            <div className="relative">
              <select
                value={selectedIndustry}
                onChange={(e) => onIndustryChange(e.target.value)}
                className="w-full px-4 py-2.5 pr-10 bg-background border border-border rounded-md font-source text-text-primary appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              >
                {industries.map((industry) => (
                  <option key={industry.value} value={industry.value}>
                    {industry.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <Icon name="ChevronDownIcon" size={20} variant="outline" className="text-text-tertiary" />
              </div>
            </div>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-inter font-semibold text-text-primary mb-2">
              Tipo de Resultado
            </label>
            <div className="relative">
              <select
                value={selectedResultType}
                onChange={(e) => onResultTypeChange(e.target.value)}
                className="w-full px-4 py-2.5 pr-10 bg-background border border-border rounded-md font-source text-text-primary appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              >
                {resultTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <Icon name="ChevronDownIcon" size={20} variant="outline" className="text-text-tertiary" />
              </div>
            </div>
          </div>
        </div>

        {(selectedIndustry !== 'all' || selectedResultType !== 'all') && (
          <button
            onClick={onReset}
            className="flex items-center justify-center space-x-2 px-6 py-2.5 bg-muted text-text-primary rounded-md font-inter font-semibold text-sm hover:bg-opacity-80 transition-all duration-300 lg:mt-6"
          >
            <Icon name="XMarkIcon" size={16} variant="outline" />
            <span>Limpiar Filtros</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterBar;