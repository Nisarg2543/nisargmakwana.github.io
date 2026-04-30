import { motion } from 'framer-motion'
import { Cpu, Code, Layers, FlaskConical, Brain, Globe } from 'lucide-react'
import { useFilter } from '@/context/FilterContext'

const skillGroups = [
  {
    title: 'Simulation & FEA',
    icon: Cpu,
    skills: [
      'FEBio',
      'COMSOL Multiphysics',
      'Ansys Workbench',
      'Abaqus CAE',
      'Ansoft Maxwell',
      'OpenFOAM',
      'SimScale',
      'FEAST (ISRO)',
      'Altair Hyperworks',
      'Ansys',
    ],
  },
  {
    title: 'Programming',
    icon: Code,
    skills: ['MATLAB', 'Python', 'C++', 'C', 'Fortran', 'Scilab', 'LaTeX', 'Pandas', 'Gnu Octave'],
  },
  {
    title: 'CAD & Design',
    icon: Layers,
    skills: [
      'SolidWorks',
      'Siemens NX',
      'PTC Creo',
      'Catia V5',
      'Fusion 360',
      'Autodesk Inventor',
      'AutoCAD 2D',
      'Simulink',
      'CAD',
      '3D Modelling',
    ],
  },
  {
    title: 'Lab & Experimental',
    icon: FlaskConical,
    skills: [
      'SEM Imaging',
      'DSC',
      'TGA',
      'FTIR',
      '3D Printing',
      'Instron Testing',
      'CNC',
      'CAD/CAM',
      'Material Testing',
    ],
  },
  {
    title: 'Methods',
    icon: Brain,
    skills: [
      'Bayesian Optimisation',
      'Bayesian Opt.',
      'Surrogate Modelling',
      'CFD',
      'Multiphysics FEA',
      'Machine Learning',
      'Prototype Design',
      'FEM',
      'Flow Analysis',
      'Design Optimisation',
      'Biomedical',
      'Microfluidics',
      'Electromagnetics',
    ],
  },
  {
    title: 'Languages',
    icon: Globe,
    skills: ['English', 'Hindi', 'Gujarati'],
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  },
}

export default function Skills() {
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
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-3">Skills</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-theme-main">
          Tools & <span className="text-gradient">Technologies</span>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {skillGroups.map(({ title, icon: Icon, skills }) => {
          const hasActiveSkill = activeSkill ? skills.includes(activeSkill) : true
          const isDimmed = activeSkill && !hasActiveSkill

          return (
            <motion.div
              key={title}
              variants={item}
              className={`card-glass p-6 group ${
                isDimmed ? 'opacity-30 grayscale saturate-50' : 'opacity-100 hover:border-hover'
              }`}
            >
              <div
                className={`w-9 h-9 rounded-xl bg-accent-surface border border-accent-border flex items-center justify-center mb-5`}
              >
                <Icon size={16} className="text-accent" />
              </div>
              <h3 className="text-sm font-semibold text-theme-main mb-4">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => setActiveSkill(activeSkill === skill ? null : skill)}
                    className={`text-xs px-2.5 py-1 rounded-full border transition-colors duration-200 ${
                      activeSkill === skill
                        ? 'bg-accent-surface border-accent-border text-accent'
                        : 'bg-surface border-subtle text-theme-muted hover:bg-surface-hover hover:text-theme-main'
                    }`}
                  >
                    {skill}
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
