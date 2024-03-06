import { ChatState } from "../../components/MainScreen/ChatHandler"

import { ConversationContext } from "../../utils/conversation-context"
import { Voices } from "../../utils/voice-options"

import { getResponse } from "./audio-get_response"
import { playResponse } from "./audio-play_response"
import { undecode } from "./audio-undecode"

type RecorderSetup = (
  stream: MediaStream, 
  chunkArray: Blob[], 
  chatContext: ConversationContext, 
  chatHistory: Array<string>,
  voice: Voices,
  setChatHistory: (state: Array<string>) => void,
  setChatState: (state: ChatState) => void,
  setChatContext: (context: ConversationContext) => void,
) => MediaRecorder

export const recorderSetup: RecorderSetup = (stream, chunkArray, chatContext, chatHistory, voice, setChatHistory, setChatState, setChatContext) => {
  const recorderObj = new MediaRecorder(stream)  
  
  recorderObj.ondataavailable = (e) => {
    chunkArray.push(e.data)
  }
  
  recorderObj.onstop = async () => {
    const audioBlob = new Blob(chunkArray, { type: 'audio/mpeg' })

    const audioUrl = URL.createObjectURL(audioBlob)

    const reader = new FileReader()
    reader.readAsDataURL(audioBlob)
    
    reader.onloadend = async () => {
      if (typeof reader.result === 'string') {
        
        const base64AudioData = reader.result.split(',')[1]
        
        chunkArray = []
        
        const { audio, updatedContext } = await getResponse(base64AudioData, chatContext, voice)
        
        if (!audio) {
          setChatState('ready')
          console.log('Something went wrong...')
          return
        }
        
        setChatState('speaking') 
        
        await playResponse(undecode(audio))
        setChatHistory([...chatHistory, audioUrl, undecode(audio)])
        
        setChatState('ready')
        setChatContext(updatedContext)
      } 
    }
  }

  return recorderObj
}