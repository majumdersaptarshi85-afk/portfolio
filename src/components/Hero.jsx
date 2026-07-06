import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi'
import InteractiveProfilePhoto from './InteractiveProfilePhoto'

const roles = ['Electronics & Communication Engineer', 'Data Analyst', 'Python Developer']

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] items-center py-14">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-slate-900/70 px-4 py-2 text-sm text-cyan-200 ring-1 ring-cyan-500/20">
            <span className="inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-300" />
            Premium Interactive Portfolio
          </div>

          <div className="space-y-5">
            <h1 className="max-w-3xl text-5xl font-black tracking-[-0.05em] text-slate-100 sm:text-6xl">
              Hi, I’m Saptarshi — an ECE engineer building data-driven portfolio experiences.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              I design signal systems, analytics workflows, and interactive React portfolios for recruiters and technical stakeholders. Explore my projects in RF design, machine learning, and real-world internship delivery.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="cursor-interactive inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View Projects <FiArrowRight />
            </a>
            <a
              href="./resume.pdf"
              className="cursor-interactive inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-slate-200 transition hover:border-cyan-300"
            >
              <FiDownload /> Download Resume
            </a>
            <a
              href="#contact"
              className="cursor-interactive inline-flex items-center gap-2 rounded-full bg-slate-800/90 px-6 py-3 text-slate-100 transition hover:bg-slate-700"
            >
              <FiMail /> Contact Me
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {roles.map(role => (
              <div key={role} className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-glass">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/90">Role</p>
                <p className="mt-3 text-lg font-semibold text-slate-100">{role}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.12 }}
          className="relative"
        >
          <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute -right-8 bottom-10 h-24 w-24 rounded-full bg-fuchsia-500/10 blur-3xl" />
          <InteractiveProfilePhoto />
        </motion.div>
      </div>
    </section>
  )
}
