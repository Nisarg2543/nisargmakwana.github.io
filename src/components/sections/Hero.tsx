import { motion } from 'framer-motion'
import { ArrowDown, Mail, Github, Linkedin, Circle, Download } from 'lucide-react'
import { ElegantShape } from '@/components/ui/shape-landing-hero'
import { cn } from '@/lib/utils'

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  },
})

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#08080f]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.07] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ElegantShape delay={0.3} width={600} height={140} rotate={12} gradient="from-indigo-500/[0.12]" className="left-[-8%] top-[18%]" />
        <ElegantShape delay={0.5} width={480} height={110} rotate={-15} gradient="from-rose-500/[0.12]" className="right-[-4%] top-[68%]" />
        <ElegantShape delay={0.4} width={280} height={70} rotate={-8} gradient="from-violet-500/[0.12]" className="left-[8%] bottom-[12%]" />
        <ElegantShape delay={0.6} width={180} height={55} rotate={20} gradient="from-cyan-500/[0.12]" className="right-[18%] top-[12%]" />
        <ElegantShape delay={0.7} width={140} height={38} rotate={-25} gradient="from-amber-500/[0.10]" className="left-[22%] top-[8%]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left – text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              variants={fadeUp(0.4)}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.10] mb-7"
            >
              <Circle className="h-2 w-2 fill-emerald-400/80 text-emerald-400/80" />
              <span className="text-xs text-white/55 tracking-widest uppercase font-medium">Open to opportunities</span>
            </motion.div>

            <motion.h1
              variants={fadeUp(0.55)}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.06] tracking-tight mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/75">
                FEA · CFD ·
              </span>
              <br />
              <span className={cn(
                "bg-clip-text text-transparent",
                "bg-gradient-to-r from-indigo-300 via-violet-200 to-rose-300"
              )}>
                Design Engineer
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp(0.7)}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg text-white/45 max-w-lg mb-10 leading-relaxed font-light mx-auto lg:mx-0"
            >
              MSc Advanced Mechanical Engineering (Leeds) — specialising in
              multiphysics simulation, finite element analysis, CFD, and design
              optimisation for biomedical and industrial systems.
            </motion.p>

            <motion.div
              variants={fadeUp(0.85)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-indigo-500/20"
              >
                <Mail size={15} />
                Get in touch
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.12] text-white/80 hover:text-white font-medium text-sm transition-all duration-200"
              >
                View projects
              </a>
              <a
                href="/Nisarg_Makwana_CV.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.12] text-white/80 hover:text-white font-medium text-sm transition-all duration-200"
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
              <a href="mailto:nisarg2543@gmail.com" className="text-white/35 hover:text-white/70 transition-colors" title="Email">
                <Mail size={18} />
              </a>
              <a href="https://github.com/Nisarg2543" target="_blank" rel="noreferrer" className="text-white/35 hover:text-white/70 transition-colors" title="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/nisargmakwana/" target="_blank" rel="noreferrer" className="text-white/35 hover:text-white/70 transition-colors" title="LinkedIn">
                <Linkedin size={18} />
              </a>
              <span className="text-white/15 text-sm">|</span>
              <span className="text-xs text-white/30 tracking-wide">Belfast, UK · Global Talent Visa</span>
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
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-indigo-500/25 via-violet-500/15 to-rose-500/20 blur-2xl" />
              {/* Outer decorative ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-indigo-500/30 to-rose-500/20 p-[1px]">
                <div className="w-full h-full rounded-full bg-[#08080f]" />
              </div>
              {/* Profile image */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-white/[0.10]">
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
                className="absolute -bottom-3 -right-3 bg-[#0f0f14] border border-white/[0.10] rounded-xl px-3 py-2 shadow-xl"
              >
                <p className="text-xs font-medium text-white/80">Research Assistant</p>
                <p className="text-[10px] text-indigo-400/80">Queen's University Belfast</p>
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
          <ArrowDown size={18} className="text-white/25" />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/50 pointer-events-none" />
    </div>
  )
}
