import { motion } from 'framer-motion'
import { FlaskConical, BookOpen, Clock, Download, FileText } from 'lucide-react'

type ResearchStatus = 'ongoing' | 'complete'

interface ResearchItem {
  title: string
  venue: string
  note: string
  year: string
  status: ResearchStatus
  authors?: string
  abstractPdf?: string
  presentationPdf?: string
  funding?: string
}

const conferences: ResearchItem[] = [
  {
    title: 'Simulating Nitric Oxide Diffusion within MOF-Based Polymers Used to Prevent Catheter Related Thrombosis and Infection',
    venue: 'Northern Ireland Biomedical Engineering Society (NIBES) Symposium, 1st May 2025',
    note: 'FEBio 4.9 · Multiphase FE model · Experimentally validated NO release profiles · EPSRC funded',
    authors: 'Makwana N., Denton O., Garret G., Morris R., Duncan M., Lennon A., Menary G.',
    year: '2025',
    status: 'complete',
    abstractPdf: '/NIBES_2025_Abstract.pdf',
    funding: 'EPSRC [EP/X014436/1]',
  },
  {
    title: 'Simulating Nitric Oxide Diffusion within MOF-Based Polymers Used to Prevent Catheter Related Thrombosis and Infection',
    venue: 'Bioengineering in Ireland 29 (BINI), 26–27 January 2024',
    note: 'FEBio 2.4 · Multi-solute transport FE model · Parametric study of release kinetics',
    authors: 'Makwana N., Garret G.S., Duncan M.J., Morris R.E., Lennon A., Menary G.',
    year: '2024',
    status: 'complete',
    abstractPdf: '/BINI_2024_Abstract.pdf',
  },
]

const ongoing: ResearchItem[] = [
  {
    title: 'Multiphysics modelling of Nitric Oxide diffusion and release in MOF-loaded polymer catheters',
    venue: "Queen's University Belfast · in progress",
    note: 'With University of St Andrews · FEBio · Bayesian optimisation · experimental validation against chemiluminescence data',
    year: '2023–now',
    status: 'ongoing',
    funding: 'EPSRC [EP/X014436/1]',
  },
]

const academic: ResearchItem[] = [
  {
    title: 'Flow analysis of a micromixer in liquid flow cell for TEM-based study',
    venue: 'MSc Design Project · University of Leeds',
    note: 'COMSOL Multiphysics · CFD · geometry optimisation · 145% mixing improvement',
    year: '2022',
    status: 'complete',
  },
  {
    title: 'Analytical and FEA validation of a 12/8 Bearing-less Switched Reluctance Motor',
    venue: 'Engineering Internship · IIT Guwahati',
    note: 'Ansoft Maxwell · Maxwell Stress Tensor · IEC/ISO test rig · 0.75 kW prototype',
    year: '2024',
    status: 'complete',
  },
  {
    title: 'Identification of two-phase flow regimes using acoustic emission sensors',
    venue: 'BTech Final Year Project · SVNIT, India',
    note: 'SVM & CNN classification · COMSOL · Python · acoustic signal processing',
    year: '2021',
    status: 'complete',
  },
]

const fadeItem = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] } },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

function ResearchCard({ title, venue, note, year, status, authors, abstractPdf, funding }: ResearchItem) {
  return (
    <motion.div
      variants={fadeItem}
      className="bg-white/[0.05] border border-white/[0.10] p-5 rounded-2xl flex gap-5 items-start hover:bg-white/[0.07] transition-colors duration-200 group"
    >
      <div className="flex-shrink-0 mt-0.5">
        <span className={`inline-flex items-center gap-1 text-[10px] font-medium px-2.5 py-1 rounded-full border ${
          status === 'ongoing'
            ? 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400'
            : 'bg-indigo-500/10 border-indigo-500/25 text-indigo-400'
        }`}>
          {status === 'ongoing' ? <Clock size={9} /> : <BookOpen size={9} />}
          {year}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-white/88 leading-snug mb-1">{title}</h3>
        {authors && (
          <p className="text-xs text-white/45 mb-1 italic">{authors}</p>
        )}
        <p className="text-xs text-white/55 mb-1">{venue}</p>
        <p className="text-xs text-white/35 italic mb-3">{note}</p>
        {funding && (
          <span className="inline-flex items-center text-[10px] text-amber-400/70 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full mr-2">
            {funding}
          </span>
        )}
        {abstractPdf && (
          <a
            href={abstractPdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] font-medium text-indigo-400 hover:text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/15 border border-indigo-500/20 px-2.5 py-1 rounded-full transition-all duration-150"
          >
            <FileText size={10} />
            View Abstract
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default function Research() {
  return (
    <div className="py-28 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        variants={fadeItem}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="mb-16"
      >
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-amber-400/80 mb-3">Research</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white/90">
          Research &{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-rose-300">
            Academic Work
          </span>
        </h2>
        <p className="text-sm text-white/50 max-w-xl mt-4 leading-relaxed">
          Conference presentations, ongoing funded research, and academic design projects.
          Simulation data and full documentation available on request.
        </p>
      </motion.div>

      <div className="space-y-10">
        {/* Conference Presentations */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <FileText size={13} className="text-rose-400/70" />
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/35">Conference Presentations</p>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-3"
          >
            {conferences.map(r => <ResearchCard key={r.title + r.year} {...r} />)}
          </motion.div>
        </div>

        {/* Ongoing Research */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <FlaskConical size={13} className="text-emerald-400/70" />
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/35">Ongoing Research</p>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-3"
          >
            {ongoing.map(r => <ResearchCard key={r.title} {...r} />)}
          </motion.div>
        </div>

        {/* Academic Projects */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <BookOpen size={13} className="text-indigo-400/70" />
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/35">Academic Design Projects</p>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-3"
          >
            {academic.map(r => <ResearchCard key={r.title} {...r} />)}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
