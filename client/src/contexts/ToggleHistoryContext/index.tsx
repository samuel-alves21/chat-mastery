import { createContext, useState } from 'react'

type Props = {
  children: React.ReactNode
}

export type ToggleHistoryContextType = {
  toggle: boolean
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
}

export const ToggleHistoryContext = createContext<ToggleHistoryContextType | null>(null)

export const ToggleHistoryProvider = ({ children }: Props) => {

  const [toggle, setToggle] = useState(false)

  return (
    <ToggleHistoryContext.Provider value={{ toggle, setToggle }}>
      {children}
    </ToggleHistoryContext.Provider>
  )
}