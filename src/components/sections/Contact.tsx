import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] } },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  async function handleSend(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    
    setLoading(true)
    setError(false)

    try {
      await emailjs.send(
        'portfolio',
        'template_5gvye3o',
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        'QMNrVeNydFl4TyY4h'
      )
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('Failed to send email:', err)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="py-28 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="mb-16"
      >
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-indigo-400/80 mb-3">Contact</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white/90">
          Let's{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-violet-200 to-rose-300">
            work together
          </span>
        </h2>
        <p className="text-sm text-white/40 max-w-md mt-3 leading-relaxed">
          Open to research collaborations, industry roles in computational engineering, and
          interesting problems at the intersection of simulation and physical science.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid lg:grid-cols-2 gap-10"
      >
        {/* Contact info */}
        <motion.div variants={item} className="space-y-4">
          {[
            { icon: Mail, label: 'Email', value: 'nisarg2543@gmail.com', href: 'mailto:nisarg2543@gmail.com' },
            { icon: Phone, label: 'Phone', value: '+44 78799 63402', href: 'tel:+447879963402' },
            { icon: MapPin, label: 'Location', value: 'Belfast, Northern Ireland · Global Talent Visa', href: null },
            { icon: Github, label: 'GitHub', value: 'github.com/Nisarg2543', href: 'https://github.com/Nisarg2543' },
            { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/nisargmakwana', href: 'https://www.linkedin.com/in/nisargmakwana/' },
          ].map(({ icon: Icon, label, value, href }) => (
            <div
              key={label}
              className="card-glass p-4 rounded-xl flex items-center gap-4 hover:bg-white/[0.05] transition-colors duration-200 group"
            >
              <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                <Icon size={15} className="text-indigo-400" />
              </div>
              <div>
                <p className="text-[10px] text-white/30 uppercase tracking-widest">{label}</p>
                {href ? (
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="text-sm text-white/65 hover:text-white transition-colors">
                    {value}
                  </a>
                ) : (
                  <p className="text-sm text-white/55">{value}</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div variants={item}>
          {sent ? (
            <div className="card-glass p-8 rounded-2xl flex flex-col items-center justify-center text-center gap-4 h-full">
              <CheckCircle2 size={40} className="text-emerald-400" />
              <h3 className="text-lg font-semibold text-white/90">Message sent!</h3>
              <p className="text-sm text-white/45">Thanks for reaching out. I'll be in touch soon.</p>
              <button onClick={() => setSent(false)} className="text-xs text-indigo-400 hover:text-indigo-300 mt-2 transition-colors">
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSend} className="card-glass p-7 rounded-2xl space-y-5">
              <div>
                <label className="block text-xs text-white/35 uppercase tracking-widest mb-2">Your name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  placeholder="Jane Smith"
                  className="w-full bg-white/[0.05] border border-white/[0.10] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none focus:border-indigo-500/50 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-white/35 uppercase tracking-widest mb-2">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  placeholder="jane@example.com"
                  className="w-full bg-white/[0.05] border border-white/[0.10] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none focus:border-indigo-500/50 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-white/35 uppercase tracking-widest mb-2">Message</label>
                <textarea
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="What are you working on?"
                  rows={4}
                  className="w-full bg-white/[0.05] border border-white/[0.10] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none focus:border-indigo-500/50 transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-indigo-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
                {loading ? 'Sending...' : 'Send message'}
              </button>
              {error && <p className="text-xs text-rose-400 text-center mt-2">Something went wrong. Please try again.</p>}
            </form>
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}
