import { motion } from 'framer-motion'
import { FiDownload, FiMail } from 'react-icons/fi'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="sticky top-0 z-30 mx-auto flex w-full items-center justify-between border-b border-white/10 bg-slate-950/90 px-4 py-4 backdrop-blur-xl"
    >
      <a href="#home" className="text-lg font-semibold tracking-wide text-slate-100">
        <span className="text-cyan-300">Saptarshi</span> Portfolio
      </a>

      <nav className="hidden gap-6 md:flex">
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-slate-300 transition hover:text-cyan-300"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="hidden items-center gap-3 md:flex">
        <a
          href="#contact"
          className="cursor-interactive rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200 transition hover:bg-cyan-500/20"
        >
          Contact
        </a>
        <a
          href="./resume.pdf"
          className="cursor-interactive inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
        >
          <FiDownload /> Resume
        </a>
      </div>
    </motion.header>
  )
}
