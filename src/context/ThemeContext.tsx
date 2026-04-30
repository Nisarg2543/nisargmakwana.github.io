import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type ThemeMode = 'dark' | 'light'
export type ThemePalette = 'indigo' | 'emerald' | 'rose' | 'amber'
export type ThemeStyle = 'glassmorphism' | 'minimalist' | 'cyberpunk' | 'precision' | 'blueprint'

interface ThemeContextType {
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
  palette: ThemePalette
  setPalette: (palette: ThemePalette) => void
  style: ThemeStyle
  setStyle: (style: ThemeStyle) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Try to load from localStorage, default to initial values
  const [mode, setMode] = useState<ThemeMode>(
    () => (localStorage.getItem('theme-mode') as ThemeMode) || 'dark'
  )
  const [palette, setPalette] = useState<ThemePalette>(
    () => (localStorage.getItem('theme-palette') as ThemePalette) || 'indigo'
  )
  const [style, setStyle] = useState<ThemeStyle>(
    () => (localStorage.getItem('theme-style') as ThemeStyle) || 'glassmorphism'
  )

  useEffect(() => {
    const root = window.document.documentElement

    // Remove old attributes to prevent conflicts (though overriding should work)
    root.removeAttribute('data-mode')
    root.removeAttribute('data-palette')
    root.removeAttribute('data-style')

    // Apply new attributes
    root.setAttribute('data-mode', mode)
    root.setAttribute('data-palette', palette)
    root.setAttribute('data-style', style)

    // Save to localStorage
    localStorage.setItem('theme-mode', mode)
    localStorage.setItem('theme-palette', palette)
    localStorage.setItem('theme-style', style)
  }, [mode, palette, style])

  return (
    <ThemeContext.Provider value={{ mode, setMode, palette, setPalette, style, setStyle }}>
      {children}
    </ThemeContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
