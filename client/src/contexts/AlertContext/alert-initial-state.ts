export type AlertInitialState = {
  display: boolean,
  type: 'microphone' | 'conversation'
  text: string
  leaveConversation: boolean
}

export const initialState: AlertInitialState = {
  display: false,
  type: 'microphone',
  text: '',
  leaveConversation: false
}
