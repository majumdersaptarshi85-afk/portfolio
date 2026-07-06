import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = event => {
      setCursor({ x: event.clientX, y: event.clientY })
    }

    const enter = () => setHovering(true)
    const leave = () => setHovering(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', enter)
    window.addEventListener('mouseout', leave)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', enter)
      window.removeEventListener('mouseout', leave)
    }
  }, [])

  return (
    <>
      <div
        className="pointer-events-none fixed left-0 top-0 z-50 h-10 w-10 rounded-full border border-cyan-400/50 bg-cyan-400/10 blur-xl transition-transform duration-150"
        style={{ transform: `translate3d(${cursor.x - 20}px, ${cursor.y - 20}px, 0) scale(${hovering ? 1.5 : 1})` }}
      />
      <div
        className="pointer-events-none fixed left-0 top-0 z-40 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(56,189,248,0.65)]"
        style={{ transform: `translate3d(${cursor.x - 4}px, ${cursor.y - 4}px, 0)` }}
      />
    </>
  )
}
