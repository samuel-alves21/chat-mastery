import { useContext, useState } from "react"

import { AiContext, AiContextType } from "../../../../contexts/AiContext"
import { Voices, voiceOptions } from "../../../../utils/voice-options"
import { captalizeText } from "../../../../functions/text-captalize"

import { AudioPlayer } from "./AudioPlayer"

import { AudioContainer, AudioNameContainer } from "./Styles"

export const VoiceSettings = () => {

  const { aiState: { voice }, aiDispatch } = useContext(AiContext) as AiContextType

  const checkBox = (voice: Voices) => {
    aiDispatch({ type: "SET_VOICE", payload: voice})
  }

  const [playAudio, setPlayAudio] = useState<null | number>(null)

  return (
    <>
      {voiceOptions.map((audio, index) => (
        <AudioContainer key={index}>
          <AudioNameContainer onClick={() => checkBox(audio.voiceName)}>
            <input type="checkbox" checked={audio.voiceName === voice} readOnly={true}/>
            <p>{captalizeText(audio.voiceName)}</p>
          </AudioNameContainer>
          <AudioPlayer src={audio.path} id={index} playAudio={playAudio} setPlayAudio={setPlayAudio}/>
        </AudioContainer>
      ))}
    </>
  )
}