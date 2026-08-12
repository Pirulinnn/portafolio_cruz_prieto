import { useState } from "react"
import type { Work } from "@/data/works"

type WorkCardProps = {
  work: Work
  onClick: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export default function WorkCard({ work, onClick, onMouseEnter, onMouseLeave }: WorkCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`Ver obra ${work.id} en alta resolución`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onClick()
        }
      }}
      onMouseEnter={() => {
        setHovered(true)
        onMouseEnter()
      }}
      onMouseLeave={() => {
        setHovered(false)
        onMouseLeave()
      }}
      className="relative break-inside-avoid mb-4 sm:mb-6 overflow-hidden rounded-xl [@media(pointer:fine)]:cursor-none cursor-pointer focus-visible:outline-2 focus-visible:outline-accent transition-all duration-500 hover:shadow-2xl group"
      style={{
        background: "var(--color-bg-alt)",
        border: "1px solid var(--color-border)",
      }}
    >
      <img
        src={work.img}
        alt={work.alt || `Obra del Maestro Cruz Prieto ${work.id}`}
        loading="lazy"
        className="w-full h-auto object-cover block transition-all duration-500 ease-out"
        style={{
          transform: hovered ? "scale(1.035)" : "scale(1)",
          filter: hovered ? "brightness(1.04) contrast(1.02)" : "brightness(0.96)",
        }}
      />
    </article>
  )
}
