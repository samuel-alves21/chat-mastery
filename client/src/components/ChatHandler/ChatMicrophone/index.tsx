import { ChatState } from ".."
import { Container } from "./Styles"

type ChatMicrophoneProps = {
  chatState: ChatState
  setChatState: (state: ChatState) => void
  recorder: MediaRecorder | null
}

export const ChatMicrophone = ({ chatState, setChatState, recorder }: ChatMicrophoneProps) => {

  const handleRecorder = () => {
    if (chatState === 'start') {
      setChatState('recording')
      recorder?.start()
  
    } else {
      setChatState('procesing')
      recorder?.stop()
    }
  }

  return (
    <Container onClick={handleRecorder}>
      <i className="bi bi-mic-fill"></i>
    </Container>
  )
}