export default function Footer() {
  return (
    <footer
      className="flex justify-between items-center flex-wrap gap-4 px-6 md:px-10 py-8 border-t border-[var(--color-border)]"
      style={{
        background: "var(--color-bg-alt)",
      }}
    >
      <span
        className="font-display text-sm font-semibold"
        style={{ color: "var(--color-heading)" }}
      >
        Maestro Cruz Prieto © {new Date().getFullYear()} — Patrimonio del Estado y de la Nación
      </span>

      <span
        className="font-body text-[0.65rem] uppercase font-semibold tracking-wider"
        style={{ color: "var(--color-muted)" }}
      >
        La Asunción · Isla de Coche · Caracas · Nueva Esparta
      </span>
    </footer>
  )
}
