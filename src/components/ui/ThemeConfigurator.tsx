import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Settings, X, Moon, Sun, Palette, LayoutTemplate } from 'lucide-react'
import { useTheme, ThemePalette, ThemeStyle } from '@/context/ThemeContext'

export function ThemeConfigurator() {
  const [isOpen, setIsOpen] = useState(false)
  const { mode, setMode, palette, setPalette, style, setStyle } = useTheme()

  const palettes: { id: ThemePalette; name: string; color: string }[] = [
    { id: 'indigo', name: 'Indigo', color: 'bg-indigo-500' },
    { id: 'emerald', name: 'Emerald', color: 'bg-emerald-500' },
    { id: 'rose', name: 'Rose', color: 'bg-rose-500' },
    { id: 'amber', name: 'Amber', color: 'bg-amber-500' },
  ]

  const styles: { id: ThemeStyle; name: string; desc: string }[] = [
    { id: 'glassmorphism', name: 'Glass', desc: 'Soft blurs & rounded borders' },
    { id: 'minimalist', name: 'Minimalist', desc: 'Clean, flat & borderless' },
    { id: 'cyberpunk', name: 'Cyberpunk', desc: 'Sharp edges & neon glow' },
    { id: 'precision', name: 'Precision', desc: 'Monochrome & analytical' },
    { id: 'blueprint', name: 'Blueprint', desc: 'Technical & grid-based' },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-40 p-3 rounded-full bg-surface border border-subtle text-theme-main hover:bg-surface-hover shadow-lg transition-all"
        aria-label="Open theme settings"
      >
        <Settings size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
            />

            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-80 bg-theme-base border-r border-subtle z-[101] shadow-2xl overflow-y-auto flex flex-col"
            >
              <div className="p-6 border-b border-subtle flex items-center justify-between sticky top-0 bg-theme-base/80 backdrop-blur-md z-10">
                <div className="flex items-center gap-2">
                  <Palette size={18} className="text-accent" />
                  <h2 className="font-semibold text-theme-main">Appearance</h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-theme-muted hover:text-theme-main hover:bg-surface transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 space-y-8 flex-1">
                {/* Mode Section */}
                <section>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-theme-faint mb-3 flex items-center gap-2">
                    <Sun size={12} /> Color Mode
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setMode('light')}
                      className={`py-2.5 px-4 rounded-xl text-sm font-medium flex justify-center items-center gap-2 transition-colors border ${
                        mode === 'light'
                          ? 'bg-accent-surface border-accent-border text-accent'
                          : 'bg-surface border-subtle text-theme-muted hover:text-theme-main'
                      }`}
                    >
                      <Sun size={14} /> Light
                    </button>
                    <button
                      onClick={() => setMode('dark')}
                      className={`py-2.5 px-4 rounded-xl text-sm font-medium flex justify-center items-center gap-2 transition-colors border ${
                        mode === 'dark'
                          ? 'bg-accent-surface border-accent-border text-accent'
                          : 'bg-surface border-subtle text-theme-muted hover:text-theme-main'
                      }`}
                    >
                      <Moon size={14} /> Dark
                    </button>
                  </div>
                </section>

                {/* Palette Section */}
                <section>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-theme-faint mb-3 flex items-center gap-2">
                    <Palette size={12} /> Accent Palette
                  </h3>
                  <div className="grid grid-cols-4 gap-2">
                    {palettes.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setPalette(p.id)}
                        className={`flex flex-col items-center gap-2 p-2 rounded-xl transition-colors ${
                          palette === p.id ? 'bg-surface-hover' : 'hover:bg-surface'
                        }`}
                        title={p.name}
                      >
                        <div
                          className={`w-8 h-8 rounded-full ${p.color} ${palette === p.id ? 'ring-2 ring-offset-2 ring-offset-theme-base ring-accent' : ''}`}
                        />
                        <span
                          className={`text-[10px] ${palette === p.id ? 'text-theme-main font-medium' : 'text-theme-muted'}`}
                        >
                          {p.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </section>

                {/* Style Section */}
                <section>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-theme-faint mb-3 flex items-center gap-2">
                    <LayoutTemplate size={12} /> Design Style
                  </h3>
                  <div className="space-y-2">
                    {styles.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setStyle(s.id)}
                        className={`w-full text-left p-3 rounded-xl border transition-all ${
                          style === s.id
                            ? 'bg-accent-surface border-accent-border'
                            : 'bg-surface border-subtle hover:border-hover'
                        }`}
                      >
                        <div
                          className={`font-medium text-sm ${style === s.id ? 'text-accent' : 'text-theme-main'}`}
                        >
                          {s.name}
                        </div>
                        <div
                          className={`text-xs mt-1 ${style === s.id ? 'text-accent/70' : 'text-theme-faint'}`}
                        >
                          {s.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                </section>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
