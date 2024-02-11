import { useState } from 'react'

import { conversationContext } from '../../utils/conversationContext.js'

import { ChatMicrophone } from './ChatMicrophone/index.js'
import { ChatButton } from './ChatButton/index.js'
import { Container } from './Style.js'

export type ChatState = 'ready' | 'recording' | 'procesing' | 'speaking'

export const ChatHandler = () => {

  const [chatState, setChatState] = useState<ChatState>('ready')
  const [recorder, setRecorder] = useState<MediaRecorder | null>(null)
  const [isStarted, setIsStarted] = useState(false)
  const [chatContext, setChatContext] = useState(conversationContext)

  return (
    <Container>
      <ChatMicrophone 
      recorder={recorder}
      chatState={chatState} 
      isStarted={isStarted}
      setChatState={setChatState} 
      />
      <ChatButton 
      recorder={recorder} 
      chatState={chatState} 
      isStarted={isStarted} 
      chatContext={chatContext}
      setRecorder={setRecorder} 
      setChatState={setChatState} 
      setIsStarted={setIsStarted}
      setChatContext={setChatContext}
      />
    </Container>
  )
}