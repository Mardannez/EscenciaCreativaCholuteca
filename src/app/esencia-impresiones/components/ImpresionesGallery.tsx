'use client';
import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import AppIcon from '@/components/ui/AppIcon';

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  images: GalleryImage[];
}

const galleryCategories: GalleryCategory[] = [
{
  id: 'banners-lonas',
  title: 'Banners y Lonas',
  icon: 'RectangleGroupIcon',
  color: 'from-amber-500/20 to-yellow-600/10',
  images: [
  {
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_12594104d-1782838139496.png',
    alt: 'Banner publicitario de lona flex instalado en fachada de negocio con gráficos vibrantes'
  },
  {
    src: "https://images.unsplash.com/photo-1647707343317-743a7fbb4568",
    alt: 'Lona publicitaria de gran formato en estructura metálica exterior'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1f88ed927-1772580317390.png",
    alt: 'Banner de evento corporativo con diseño colorido y tipografía llamativa'
  },
  {
    src: "https://images.unsplash.com/photo-1602884884559-da8f58ad3ec7",
    alt: 'Lona mesh instalada en andamio de construcción con publicidad de marca'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1435c5d42-1766237611488.png",
    alt: 'Banner horizontal de alta resolución en sala de conferencias empresarial'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_167ebcb8c-1772546460505.png",
    alt: 'Lona publicitaria de vinilo para evento al aire libre con colores brillantes'
  }]

},
{
  id: 'rotulos-comerciales',
  title: 'Rótulos Comerciales',
  icon: 'BuildingStorefrontIcon',
  color: 'from-blue-500/20 to-cyan-600/10',
  images: [
  {
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_14645a4e8-1772221544505.png',
    alt: 'Rótulo luminoso de negocio comercial con letras corpóreas iluminadas en fachada nocturna'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_111b55346-1784013106115.png",
    alt: 'Letrero comercial de acrílico iluminado con logo de empresa en fachada moderna'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_179aa7b5e-1784208670476.png",
    alt: 'Rótulo de tienda retail con letras corpóreas doradas sobre fondo oscuro'
  },
  {
    src: "https://images.unsplash.com/photo-1725760926519-b01b46fb8ec2",
    alt: 'Señalización de restaurante con rótulo luminoso LED en entrada principal'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1a8198119-1785758427092.png",
    alt: 'Rótulo corporativo de oficina con logo en relieve sobre pared de recepción'
  },
  {
    src: "https://images.unsplash.com/photo-1607629121862-2ee27433a9d9",
    alt: 'Letras corpóreas metálicas con iluminación posterior en fachada de empresa'
  }]

},
{
  id: 'vinil-adhesivo',
  title: 'Vinil Adhesivo',
  icon: 'SwatchIcon',
  color: 'from-purple-500/20 to-violet-600/10',
  images: [
  {
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1dc110937-1766503737898.png',
    alt: 'Rotulación vehicular con vinil adhesivo de colores en camioneta de empresa'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1f09e2e9a-1772237779991.png",
    alt: 'Vinil adhesivo decorativo aplicado en ventana de local comercial con diseño geométrico'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1c722e8c7-1777844814276.png",
    alt: 'Vinil microperforado en cristal de vehículo con publicidad de marca visible desde exterior'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1dc110937-1766503737898.png",
    alt: 'Rotulación completa de automóvil con vinil de color sólido y logotipo corporativo'
  },
  {
    src: "https://images.unsplash.com/photo-1613050118698-9194f6d51281",
    alt: 'Vinil adhesivo de pared con mural decorativo en oficina moderna'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_113864bdd-1772222240398.png",
    alt: 'Stickers de vinil personalizados en diferentes formas y tamaños sobre superficie blanca'
  }]

},
{
  id: 'material-pop',
  title: 'Material POP y Displays',
  icon: 'PresentationChartBarIcon',
  color: 'from-green-500/20 to-emerald-600/10',
  images: [
  {
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_15d1a104e-1765380916501.png',
    alt: 'Roll up publicitario en stand de exposición con diseño corporativo elegante'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_131f2452b-1779436762832.png",
    alt: 'Stand de exhibición con displays y material POP en feria comercial'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_131d64cd8-1785925255091.png",
    alt: 'Roll up retráctil con diseño de producto en punto de venta de supermercado'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1b602bbd7-1772116630922.png",
    alt: 'Display de cartón corrugado para exhibición de productos en tienda retail'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1ff8c4dd3-1786981416945.png",
    alt: 'Exhibidor de piso con material POP para campaña promocional de marca'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1cfacc77f-1772132485649.png",
    alt: 'Backdrop fotográfico con diseño corporativo para evento de empresa'
  }]

},
{
  id: 'impresos-corporativos',
  title: 'Impresos Corporativos',
  icon: 'DocumentTextIcon',
  color: 'from-rose-500/20 to-pink-600/10',
  images: [
  {
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_13c17b42c-1770483920366.png',
    alt: 'Tarjetas de presentación y brochures corporativos impresos con acabado premium sobre mesa'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_199b39942-1772743387121.png",
    alt: 'Brochure corporativo trifold abierto mostrando diseño interior con fotografías e información'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1ea64fc0f-1767794282554.png",
    alt: 'Flyers promocionales apilados con diseño colorido para campaña de marketing'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_16c84489b-1772813046011.png",
    alt: 'Tarjetas de presentación premium con acabado mate y foil dorado sobre fondo oscuro'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1b9bebac1-1767956635199.png",
    alt: 'Catálogo corporativo impreso con fotografías de productos y descripción detallada'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1b0cfd6e9-1767763571291.png",
    alt: 'Papelería corporativa completa con membrete, sobres y carpetas con identidad visual'
  }]

},
{
  id: 'senaletica',
  title: 'Señalética Empresarial',
  icon: 'MapIcon',
  color: 'from-orange-500/20 to-amber-600/10',
  images: [
  {
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1c2d1e864-1775852146668.png',
    alt: 'Señalética corporativa en pasillo de oficina moderna con indicadores direccionales claros'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1e7e3168f-1786981415060.png",
    alt: 'Sistema de señalización de seguridad en planta industrial con iconografía estandarizada'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_10f75ad0b-1786981416930.png",
    alt: 'Directorio de pisos en lobby de edificio corporativo con letras en relieve'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_136d16ff0-1772061545208.png",
    alt: 'Señales de evacuación y emergencia instaladas en corredor de hospital'
  },
  {
    src: "https://images.unsplash.com/photo-1717525053420-301762050b1d",
    alt: 'Señalética de identificación de áreas en centro comercial moderno'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1107d130d-1783228036545.png",
    alt: 'Placa de identificación de sala de reuniones con nombre grabado en acrílico'
  }]

}];


export default function ImpresionesGallery() {
  const [activeCategory, setActiveCategory] = useState<string>(galleryCategories[0].id);
  const [lightboxImg, setLightboxImg] = useState<GalleryImage | null>(null);

  const currentCategory = galleryCategories.find((c) => c.id === activeCategory)!;

  return (
    <section className="py-24 px-6 bg-card/30" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="section-label mb-4">Nuestro trabajo</p>
          <h2 id="gallery-heading" className="text-section-xl font-bold tracking-tight text-foreground">
            Galería de{' '}
            <span className="font-serif italic font-normal text-accent">proyectos.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Explora ejemplos reales de cada categoría de servicio. Selecciona una categoría para ver los trabajos realizados.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {galleryCategories.map((cat) =>
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
            activeCategory === cat.id ?
            'bg-accent text-background border-accent shadow-lg shadow-accent/20' :
            'bg-card border-border text-muted-foreground hover:border-accent/40 hover:text-foreground'}`
            }
            aria-pressed={activeCategory === cat.id}>
            
              <AppIcon
              name={cat.icon as 'MapIcon'}
              size={15}
              className={activeCategory === cat.id ? 'text-background' : 'text-accent'}
              variant="outline" />
            
              {cat.title}
            </button>
          )}
        </div>

        {/* Gallery Grid */}
        <div
          key={activeCategory}
          className={`rounded-3xl p-6 bg-gradient-to-br ${currentCategory.color} border border-border`}>
          
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
              <AppIcon
                name={currentCategory.icon as 'MapIcon'}
                size={18}
                className="text-accent"
                variant="outline" />
              
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">{currentCategory.title}</h3>
              <p className="text-xs text-muted-foreground">{currentCategory.images.length} trabajos</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {currentCategory.images.map((img, idx) =>
            <button
              key={idx}
              onClick={() => setLightboxImg(img)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 hover:border-accent/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label={`Ver imagen: ${img.alt}`}>
              
                <AppImage
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
              
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <AppIcon name="MagnifyingGlassPlusIcon" size={18} className="text-white" variant="outline" />
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImg &&
      <div
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={() => setLightboxImg(null)}
        role="dialog"
        aria-modal="true"
        aria-label="Vista ampliada de imagen">
        
          <button
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          onClick={() => setLightboxImg(null)}
          aria-label="Cerrar vista ampliada">
          
            <AppIcon name="XMarkIcon" size={20} className="text-white" variant="outline" />
          </button>
          <div
          className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}>
          
            <AppImage
            src={lightboxImg.src}
            alt={lightboxImg.alt}
            width={1200}
            height={800}
            className="w-full h-auto object-contain max-h-[80vh]" />
          
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white text-sm">{lightboxImg.alt}</p>
            </div>
          </div>
        </div>
      }
    </section>);

}