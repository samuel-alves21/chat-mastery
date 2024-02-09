import { useEffect, useState } from "react"

import { audioSetup } from "../functions/audio/audio-setup"
import { getResponse } from "../functions/audio/audio-get_response"
import { playResponse } from "../functions/audio/audio-play_response"

export type ChatState = 'start' | 'recording' | 'procesing' | 'speaking'

export const useAudioSetup = () => {
  const [chatState, setChatState] = useState<ChatState>('start')
  const [recorder, setRecorder] = useState<MediaRecorder>()

  useEffect(() => {
    const asyncFn = async () => {
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
        const audioBlob = new Blob(chunkArray, { type: 'audio/mpeg' })
    
        chunkArray = []
        console.log('resolved')
        
        const audioArrayBuffer = await getResponse(audioBlob)

        if (!audioArrayBuffer) {
          console.log('Something went wrong...')
          setChatState('start')
          return
        }
        
        setChatState('speaking') 
      
        await playResponse(audioArrayBuffer)
        setChatState('start')
      }
    }
    asyncFn()
  }, [])

  return { chatState, setChatState, recorder }
}