import { MainScreen } from "./components/MainScreen"
import { Settings } from "./components/Settings"
import { SettingsProvider } from "./contexts/SettingsContext"
import { GlobalStyles } from "./GlobalStyles"

function App() {
  return (
    <>
    <GlobalStyles />
    <SettingsProvider>
      <Settings />
      <MainScreen />
    </SettingsProvider>
    </>
  )
}

export default App
