import { motion } from 'framer-motion'
import { Microscope, Code2, FlaskConical, Users } from 'lucide-react'

const stats = [
  { num: '3+', label: 'Years research experience', icon: Microscope },
  { num: '4+', label: 'Multiphysics simulation tools', icon: Code2 },
  { num: '10+', label: 'CAD & simulation tools mastered', icon: FlaskConical },
  { num: '3', label: 'Universities collaborated with', icon: Users },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  },
}

export default function About() {
  return (
    <div className="py-28 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="mb-16"
      >
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-3">About me</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-theme-main">
          Engineer at the intersection
          <br />
          <span className="text-gradient">of simulation & science</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-[3fr_2fr] gap-14 items-start">
        {/* Bio */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-5 text-theme-muted text-base leading-relaxed"
        >
          <motion.p variants={item}>
            I'm a computational mechanical engineer with an MSc from the University of Leeds and
            hands-on research experience at Queen's University Belfast and IIT Guwahati. My work
            sits at the boundary of numerical simulation and physical experimentation — building
            models that are both mathematically rigorous and experimentally validated.
          </motion.p>
          <motion.p variants={item}>
            At QUB, I develop multiphysics finite element models to study Nitric Oxide diffusion and
            release in MOF-loaded polymer catheters — work with real implications for biomedical
            device design. I build custom MATLAB-based Bayesian optimisation pipelines that automate
            the simulation-to-result workflow and identify optimal design parameters with minimal
            experimental cost.
          </motion.p>
          <motion.p variants={item}>
            I'm equally comfortable in the lab as at the computer — having designed experimental
            rigs, operated SEM/DSC/TGA/FTIR instruments, and collaborated with cross-disciplinary
            teams across three universities. Currently on the Global Talent Visa (UK), no
            sponsorship required.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map(({ num, label, icon: Icon }) => (
            <motion.div
              key={label}
              variants={item}
              className="card-glass p-5 group hover:bg-surface-hover transition-colors duration-200"
            >
              <div className="w-9 h-9 rounded-xl bg-accent-surface border border-accent-border flex items-center justify-center mb-4">
                <Icon size={16} className="text-accent" />
              </div>
              <p className="text-3xl font-bold text-theme-main tracking-tight">{num}</p>
              <p className="text-xs text-theme-muted mt-1 leading-snug">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
