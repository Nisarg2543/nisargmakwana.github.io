import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

const certs = [
  {
    title: 'Machine Learning',
    issuer: 'Stanford University · Coursera',
    icon: '🎓',
    color: 'from-indigo-500/15',
    iconBg: 'bg-indigo-500/10 border-indigo-500/20',
    link: null as string | null,
  },
  {
    title: 'Data Analysis in Python',
    issuer: 'Jovian.ml',
    icon: '🐍',
    color: 'from-emerald-500/15',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
    link: null as string | null,
  },
  {
    title: 'FEAST Software Workshop',
    issuer: 'ISRO — Indian Space Research Organisation',
    icon: '🚀',
    color: 'from-rose-500/15',
    iconBg: 'bg-rose-500/10 border-rose-500/20',
    link: null as string | null,
  },
  {
    title: 'SolidWorks Certified',
    issuer: 'RCAD Institute',
    icon: '⚙️',
    color: 'from-cyan-500/15',
    iconBg: 'bg-cyan-500/10 border-cyan-500/20',
    link: null as string | null,
  },
  {
    title: 'AutoCAD 2D Certified',
    issuer: 'RCAD Institute',
    icon: '📐',
    color: 'from-violet-500/15',
    iconBg: 'bg-violet-500/10 border-violet-500/20',
    link: null as string | null,
  },
  {
    title: 'Aerial Robotics',
    issuer: 'University of Pennsylvania · Coursera',
    icon: '🤖',
    color: 'from-amber-500/15',
    iconBg: 'bg-amber-500/10 border-amber-500/20',
    link: null as string | null,
  },
  {
    title: 'Research Internship',
    issuer: 'National Innovation Foundation — India (NIF) · Dec 2018',
    icon: '🔬',
    color: 'from-teal-500/15',
    iconBg: 'bg-teal-500/10 border-teal-500/20',
    link: null as string | null,
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const item = {
  hidden: { opacity: 0, scale: 0.94, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] } },
}

export default function Certifications() {
  return (
    <div className="py-28 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="mb-16"
      >
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-rose-400/80 mb-3">Certifications</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white/90">
          Credentials &{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-300 to-amber-300">
            Courses
          </span>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {certs.map((cert) => {
          const Wrapper = cert.link ? 'a' : 'div'
          const wrapperProps = cert.link
            ? { href: cert.link, target: '_blank', rel: 'noreferrer' }
            : {}

          return (
            <motion.div
              key={cert.title}
              variants={item}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Wrapper
                {...wrapperProps}
                className={`block bg-white/[0.05] border border-white/[0.10] bg-gradient-to-br ${cert.color} to-transparent p-5 rounded-2xl group hover:bg-white/[0.08] hover:border-white/[0.18] transition-all duration-200 ${cert.link ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl border ${cert.iconBg} flex items-center justify-center text-xl flex-shrink-0`}>
                    {cert.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-semibold text-white/88 leading-snug">{cert.title}</h3>
                      {cert.link
                        ? <ExternalLink size={13} className="text-white/30 group-hover:text-white/60 flex-shrink-0 mt-0.5 transition-colors" />
                        : <Award size={13} className="text-white/20 flex-shrink-0 mt-0.5" />
                      }
                    </div>
                    <p className="text-xs text-white/50 mt-1">{cert.issuer}</p>
                  </div>
                </div>
              </Wrapper>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
