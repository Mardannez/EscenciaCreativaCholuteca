"use client";

import React, { useMemo, useState } from "react";
import CarouselRow from "./CarouselRow";
import { portfolioItems, type PortfolioItem } from "../data";

export default function PortfolioCarouselSection() {
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  const destacados = useMemo(
    () => portfolioItems.filter((x) => x.category === "destacados"),
    []
  );
  const videos = useMemo(
    () => portfolioItems.filter((x) => x.category === "videos"),
    []
  );

  return (
    <>
         <div className="page">
      <div className="panel">
        <CarouselRow
          title="Destacados"
          icon={<span style={{ color: '#2563eb' }}>🎥</span>}
          items={destacados}
          activeId={selected?.id ?? null}
          onSelect={setSelected}
        />

        <CarouselRow
          title="Más videos"
          icon={<span style={{ color: '#2563eb' }}>▦</span>}
          items={videos}
          activeId={selected?.id ?? null}
          onSelect={setSelected}
        />

        {/* “Detalle” simulado */}
        <div className="detail">
          <h3 className="detailTitle">Detalle</h3>

          {!selected ? (
            <p className="detailEmpty">
              Selecciona una tarjeta del carrusel para ver el detalle aquí.
            </p>
          ) : (
            <div className="detailGrid">
              <div className="detailImg">
                <img src={selected.image} alt={selected.title} />
              </div>
              <div>
                <h4 className="detailName">{selected.title}</h4>
                <p className="detailText">
                  {selected.description ??
                    'Aquí puedes mostrar información del proyecto.'}
                </p>

                <button className="clearBtn" onClick={() => setSelected(null)}>
                  Limpiar selección
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}
