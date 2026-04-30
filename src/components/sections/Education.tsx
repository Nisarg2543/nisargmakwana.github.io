import { motion } from 'framer-motion'
import { GraduationCap, ExternalLink } from 'lucide-react'
import { useFilter } from '@/context/FilterContext'

const education = [
  {
    degree: 'M.Sc. Advanced Mechanical Engineering',
    institution: 'University of Leeds',
    url: 'https://www.leeds.ac.uk/',
    period: '2021 – 2022',
    description:
      'Advanced Finite Element Analysis, Engineering Computational Methods, CFD, Tribology and Surface Engineering, Team Design Project.',
    project: 'Flow analysis of a micromixer in liquid flow cell for TEM-based study.',
    tags: ['FEA', 'CFD', 'Tribology', 'Computational Methods'],
  },
  {
    degree: 'B.Tech. Mechanical Engineering',
    institution: 'Sardar Vallabhbhai National Institute of Technology (SVNIT)',
    url: 'https://www.svnit.ac.in/',
    period: '2017 – 2021',
    description:
      'Plastics & Ceramics, Basic Mechanical Systems, Plant Layout and Material Handling, Advanced Refrigeration & Air Conditioning, Theory and Design of Cryogenic Systems.',
    project: 'Identification of two-phase flow using acoustic emission sensor.',
    tags: ['Thermodynamics', 'Materials', 'Cryogenics', 'Refrigeration'],
  },
]

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
}

export default function Education() {
  const { activeSkill, setActiveSkill } = useFilter()

  return (
    <div className="py-28 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="mb-16"
      >
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-3">Education</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-theme-main">
          Academic <span className="text-gradient">Background</span>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="space-y-5"
      >
        {education.map((edu) => {
          const isDimmed = activeSkill && !edu.tags.includes(activeSkill)

          return (
            <motion.div
              key={edu.degree}
              variants={item}
              className={`card-glass p-7 group hover:border-hover transition-all duration-500 ${
                isDimmed ? 'opacity-30 grayscale saturate-50' : 'opacity-100'
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-surface border border-subtle flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={18} className="text-theme-faint" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-theme-main">{edu.degree}</h3>
                    <a
                      href={edu.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-1 text-sm mt-0.5 text-accent hover:text-accent-light transition-colors`}
                    >
                      {edu.institution}
                      <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
                <span className="text-xs text-theme-faint bg-surface border border-subtle px-3 py-1 rounded-full">
                  {edu.period}
                </span>
              </div>

              <p className="text-sm text-theme-muted leading-relaxed mb-2 ml-14">
                <span className="font-medium text-theme-main">Coursework: </span>
                {edu.description}
              </p>
              <p className="text-sm text-theme-muted leading-relaxed mb-5 ml-14">
                <span className="font-medium text-theme-main">Design Project: </span>
                {edu.project}
              </p>

              <div className="flex flex-wrap gap-2 ml-14">
                {edu.tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActiveSkill(activeSkill === tag ? null : tag)}
                    className={`text-xs px-2.5 py-1 rounded-full border transition-colors duration-200 ${
                      activeSkill === tag
                        ? 'bg-accent-surface border-accent-border text-accent'
                        : 'bg-surface border-subtle text-theme-muted hover:bg-surface-hover hover:text-theme-main'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
