import { AiState } from "./ai-initial-state"
import { SetVoice } from "./ai-type"

export type AiActions = SetVoice

type AiReducer = (state: AiState, action: AiActions) => AiState

export const aiReducer: AiReducer = (state, action) => {
  switch (action.type) {
    case "SET_VOICE":
      return { ...state, voice: action.payload }
    default:
      return state
  }
}
