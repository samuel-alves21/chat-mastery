import { useContext } from "react"

import { AlertContext, AlertContextType } from "../../contexts/AlertContext"
import { SettingsContext, SettingsContextType } from "../../contexts/SettingsContext"
import { ToggleHistoryContext, ToggleHistoryContextType } from "../../contexts/ToggleHistoryContext"

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