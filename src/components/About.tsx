import { EXHIBITIONS } from "@/data/exhibitions"

export default function About() {
  return (
    <section
      id="sobre"
      className="px-6 md:px-10 py-24 max-w-[1400px] mx-auto"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <div className="about-grid">
        {/* Left Column: Biografía, Formación y Obras Monumentales */}
        <div>
          <span
            className="font-body text-[0.65rem] font-semibold uppercase block mb-3"
            style={{ letterSpacing: "0.2em", color: "var(--color-accent)" }}
          >
            Trayectoria del Artista
          </span>

          <h2
            className="font-display font-bold leading-tight mb-6"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
              color: "var(--color-heading)",
            }}
          >
            Maestro Cruz Prieto
          </h2>

          <p
            className="font-body text-base font-light mb-6 leading-relaxed"
            style={{ color: "var(--color-body)" }}
          >
            Cruz Prieto es un reconocido artista plástico y escultor venezolano,
            declarado <strong className="font-semibold text-[var(--color-heading)]">Patrimonio del Estado y de la Nación</strong>.
            Nacido en la Calle Lárez de La Asunción, estado Nueva Esparta el 16 de septiembre de 1959,
            hijo de José Miquel Prieto (Nene) y Aura Bartola de Prieto.
          </p>

          {/* Formación y Docencia */}
          <div
            className="p-6 rounded-xl mb-8 border border-[var(--color-border)]"
            style={{ background: "var(--color-bg-alt)" }}
          >
            <h3
              className="font-display text-lg font-bold mb-4 flex items-center gap-2"
              style={{ color: "var(--color-heading)" }}
            >
              Formación & Docencia
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-body text-xs uppercase tracking-wider font-semibold text-[var(--color-accent)] mb-1">
                  Estudios Académicos
                </h4>
                <p className="font-body text-sm text-[var(--color-body)]">
                  Escuela de Artes Plásticas "Pedro Ángel González" (Nueva Esparta) & Escuela de Artes "Cristóbal Rojas" (Caracas).
                </p>
              </div>

              <div>
                <h4 className="font-body text-xs uppercase tracking-wider font-semibold text-[var(--color-accent)] mb-1">
                  Docente Jubilado
                </h4>
                <p className="font-body text-sm text-[var(--color-body)]">
                  Profesor titular de las cátedras de <strong>Dibujo Exploratorio</strong>, <strong>Dibujo Analítico</strong> y <strong>Escultura</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Obras Monumentales Destacadas */}
          <div className="mb-10">
            <h3
              className="font-display text-xl font-bold mb-4 flex items-center gap-2"
              style={{ color: "var(--color-heading)" }}
            >
              Obras Monumentales Destacadas
            </h3>
            <p className="font-body text-sm text-[var(--color-muted)] mb-4">
              Esculturas públicas y monumentos emblemáticos emplazados en espacios urbanos y patrimonio insular:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                "Virgen de La Asunción",
                "Maestro Prieto",
                "San Pedro de Coche",
              ].map((monument) => (
                <div
                  key={monument}
                  className="p-3.5 rounded-lg border border-[var(--color-border)] text-center font-display font-medium text-sm shadow-sm"
                  style={{
                    background: "var(--color-surface)",
                    color: "var(--color-heading)",
                  }}
                >
                  {monument}
                </div>
              ))}
            </div>
          </div>

          {/* Estadísticas de Trayectoria */}
          <div
            className="grid grid-cols-3 gap-6 pt-8"
            style={{ borderTop: "1px solid var(--color-border)" }}
          >
            {[
              ["300+", "Exposiciones"],
              ["40+", "Años de Carrera"],
              ["Nacional", "Reconocimiento"],
            ].map(([n, l]) => (
              <div key={l}>
                <div
                  className="font-display text-3xl md:text-4xl font-bold leading-none"
                  style={{ color: "var(--color-heading)" }}
                >
                  {n}
                </div>
                <div
                  className="font-body text-[0.7rem] font-semibold uppercase mt-2 tracking-wider"
                  style={{ color: "var(--color-muted)" }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Retrato + Premios y Reconocimientos */}
        <div>
          {/* Foto del Maestro Cruz Prieto */}
          <div className="relative mb-10">
            <div
              className="overflow-hidden rounded-xl border border-[var(--color-border)] shadow-lg"
              style={{ aspectRatio: "3/4", background: "var(--color-surface)" }}
            >
              <img
                src="/images/portrait.jpeg"
                alt="Maestro Cruz Prieto en su taller"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Trayectoria y Reconocimientos */}
          <div
            className="p-6 rounded-xl border border-[var(--color-border)]"
            style={{ background: "var(--color-bg-alt)" }}
          >
            <span
              className="font-body text-[0.65rem] uppercase tracking-widest font-semibold block mb-4"
              style={{ color: "var(--color-accent)" }}
            >
              Premios & Reconocimientos
            </span>

            <p className="font-body text-xs text-[var(--color-muted)] mb-5">
              Más de 300 exposiciones regionales, nacionales e internacionales. Entre los principales reconocimientos destacan:
            </p>

            <div className="space-y-3">
              {EXHIBITIONS.map((ex, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-lg border border-[var(--color-border)]/60 bg-[var(--color-bg)] flex items-start gap-3"
                >
                  <span className="font-display text-xs font-bold text-[var(--color-accent)] pt-0.5">
                    {ex.year}
                  </span>
                  <div>
                    <div
                      className="font-body text-sm font-semibold"
                      style={{ color: "var(--color-heading)" }}
                    >
                      {ex.title}
                    </div>
                    <div
                      className="font-body text-xs mt-0.5"
                      style={{ color: "var(--color-muted)" }}
                    >
                      {ex.venue}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
