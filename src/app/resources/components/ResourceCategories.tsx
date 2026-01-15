import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  description: string;
}

interface ResourceCategoriesProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
  className?: string;
}

const ResourceCategories = ({ 
  categories, 
  activeCategory, 
  onCategoryChange,
  className = '' 
}: ResourceCategoriesProps) => {
  return (
    <div className={`bg-card border border-border rounded-lg p-6 ${className}`}>
      <h3 className="text-lg font-bold font-poppins text-text-primary mb-4">
        Categorías
      </h3>
      
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-muted text-text-primary hover:bg-primary hover:bg-opacity-10'
            }`}
          >
            <div className="flex items-center space-x-3">
              <Icon 
                name={category.icon as any} 
                size={20} 
                variant={activeCategory === category.id ? 'solid' : 'outline'} 
              />
              <span className="font-inter font-semibold text-sm">
                {category.name}
              </span>
            </div>
            <span className={`text-xs font-inter font-bold px-2 py-1 rounded-full ${
              activeCategory === category.id
                ? 'bg-white bg-opacity-20' :'bg-primary bg-opacity-10 text-primary'
            }`}>
              {category.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ResourceCategories;