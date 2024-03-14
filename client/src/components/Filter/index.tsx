import { useContext } from "react"

import { AlertContext, AlertContextType } from "../../contexts/AlertContext"
import { SettingsContext, SettingsContextType } from "../../contexts/SettingsContext"
import { ToggleHistoryContext, ToggleHistoryContextType } from "../../contexts/ToggleHistoryContext"

import { StyledFilter } from "./Styles"

export const Filter = () => {

  const { onScreen } = useContext(SettingsContext) as SettingsContextType
  const { alertState: { display } } = useContext(AlertContext) as AlertContextType
  const { toggle } = useContext(ToggleHistoryContext) as ToggleHistoryContextType

  const show = onScreen || display || toggle
  console.log(show)

  return (
    <StyledFilter $show={show}/>
  )
}