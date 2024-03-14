import { useContext } from "react"

import { ChatHandler } from "./components/ChatHandler"
import { Settings } from "./components/Settings"
import { GlobalStyles } from "./GlobalStyles"

import { SettingsProvider } from "./contexts/SettingsContext"
import { DarkModeContext, DarkModeContextType } from "./contexts/DarkModeContext"
import { AiProvider } from "./contexts/AiContext"
import { Alert } from "./components/Alert"
import { AlertProvider } from "./contexts/AlertContext"
import { ToggleHistoryProvider } from "./contexts/ToggleHistoryContext"
import { Filter } from "./components/Filter"


function App() {
  const { darkMode } = useContext(DarkModeContext) as DarkModeContextType

  return (
    <SettingsProvider>
      <AiProvider>
        <AlertProvider>
          <ToggleHistoryProvider>
            <GlobalStyles $darkMode={darkMode}/>
            <Filter />
            <Alert />
            <Settings />
            <ChatHandler />
          </ToggleHistoryProvider>
        </AlertProvider>
      </AiProvider>
    </SettingsProvider>
  )
}

export default App
