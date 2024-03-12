import { useContext } from "react"

import { AlertContext, AlertContextType } from "../../contexts/AlertContext"

import { ButtonsContainer, MainContainer, Widget } from "./Styles"

export const Alert = () => {

  const { alertState: { display, text, type }, alertDispatch } = useContext(AlertContext) as AlertContextType

  const closeAlert = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (type === 'microphone') {
      alertDispatch({ type: 'SET_DISPLAY', payload: false })
      return
    } 

    if (e.currentTarget.id === 'cancel') {
      alertDispatch({ type: 'SET_DISPLAY', payload: false })
    } else {
      alertDispatch({ type: 'SET_DISPLAY', payload: false })
      alertDispatch({ type: 'LEAVE_CONVERSATION' })
    }
  } 

  return (
    <MainContainer $display={display}>
      <Widget>
        <p>{text}</p>
        {type === 'microphone' ? 
        <button onClick={closeAlert}>ok</button> :
        <ButtonsContainer>
          <button id="cancel" onClick={(e) => closeAlert(e)}>cancel</button>
          <button id="ok" onClick={(e) => closeAlert(e)}>ok</button>
        </ButtonsContainer>}
      </Widget>
    </MainContainer>
  )
}