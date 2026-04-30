import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  FileText,
  X,
  ChevronDown,
  Image as ImageIcon,
} from 'lucide-react'
import { projects, Project } from '@/data/projects'
import { useFilter } from '@/context/FilterContext'
import { TextWithGlossary } from '@/components/ui/GlossaryTooltip'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  },
}

function ExpandableProjectCard({
  proj,
  setSelectedImage,
}: {
  proj: Project
  setSelectedImage: (src: string) => void
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const { activeSkill, setActiveSkill } = useFilter()
  const isDimmed = activeSkill && !proj.tags.includes(activeSkill)

  const mainImage = proj.details?.images?.[0]

  return (
    <motion.div
      layout="position"
      variants={fadeUp}
      className={`card-glass overflow-hidden transition-all duration-500 ${
        isDimmed ? 'opacity-30 grayscale saturate-50' : 'opacity-100 hover:border-hover'
      } ${isExpanded ? 'border-accent/40 shadow-[0_0_30px_var(--accent-surface)]' : ''}`}
    >
      {/* Header / Clickable Toggle */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left focus:outline-none"
      >
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-accent mb-2 uppercase tracking-widest">
            <ArrowUpRight size={14} />
            {proj.metric}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-theme-main">{proj.title}</h3>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex flex-wrap gap-2 justify-end">
            {proj.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-full border bg-surface border-subtle text-theme-muted"
              >
                {tag}
              </span>
            ))}
            {proj.tags.length > 3 && (
              <span className="text-[10px] text-theme-faint px-1 py-0.5">
                +{proj.tags.length - 3}
              </span>
            )}
          </div>

          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
              isExpanded
                ? 'bg-accent text-white'
                : 'bg-surface border border-subtle text-theme-main'
            }`}
          >
            <ChevronDown size={18} />
          </motion.div>
        </div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="border-t border-subtle"
          >
            <div className="p-6 sm:p-8 block">
              {/* Visual / Media Side */}
              <div className="w-full lg:w-[40%] xl:w-[35%] lg:float-left lg:mr-8 mb-6 lg:mb-4">
                {mainImage ? (
                  <div className="relative rounded-3xl overflow-hidden card-glass bg-theme-base/40">
                    <button
                      onClick={() => setSelectedImage(mainImage)}
                      className="w-full cursor-zoom-in block p-4 sm:p-6"
                      aria-label="View image full screen"
                    >
                      <img
                        src={mainImage}
                        alt={`${proj.title} image`}
                        loading="lazy"
                        className="w-full h-auto aspect-[4/3] object-contain hover:scale-105 transition-transform duration-700 rounded-2xl"
                      />
                    </button>

                    {/* Overlay links */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noreferrer"
                          className="w-10 h-10 rounded-full bg-theme-base/80 backdrop-blur-md border border-subtle flex items-center justify-center text-theme-main hover:text-accent hover:border-accent transition-all"
                          aria-label="View on GitHub"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {proj.demo && (
                        <a
                          href={proj.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="w-10 h-10 rounded-full bg-theme-base/80 backdrop-blur-md border border-subtle flex items-center justify-center text-theme-main hover:text-accent hover:border-accent transition-all"
                          aria-label="View Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden card-glass bg-surface">
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-surface to-accent-surface/20 text-theme-faint">
                      <ImageIcon size={48} className="mb-4 opacity-50" />
                      <p className="text-xs uppercase tracking-widest opacity-60">
                        Image Placeholder
                      </p>
                      <p className="text-[10px] opacity-40 mt-1">Upload to /public/images/</p>
                    </div>

                    {/* Overlay links */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noreferrer"
                          className="w-10 h-10 rounded-full bg-theme-base/80 backdrop-blur-md border border-subtle flex items-center justify-center text-theme-main hover:text-accent hover:border-accent transition-all"
                          aria-label="View on GitHub"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {proj.demo && (
                        <a
                          href={proj.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="w-10 h-10 rounded-full bg-theme-base/80 backdrop-blur-md border border-subtle flex items-center justify-center text-theme-main hover:text-accent hover:border-accent transition-all"
                          aria-label="View Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Content Side */}
              <div className="block">
                <p className="text-sm text-theme-muted leading-relaxed mb-6">
                  <TextWithGlossary text={proj.description} />
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setActiveSkill(activeSkill === tag ? null : tag)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-colors duration-200 ${
                        activeSkill === tag
                          ? 'bg-accent-surface border-accent-border text-accent shadow-[0_0_10px_var(--accent-surface)]'
                          : 'bg-surface border-subtle text-theme-faint hover:bg-surface-hover hover:text-theme-main hover:border-hover'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                {/* Detailed Specs (if available) */}
                {proj.details && (
                  <div className="space-y-5 border-t border-subtle pt-6 inline-block w-full">
                    {/* Quick stats/specs */}
                    {proj.details.specs && proj.details.specs.length > 0 && (
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-theme-faint mb-2">
                          Technical Overview
                        </h4>
                        <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-4">
                          {proj.details.specs.slice(0, 4).map((spec, i) => (
                            <li
                              key={i}
                              className="text-xs text-theme-muted flex items-start gap-1.5 leading-snug"
                            >
                              <span className="text-accent mt-0.5">•</span>
                              <span>
                                <TextWithGlossary text={spec} />
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Key Result */}
                    {proj.details.result && (
                      <div className="bg-accent-surface border border-accent-border rounded-xl p-4">
                        <p className="text-sm text-theme-main font-medium flex items-start gap-2">
                          <span className="text-accent mt-0.5">✦</span>
                          <span className="leading-snug">
                            <TextWithGlossary text={proj.details.result} />
                          </span>
                        </p>
                      </div>
                    )}

                    {/* Links */}
                    {proj.details.pdfLink && (
                      <a
                        href={proj.details.pdfLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-theme-main hover:text-accent transition-colors w-fit mb-2"
                      >
                        <div className="w-8 h-8 rounded-lg bg-surface border border-subtle flex items-center justify-center">
                          <FileText size={14} className="text-accent" />
                        </div>
                        {proj.details.pdfLabel ?? 'View Documentation'}
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Clearfix to ensure container fully wraps floating elements */}
              <div className="clear-both"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="py-32 px-6 md:px-12 max-w-4xl mx-auto">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="mb-16 text-center"
      >
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-4">
          Selected Works
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-theme-main mb-6">
          Engineering & <span className="text-gradient">Simulation</span>
        </h2>
        <p className="text-base text-theme-muted leading-relaxed">
          Deep-dives into finite element analysis, computational fluid dynamics, and optimization
          pipelines.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="flex flex-col gap-4"
      >
        {projects.map((proj) => (
          <ExpandableProjectCard key={proj.title} proj={proj} setSelectedImage={setSelectedImage} />
        ))}
      </motion.div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-theme-base/90 backdrop-blur-xl p-4 sm:p-12 cursor-zoom-out"
          >
            <button
              className="absolute top-6 right-6 p-3 rounded-full bg-surface border border-subtle text-theme-main hover:bg-surface-hover hover:text-status-danger transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Full screen view"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-subtle"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
