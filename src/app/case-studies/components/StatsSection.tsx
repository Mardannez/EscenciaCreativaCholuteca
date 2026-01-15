import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface StatItemProps {
  icon: string;
  value: string;
  label: string;
}

const StatItem = ({ icon, value, label }: StatItemProps) => {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-3">
        <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
          <Icon name={icon as any} size={32} variant="solid" className="text-primary" />
        </div>
      </div>
      <div className="text-4xl font-poppins font-bold text-primary mb-2">{value}</div>
      <div className="text-sm font-inter text-text-secondary">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { icon: 'BriefcaseIcon', value: '50+', label: 'Casos de Éxito' },
    { icon: 'ChartBarIcon', value: '300%', label: 'ROI Promedio' },
    { icon: 'UserGroupIcon', value: '45+', label: 'Clientes Satisfechos' },
    { icon: 'TrophyIcon', value: '98%', label: 'Tasa de Retención' },
  ];

  return (
    <div className="bg-lime-100 from-primary to-secondary py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;