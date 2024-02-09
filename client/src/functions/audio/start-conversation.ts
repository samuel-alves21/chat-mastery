import { ChatState } from "../../components/ChatHandler"

import { getResponse } from "./audio-get_response"
import { playResponse } from "./audio-play_response"
import { audioRecorder } from "./audio-recorder"
import { audioSetup } from "./audio-setup"

type SetChatState = (state: ChatState) => void

export const startConversation = async (setChatState: SetChatState) => { 

  const stream = await audioSetup()
  
  if (!stream) {
    console.log('please turn on the microphone permission...')
    setChatState('start')
    return
  }
    
  setChatState('recording')

  const record = await audioRecorder(stream)
  if (!record) return

  setChatState('procesing')

  const BufferResponse = await getResponse(record)

  if (!BufferResponse) {
    console.log('Something went wrong...')
    setChatState('procesing')
    return
  }

  setChatState('speaking') 

  await playResponse(BufferResponse)

  setChatState('start')
}