import { ChatState } from ".."
import { MainContainer, MicContainer } from "./Styles"

import { captalizeText } from "../../../../functions/text-captalize"

type ChatMicrophoneProps = {
  isStarted: boolean
  chatState: ChatState
  recorder: MediaRecorder | null
  setChatState: (state: ChatState) => void
}

export type ChatMicrophoneStyles = {
  $chatState: ChatState
  $isStarted: boolean
}

export const ChatMicrophone = ({ chatState, recorder, isStarted, setChatState }: ChatMicrophoneProps) => {

  const handleRecorder = () => {
    if (!isStarted) return
    if (chatState === 'procesing' || chatState === 'speaking') return
    
    if (chatState === 'ready') {
      setChatState('recording')
      recorder?.start()
  
    } else {
      setChatState('procesing')
      recorder?.stop()
    }
  }

  const captalizedText = captalizeText(chatState)
  const buttonText = chatState === 'ready' ? captalizedText : captalizedText + '...'

  return (
    <MainContainer>
      <MicContainer onClick={handleRecorder} $chatState={chatState} $isStarted={isStarted}>
        <i className="bi bi-mic-fill"></i>
      </MicContainer>
      <p>{buttonText}</p>
    </MainContainer>
  )
}