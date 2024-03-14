import { useContext, useEffect, useState } from "react"

import { SettingsContext, SettingsContextType } from "../contexts/SettingsContext"
import { AiContext, AiContextType } from "../contexts/AiContext"

export const useSettingsAudio = (
  src: string,
  playAudio: null | number,
  id: number, 
  setPlayAudio: (value: number | null) => void
) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement>()
  const [currentDuration, setCurrentDuration] = useState(0)
  const [totalDuration, setTotalDuration] = useState(0)

  const { onScreen } = useContext(SettingsContext) as SettingsContextType
  const { aiState: { voice } } = useContext(AiContext) as AiContextType


  useEffect(() => {
    if (!audio) return
    audio.pause()
    audio.currentTime = 0
    setIsPlaying(false)
    setCurrentDuration(0)
    setPlayAudio(null)
    
  }, [onScreen, audio, voice, setPlayAudio])

  useEffect(() => {
    if (playAudio === id) {
      if (audio?.paused) {
        setIsPlaying(true)
        audio?.play()
        return
      } else {
        audio?.pause()
        setIsPlaying(false)
        return
      }
    } 

    if (playAudio === null) {
      audio?.pause()
      setIsPlaying(false)
      return
    }

    if (!audio) return
    audio.pause()
    audio.currentTime = 0
    setIsPlaying(false)
    setCurrentDuration(0)
  }, [playAudio, id, audio])

  useEffect(() => {
    const audioObj = new Audio(src)

    audioObj.onended = () => {
      setIsPlaying(false)
      setCurrentDuration(0)
    }

    audioObj.onloadedmetadata = (e: Event) => {
      const target = e.target as HTMLAudioElement
      setTotalDuration(target.duration)
    }

    if (!audio) {
      setAudio(audioObj)
    }
    return () => audio?.pause()
  }, [setAudio, src, audio])

  useEffect(() => {
    const interval = setInterval(() => {
      if (audio && isPlaying) {
        setCurrentDuration(audio.currentTime)
      }
    }, 100)

    return () => clearInterval(interval)
  
  }, [audio, isPlaying])

  return { isPlaying, audio, totalDuration, currentDuration, setCurrentDuration }
}