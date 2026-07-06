import { motion } from 'framer-motion'

const education = [
  {
    degree: 'M.Tech – Radio Physics & Electronics',
    institution: 'Institute of Radio Physics and Electronics, University of Calcutta',
    year: '2024 - 2026',
    detail: 'CGPA: 8.38',
  },
  {
    degree: 'B.Tech – Electronics & Communication Engineering',
    institution: 'Narula Institute of Technology, MAKAUT',
    year: '2019 - 2023',
    detail: 'CGPA: 8.93',
  },
]

export default function Education() {
  return (
    <section id="education" className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="space-y-3"
      >
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Education</p>
        <h2 className="text-4xl font-bold text-slate-100">Academic credentials with a premium timeline</h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item, index) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            className="rounded-[1.8rem] border border-white/10 bg-slate-900/80 p-6 shadow-glass"
          >
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">{item.year}</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-100">{item.degree}</h3>
            <p className="mt-3 text-slate-300">{item.institution}</p>
            {item.detail && <p className="mt-2 text-sm text-cyan-300">{item.detail}</p>}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
