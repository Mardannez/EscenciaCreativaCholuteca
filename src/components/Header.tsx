'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Impresiones', href: '/esencia-impresiones' },
  { label: 'Film', href: '/esencia-film' },
  { label: 'Digital', href: '/esencia-digital' },
  { label: 'Vallas', href: '/esencia-vallas' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[200] transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
        aria-label="Navegación principal"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500 ${
              scrolled ? 'glass-nav' : 'bg-transparent'
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" aria-label="Esencia Creativa - Inicio">
              <AppLogo size={36} />
              <span className="font-bold text-lg tracking-tight text-foreground hidden sm:block">
                Esencia<span className="font-serif italic text-accent font-normal"> Creativa</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks?.map((link) => (
                <Link
                  key={link?.href}
                  href={link?.href}
                  className="text-sm font-semibold tracking-wide text-foreground/60 hover:text-accent transition-colors duration-200"
                >
                  {link?.label}
                </Link>
              ))}
              <a
                href="https://wa.me/50427800441?text=Hola,%20me%20interesa%20conocer%20sus%20servicios."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={16} variant="outline" />
                Cotizar
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-xl border border-border text-foreground hover:border-accent hover:text-accent transition-all"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
            >
              <Icon name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={22} variant="outline" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[199] glass-nav flex flex-col items-center justify-center gap-8"
          onClick={() => setMenuOpen(false)}
        >
          <Link href="/" className="flex items-center gap-3 mb-4" onClick={() => setMenuOpen(false)}>
            <AppLogo size={48} />
            <span className="font-bold text-2xl tracking-tight text-foreground">
              Esencia<span className="font-serif italic text-accent font-normal"> Creativa</span>
            </span>
          </Link>
          {navLinks?.map((link) => (
            <Link
              key={link?.href}
              href={link?.href}
              className="text-2xl font-bold tracking-wide text-foreground/70 hover:text-accent transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link?.label}
            </Link>
          ))}
          <a
            href="https://wa.me/50427800441?text=Hola,%20me%20interesa%20conocer%20sus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4"
            onClick={() => setMenuOpen(false)}
          >
            <Icon name="ChatBubbleLeftRightIcon" size={18} variant="outline" />
            Solicitar Cotización
          </a>
        </div>
      )}
    </>
  );
}