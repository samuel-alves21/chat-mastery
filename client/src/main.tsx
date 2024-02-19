import ReactDOM from 'react-dom/client'

import App from './App.tsx'

import { DarkModeProvider } from './contexts/DarkModeContext/index.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <DarkModeProvider>
    <App />
  </DarkModeProvider>
)
