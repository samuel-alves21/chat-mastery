import { useContext } from 'react'

import { SettingsContext, SettingsContextType } from '../../contexts/SettingsContext'

import { MainContainer, SettingsContainer } from './Styles'
import { SettingsOptions } from './SettingsOptions'
import { SettingsHeader } from './SettingsHeader'
import { SettingsLine } from './SettingsLine'

export type MainContainerStyledProps = {
  $onScreen: boolean
}

export const Settings = () => {
  const { onScreen, setOncreen } = useContext(SettingsContext) as SettingsContextType

  const openSettingsScreen = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      setOncreen(false)
    }
  }
  
  return (
    <MainContainer $onScreen={onScreen} onClick={(e) => openSettingsScreen(e)}>
      <SettingsContainer $onScreen={onScreen}>
        <SettingsHeader />
        <SettingsLine width='100%'/>
        <SettingsOptions />
      </SettingsContainer>
    </MainContainer>
  )
}