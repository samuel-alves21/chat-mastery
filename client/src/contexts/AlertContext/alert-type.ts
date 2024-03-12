export type SetDisplay = {
  type: 'SET_DISPLAY'
  payload: boolean
} 

export type SetMicrophoneAlert = {
  type: 'STOP_CONVERSATION'
}

export type SetStopAlert = {
  type: 'GET_MICROPHONE'
}

export type Leaveconversation = {
  type: 'LEAVE_CONVERSATION'
}
