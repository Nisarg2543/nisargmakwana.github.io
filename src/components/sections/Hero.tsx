import { motion } from 'framer-motion'
import { ArrowDown, Mail, Github, Linkedin, Circle, Download } from 'lucide-react'
import { ElegantShape } from '@/components/ui/shape-landing-hero'
import { useTheme } from '@/context/ThemeContext'

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  },
})

export default function Hero() {
  const { style } = useTheme()
  const isPrecision = style === 'precision'

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      {!isPrecision && (
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-status-danger/5 blur-3xl" />
      )}

      {/* Floating geometric shapes */}
      {!isPrecision && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
          <ElegantShape
            delay={0.3}
            width={600}
            height={140}
            rotate={12}
            gradient="from-accent/20"
            className="left-[-8%] top-[18%]"
          />
          <ElegantShape
            delay={0.5}
            width={480}
            height={110}
            rotate={-15}
            gradient="from-status-danger/20"
            className="right-[-4%] top-[68%]"
          />
          <ElegantShape
            delay={0.4}
            width={280}
            height={70}
            rotate={-8}
            gradient="from-accent-dark/20"
            className="left-[8%] bottom-[12%]"
          />
          <ElegantShape
            delay={0.6}
            width={180}
            height={55}
            rotate={20}
            gradient="from-status-info/20"
            className="right-[18%] top-[12%]"
          />
          <ElegantShape
            delay={0.7}
            width={140}
            height={38}
            rotate={-25}
            gradient="from-status-warning/20"
            className="left-[22%] top-[8%]"
          />
        </div>
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left – text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              variants={fadeUp(0.4)}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-subtle mb-7 shadow-sm"
            >
              <Circle className="h-2 w-2 fill-status-success text-status-success" />
              <span className="text-xs text-theme-muted tracking-widest uppercase font-medium">
                Open to opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp(0.55)}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.06] tracking-tight mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-theme-main to-theme-muted">
                FEA · CFD ·
              </span>
              <br />
              <span className="text-gradient">Design Engineer</span>
            </motion.h1>

            <motion.p
              variants={fadeUp(0.7)}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg text-theme-faint max-w-lg mb-10 leading-relaxed font-light mx-auto lg:mx-0"
            >
              MSc Advanced Mechanical Engineering (Leeds) — specialising in multiphysics simulation,
              finite element analysis, CFD, and design optimisation for biomedical and industrial
              systems.
            </motion.p>

            <motion.div
              variants={fadeUp(0.85)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:opacity-90 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-accent/20"
              >
                <Mail size={15} />
                Get in touch
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface hover:bg-surface-hover border border-subtle text-theme-main font-medium text-sm transition-all duration-200"
              >
                View projects
              </a>
              <a
                href="/Nisarg_Makwana_CV.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface hover:bg-surface-hover border border-subtle text-theme-main font-medium text-sm transition-all duration-200"
              >
                <Download size={15} />
                Download CV
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp(1.0)}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-5 justify-center lg:justify-start"
            >
              <a
                href="mailto:nisarg2543@gmail.com"
                className="text-theme-faint hover:text-theme-main transition-colors"
                aria-label="Email"
                title="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://github.com/Nisarg2543"
                target="_blank"
                rel="noreferrer"
                className="text-theme-faint hover:text-theme-main transition-colors"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/nisargmakwana/"
                target="_blank"
                rel="noreferrer"
                className="text-theme-faint hover:text-theme-main transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <span className="text-border-subtle text-sm">|</span>
              <span className="text-xs text-theme-muted tracking-wide">
                Belfast, UK · Global Talent Visa
              </span>
            </motion.div>
          </div>

          {/* Right – profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow ring */}
              {!isPrecision && (
                <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-accent/25 via-accent-light/15 to-status-danger/20 blur-2xl" />
              )}
              {/* Outer decorative ring */}
              <div
                className={`absolute -inset-1 rounded-full p-[1px] ${isPrecision ? 'bg-border-subtle' : 'bg-gradient-to-br from-accent/30 to-status-danger/20'}`}
              >
                <div className="w-full h-full rounded-full bg-theme-base" />
              </div>
              {/* Profile image */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-border-subtle">
                <img
                  src="/nisarg.jpg"
                  alt="Nisarg Makwana"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-3 -right-3 bg-surface border border-subtle backdrop-blur-md rounded-xl px-3 py-2 shadow-xl"
              >
                <p className="text-xs font-medium text-theme-main">Research Assistant</p>
                <p className="text-[10px] text-accent">Queen's University Belfast</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} className="text-theme-faint" />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-theme-base via-transparent to-theme-base/50 pointer-events-none" />
    </div>
  )
}
