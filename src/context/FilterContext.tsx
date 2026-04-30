import { createContext, useContext, useState, ReactNode } from 'react'

interface FilterContextType {
  activeSkill: string | null
  setActiveSkill: (skill: string | null) => void
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export function FilterProvider({ children }: { children: ReactNode }) {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)

  return (
    <FilterContext.Provider value={{ activeSkill, setActiveSkill }}>
      {children}
    </FilterContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFilter() {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider')
  }
  return context
}
