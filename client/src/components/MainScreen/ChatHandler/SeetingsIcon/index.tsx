import { useContext } from "react"

import { SettingsContext, SettingsContextType } from "../../../../contexts/SettingsContext"

import { MainContainer } from "./Styles"

export const SettingsIcon = () => {
  const { setOncreen } = useContext(SettingsContext) as SettingsContextType 

  return (
    <MainContainer onClick={() => setOncreen(true)}>
      <i className="bi bi-gear-fill"></i>
    </MainContainer>
  )
}