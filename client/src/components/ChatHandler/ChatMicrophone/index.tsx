import { MainContainer, MicContainer } from "./Styles"

import { captalizeText } from "../../../functions/text-captalize"

import { ChatState } from ".."
import { useEffect, useState } from "react"

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

  const [timer, setTimer] = useState(15)

  useEffect(() => {
    let recordTimeout: number
    if (!timer) {
      setChatState('procesing')
      recorder?.stop()
      setTimer(15)
    } else {
      
      if (chatState === 'recording') {
        console.log('timer')
        recordTimeout = setInterval(() => {
          setTimer(timer -1)
        }, 1000)
      } else {
        setTimer(15)
      }
      
    }
    return () => {
      clearInterval(recordTimeout)
    }
    
  }, [chatState, timer, recorder, setChatState])
  
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
  const formatedTimer = timer.toString().length > 1 ? timer : '0' + timer
  const buttonText = chatState === 'ready' ? captalizedText : captalizedText + '...'

  return (
    <MainContainer>
      <p>00:{formatedTimer}</p>
      <MicContainer onClick={handleRecorder} $chatState={chatState} $isStarted={isStarted}>
        <i className="bi bi-mic-fill"></i>
      </MicContainer>
      <p>{buttonText}</p>
    </MainContainer>
  )
}