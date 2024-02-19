import { ConversationContext, conversationContext } from "../../../../utils/conversation-context"

import { audioSetup } from "../../../../functions/audio/audio-setup"
import { getResponse } from "../../../../functions/audio/audio-get_response"
import { playResponse } from "../../../../functions/audio/audio-play_response"

import { Button } from "./Styles"

import { ChatState } from ".."

type ChatButtonProps = {
  isStarted: boolean
  chatState: ChatState
  recorder: MediaRecorder | null
  chatContext: Array<object>
  setIsStarted: (state: boolean) => void
  setChatState: (state: ChatState) => void
  setRecorder: (recorder: MediaRecorder) => void
  setChatContext: (context: ConversationContext) => void
}

export type ChatButtonStyles = {
  $chatState: ChatState
  $isStarted: boolean
}

export const ChatButton = ({ chatState, isStarted, recorder, chatContext, setChatState, setIsStarted, setRecorder, setChatContext }: ChatButtonProps) => {

  const handleconversation = async () => {
    if (!isStarted) {

      const stream = await audioSetup()

      if (!stream) {
        console.log('please turn on the microphone permission...')
        setChatState('ready')
        return
      } 
      
      let chunkArray: Array<Blob> = []
      
      if (recorder) {
        setIsStarted(true)
        return
      }
      
      const recorderObj = new MediaRecorder(stream)  
      
      recorderObj.ondataavailable = (e) => {
        chunkArray.push(e.data)
      }
      
      recorderObj.onstop = async () => {
        const audioBlob = new Blob(chunkArray, { type: 'audio/mpeg' })
        const reader = new FileReader()
        reader.readAsDataURL(audioBlob)

        reader.onloadend = async () => {
          if (typeof reader.result === 'string') {

            const base64AudioData = reader.result.split(',')[1]
  
            chunkArray = []

            const { audio, updatedContext } = await getResponse(base64AudioData, chatContext)
            
            if (!audio) {
              setChatState('ready')
              console.log('Something went wrong...')
              return
            }

            const binaryString = atob(audio)
            
            const uint8Array = new Uint8Array(binaryString.length)

            for (let i = 0; i < binaryString.length; i++) {
              uint8Array[i] = binaryString.charCodeAt(i)
            }
            
            setChatState('speaking') 
            
            await playResponse(uint8Array)
            setChatState('ready')
            setChatContext(updatedContext)
          } 
        }
      }
      
      setRecorder(recorderObj)
      setIsStarted(true)

    } else {
      // end conversation
      setIsStarted(false)
      setChatContext(conversationContext)
    }
  }

  return (
    <Button onClick={handleconversation} $chatState={chatState} $isStarted={isStarted}>{isStarted ? 'Stop' : 'Start Pratice' }</Button>
  )
}