import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TooltipProps {
  term: string
  definition: string
  children: React.ReactNode
}

export function GlossaryTooltip({ term, definition, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <span
      className="relative inline-block border-b border-dashed border-indigo-400/50 cursor-help transition-colors hover:text-indigo-200"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-3 text-xs text-left text-white bg-indigo-950/95 border border-indigo-500/30 rounded-xl shadow-xl backdrop-blur-md cursor-default pointer-events-none"
          >
            <span className="font-semibold text-indigo-300 block mb-1 text-[11px] uppercase tracking-wider">
              {term}
            </span>
            <span className="text-white/70 leading-relaxed block">{definition}</span>
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-indigo-500/30" />
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 border-[4px] border-transparent border-t-indigo-950"
              style={{ marginTop: '-2px' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  )
}

const glossary = {
  'Bayesian optimisation':
    'A strategy for the global optimisation of black-box functions, balancing exploration and exploitation.',
  'Bayesian optimisation pipeline':
    'A strategy for the global optimisation of black-box functions, balancing exploration and exploitation.',
  FEBio: 'A nonlinear finite element solver specifically designed for biomechanics and biophysics.',
  'Maxwell Stress Tensor':
    'A mathematical tensor used to calculate electromagnetic forces in a magnetic field.',
  CFD: 'Computational Fluid Dynamics - use of applied mathematics and computers to model fluid flow.',
  FEA: 'Finite Element Analysis - a numerical method for solving engineering problems.',
  'Surrogate modelling':
    'An engineering method used when an outcome of interest cannot be easily directly measured, so a model of the outcome is used instead.',
  Multiphysics:
    'The coupled modelling of more than one simultaneously occurring physical field (e.g. thermal and structural).',
  'Laminar flow':
    'Fluid flow in which layers of fluid slide smoothly parallel to each other, without lateral mixing.',
  'Advection-diffusion':
    'The process of transport of a substance by bulk fluid motion (advection) and random molecular motion (diffusion).',
  'Expected Improvement':
    'An acquisition function in Bayesian optimisation that measures the expected amount of improvement over the current best observation.',
  Chemiluminescence:
    'The emission of light as the result of a chemical reaction, used here to measure NO release.',
}

export function TextWithGlossary({ text, className = '' }: { text: string; className?: string }) {
  // Sort terms by length descending to match longest phrases first
  const terms = Object.keys(glossary).sort((a, b) => b.length - a.length)
  // Create safe regex string
  const safeTerms = terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const regex = new RegExp(`\\b(${safeTerms.join('|')})\\b`, 'gi')

  const parts = text.split(regex)

  return (
    <span className={className}>
      {parts.map((part, i) => {
        const lowerPart = part.toLowerCase()
        const termKey = terms.find((t) => t.toLowerCase() === lowerPart)
        if (termKey) {
          return (
            <GlossaryTooltip
              key={i}
              term={termKey}
              definition={glossary[termKey as keyof typeof glossary]}
            >
              {part}
            </GlossaryTooltip>
          )
        }
        return <span key={i}>{part}</span>
      })}
    </span>
  )
}
