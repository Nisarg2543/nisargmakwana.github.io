import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { TextWithGlossary } from './GlossaryTooltip'

interface TruncatedTextProps {
  text: string
  maxLength?: number
  className?: string
}

export function TruncatedText({ text, maxLength = 180, className = '' }: TruncatedTextProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const shouldTruncate = text.length > maxLength

  const displayText = shouldTruncate && !isExpanded ? text.slice(0, maxLength).trim() + '...' : text

  return (
    <div className={className}>
      <motion.div layout="position">
        <TextWithGlossary text={displayText} />
      </motion.div>
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          {isExpanded ? (
            <>
              Show less <ChevronUp size={14} />
            </>
          ) : (
            <>
              Read more <ChevronDown size={14} />
            </>
          )}
        </button>
      )}
    </div>
  )
}
