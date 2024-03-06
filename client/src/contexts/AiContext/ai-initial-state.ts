import { Voices } from "../../utils/voice-options"

export type AiState = {
  voice: Voices
}

export const initialState: AiState = {
  voice: 'echo'
}
