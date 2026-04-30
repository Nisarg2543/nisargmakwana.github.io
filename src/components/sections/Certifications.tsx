import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

const certs = [
  {
    title: 'Machine Learning',
    issuer: 'Stanford University · Coursera',
    icon: '🎓',
    link: null as string | null,
  },
  {
    title: 'Data Analysis in Python',
    issuer: 'Jovian.ml',
    icon: '🐍',
    link: '/certs/Jovian ML certificate.pdf',
  },
  {
    title: 'FEAST Software Workshop',
    issuer: 'ISRO — Indian Space Research Organisation',
    icon: '🚀',
    link: '/certs/FEAST software Certificate.pdf',
  },
  {
    title: 'SolidWorks Certified',
    issuer: 'RCAD Institute',
    icon: '⚙️',
    link: '/certs/SOLIDWORKS_RCAD.pdf',
  },
  {
    title: 'AutoCAD 2D Certified',
    issuer: 'RCAD Institute',
    icon: '📐',
    link: '/certs/AutoCad Certificate.pdf',
  },
  {
    title: 'Aerial Robotics',
    issuer: 'University of Pennsylvania · Coursera',
    icon: '🤖',
    link: '/certs/Coursera HHTXKY7QT6N4.pdf',
  },
  {
    title: 'Research Internship',
    issuer: 'National Innovation Foundation — India (NIF) · Dec 2018',
    icon: '🔬',
    link: '/certs/NIF_Certi.pdf',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const item = {
  hidden: { opacity: 0, scale: 0.94, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  },
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
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-3">
          Certifications
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-theme-main">
          Credentials & <span className="text-gradient">Courses</span>
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
                className={`block card-glass p-5 group hover:border-hover hover:bg-surface-hover transition-all duration-200 ${cert.link ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl border bg-accent-surface border-accent-border flex items-center justify-center text-xl flex-shrink-0`}
                  >
                    {cert.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-semibold text-theme-main leading-snug">
                        {cert.title}
                      </h3>
                      {cert.link ? (
                        <ExternalLink
                          size={13}
                          className="text-theme-faint group-hover:text-theme-main flex-shrink-0 mt-0.5 transition-colors"
                        />
                      ) : (
                        <Award size={13} className="text-theme-faint flex-shrink-0 mt-0.5" />
                      )}
                    </div>
                    <p className="text-xs text-theme-muted mt-1">{cert.issuer}</p>
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
