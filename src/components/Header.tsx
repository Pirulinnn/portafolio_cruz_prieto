import { useState, useCallback } from "react"

type HeaderProps = {
  activeSection: string
  onNavigate: (id: string) => void
  hoverIn: () => void
  hoverOut: () => void
}

const NAV_ITEMS: [string, string][] = [
  ["obras", "Obras"],
  ["sobre", "Trayectoria"],
  ["contacto", "Contacto"],
]

export default function Header({ activeSection, onNavigate, hoverIn, hoverOut }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const navigate = useCallback(
    (id: string) => {
      setMenuOpen(false)
      onNavigate(id)
    },
    [onNavigate],
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-100 backdrop-blur-md border-b border-[var(--color-border)]/40">
      <nav
        className="flex items-center justify-between px-6 md:px-10 py-5"
        style={{
          background: "linear-gradient(to bottom, oklch(from var(--color-bg) l c h / 0.95) 0%, oklch(from var(--color-bg) l c h / 0.85) 100%)",
        }}
      >
        <button
          onClick={() => navigate("inicio")}
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
          className="font-display text-xl md:text-2xl font-bold tracking-tight text-heading border-none bg-transparent cursor-pointer [@media(pointer:fine)]:cursor-none"
          style={{ letterSpacing: "-0.02em", color: "var(--color-heading)" }}
        >
          Cruz Prieto
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(([id, label]) => (
            <button
              key={id}
              onClick={() => navigate(id)}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
              className="font-body text-xs font-semibold uppercase tracking-widest bg-transparent border-none transition-colors duration-300 [@media(pointer:fine)]:cursor-none cursor-pointer"
              style={{
                letterSpacing: "0.12em",
                color: activeSection === id ? "var(--color-accent)" : "var(--color-muted)",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menú"
          aria-expanded={menuOpen}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="transition-all duration-300"
              style={{
                width: 24,
                height: 1.5,
                background: "var(--color-heading)",
                marginBottom: i < 2 ? 6 : 0,
                opacity: menuOpen && i === 1 ? 0 : 1,
                transform:
                  menuOpen && i === 0
                    ? "rotate(45deg) translateY(7px)"
                    : menuOpen && i === 2
                      ? "rotate(-45deg) translateY(-7px)"
                      : "none",
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-99 flex flex-col items-center justify-center gap-8 mobile-menu-enter"
          style={{ background: "var(--color-bg)" }}
        >
          {NAV_ITEMS.map(([id, label]) => (
            <button
              key={id}
              onClick={() => navigate(id)}
              className="font-display text-4xl italic font-light border-none bg-transparent cursor-pointer"
              style={{ color: "var(--color-heading)" }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
