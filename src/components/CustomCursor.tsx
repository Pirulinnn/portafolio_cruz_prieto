import { useEffect, useRef, useCallback } from "react"

/**
 * Custom cursor that only renders on devices with a fine pointer (mouse).
 * Hidden automatically on touch devices via CSS.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px"
        dotRef.current.style.top = e.clientY + "px"
      }
      if (ringRef.current) {
        ringRef.current.style.left = e.clientX + "px"
        ringRef.current.style.top = e.clientY + "px"
      }
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  const expand = useCallback(() => {
    dotRef.current?.classList.add("expanded")
    ringRef.current?.classList.add("expanded")
  }, [])

  const shrink = useCallback(() => {
    dotRef.current?.classList.remove("expanded")
    ringRef.current?.classList.remove("expanded")
  }, [])

  return {
    dotRef,
    ringRef,
    hoverIn: expand,
    hoverOut: shrink,
    CursorElements: (
      <>
        <div ref={dotRef} className="cursor-dot" />
        <div ref={ringRef} className="cursor-ring" />
      </>
    ),
  }
}
