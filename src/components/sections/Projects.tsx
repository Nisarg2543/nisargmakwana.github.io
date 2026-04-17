import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Github, ExternalLink, ChevronDown, FileText } from 'lucide-react'

interface ProjectDetails {
  specs: string[]
  methodology: string
  result: string
  images?: string[]
  pdfLink?: string
  pdfLabel?: string
}

interface Project {
  emoji: string
  title: string
  description: string
  tags: string[]
  metric: string
  color: string
  accentColor: string
  borderHover: string
  github: string | null
  demo: string | null
  details?: ProjectDetails
}

const projects: Project[] = [
  {
    emoji: '🧬',
    title: 'NO Diffusion in MOF-Loaded Catheters',
    description:
      'Multiphysics FE model simulating Nitric Oxide diffusion and release in Ni/Zn MOF-loaded polymer catheters. Includes four solutes, reaction kinetics, and boundary condition studies validated against experimental data from the University of St Andrews.',
    tags: ['FEBio', 'MATLAB', 'Diffusion Modelling', 'QUB'],
    metric: 'Bayesian-optimised release kinetics',
    color: 'from-indigo-500/10',
    accentColor: 'text-indigo-400',
    borderHover: 'hover:border-indigo-500/30',
    github: null,
    demo: null,
    details: {
      specs: [
        'Catheter geometry: 1.75 mm OD × 1.25 mm ID polymer tube',
        'MOF loadings studied: 1 wt%, 2 wt%, 5 wt% (Ni/Zn MOF)',
        'Quarter-tube axisymmetric model — Hex8 elements in FEBio 4.9',
        '3-solute transport: free NO, NO·MOF complex, total MOF sites',
        'Parametric sweep of diffusivity, reaction rate & partition coefficients',
        'Funded by EPSRC [EP/X014436/1]',
      ],
      methodology:
        'Continuum multi-solute biphasic FE model in FEBio. MATLAB Bayesian optimisation pipeline (MecadiOptimizer) iteratively edits .feb files, runs simulations, parses flux logs, and converges on transport parameters that reproduce experimental chemiluminescence release curves from University of St Andrews.',
      result: 'Model accurately reproduces experimental NO release profiles across all MOF loadings; presented at BINI 2024 and NIBES 2025.',
      pdfLink: '/NIBES_2025_Abstract.pdf',
      pdfLabel: 'NIBES 2025 Abstract',
    },
  },
  {
    emoji: '⚙️',
    title: 'MecadiOptimizer',
    description:
      'Modular MATLAB Bayesian optimisation pipeline for FEBio diffusion simulations. Fully self-contained for GitHub deployment — automates FEB file editing, simulation runs, log import, and fitness evaluation with minimal user intervention.',
    tags: ['MATLAB', 'Bayesian Opt.', 'FEBio', 'Open Source'],
    metric: 'Fully automated sim pipeline',
    color: 'from-violet-500/10',
    accentColor: 'text-violet-400',
    borderHover: 'hover:border-violet-500/30',
    github: 'https://github.com/Nisarg2543',
    demo: null,
    details: {
      specs: [
        'Surrogate-based Bayesian optimisation (Expected Improvement)',
        'Automated .feb XML editing — no manual file changes needed',
        'Parses FEBio log flux data and computes L2 fitness vs target curves',
        'Parallel simulation queuing with adaptive sampling',
        'Modular: swap solute model without touching the optimiser core',
        'Reproducible: fixed random seed, full run logs saved per iteration',
      ],
      methodology:
        'MATLAB-native Bayesian optimiser wraps FEBio CLI. Each iteration proposes a parameter set, edits the .feb file programmatically, executes FEBio, reads output flux logs, and evaluates a fitness function against experimental release curves. The acquisition function balances exploration and exploitation to converge in fewer forward solves than grid search.',
      result: 'Reduces manual parameter tuning from days to hours; designed for reuse across multi-solute catheter models.',
    },
  },
  {
    emoji: '💧',
    title: 'Micromixer Flow Analysis',
    description:
      'CFD analysis of a micromixer in a liquid flow cell for Transmission Electron Microscope (TEM)-based studies. Redesigned flow cell geometry through iterative COMSOL simulations, achieving a 145% improvement in fluid mixing performance.',
    tags: ['COMSOL', 'CFD', 'TEM', 'Leeds'],
    metric: '145% mixing improvement',
    color: 'from-cyan-500/10',
    accentColor: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/30',
    github: null,
    demo: null,
    details: {
      specs: [
        'Client: Hummingbird Scientific (TEM liquid-cell manufacturer)',
        'Supervisor: Prof. Nikil Kapur, University of Leeds',
        'Solver: COMSOL Multiphysics 5.5 — laminar Navier–Stokes + advection-diffusion',
        'Low Reynolds number regime (Re ≪ 1) — no turbulence modelling',
        '3D geometry created and iterated in SolidWorks; imported to COMSOL',
        'Mixing index evaluated at outlet cross-section across 6+ design variants',
      ],
      methodology:
        'Steady-state incompressible laminar flow coupled to species transport (advection-diffusion). Mixing quality assessed via concentration uniformity index at outlet. Geometry changes (baffle placement, channel width, inlet angles) were iterated in SolidWorks and re-meshed in COMSOL each cycle. Mesh independence verified before final comparison.',
      result: '145% improvement in mixing index vs baseline design; recommended geometry adopted by the client for prototype fabrication.',
    },
  },
  {
    emoji: '⚡',
    title: 'Bearing-less SRM (BSRM) Modelling',
    description:
      'Analytical and 2D FEA validation of a 12/8 Bearing-less Switched Reluctance Motor using Maxwell Stress Tensor method. Strong agreement between mathematical and numerical results; prototype test rig built to IEC/ISO standards at IIT Guwahati.',
    tags: ['Ansoft Maxwell', 'LabVIEW', 'FEA', 'IIT Guwahati'],
    metric: 'Analytical–FEA agreement validated',
    color: 'from-rose-500/10',
    accentColor: 'text-rose-400',
    borderHover: 'hover:border-rose-500/30',
    github: null,
    demo: null,
    details: {
      specs: [
        '12 stator poles / 8 rotor poles topology',
        'Maxwell Stress Tensor method for analytical force & torque prediction',
        '2D transient FEA in Ansoft Maxwell — static and dynamic operating points',
        'Prototype: 0.75 kW output, test rig to IEC/ISO standards',
        'Sensors: displacement transducers, absolute encoders; real-time control via LabVIEW',
        'Institution: IIT Guwahati, India',
      ],
      methodology:
        'Analytical model derived from Maxwell Stress Tensor equations for radial force and suspension torque in a BSRM. Results cross-validated with 2D transient FEA in Ansoft Maxwell across a range of rotor positions and excitation levels. Prototype assembled with displacement sensors and NI real-time controller; LabVIEW used for data acquisition and closed-loop testing.',
      result: 'Strong quantitative agreement between analytical and FEA results; prototype confirmed predicted force–angle characteristics on the IEC/ISO test rig.',
      images: ['/images/bsrm-flux1.jpg', '/images/bsrm-1.jpg'],
    },
  },
  {
    emoji: '🔊',
    title: 'Flow Regime Classification',
    description:
      'Identified two-phase flow regimes using acoustic emission (AE) sensor data. Applied COMSOL for simulation and MATLAB/Python-based machine learning (SVM, CNN) for classification — BTech final-year project at SVNIT.',
    tags: ['Python', 'SVM', 'CNN', 'COMSOL', 'SVNIT'],
    metric: 'ML-based AE classification',
    color: 'from-amber-500/10',
    accentColor: 'text-amber-400',
    borderHover: 'hover:border-amber-500/30',
    github: null,
    demo: null,
    details: {
      specs: [
        'Two-phase flow regimes: bubbly, slug, churn, annular',
        'Acoustic emission (AE) sensors — piezoelectric, wideband',
        'Signal processing: FFT, wavelet decomposition, RMS energy features',
        'Classifiers: Support Vector Machine (SVM) and 1D CNN in Python',
        'COMSOL used for flow regime visualisation and validation',
        'Dataset: 500+ AE signal segments across 4 flow regimes',
      ],
      methodology:
        'AE signals acquired from horizontal pipe test section under different gas–liquid flow rates. Features extracted via FFT and wavelet decomposition. SVM trained with RBF kernel on feature vectors; 1D CNN trained end-to-end on raw signal segments. COMSOL simulations provided regime-specific velocity/void fraction reference data for label verification.',
      result: 'CNN outperformed SVM on multi-regime classification; demonstrated feasibility of passive AE-based flow monitoring without intrusive sensors.',
    },
  },
  {
    emoji: '🏗️',
    title: 'Street Lighting System',
    description:
      'Mechanical and structural modelling for a complete street-lighting system. Covered supply, delivery, installation, commissioning and maintenance planning. Used Ansys and Abaqus for structural FEA validation.',
    tags: ['Ansys', 'Abaqus', 'Structural FEA', 'Team Project'],
    metric: 'Full system design lifecycle',
    color: 'from-emerald-500/10',
    accentColor: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/30',
    github: null,
    demo: null,
    details: {
      specs: [
        'Pole material: galvanised steel; height range 6–12 m',
        'Loading cases: self-weight, wind (BS EN 40), thermal expansion',
        'FEA in Ansys Mechanical — static structural + modal analysis',
        'Abaqus used for contact and fatigue life assessment at base flange',
        'Full project lifecycle: procurement, logistics, installation, RAMS',
        'Group project — University of Leeds MSc programme',
      ],
      methodology:
        'Structural analysis of lighting column under combined static and dynamic loads per BS EN 40. Ansys used for stress distribution and deflection; Abaqus for contact pressure at base-plate bolted connection and fatigue cycle estimation. Project documentation covered full engineering lifecycle including supply chain, installation method statement, and maintenance schedule.',
      result: 'Design passed all load cases with factor of safety > 2; maintenance strategy optimised to minimise road closures.',
    },
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] } },
}

function ProjectCard({ proj }: { proj: Project }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      variants={cardItem}
      className={`bg-white/[0.05] border border-white/[0.10] ${proj.borderHover} bg-gradient-to-br ${proj.color} to-transparent rounded-2xl transition-all duration-300 group flex flex-col overflow-hidden`}
    >
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <div className="text-3xl">{proj.emoji}</div>
          <div className="flex gap-2">
            {proj.github && (
              <a
                href={proj.github}
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/[0.10] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.12] transition-all duration-150"
                title="View on GitHub"
              >
                <Github size={13} />
              </a>
            )}
            {proj.demo && (
              <a
                href={proj.demo}
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/[0.10] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.12] transition-all duration-150"
                title="View Demo"
              >
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-sm font-semibold text-white/90 mb-2 leading-snug">{proj.title}</h3>
        <p className="text-xs text-white/55 leading-relaxed mb-5 flex-1">{proj.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {proj.tags.map(tag => (
            <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.07] border border-white/[0.10] text-white/55">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className={`inline-flex items-center gap-1.5 text-xs font-medium ${proj.accentColor}`}>
            <ArrowUpRight size={12} />
            {proj.metric}
          </div>

          {proj.details && (
            <button
              onClick={() => setOpen(o => !o)}
              className="inline-flex items-center gap-1 text-[11px] text-white/40 hover:text-white/70 transition-colors duration-150"
            >
              Details
              <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={13} />
              </motion.span>
            </button>
          )}
        </div>
      </div>

      {/* Expandable details panel */}
      <AnimatePresence initial={false}>
        {open && proj.details && (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-white/[0.07] pt-5 space-y-4">

              {/* Specs */}
              <div>
                <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-white/30 mb-2">Technical Specs</p>
                <ul className="space-y-1">
                  {proj.details.specs.map((s, i) => (
                    <li key={i} className="text-xs text-white/55 flex gap-2 leading-snug">
                      <span className="text-white/20 mt-0.5 flex-shrink-0">—</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Methodology */}
              <div>
                <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-white/30 mb-2">Methodology</p>
                <p className="text-xs text-white/50 leading-relaxed">{proj.details.methodology}</p>
              </div>

              {/* Key result */}
              <div className={`text-xs font-medium ${proj.accentColor} bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 leading-snug`}>
                ✦ {proj.details.result}
              </div>

              {/* Images */}
              {proj.details.images && proj.details.images.length > 0 && (
                <div className="grid grid-cols-2 gap-2">
                  {proj.details.images.map((src, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-white/[0.08] bg-white/[0.03]">
                      <img
                        src={src}
                        alt={`${proj.title} result ${i + 1}`}
                        className="w-full h-32 object-cover"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* PDF link */}
              {proj.details.pdfLink && (
                <a
                  href={proj.details.pdfLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-medium text-indigo-400 hover:text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/15 border border-indigo-500/20 px-2.5 py-1 rounded-full transition-all duration-150"
                >
                  <FileText size={10} />
                  {proj.details.pdfLabel ?? 'View PDF'}
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <div className="py-28 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        variants={cardItem}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="mb-16"
      >
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-emerald-400/80 mb-3">Projects</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white/90">
          Selected{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-cyan-300">
            Work
          </span>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {projects.map(proj => (
          <ProjectCard key={proj.title} proj={proj} />
        ))}
      </motion.div>
    </div>
  )
}
