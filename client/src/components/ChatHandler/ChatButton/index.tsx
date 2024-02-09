import { useState } from "react"

import { audioSetup } from "../../../functions/audio/audio-setup"
import { getResponse } from "../../../functions/audio/audio-get_response"
import { playResponse } from "../../../functions/audio/audio-play_response"
import { Button } from "./Styles"
import { ChatState } from ".."

type ChatButtonProps = {
  chatState: ChatState
  setChatState: (state: ChatState) => void
  setRecorder: (recorder: MediaRecorder) => void
}

export type StylesProps = {
  $chatState: ChatState
}


export const ChatButton = ({ chatState, setChatState, setRecorder }: ChatButtonProps) => {

  const [isStarted, setIsstarted] = useState(false)

  const handleconversation = async () => {
    if (!isStarted) {
      const stream = await audioSetup()

      if (!stream) {
        console.log('please turn on the microphone permission...')
        setChatState('start')
        return
      } 
      
      let chunkArray: Array<Blob> = []
      
      const recorder = new MediaRecorder(stream)

      setRecorder(recorder)

      recorder.ondataavailable = (e) => {
        chunkArray.push(e.data)
      }

      recorder.onstop = async () => {
        console.log('here')
        const audioBlob = new Blob(chunkArray, { type: 'audio/mpeg' })
    
        chunkArray = []
        
        const audioArrayBuffer = await getResponse(audioBlob)

        if (!audioArrayBuffer) {
          console.log('Something went wrong...')
          setChatState('start')
          return
        }
        
        setChatState('speaking') 
      
        await playResponse(audioArrayBuffer)
        setChatState('start')

        setIsstarted(true)
      }
    } else {
      // end conversation
      setIsstarted(true)
    }
  }

  return (
    <Button id='chat-button' onClick={handleconversation} $chatState={chatState}>{chatState.replace(chatState[0], chatState[0].toUpperCase())}</Button>
  )
}