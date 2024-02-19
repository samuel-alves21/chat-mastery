import { useState } from "react"

import { SettingsOptionsType, settingsOptions } from "../../../utils/settings-options"
import { captalizeText } from "../../../functions/text-captalize"

import { MainContainer, Option, OptionsContainer, SelectedOptionContainer } from "./Styles"

import { ThemeSettings } from "./ThemeSettings"
import { VoiceSettings } from "./VoiceSettings"

export const SettingsOptions = () => {
  const [selectedOption, setSelectedOption] = useState<SettingsOptionsType>('theme')

  return (
    <MainContainer>
      <OptionsContainer>
        {settingsOptions.map((option, index) => (
          <Option key={index} $isSelected={selectedOption === option} onClick={() => setSelectedOption(option)}>
            <h4>{captalizeText(option)}</h4>
          </Option>
        ))}
      </OptionsContainer>
      <SelectedOptionContainer>
        {selectedOption === 'theme' && <ThemeSettings />}
        {selectedOption === 'voice' && <VoiceSettings />}
      </SelectedOptionContainer>
    </MainContainer> 
  )
}