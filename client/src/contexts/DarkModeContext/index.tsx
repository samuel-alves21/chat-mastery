import { createContext, useState } from "react"

export type DarkModeContextType = {
  darkMode: boolean
  setDarkmode: (darkMode: boolean) => void
}

type DarkModeProviderProps = {
  children: React.ReactNode
}

export const DarkModeContext = createContext<DarkModeContextType | null>(null)

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [darkMode, setDarkmode] = useState(false)

  return (
    <DarkModeContext.Provider value={{darkMode, setDarkmode}}>
      {children}
    </DarkModeContext.Provider>
  )
}
