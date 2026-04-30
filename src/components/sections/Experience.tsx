import { motion } from 'framer-motion'
import { Briefcase, ExternalLink } from 'lucide-react'
import { TruncatedText } from '@/components/ui/TruncatedText'
import { useFilter } from '@/context/FilterContext'

const experiences = [
  {
    role: 'Research Assistant',
    org: "Queen's University Belfast",
    url: 'https://www.qub.ac.uk/',
    period: 'Jun 2023 – Present',
    tags: ['FEBio', 'MATLAB', 'Bayesian Opt.', 'FEA', 'Biomedical'],
    description:
      'Developed multiphase continuum finite element models to simulate water diffusion and Nitric Oxide (NO) release in blank and MOF-loaded (Ni/Zn) polymer catheters using FEBio. Built custom MATLAB-based Bayesian optimisation pipelines to automate simulation runs, import flux logs, and determine optimal MOF loading and catheter geometry. Designed and built experimental rigs to test diffusion and permeation properties of porous polymer materials. Collaborated with the University of St Andrews to integrate computational and wet-lab approaches for validating NO release profiles.',
  },
  {
    role: 'Visiting Researcher',
    org: 'University of Leeds',
    url: 'https://www.leeds.ac.uk/',
    period: 'Apr 2024 – Present',
    tags: ['COMSOL', 'Microfluidics', 'CFD', '3D Modelling'],
    description:
      'Executed Multiphysics modelling and simulation of an existing microfluidics project using COMSOL Multiphysics, focusing on flow analysis and geometry optimisation of a liquid flow cell. Validated and refined existing computational models to ensure accuracy and reliability. Produced research documentation and 3D visualisations; strategised with supervisors and product designers on design iterations for concept substantiation.',
  },
  {
    role: 'Researcher Intern',
    org: 'University of Leeds',
    url: 'https://www.leeds.ac.uk/',
    period: 'Oct 2022 – Present',
    tags: ['CAD', 'Flow Analysis', 'Ansys', 'Design Optimisation'],
    description:
      'Created complex 3D CAD models and performed CFD/flow analysis to identify potential design flaws and mechanical interference in a liquid flow cell for TEM-based studies. Analysed mechanical parts to identify stress concentration points and recommended geometry changes. Optimised flow cell design through iterative simulation, improving fluid mixing performance by 145%. Prepared clear design reports, 3D visualisations, and weekly presentations for management and research supervisors.',
  },
  {
    role: 'Engineering Intern',
    org: 'IIT Guwahati',
    url: 'https://www.iitg.ac.in/',
    period: 'Jun 2024 – Aug 2025',
    tags: ['Ansoft Maxwell', 'FEA', 'LabVIEW', 'Electromagnetics', 'BSRM'],
    description:
      'Developed and verified analytical models for a 12/8 Bearing-less Switched Reluctance Motor (BSRM) using the Maxwell Stress Tensor method. Performed 2D FEA using Ansoft Maxwell to validate mathematical models under static and transient conditions, achieving strong agreement. Collaborated on assembling a prototype system incorporating displacement sensors, absolute encoders, and real-time controllers in LabVIEW. Contributed to design and development of a test rig following IEC and ISO standards (0.75 kW power output).',
  },
  {
    role: 'Course Demonstrator',
    org: "Queen's University Belfast",
    url: 'https://www.qub.ac.uk/',
    period: 'Sep 2024 – Dec 2025',
    tags: ['Teaching', 'MATLAB', 'Mathematics'],
    description:
      'Provided in-class technical and mathematical support as a Demonstrator for the Mathematics and Computing module. Conducted hands-on demonstrations of computing techniques including programming tools and mathematical software to undergraduate students.',
  },
]

const item = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function Experience() {
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
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-3">
          Work Experience
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-theme-main">
          Where I've <span className="text-gradient">worked</span>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="relative"
      >
        {/* Timeline line */}
        <div className="absolute left-[18px] top-6 bottom-6 w-px bg-border-subtle hidden sm:block" />

        <div className="space-y-6">
          {experiences.map((exp) => {
            const isDimmed = activeSkill && !exp.tags.includes(activeSkill)

            return (
              <motion.div
                key={exp.role + exp.org}
                variants={item}
                className={`transition-all duration-500 ${isDimmed ? 'opacity-30 grayscale saturate-50' : 'opacity-100'}`}
              >
                <div className="sm:pl-12 relative">
                  {/* Dot */}
                  <div className="absolute left-0 top-6 w-9 h-9 rounded-full bg-surface border border-subtle hidden sm:flex items-center justify-center">
                    <Briefcase size={14} className="text-theme-faint" />
                  </div>

                  <div className={`card-glass p-6 group hover:border-hover`}>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-base font-semibold text-theme-main">{exp.role}</h3>
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-accent mt-0.5 hover:text-accent-light transition-colors"
                        >
                          {exp.org}
                          <ExternalLink size={10} />
                        </a>
                      </div>
                      <span className="text-xs text-theme-faint bg-surface border border-subtle px-3 py-1 rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <TruncatedText
                      text={exp.description}
                      maxLength={180}
                      className="text-sm text-theme-muted leading-relaxed mb-5"
                    />

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
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
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
