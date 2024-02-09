import { useState } from 'react'

import { ChatMicrophone } from './ChatMicrophone/index.js'
import { ChatButton } from './ChatButton/index.js'
import { Container } from './Style.js'

export type ChatState = 'start' | 'recording' | 'procesing' | 'speaking'

export const ChatHandler = () => {

  const [chatState, setChatState] = useState<ChatState>('start')
  const [recorder, setRecorder] = useState<MediaRecorder | null>(null)
  
  return (
    <Container>
      <ChatMicrophone  chatState={chatState} setChatState={setChatState} recorder={recorder}/>
      <ChatButton chatState={chatState} setChatState={setChatState} setRecorder={setRecorder}/>
    </Container>
  )
}