import { useContext, useState } from "react"

import { SettingsContext, SettingsContextType } from "../../../../contexts/SettingsContext"

import { MainContainer } from "./Styles"

export const SettingsIcon = () => {
  const { onScreen, setOncreen } = useContext(SettingsContext) as SettingsContextType 

  const [wasClicked, setWasClicked] = useState(false)

  const showSettingsScreen = () => {
    setOncreen(true)
    setWasClicked(true)
  
  }

  return (
    <MainContainer onClick={showSettingsScreen} onScreen={onScreen} wasClicked={wasClicked}>
      <i className="bi bi-gear-fill"></i>
    </MainContainer>
  )
}