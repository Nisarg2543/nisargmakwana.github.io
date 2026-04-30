import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Certifications from './components/sections/Certifications'
import Projects from './components/sections/Projects'
import Research from './components/sections/Research'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'

import { FilterProvider } from '@/context/FilterContext'
import { ThemeProvider } from '@/context/ThemeContext'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { BackToTop } from '@/components/ui/BackToTop'
import { FilterToast } from '@/components/ui/FilterToast'
import { ThemeConfigurator } from '@/components/ui/ThemeConfigurator'

function App() {
  return (
    <ThemeProvider>
      <FilterProvider>
        <div className="min-h-screen bg-theme-base text-theme-main overflow-x-hidden transition-colors duration-500">
          <ScrollProgress />
          <Navbar />
          <main>
            <div id="hero">
              <Hero />
            </div>
            <div id="about">
              <About />
            </div>
            <div className="w-full h-px bg-border-subtle" />
            <div id="skills">
              <Skills />
            </div>
            <div className="w-full h-px bg-border-subtle" />
            <div id="experience">
              <Experience />
            </div>
            <div className="w-full h-px bg-border-subtle" />
            <div id="certifications">
              <Certifications />
            </div>
            <div className="w-full h-px bg-border-subtle" />
            <div id="projects">
              <Projects />
            </div>
            <div className="w-full h-px bg-border-subtle" />
            <div id="research">
              <Research />
            </div>
            <div className="w-full h-px bg-border-subtle" />
            <div id="education">
              <Education />
            </div>
            <div className="w-full h-px bg-border-subtle" />
            <div id="contact">
              <Contact />
            </div>
          </main>
          <footer className="text-center py-8 text-theme-faint text-xs border-t border-border-subtle">
            © 2026 Nisarg Makwana · Belfast, UK
          </footer>
          <BackToTop />
          <FilterToast />
          <ThemeConfigurator />
        </div>
      </FilterProvider>
    </ThemeProvider>
  )
}

export default App
