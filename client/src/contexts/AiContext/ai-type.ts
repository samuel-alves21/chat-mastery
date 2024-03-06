import { Voices } from "../../utils/voice-options"

export type SetVoice = {
  type: 'SET_VOICE'
  payload: Voices
}