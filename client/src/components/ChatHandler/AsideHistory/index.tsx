import { useContext } from "react"

import { ChatHistory } from "../ChatHistory"

import { ToggleHistoryContext, ToggleHistoryContextType } from "../../../contexts/ToggleHistoryContext"
3
import { MainContainer } from "./Styles"

type AsideHistoryProps = {
  chatHistory: Array<string>
}

export const AsideHistory = ({ chatHistory }: AsideHistoryProps) => {

  const { toggle } = useContext(ToggleHistoryContext) as ToggleHistoryContextType

  return (
    <MainContainer $toggle={toggle}>
      <ChatHistory chatHistory={chatHistory}/>
    </MainContainer>
  )
}