import { ShaderBackground } from "./ShaderBackground"

type HeroProps = {
  onNavigate: (id: string) => void
  hoverIn: () => void
  hoverOut: () => void
}

export default function Hero({ onNavigate, hoverIn, hoverOut }: HeroProps) {
  return (
    <section
      id="inicio"
      className="min-h-screen relative flex flex-col justify-center overflow-hidden w-full"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* 1. Capa de Fondo (z-0): Canvas WebGL interactivo en tonos marinos */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-75">
        <ShaderBackground className="w-full h-full" />
      </div>

      {/* 2. Capa Gradient de contraste en tono Arena Cálida */}
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, oklch(from var(--color-bg) l c h / 0.92) 0%, oklch(from var(--color-bg) l c h / 0.55) 50%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, var(--color-bg) 0%, transparent 35%)",
        }}
      />

      {/* 3. Capa de Contenidos (z-10): Datos del Artista */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 pt-28 pb-16 min-h-screen flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center my-auto">

          {/* Columna Izquierda: Información de Perfil del Artista */}
          <div className="lg:col-span-7 flex flex-col items-start">

            {/* Distinction Badge */}
            <div className="mb-4 flex flex-wrap gap-2 items-center">
              <span
                className="font-body text-[0.72rem] font-semibold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full border border-[var(--color-border)] shadow-sm"
                style={{
                  color: "var(--color-heading)",
                  background: "var(--color-bg-alt)",
                }}
              >
                Patrimonio del Estado y de la Nación
              </span>
            </div>

            {/* Subtítulo Profesional */}
            <span
              className="font-body text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3"
              style={{ color: "var(--color-accent)" }}
            >
              Artista Plástico & Escultor
            </span>

            {/* Nombre del Artista <h1> */}
            <h1
              className="font-display leading-[0.92] mb-6 tracking-tight text-left select-none"
              style={{ letterSpacing: "-0.03em" }}
            >
              <span
                className="block font-black"
                style={{
                  fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
                  color: "var(--color-heading)",
                }}
              >
                Cruz
              </span>
              <span
                className="block font-light italic"
                style={{
                  fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
                  color: "var(--color-body)",
                }}
              >
                Prieto
              </span>
            </h1>

            {/* Origen y Filiación */}
            <div
              className="p-4 md:p-5 rounded-lg mb-8 max-w-[540px] border border-[var(--color-border)] shadow-sm"
              style={{ background: "var(--color-bg-alt)" }}
            >
              <p
                className="font-body text-sm font-medium leading-relaxed mb-1"
                style={{ color: "var(--color-heading)" }}
              >
                Nacido en la Calle Lárez de La Asunción, Nueva Esparta (16-09-1959).
              </p>
              <p
                className="font-body text-xs font-normal"
                style={{ color: "var(--color-muted)" }}
              >
                Hijo de José Miquel Prieto (Nene) y Aura Bartola de Prieto.
              </p>
            </div>

            {/* Botón Acción (CTA) */}
            <button
              onClick={() => onNavigate("obras")}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
              className="cta-button shadow-md hover:shadow-lg"
            >
              Ver obra & monumentos
              <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
                <path
                  d="M0 4h18M15 1l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            </button>
          </div>

          {/* Columna Derecha: Foto Principal del Maestro Cruz Prieto */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <img
              src="/images/image_hero.png"
              alt="Maestro Cruz Prieto — Artista Plástico & Escultor"
              fetchPriority="high"
              className="w-full max-w-[480px] h-auto object-cover block rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Indicador inferior de Scroll */}
        <div className="w-full flex justify-between items-end pt-6">
          <div className="hidden sm:flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span className="font-body text-[0.65rem] uppercase tracking-widest text-[var(--color-muted)] font-medium">
              Portafolio Institucional del Maestro Cruz Prieto
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 ml-auto">
            <div
              className="w-px h-12"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, var(--color-muted))",
              }}
            />
            <span
              className="font-body text-[0.6rem] uppercase tracking-[0.2em] text-[var(--color-muted)]"
              style={{ writingMode: "vertical-rl" }}
            >
              Scroll
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
