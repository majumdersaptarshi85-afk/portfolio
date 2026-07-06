import { motion } from 'framer-motion'

const circles = [
  { x: '10%', y: '15%', size: 220, color: 'from-cyan-500/20 to-transparent' },
  { x: '80%', y: '10%', size: 280, color: 'from-fuchsia-500/20 to-transparent' },
  { x: '25%', y: '72%', size: 260, color: 'from-slate-400/10 to-transparent' },
  { x: '75%', y: '70%', size: 180, color: 'from-blue-400/10 to-transparent' },
]

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          animate={{ y: ['0%', '6%', '0%'] }}
          transition={{ duration: 12 + index * 2, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute rounded-full bg-gradient-to-br ${circle.color} opacity-70 blur-3xl`}
          style={{ width: circle.size, height: circle.size, left: circle.x, top: circle.y }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0.6),_rgba(15,23,42,0.95)_80%)]" />
    </div>
  )
}
