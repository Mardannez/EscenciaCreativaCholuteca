'use client';

import React, { useEffect, useRef } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

const archImages = [
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_15cb7337c-1772794735812.png",
  alt: 'Diseño gráfico con colores vibrantes sobre fondo oscuro, composición editorial moderna',
  style: { left: '3%', top: '68%', transform: 'rotate(-35deg)' },
  mobileStyle: { left: '1%', top: '72%', transform: 'rotate(-35deg)' }
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_169b69d9a-1772689422606.png",
  alt: 'Estudio de fotografía con iluminación dramática y equipo profesional',
  style: { left: '12%', top: '38%', transform: 'rotate(-24deg)' },
  mobileStyle: { left: '5%', top: '45%', transform: 'rotate(-24deg)' }
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1c41d0182-1772282696997.png",
  alt: 'Producción de video en estudio con cámara profesional y luces de estudio',
  style: { left: '23%', top: '14%', transform: 'rotate(-13deg)' },
  mobileStyle: { left: '12%', top: '22%', transform: 'rotate(-13deg)' }
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1b65aa01d-1764655135240.png",
  alt: 'Pantalla de computadora mostrando diseño de redes sociales y marketing digital',
  style: { left: '36%', top: '3%', transform: 'rotate(-4deg)' },
  mobileStyle: { left: '25%', top: '8%', transform: 'rotate(-4deg)' }
},
{
  src: "https://images.unsplash.com/photo-1636695259944-4c34e87574ca",
  alt: 'Valla publicitaria grande en avenida urbana con tráfico vehicular',
  style: { left: '50%', top: '3%', transform: 'rotate(4deg)' },
  mobileStyle: { left: '50%', top: '8%', transform: 'rotate(4deg)' }
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1de0ba47e-1774709041892.png",
  alt: 'Impresión de banner publicitario en gran formato con colores intensos',
  style: { left: '63%', top: '14%', transform: 'rotate(13deg)' },
  mobileStyle: { left: '63%', top: '22%', transform: 'rotate(13deg)' }
},
{
  src: "https://images.unsplash.com/photo-1612894542733-219bb3476343",
  alt: 'Filmación cinematográfica con cámara en movimiento y luz cálida dorada',
  style: { left: '76%', top: '38%', transform: 'rotate(24deg)' },
  mobileStyle: { left: '76%', top: '45%', transform: 'rotate(24deg)' }
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1aeac0fa8-1786979695493.png",
  alt: 'Diseño de identidad visual con logos y paletas de colores de marca',
  style: { left: '88%', top: '68%', transform: 'rotate(35deg)' },
  mobileStyle: { left: '86%', top: '72%', transform: 'rotate(35deg)' }
}];


export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const images = imageRefs.current.filter(Boolean) as HTMLDivElement[];
    const content = contentRef.current;

    // Animate images with staggered CSS transitions
    images.forEach((img, i) => {
      img.style.opacity = '0';
      img.style.transform = img.style.transform + ' translateY(30px)';
      img.style.transition = `opacity 1.4s ease, transform 1.4s cubic-bezier(0.34, 1.56, 0.64, 1)`;
      setTimeout(() => {
        img.style.opacity = '1';
        img.style.transform = img.style.transform.replace(' translateY(30px)', '');
      }, 200 + i * 80);
    });

    // Animate content block
    if (content) {
      content.style.opacity = '0';
      content.style.transform = 'translateY(30px)';
      content.style.transition = 'opacity 1s ease, transform 1s ease';
      setTimeout(() => {
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
      }, 800);
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-40 pb-24 overflow-hidden"
      aria-label="Sección principal">
      
      {/* Background glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(232,184,75,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
        aria-hidden="true" />
      
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(232,184,75,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}
        aria-hidden="true" />
      

      {/* Arching Image Gallery */}
      <div
        className="absolute top-24 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[380px] pointer-events-none"
        aria-hidden="true">
        
        {archImages.map((img, i) =>
        <div
          key={i}
          ref={(el) => {imageRefs.current[i] = el;}}
          className="arch-image pointer-events-auto"
          style={img.style}>
          
            <AppImage
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover rounded-2xl"
            sizes="130px" />
          
          </div>
        )}
      </div>

      {/* Hero Content */}
      <div ref={contentRef} className="max-w-4xl mx-auto px-6 relative z-10 text-center mt-48 sm:mt-52">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-col items-center gap-4">
            <AppLogo size={80} className="animate-float" />
            <span className="text-2xl font-bold tracking-tight text-foreground">
              Esencia<span className="font-serif italic text-accent font-normal ml-1">Creativa</span>
            </span>
          </div>
        </div>

        {/* Title */}
        <h1
          className="text-hero-xl font-bold tracking-tight text-foreground mb-6">
          
          Ideas que comunican,{' '}
          <span className="font-serif italic font-normal gold-gradient-text">
            marcas que trascienden.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
          
          Agencia creativa en Choluteca, Honduras. Diseñamos, producimos y comunicamos la esencia de tu marca con impresiones, audiovisual, marketing digital y vallas publicitarias.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#servicios" className="btn-primary">
            <Icon name="SparklesIcon" size={18} variant="outline" />
            Ver Servicios
          </a>
          <a
            href="https://wa.me/50427800441?text=Hola,%20me%20interesa%20una%20cotización."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline">
            
            <Icon name="ChatBubbleLeftRightIcon" size={18} variant="outline" />
            Solicitar Cotización
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-40 animate-bounce">
        <Icon name="ChevronDownIcon" size={28} className="text-foreground" variant="outline" />
      </div>
    </section>);

}