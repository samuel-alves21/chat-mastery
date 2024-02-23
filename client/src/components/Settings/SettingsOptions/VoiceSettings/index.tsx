import { captalizeText } from "../../../../functions/text-captalize"
import { voiceOptions } from "../../../../utils/voice-options"

import { AudioPlayer } from "./AudioPlayer"

import { AudioContainer, AudioNameContainer } from "./Styles"

export const VoiceSettings = () => {

  return (
    <>
      {voiceOptions.map((audio, index) => (
        <AudioContainer key={index}>
          <AudioNameContainer>
            <input type="checkbox" />
            <p>{captalizeText(audio.voiceName)}</p>
          </AudioNameContainer>
          <AudioPlayer src={audio.path}/>
        </AudioContainer>
      ))}
    </>
  )
}