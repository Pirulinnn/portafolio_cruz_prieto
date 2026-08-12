import { WORKS } from "@/data/works"
import type { Work } from "@/data/works"
import WorkCard from "./WorkCard"

type GalleryProps = {
  onSelectWork: (work: Work) => void
  hoverIn: () => void
  hoverOut: () => void
}

export default function Gallery({ onSelectWork, hoverIn, hoverOut }: GalleryProps) {
  return (
    <section id="obras" className="px-4 sm:px-6 md:px-10 py-20 md:py-28 max-w-[1400px] mx-auto">
      {/* Encabezado minimalista de la galería */}
      <div
        className="flex items-end justify-between flex-wrap gap-6 mb-10 md:mb-14 pb-6 md:pb-8"
        style={{ borderBottom: "1px solid var(--color-border)" }}
      >
        <div>
          <span
            className="font-body text-[0.65rem] uppercase block mb-2"
            style={{ letterSpacing: "0.2em", color: "var(--color-accent)" }}
          >
            Galería
          </span>
          <h2
            className="font-display font-bold leading-none"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.02em",
              color: "var(--color-heading)",
            }}
          >
            Obras de Arte
          </h2>
        </div>
        <span className="font-body text-xs text-[var(--color-muted)] font-medium tracking-wider">
          {WORKS.length} Colección Visual
        </span>
      </div>

      {/* Layout Mosaico Masonry Orgánico (Mobile-First: 2 columnas asimétricas; Desktop: 3 o 4 columnas) */}
      <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-6">
        {WORKS.map((work) => (
          <WorkCard
            key={work.id}
            work={work}
            onClick={() => onSelectWork(work)}
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
          />
        ))}
      </div>
    </section>
  )
}
