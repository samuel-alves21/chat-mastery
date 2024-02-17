import { useContext } from "react"

import { SettingsContext, SettingsContextType } from "../../../contexts/SettingsContext"

import { Header } from "./Styles"

export const SettingsHeader = () => {
  const { setOncreen } = useContext(SettingsContext) as SettingsContextType

  const closeWindow = () => {
    setOncreen(false)
  }

  return (
    <Header>
      <h2>Settings</h2>
      <i className="bi bi-x" onClick={closeWindow}></i>
    </Header>
  )
}