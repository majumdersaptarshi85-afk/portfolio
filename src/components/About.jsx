import { motion } from 'framer-motion'
import { FiActivity, FiCpu, FiLayers } from 'react-icons/fi'

const aboutCards = [
  {
    title: 'Design-led Engineering',
    description: 'Blending hardware understanding with polished UI and data analytics workflows to deliver modern portfolio stories.',
    icon: FiCpu,
  },
  {
    title: 'Strategic Insights',
    description: 'Turning complex datasets into visual narratives, clean dashboards, and actionable recommendations.',
    icon: FiLayers,
  },
  {
    title: 'Futuristic Interfaces',
    description: 'Creating premium interactive web experiences with depth, glassmorphism, and polished motion.',
    icon: FiActivity,
  },
]

export default function About() {
  return (
    <section id="about" className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="space-y-3"
      >
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">About Me</p>
        <h2 className="text-4xl font-bold text-slate-100">Professional background with a futuristic edge</h2>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-glass"
        >
          <p className="mb-6 max-w-xl text-lg leading-8 text-slate-300">
            I bring experience from HighRadius, KPMG Virtual Internship, Maincraft Technologies, and Bluestock to every project. My work blends RF and signal design with analytics, Python automation, and premium UI motion.
          </p>
          <div className="space-y-4 text-slate-300">
            <p>• Experienced in RF design, HFSS/COMSOL simulations, and electronics systems engineering.</p>
            <p>• Skilled in SQL, Power BI, Pandas, NumPy, MATLAB, and data analytics storytelling.</p>
            <p>• Building responsive, animated portfolios that showcase engineering and analytics impact.</p>
          </div>
        </motion.div>

        <div className="grid gap-4">
          {aboutCards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="rounded-[1.8rem] border border-white/10 bg-slate-900/80 p-6 shadow-neon"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-100">{card.title}</h3>
                <p className="text-slate-300 leading-7">{card.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
