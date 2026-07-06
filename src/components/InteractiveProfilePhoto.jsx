import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const reactions = [
  {
    key: 'happy',
    emoji: '😊',
    title: 'Joyful',
    message: 'I’m happy you’re here 😄',
    accent: 'from-cyan-400 to-violet-500',
  },
  {
    key: 'surprised',
    emoji: '😮',
    title: 'Surprised',
    message: 'Oh wow, let’s build something awesome 🚀',
    accent: 'from-fuchsia-400 to-rose-500',
  },
  {
    key: 'sad',
    emoji: '😢',
    title: 'Sensitive',
    message: 'You clicked too hard 😢',
    accent: 'from-slate-400 to-sky-500',
  },
  {
    key: 'cool',
    emoji: '😎',
    title: 'Confident',
    message: 'Let’s make your next project shine ✨',
    accent: 'from-cyan-300 to-blue-500',
  },
  {
    key: 'friendly',
    emoji: '❤️',
    title: 'Friendly',
    message: 'Hey! Nice to see you 👋',
    accent: 'from-pink-400 to-amber-400',
  },
]

export default function InteractiveProfilePhoto() {
  const [reactionIndex, setReactionIndex] = useState(0)
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 })
  const [hovered, setHovered] = useState(false)
  const frameRef = useRef(null)

  const reaction = reactions[reactionIndex]

  const transform = useMemo(() => {
    return {
      rotateX: (pointer.y - 0.5) * 16,
      rotateY: (pointer.x - 0.5) * -18,
      x: (pointer.x - 0.5) * 14,
      y: (pointer.y - 0.5) * 10,
    }
  }, [pointer])

  const eyeOffset = useMemo(() => ({
    x: (pointer.x - 0.5) * 10,
    y: (pointer.y - 0.5) * 6,
  }), [pointer])

  useEffect(() => {
    const frame = frameRef.current
    if (!frame) return

    const handlePointerMove = event => {
      const rect = frame.getBoundingClientRect()
      setPointer({
        x: Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1),
        y: Math.min(Math.max((event.clientY - rect.top) / rect.height, 0), 1),
      })
    }

    frame.addEventListener('pointermove', handlePointerMove)
    return () => frame.removeEventListener('pointermove', handlePointerMove)
  }, [])

  const handleClick = () => {
    setReactionIndex(prev => (prev + 1) % reactions.length)
  }

  return (
    <div className="relative mx-auto w-full max-w-[380px] rounded-[2rem] border border-white/10 bg-slate-950/70 p-4 shadow-glass backdrop-blur-2xl">
      <motion.div
        ref={frameRef}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onClick={handleClick}
        className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-900/70 p-5 shadow-neon shadow-cyan-500/10 transition duration-300"
        whileHover={{ scale: 1.015 }}
        transition={{ type: 'spring', stiffness: 190, damping: 18 }}
      >
        <motion.div
          animate={{
            rotateX: transform.rotateX,
            rotateY: transform.rotateY,
            x: transform.x,
            y: transform.y,
            scale: hovered ? 1.01 : 1,
          }}
          transition={{ type: 'spring', stiffness: 180, damping: 18 }}
          className="relative rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-800 p-2"
        >
          <div className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-cyan-400/10 blur-2xl" />
          <div className="absolute -right-8 bottom-12 h-24 w-24 rounded-full bg-fuchsia-500/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.8rem] bg-slate-950/80">
            <img
              src="./profile.jpg"
              alt="Profile illustration"
              className="relative z-10 mx-auto h-[360px] w-full select-none object-cover"
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="relative h-24 w-24 rounded-full bg-slate-950/40 backdrop-blur-sm">
                <div
                  className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-100 shadow-[0_0_18px_rgba(255,255,255,0.25)]"
                  style={{ transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)` }}
                />
                <div
                  className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-100 shadow-[0_0_18px_rgba(255,255,255,0.25)]"
                  style={{ transform: `translate(${eyeOffset.x * 0.8}px, ${eyeOffset.y * 0.8}px)` }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(192,132,252,0.16),_transparent_28%)]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="relative mt-6 rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-slate-200"
      >
        <div className={`absolute inset-x-4 -top-5 mx-auto h-12 w-12 rounded-full bg-gradient-to-br ${reaction.accent} blur-2xl opacity-70`} />
        <div className="relative z-10">
          <div className="mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            <span className="text-2xl">{reaction.emoji}</span>
            <span>{reaction.title}</span>
          </div>
          <p className="leading-7 text-slate-200/90">{reaction.message}</p>
        </div>
      </motion.div>
    </div>
  )
}
