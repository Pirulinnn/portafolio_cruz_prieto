import { useEffect, useCallback } from "react"
import type { Work } from "@/data/works"

type LightboxProps = {
  work: Work
  onClose: () => void
}

export default function Lightbox({ work, onClose }: LightboxProps) {
  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    },
    [onClose],
  )

  useEffect(() => {
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Vista previa de la obra"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 lightbox-backdrop cursor-pointer"
      style={{
        background: "rgba(10, 15, 25, 0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {/* Botón de cierre "X" en la esquina superior derecha */}
      <button
        onClick={onClose}
        aria-label="Cerrar vista previa"
        className="fixed top-5 right-5 sm:top-8 sm:right-8 z-60 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/20 transition-all duration-300 cursor-pointer shadow-lg backdrop-blur-md group"
      >
        <svg
          className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Imagen centrada en alta resolución (Sin textos ni tarjetas) */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-full max-h-full flex items-center justify-center cursor-default select-none"
      >
        <img
          src={work.img}
          alt={work.alt || `Obra del Maestro Cruz Prieto ${work.id}`}
          className="block max-h-[88vh] max-w-[90vw] w-auto h-auto object-contain rounded-lg shadow-2xl border border-white/10"
        />
      </div>
    </div>
  )
}
