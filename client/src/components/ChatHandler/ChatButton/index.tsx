import { useContext, useEffect } from "react"

import { ConversationContext, conversationContext } from "../../../utils/conversation-context"

import { AlertContext, AlertContextType } from "../../../contexts/AlertContext"
import { AiContext, AiContextType } from "../../../contexts/AiContext"

import { getFirstResponse } from "../../../functions/audio/audio-get_first_response"
import { playResponse } from "../../../functions/audio/audio-play_response"
import { recorderSetup } from "../../../functions/audio/recorder-setup"
import { deviceSetup } from "../../../functions/audio/device-setup"
import { undecode } from "../../../functions/audio/audio-undecode"

import { Button } from "./Styles"

import { ChatState } from ".."

type ChatButtonProps = {
  isStarted: boolean
  chatState: ChatState
  chatContext: ConversationContext
  chatHistory: Array<string>
  setChatHistory: (history: Array<string>) => void
  setIsStarted: (state: boolean) => void
  setChatState: (state: ChatState) => void
  setRecorder: (recorder: MediaRecorder | null) => void
  setChatContext: (context: ConversationContext) => void
}

export type ChatButtonStyles = {
  $chatState: ChatState
  $isStarted: boolean
}

export const ChatButton = ({ 
  chatState, 
  isStarted, 
  chatContext, 
  chatHistory,
  setChatHistory,
  setChatState, 
  setIsStarted, 
  setRecorder, 
  setChatContext
}: ChatButtonProps) => {
  
  const { aiState: { voice } } = useContext(AiContext) as AiContextType
  const { alertState: { leaveConversation } ,alertDispatch } = useContext(AlertContext) as AlertContextType 

  useEffect(() => {
    if (!leaveConversation) return
    setIsStarted(false)
    setChatContext(conversationContext)
    setRecorder(null)
    setChatHistory([])
  }, [leaveConversation, setChatContext, setChatHistory, setIsStarted, setRecorder])

  useEffect(() => {
    if (!isStarted) return
    const asyncFn = async () => {
      const stream = await deviceSetup()
        
      if (!stream) {
        alertDispatch({ type: 'SET_DISPLAY', payload: true })
        alertDispatch({ type: 'GET_MICROPHONE' })
        setChatState('ready')
        setIsStarted(false)
        return
      } 
      
      const chunkArray: Array<Blob> = []
      
      const recorderObj = recorderSetup(stream, chunkArray, chatContext, chatHistory, voice, setChatHistory, setChatState, setChatContext)
      setRecorder(recorderObj)
    }

    asyncFn()
  }, [
    chatContext,
    chatHistory,
    setChatHistory, 
    setChatContext, 
    setChatState, 
    setRecorder, 
    voice, 
    isStarted, 
    setIsStarted, 
    alertDispatch
  ])
  
  const handleconversation = async () => {
    if (isStarted && chatState !== "ready") return 
    if (!isStarted) {
      setChatState('procesing') 
      setIsStarted(true)

      const { audio, updatedContext } = await getFirstResponse(chatContext, voice)

      setChatState('speaking') 
      
      await playResponse(undecode(audio))
      setChatHistory([...chatHistory, undecode(audio)])

      setChatState('ready')
      setChatContext(updatedContext)
    } else {
      alertDispatch({ type: 'SET_DISPLAY', payload: true })
      alertDispatch({ type: 'STOP_CONVERSATION' })
    }
  }

  return (
    <Button onClick={handleconversation} $chatState={chatState} $isStarted={isStarted}>
      {isStarted ? 'Stop' : 'Start Pratice' }
    </Button>
  )
}