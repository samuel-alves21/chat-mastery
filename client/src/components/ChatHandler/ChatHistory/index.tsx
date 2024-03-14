import { useContext, useState } from "react"

import { AudioPlayer } from "../../AudioPlayer"

import { ToggleHistoryContext, ToggleHistoryContextType } from "../../../contexts/ToggleHistoryContext"

import { AudioContainer, MainContainer } from "./Styles"
import { useMediaQuery } from "react-responsive"
import { breakingPoints } from "../../../utils/breaking-points"

type ChatHistoryProps = {
  chatHistory: Array<string>
}

export const ChatHistory = ({ chatHistory }: ChatHistoryProps) => {

  const [playAudio, setPlayAudio] = useState<null | number>(null)

  const { setToggle } = useContext(ToggleHistoryContext) as ToggleHistoryContextType
  
  const xl = useMediaQuery({ query: `(min-width: ${breakingPoints.xl})`})

  const closeWindow = () => {
    setToggle(false)
  }

  return (
    <MainContainer>
      <h3>Chat History</h3>
        {chatHistory && chatHistory.map((message, index) => (
          <AudioContainer key={index}>
            <p>{index % 2 === 0 ? 'system' : 'you'}</p>
            <AudioPlayer src={message} id={index} playAudio={playAudio} setPlayAudio={setPlayAudio}/>
          </AudioContainer>
        ))}
        {xl || <i className="bi bi-x" onClick={closeWindow}></i>}
    </MainContainer>
  )
}
