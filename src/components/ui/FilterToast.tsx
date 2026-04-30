import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useFilter } from '@/context/FilterContext'

export function FilterToast() {
  const { activeSkill, setActiveSkill } = useFilter()

  return (
    <AnimatePresence>
      {activeSkill && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 50, x: '-50%' }}
          className="fixed bottom-8 left-1/2 z-50 flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-900/80 border border-indigo-500/30 text-white shadow-xl backdrop-blur-md"
        >
          <span className="text-sm font-medium">
            Filtering by: <span className="text-indigo-300">{activeSkill}</span>
          </span>
          <button
            onClick={() => setActiveSkill(null)}
            className="p-1 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Clear filter"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
