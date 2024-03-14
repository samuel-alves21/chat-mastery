import { useContext } from "react"
import { Container } from "./Styles"
import { ToggleHistoryContext, ToggleHistoryContextType } from "../../../contexts/ToggleHistoryContext"

export const HistoryButton = () => {

  const { setToggle } = useContext(ToggleHistoryContext) as ToggleHistoryContextType

  const showHistory = () => {
    setToggle(true)
  }

  return (
    <Container>
      <i className="bi bi-clock-history" onClick={showHistory}></i>
    </Container>
  )
}