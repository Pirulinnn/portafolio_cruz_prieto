import { SOCIAL } from "@/data/social"

type ContactProps = {
  hoverIn: () => void
  hoverOut: () => void
}

export default function Contact({ hoverIn, hoverOut }: ContactProps) {
  return (
    <section
      id="contacto"
      className="px-6 md:px-10 py-24 pb-32 relative overflow-hidden"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="contact-grid">
          {/* Left: CTA + Social links */}
          <div>
            <span
              className="font-body text-[0.65rem] uppercase font-semibold block mb-3"
              style={{ letterSpacing: "0.2em", color: "var(--color-accent)" }}
            >
              Contacto Directo
            </span>

            <h2
              className="font-display font-bold leading-tight mb-6"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                letterSpacing: "-0.02em",
                color: "var(--color-heading)",
              }}
            >
              Consultas & Encargos de Escultura y Pintura
            </h2>

            <p
              className="font-body text-base font-light mb-10 leading-relaxed"
              style={{ color: "var(--color-body)" }}
            >
              Para adquisición de obras, encargos monumentales, proyectos públicos o exposiciones institucionales del Maestro Cruz Prieto.
            </p>

            <div className="flex flex-col gap-4">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={hoverIn}
                  onMouseLeave={hoverOut}
                  className="social-link"
                >
                  <span className="shrink-0">{s.icon}</span>
                  <span
                    className="font-body text-sm font-medium"
                    style={{ letterSpacing: "0.05em" }}
                  >
                    {s.label}
                  </span>
                  <svg
                    className="ml-auto opacity-40"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M2 12L12 2M12 2H5M12 2v7"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact info card */}
          <div
            className="p-8 md:p-10 rounded-xl border border-[var(--color-border)] shadow-sm"
            style={{
              background: "var(--color-bg-alt)",
            }}
          >
            <h3
              className="font-display text-2xl font-bold mb-6"
              style={{ color: "var(--color-heading)" }}
            >
              Ubicación & Contacto Institucional
            </h3>

            {[
              { label: "Artista Plástico & Escultor", value: "Maestro Cruz Prieto" },
              { label: "Estudio & Taller", value: "Calle Lárez, La Asunción, Nueva Esparta" },
              { label: "Premios y Reconocimientos", value: "Patrimonio del Estado y de la Nación" }
            ].map((item) => (
              <div
                key={item.label}
                className="pb-4 mb-4"
                style={{ borderBottom: "1px solid var(--color-border)" }}
              >
                <div
                  className="font-body text-[0.65rem] uppercase font-semibold mb-1"
                  style={{ letterSpacing: "0.15em", color: "var(--color-muted)" }}
                >
                  {item.label}
                </div>
                <div className="font-body text-sm font-medium" style={{ color: "var(--color-heading)" }}>
                  {item.value}
                </div>
              </div>
            ))}

            <div
              className="mt-6 p-4 rounded-lg"
              style={{
                background: "var(--color-surface)",
                borderLeft: "3px solid var(--color-accent)",
              }}
            >
              <p
                className="font-body text-xs font-medium"
                style={{ lineHeight: 1.6, color: "var(--color-heading)" }}
              >
                Para la catalogación de obras públicas y monumentos del Maestro Cruz Prieto, comuníquese directamente vía WhatsApp o correo electrónico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
