import { useContext, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import { conversationContext } from '../../utils/conversation-context.js'
import { breakingPoints } from '../../utils/breaking-points.js'

import { ChatMicrophone } from './ChatMicrophone/index.js'
import { HistoryButton } from './HistoryButton/index.js'
import { SettingsIcon } from './SeetingsIcon/index.js'
import { AsideHistory } from './AsideHistory/index.js'
import { ChatHistory } from './ChatHistory/index.js'
import { ChatButton } from './ChatButton/index.js'
import { Footer } from './Footer/index.js'

import { ToggleHistoryContext, ToggleHistoryContextType } from '../../contexts/ToggleHistoryContext/index.js'

import { Container, CenterContainer, MainContainer } from './Styles.js'

import { useAlertBeforeReload } from '../../hooks/useAlertBeforeReload.js'

export type ChatState = 'ready' | 'recording' | 'procesing' | 'speaking'

export const ChatHandler = () => {

  const [chatState, setChatState] = useState<ChatState>('ready')
  const [recorder, setRecorder] = useState<MediaRecorder | null>(null)
  const [isStarted, setIsStarted] = useState(false)
  const [chatContext, setChatContext] = useState(conversationContext)
  const [chatHistory, setChatHistory] = useState<Array<string>>([])

  const xl = useMediaQuery({ query: `(min-width: ${breakingPoints.xl})`})

  const { setToggle } = useContext(ToggleHistoryContext) as ToggleHistoryContextType
  
  useAlertBeforeReload(isStarted)

  useEffect(() => {
    if (xl) setToggle(false)
  })

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
      <div style={{overflowY: 'auto'}}>
        {xl ? <ChatHistory chatHistory={chatHistory}/> : <AsideHistory chatHistory={chatHistory}/>}
        {xl || <HistoryButton />}
      </div>
    </MainContainer>
  )
}
