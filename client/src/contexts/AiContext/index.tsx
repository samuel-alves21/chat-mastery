import { createContext, useReducer } from 'react'

import { AiActions, aiReducer } from './ai-reducer'
import { AiState, initialState } from './ai-initial-state'

export type AiContextType = {
  aiState: AiState
  aiDispatch: (action: AiActions) => void
}

export const AiContext = createContext<null | AiContextType>(null)

type AiProviderProps = {
	children: React.ReactNode
}

export const AiProvider = ({ children }: AiProviderProps) => {
  const [aiState, aiDispatch] = useReducer(aiReducer, initialState)

	return (
		<AiContext.Provider value={{ aiState, aiDispatch }}>
			{children}
		</AiContext.Provider>
	)
}