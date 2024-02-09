import { ChatMicrophone } from './ChatMicrophone/index.js'
import { ChatButton } from './ChatButton/index.js'

import { useAudioSetup } from '../../hooks/useAudioSetup.js'

import { Container } from './Style.js'

export const ChatHandler = () => {

  const { chatState, setChatState, recorder } = useAudioSetup()
  
  return (
    <Container>
      <ChatMicrophone />
      <ChatButton chatState={chatState} setChatState={setChatState} recorder={recorder}/>
    </Container>
  )
}