import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Microstrip Patch Antenna Design',
    category: 'RF Simulation',
    description: 'Optimized patch antenna geometry and performance using HFSS and MATLAB for advanced RF applications.',
    tech: ['HFSS', 'MATLAB', 'COMSOL'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Crosstalk Prediction in Multicore Fiber',
    category: 'Machine Learning',
    description: 'Built a machine learning model to predict crosstalk and visualize results for multicore fiber systems.',
    tech: ['Python', 'Pandas', 'Scikit-learn'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Data Analytics Internship Dashboard',
    category: 'Analytics UI',
    description: 'Delivered analytics dashboards, KPI tracking, and SQL-powered automation for internship deliverables.',
    tech: ['SQL', 'Power BI', 'MySQL'],
    github: '#',
    demo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="space-y-3"
      >
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Projects</p>
        <h2 className="text-4xl font-bold text-slate-100">Immersive 3D project showcase</h2>
      </motion.div>

      <div className="grid gap-6 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            whileHover={{ y: -10, rotateX: 6, scale: 1.02 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: index * 0.08, ease: 'easeOut' }}
            className="group perspective-1500"
          >
            <div className="preserve-3d rounded-[2rem] border border-white/10 bg-slate-900/85 p-6 shadow-glass transition-transform duration-300 will-change-transform hover:rotate-y-3 hover:shadow-neon">
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-2xl bg-gradient-to-r from-cyan-400/20 to-blue-500/10 px-3 py-1 text-sm text-cyan-200 backdrop-blur-sm">
                  {project.category}
                </span>
                <span className="text-sm uppercase tracking-[0.26em] text-slate-400">3D Card</span>
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-slate-100">{project.title}</h3>
              <p className="mb-5 text-slate-300 leading-7">{project.description}</p>
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={project.github}
                  className="cursor-interactive rounded-3xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-200 transition hover:bg-cyan-500/20"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  className="cursor-interactive rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-300"
                >
                  View Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
