import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi'
import { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const formRef = useRef()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('ZcYVLpL3iQmvKMqvZ')
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'skmajumdar86@gmail.com',
        subject: formData.name,
        message: formData.message,
      }

      await emailjs.send('service_iqamzi1', 'template_pygc9q8', templateParams)

      setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Email error:', error)
      setStatus({ type: 'error', message: 'Failed to send message. Please try again or email me directly.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="space-y-3"
      >
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Contact</p>
        <h2 className="text-4xl font-bold text-slate-100">Let’s build your next project together</h2>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] border border-white/10 bg-slate-950/75 p-8 shadow-glass"
        >
          <p className="mb-6 text-slate-300 leading-8">
            I’m available for freelance and full-time opportunities. Send a message and I’ll get back to you with ideas, timelines, and next steps.
          </p>
          <div className="space-y-4 text-slate-300">
            <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4">
              <FiMail className="h-6 w-6 text-cyan-300" />
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">Email</p>
                <p className="text-sm text-slate-200">majumdersaptarshi85@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4">
              <FiLinkedin className="h-6 w-6 text-fuchsia-300" />
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">LinkedIn</p>
                <a href="https://linkedin.com/in/saptarshi-majumder-493226251" target="_blank" rel="noreferrer" className="text-sm text-slate-200 transition hover:text-cyan-300">
                  linkedin.com/in/saptarshi-majumder-493226251
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4">
              <FiGithub className="h-6 w-6 text-slate-200" />
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">GitHub</p>
                <a href="https://github.com/majumdersaptarshi85-afk" target="_blank" rel="noreferrer" className="text-sm text-slate-200 transition hover:text-cyan-300">
                  github.com/majumdersaptarshi85-afk
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-glass"
        >
          <div className="grid gap-4">
            <label className="text-sm uppercase tracking-[0.2em] text-slate-400">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none ring-1 ring-transparent transition focus:ring-cyan-400/40"
              placeholder="Your name"
            />
            <label className="text-sm uppercase tracking-[0.2em] text-slate-400">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none ring-1 ring-transparent transition focus:ring-cyan-400/40"
              placeholder="you@domain.com"
            />
            <label className="text-sm uppercase tracking-[0.2em] text-slate-400">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="resize-none rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none ring-1 ring-transparent transition focus:ring-cyan-400/40"
              placeholder="Tell me about your next project"
            />
            
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`rounded-3xl px-4 py-3 text-sm ${
                  status.type === 'success'
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}
              >
                {status.message}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center justify-center gap-2 rounded-3xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FiSend /> {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
