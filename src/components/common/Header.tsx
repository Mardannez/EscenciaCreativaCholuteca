'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { name: 'Inicio', path: '/homepage' },
    { name: 'Soluciones', path: '/solutions' },
    { name: 'Casos de Éxito', path: '/case-studies' },
    { name: 'Nosotros', path: '/about' },
    { name: 'Contacto', path: '/contact' },
  ];

  const moreItems = [
    { name: 'Recursos', path: '/resources' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isActivePath = (path: string) => pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-card shadow-md transition-all duration-300 ${
          isScrolled ? 'shadow-brand' : ''
        } ${className}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/homepage" className="flex items-center space-x-2 group">
              <div className="relative w-10 h-10 lg:w-12 lg:h-12">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                >
                  <circle cx="24" cy="24" r="22" fill="#1B4B73" />
                  <path
                    d="M24 12L32 20L24 28L16 20L24 12Z"
                    fill="#2E7D5A"
                    className="transition-all duration-300 group-hover:fill-[#E67E22]"
                  />
                  <circle cx="24" cy="24" r="6" fill="#E67E22" />
                  <path
                    d="M24 18V30M18 24H30"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl lg:text-2xl font-bold font-poppins text-primary">
                  Esencia
                </span>
                <span className="text-xl lg:text-2xl font-bold font-poppins text-secondary">
                  Creativa
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-4 py-2 rounded-md font-inter font-semibold text-sm transition-all duration-300 ${
                    isActivePath(item.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-text-primary hover:bg-muted hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* More Dropdown */}
              <div className="relative group">
                <button className="px-4 py-2 rounded-md font-inter font-semibold text-sm text-text-primary hover:bg-muted hover:text-primary transition-all duration-300 flex items-center space-x-1">
                  <span>Más</span>
                  <Icon name="ChevronDownIcon" size={16} variant="outline" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-card rounded-md shadow-brand opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2">
                    {moreItems.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        className={`block px-4 py-2 font-inter text-sm transition-colors duration-300 ${
                          isActivePath(item.path)
                            ? 'bg-primary text-primary-foreground'
                            : 'text-text-primary hover:bg-muted hover:text-primary'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex items-center space-x-4 pl-4">
              <a
                href="https://wa.me/50498765432"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-brand-accent text-brand-accent-foreground rounded-md font-nunito font-bold text-sm hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-brand flex items-center space-x-2 animate-pulse-scale"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={20} variant="solid" />
                <span>Consulta Gratis</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md text-text-primary hover:bg-muted transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <Icon
                name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
                size={24}
                variant="outline"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-background"
            onClick={toggleMobileMenu}
          />
          <div className="absolute top-16 left-0 right-0 bottom-0 bg-card overflow-y-auto">
            <nav className="container mx-auto px-4 py-6 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={toggleMobileMenu}
                  className={`block px-4 py-3 rounded-md font-inter font-semibold text-base transition-all duration-300 ${
                    isActivePath(item.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-text-primary hover:bg-muted hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* More Items in Mobile */}
              <div className="pt-4 border-t border-border">
                <p className="px-4 py-2 text-xs font-inter font-semibold text-text-tertiary uppercase tracking-wider">
                  Más Opciones
                </p>
                {moreItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={toggleMobileMenu}
                    className={`block px-4 py-3 rounded-md font-inter font-semibold text-base transition-all duration-300 ${
                      isActivePath(item.path)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-text-primary hover:bg-muted hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-6">
                <a
                  href="https://wa.me/50498765432"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 bg-brand-accent text-brand-accent-foreground rounded-md font-nunito font-bold text-base hover:bg-opacity-90 transition-all duration-300 shadow-md text-center"
                  onClick={toggleMobileMenu}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="ChatBubbleLeftRightIcon" size={20} variant="solid" />
                    <span>Consulta Gratis</span>
                  </div>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;