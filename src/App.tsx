import { useState, useEffect, useCallback } from "react"
import type { Work } from "@/data/works"
import CustomCursor from "@/components/CustomCursor"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Gallery from "@/components/Gallery"
import Lightbox from "@/components/Lightbox"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function App() {
  const [lightbox, setLightbox] = useState<Work | null>(null)
  const [activeSection, setActiveSection] = useState("inicio")
  const { hoverIn, hoverOut, CursorElements } = CustomCursor()

  // Track active section on scroll
  useEffect(() => {
    const onScroll = () => {
      const sections = ["inicio", "obras", "sobre", "contacto"]
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 80 && rect.bottom > 80) {
            setActiveSection(id)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <div className="min-h-screen" style={{ background: "var(--color-bg)", color: "var(--color-heading)", fontFamily: "var(--font-body)" }}>
      {CursorElements}

      <Header
        activeSection={activeSection}
        onNavigate={scrollTo}
        hoverIn={hoverIn}
        hoverOut={hoverOut}
      />

      <main>
        <Hero
          onNavigate={scrollTo}
          hoverIn={hoverIn}
          hoverOut={hoverOut}
        />

        <Gallery
          onSelectWork={setLightbox}
          hoverIn={hoverIn}
          hoverOut={hoverOut}
        />

        <About />

        <Contact
          hoverIn={hoverIn}
          hoverOut={hoverOut}
        />
      </main>

      <Footer />

      {lightbox && (
        <Lightbox
          work={lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  )
}
