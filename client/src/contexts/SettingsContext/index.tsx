import { createContext, useState } from "react"

export type SettingsContextType = {
  onScreen: boolean
  setOncreen: (onScreen: boolean) => void
}

type SettingsProviderProps = {
  children: React.ReactNode
}

export const SettingsContext = createContext<SettingsContextType | null>(null)

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [onScreen, setOncreen] = useState(false)

  return (
    <SettingsContext.Provider value={{onScreen, setOncreen}}>
      {children}
    </SettingsContext.Provider>
  )
}
