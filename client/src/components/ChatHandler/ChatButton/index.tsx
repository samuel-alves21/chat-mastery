
import { ChatState } from "../../../hooks/useAudioSetup"
import { Button } from "./Styles"

type ChatButtonProps = {
  chatState: ChatState
  setChatState: React.Dispatch<React.SetStateAction<ChatState>>
  recorder: MediaRecorder | undefined
}

export type StylesProps = {
  $chatState: ChatState
}


export const ChatButton = ({ chatState, setChatState, recorder }: ChatButtonProps) => {

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