import { motion } from 'framer-motion'

const experience = [
  {
    company: 'HighRadius',
    role: 'Data Analytics Intern',
    period: '2022',
    summary: 'Built analytics insights and automated reporting for finance workflows using SQL and Python.',
    accent: 'from-cyan-400 to-blue-500',
  },
  {
    company: 'KPMG Virtual Internship',
    role: 'Consulting Analyst',
    period: '2023',
    summary: 'Delivered market research and data-backed recommendations for enterprise digital transformation.',
    accent: 'from-fuchsia-500 to-pink-500',
  },
  {
    company: 'Maincraft Technologies',
    role: 'Data Analyst',
    period: '2026',
    summary: 'Developed signal processing prototypes and technical documentation for product validation.',
    accent: 'from-emerald-400 to-teal-500',
  },
  {
    company: 'Bluestock',
    role: 'Data Analyst Intern',
    period: '2026',
    summary: 'Designed dashboards and presented KPI-driven recommendations using Power BI.',
    accent: 'from-violet-500 to-indigo-500',
  },
]

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="mx-auto max-w-4xl space-y-6 px-4 sm:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="space-y-2"
      >
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Experience</p>
        <h2 className="text-3xl font-semibold text-slate-100">Professional background</h2>
      </motion.div>

      <div className="space-y-4">
        {experience.map((item, index) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-900/80 p-5 shadow-[0_16px_60px_-36px_rgba(56,189,248,0.55)]"
          >
            <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent} opacity-90`} />
            <div className="relative z-10 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start">
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <p className="rounded-full bg-slate-950/90 px-2.5 py-1 text-[10px] uppercase tracking-[0.35em] text-cyan-300 ring-1 ring-cyan-500/20">
                    {item.period}
                  </p>
                  <span className={`rounded-full bg-gradient-to-r ${item.accent} px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-950 shadow-lg shadow-cyan-500/10`}>
                    {item.company}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-100">{item.role}</h3>
                <p className="mt-2 max-w-xl text-sm text-slate-300">{item.summary}</p>
              </div>

              <div className="rounded-[1.4rem] border border-white/10 bg-slate-950/90 p-3 text-xs text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <p className="font-medium text-cyan-300">Highlight</p>
                <p className="mt-1 text-slate-300">Showcased leadership in analytics, reporting, validation, and dashboard design.</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
