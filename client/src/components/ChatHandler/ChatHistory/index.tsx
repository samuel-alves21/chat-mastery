import { useState } from "react"

import { AudioPlayer } from "../../AudioPlayer"

import { AudioContainer, MainContainer } from "./Styles"

type ChatHistoryProps = {
  chatHistory: Array<string>
}

export const ChatHistory = ({ chatHistory }: ChatHistoryProps) => {

  const [playAudio, setPlayAudio] = useState<null | number>(null)

  return (
    <MainContainer>
      <h3>Chat History</h3>
        {chatHistory && chatHistory.map((message, index) => (
          <AudioContainer key={index}>
            <p>{index % 2 === 0 ? 'system' : 'you'}</p>
            <AudioPlayer src={message} id={index} playAudio={playAudio} setPlayAudio={setPlayAudio}/>
          </AudioContainer>
        ))}
    </MainContainer>
  )
}
