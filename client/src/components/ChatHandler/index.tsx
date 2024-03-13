import { useEffect, useState } from 'react'

import { conversationContext } from '../../utils/conversation-context.js'

import { ChatMicrophone } from './ChatMicrophone/index.js'
import { SettingsIcon } from './SeetingsIcon/index.js'
import { ChatButton } from './ChatButton/index.js'

import { Container, CenterContainer, MainContainer } from './Styles.js'
import { ChatHistory } from './ChatHistory/index.js'
import { Footer } from './Footer/index.js'

import alloy from '../../../public/songs/voice-alloy.wav'
import echo from '../../../public/songs/voice-echo.wav'
import fable from '../../../public/songs/voice-fable.wav'

export type ChatState = 'ready' | 'recording' | 'procesing' | 'speaking'

export const ChatHandler = () => {

  const [chatState, setChatState] = useState<ChatState>('ready')
  const [recorder, setRecorder] = useState<MediaRecorder | null>(null)
  const [isStarted, setIsStarted] = useState(false)
  const [chatContext, setChatContext] = useState(conversationContext)
  const [chatHistory, setChatHistory] = useState<Array<string>>([alloy, echo, fable])
  
  useEffect(() => {
    if (isStarted) {
      const beforeUnloadHandler = (event: BeforeUnloadEvent) => {
        event.preventDefault()
        event.returnValue = ''
        const confirmationMessage = 'You are still practising and changes may not be saved. Do you really want to leave?.'
        return confirmationMessage
      }
    
      window.addEventListener('beforeunload', beforeUnloadHandler)
    
      return () => {
        window.removeEventListener('beforeunload', beforeUnloadHandler)
      }
    }
  }, [isStarted])

  return (
    <MainContainer>
      <CenterContainer>
        <ChatMicrophone 
        recorder={recorder}
        chatState={chatState} 
        isStarted={isStarted}
        setChatState={setChatState} 
        />
        <Container>
          <ChatButton 
          chatState={chatState} 
          isStarted={isStarted} 
          chatContext={chatContext}
          chatHistory={chatHistory}
          setChatHistory={setChatHistory}
          setRecorder={setRecorder} 
          setChatState={setChatState} 
          setIsStarted={setIsStarted}
          setChatContext={setChatContext}
          />
          <SettingsIcon />
        </Container>
        <Footer />
      </CenterContainer>
      <ChatHistory chatHistory={chatHistory}/>
    </MainContainer>
  )
}
