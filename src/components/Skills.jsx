const skills = [
  'Python',
  'SQL',
  'Pandas',
  'NumPy',
  'Data Analysis',
  'Power BI',
  'MATLAB',
  'HFSS',
  'COMSOL',
  'MySQL',
  'C Programming',
]

export default function Skills() {
  return (
    <section id="skills" className="space-y-6">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Skills</p>
        <h2 className="text-4xl font-bold text-slate-100">Technical strengths and tools</h2>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-glass">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(skill => (
            <div key={skill} className="rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm font-medium text-slate-100">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
