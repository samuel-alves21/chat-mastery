import { createContext, useReducer } from 'react'
import { AlertInitialState, initialState } from './alert-initial-state'
import { AlertAction, alertReducer } from './alert-reducer'

type AlertContextProvider = {
  children: React.ReactNode
}

export type AlertContextType = {
  alertState: AlertInitialState
  alertDispatch: React.Dispatch<AlertAction>
}

export const AlertContext = createContext<null | AlertContextType>(null)

export const AlertProvider = ({ children }: AlertContextProvider) => {

  const [alertState, alertDispatch] = useReducer(alertReducer, initialState)

  return (
    <AlertContext.Provider value={{ alertState, alertDispatch }}>
      {children}
    </AlertContext.Provider>
  )
}