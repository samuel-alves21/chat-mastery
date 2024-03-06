import { useContext } from "react"

import { MainScreen } from "./components/MainScreen"
import { Settings } from "./components/Settings"
import { GlobalStyles } from "./GlobalStyles"

import { SettingsProvider } from "./contexts/SettingsContext"
import { DarkModeContext, DarkModeContextType } from "./contexts/DarkModeContext"
import { AiProvider } from "./contexts/AiContext"


function App() {
  const { darkMode } = useContext(DarkModeContext) as DarkModeContextType

  return (
    <SettingsProvider>
      <AiProvider>
        <GlobalStyles $darkMode={darkMode}/>
        <Settings />
        <MainScreen />
      </AiProvider>
    </SettingsProvider>
  )
}

export default App
