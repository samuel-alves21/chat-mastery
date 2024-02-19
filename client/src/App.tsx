import { useContext } from "react"

import { MainScreen } from "./components/MainScreen"
import { Settings } from "./components/Settings"
import { GlobalStyles } from "./GlobalStyles"

import { SettingsProvider } from "./contexts/SettingsContext"
import { DarkModeContext, DarkModeContextType } from "./contexts/DarkModeContext"


function App() {
  const { darkMode } = useContext(DarkModeContext) as DarkModeContextType

  return (
    <SettingsProvider>
      <GlobalStyles $darkMode={darkMode}/>
      <Settings />
      <MainScreen />
    </SettingsProvider>
  )
}

export default App
