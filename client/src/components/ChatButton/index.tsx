import { useEffect, useState } from 'react'

import { Button } from './Style'

import { audioSetup } from '../../functions/audio/audio-setup.js'
import { getResponse } from '../../functions/audio/audio-get_response.js'
import { playResponse } from '../../functions/audio/audio-play_response.js'

export type ChatState = 'start' | 'recording' | 'procesing' | 'speaking'

export type StyledProps = {
  $chatState: ChatState
}

export const ChatButton = () => {
  
  const [chatState, setChatState] = useState<ChatState>('start')
  const [recorder, setRecorder] = useState<MediaRecorder>()


  useEffect(() => {
    audioSetup().then((stream) => {
      if (!stream) {
        console.log('please turn on the microphone permission...')
        setChatState('start')
      } else {
        
        let chunkArray: Array<Blob> = []

        const recorder = new MediaRecorder(stream)

        setRecorder(recorder)

        recorder.ondataavailable = (e) => {
          chunkArray.push(e.data)
        }

        recorder.onstop = () => {
          const audioBlob = new Blob(chunkArray, { type: 'audio/mpeg' })
      
          chunkArray = []
          console.log('resolved')
          
          getResponse(audioBlob).then((audioArrayBuffer) => {
            if (!audioArrayBuffer) {
              console.log('Something went wrong...')
              setChatState('start')
            } else {
              setChatState('speaking') 
            
              playResponse(audioArrayBuffer).then(() => setChatState('start'))
            }
          })
        }
      }
    })

  }, [])

  const handleconversation = () => {
    
    if (chatState === 'start') {
      setChatState('recording')
      recorder?.start()

    } else {
      setChatState('procesing')
      recorder?.stop()
    }
  }

  return (
    <Button id='chat-button' onClick={handleconversation} $chatState={chatState}>{chatState.replace(chatState[0], chatState[0].toUpperCase())}</Button>
  )
}