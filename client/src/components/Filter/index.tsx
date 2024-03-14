import { useContext } from "react"

import { ToggleHistoryContext, ToggleHistoryContextType } from "../../contexts/ToggleHistoryContext"
import { SettingsContext, SettingsContextType } from "../../contexts/SettingsContext"
import { AlertContext, AlertContextType } from "../../contexts/AlertContext"

import { StyledFilter } from "./Styles"

export const Filter = () => {

  const { onScreen } = useContext(SettingsContext) as SettingsContextType
  const { alertState: { display } } = useContext(AlertContext) as AlertContextType
  const { toggle, setToggle } = useContext(ToggleHistoryContext) as ToggleHistoryContextType

  const show = onScreen || display || toggle
  
  const closeTabs = () => {
    setToggle(false)
  }

  return (
    <StyledFilter $show={show} onClick={closeTabs}/>
  )
}