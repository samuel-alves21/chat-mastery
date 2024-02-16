import { useContext } from 'react'

import { SettingsContext, SettingsContextType } from '../../contexts/SettingsContext'

import { MainContainer, SettingsContainer } from './Styles'

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
      <SettingsContainer>
        <h1>Settings</h1>
      </SettingsContainer>
    </MainContainer>
  )
}