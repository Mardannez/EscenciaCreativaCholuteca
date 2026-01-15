import React, { useMemo, useRef } from 'react';
import type { PortfolioItem } from '../data';

type Props = {
  title: string;
  icon?: React.ReactNode;
  items: PortfolioItem[];
  activeId?: string | null;
  onSelect: (item: PortfolioItem) => void;
};

export default function CarouselRow({
  title,
  icon,
  items,
  activeId,
  onSelect,
}: Props) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollByCards = (dir: 'left' | 'right') => {
    const el = scrollerRef.current;
    if (!el) return;

    const cardWidth = 240;
    const gap = 16;
    const amount = (cardWidth + gap) * 3 * (dir === 'left' ? -1 : 1);

    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  const rendered = useMemo(() => items, [items]);

  return (
    <section className="section">
      <div className="sectionHeader">
        <div className="sectionIcon">{icon ?? <span>●</span>}</div>
        <h2 className="sectionTitle">{title}</h2>
        <div className="sectionLine" />
      </div>

      <div className="carouselWrap">
        <button
          className="navBtn left"
          onClick={() => scrollByCards('left')}
          aria-label="Anterior"
        >
          ‹
        </button>

        <div ref={scrollerRef} className="carousel">
          {rendered.map((item) => {
            const isActive = activeId === item.id;

            return (
              <button
                key={item.id}
                className={`card ${isActive ? 'active' : ''}`}
                onClick={() => onSelect(item)}
                type="button"
              >
                <div className="thumb">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="cardBody">
                  <p className="cardTitle">{item.title}</p>
                  <p className="cardDesc">
                    {item.description ?? 'Ver detalle del proyecto'}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <button
          className="navBtn right"
          onClick={() => scrollByCards('right')}
          aria-label="Siguiente"
        >
          ›
        </button>
      </div>
    </section>
  );
}
