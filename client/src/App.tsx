import { useContext } from "react"

import { ChatHandler } from "./components/ChatHandler"
import { Settings } from "./components/Settings"
import { GlobalStyles } from "./GlobalStyles"

import { SettingsProvider } from "./contexts/SettingsContext"
import { DarkModeContext, DarkModeContextType } from "./contexts/DarkModeContext"
import { AiProvider } from "./contexts/AiContext"
import { Alert } from "./components/Alert"
import { AlertProvider } from "./contexts/AlertContext"


function App() {
  const { darkMode } = useContext(DarkModeContext) as DarkModeContextType

  return (
    <SettingsProvider>
      <AiProvider>
        <AlertProvider>
          <GlobalStyles $darkMode={darkMode}/>
          <Alert />
          <Settings />
          <ChatHandler />
        </AlertProvider>
      </AiProvider>
    </SettingsProvider>
  )
}

export default App
