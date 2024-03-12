import { AlertInitialState } from "./alert-initial-state"
import { Leaveconversation, SetDisplay, SetMicrophoneAlert, SetStopAlert } from "./alert-type"

export type AlertAction = SetDisplay | SetMicrophoneAlert | SetStopAlert | Leaveconversation

type AlertReducer = (state: AlertInitialState, action: AlertAction) => AlertInitialState

export const alertReducer: AlertReducer = (state, action) => {
  switch (action.type) {
    case "SET_DISPLAY":
      return { ...state, display: action.payload, leaveConversation: false }
    case "STOP_CONVERSATION":
      return { ...state, type: 'conversation', text: 'your progress and history will be deleted, are you sure to leave?' }
    case "GET_MICROPHONE":
      return { ...state, type: 'microphone', text: 'To use this app, you need to give the permission to use the microphone' }
    case "LEAVE_CONVERSATION":
      return { ...state, leaveConversation: true }
    default:
      return state
  }
}
