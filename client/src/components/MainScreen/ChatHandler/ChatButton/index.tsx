import { useContext, useEffect } from "react"

import { ConversationContext, conversationContext } from "../../../../utils/conversation-context"
import { AiContext, AiContextType } from "../../../../contexts/AiContext"

import { getFirstResponse } from "../../../../functions/audio/audio-get_first_response"
import { playResponse } from "../../../../functions/audio/audio-play_response"
import { recorderSetup } from "../../../../functions/audio/recorder-setup"
import { deviceSetup } from "../../../../functions/audio/device-setup"
import { undecode } from "../../../../functions/audio/audio-undecode"

import { ChatState } from ".."
import { Button } from "./Styles"

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

  useEffect(() => {
    if (!isStarted) return
    const asyncFn = async () => {
      const stream = await deviceSetup()
        
      if (!stream) {
        alert('To use this app, you need to give the permission to use the microphone')
        setChatState('ready')
        setIsStarted(false)
        return
      } 
      
      const chunkArray: Array<Blob> = []
      
      const recorderObj = recorderSetup(stream, chunkArray, chatContext, chatHistory, voice, setChatHistory, setChatState, setChatContext)
      setRecorder(recorderObj)
    }

    asyncFn()
  }, [chatContext, chatHistory, setChatHistory, setChatContext, setChatState, setRecorder, voice, isStarted, setIsStarted])
  
  const handleconversation = async () => {
    if (isStarted && chatState !== "ready") return 
    if (!isStarted) {
      setChatState('procesing') 
      setIsStarted(true)

      // play first audio
      const { audio, updatedContext } = await getFirstResponse(chatContext, voice)

      setChatState('speaking') 
      
      await playResponse(undecode(audio))
      setChatHistory([...chatHistory, undecode(audio)])

      setChatState('ready')
      setChatContext(updatedContext)
    } else {
      // end conversation
      setIsStarted(false)
      setChatContext(conversationContext)
      setRecorder(null)
      setChatHistory([])
    }
  }

  return (
    <Button onClick={handleconversation} $chatState={chatState} $isStarted={isStarted}>
      {isStarted ? 'Stop' : 'Start Pratice' }
    </Button>
  )
}