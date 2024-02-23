import { useEffect, useState } from "react"
import { PlayerContainer, PlayerIcon, PlayerTrack, PlayerTrackContainer } from "./Styles"

type AudioPlayerProps = {
  src: string
}

export const AudioPlayer = ({ src }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement>()
  const [currentDuration, setCurrentDuration] = useState(0)
  const [totalDuration, setTotalDuration] = useState(0)

  useEffect(() => {
    const audioObj = new Audio(src)

    audioObj.onended = () => {
      setIsPlaying(false)
      setCurrentDuration(0)
    }

    audioObj.onloadedmetadata = (e: Event) => {
      const audio = e.target as HTMLAudioElement
      setTotalDuration(audio.duration)
    }
  
    if (!audio) {
        setAudio(audioObj)
      }
  }, [setAudio, src, audio])

  useEffect(() => {
    const interval = setInterval(() => {
      if (audio && isPlaying) {
        setCurrentDuration(audio.currentTime / totalDuration * 100)
      }
    }, 100)

    return () => clearInterval(interval)
  
  }, [audio, isPlaying, totalDuration])
  

  const handlePlay = () => {
    if (!isPlaying) {
      audio?.play()
      setIsPlaying(true)
    } else {
      audio?.pause()
      setIsPlaying(false)
    }
  }

  return (
    <PlayerContainer>
      <PlayerIcon>
        <i className={`bi ${isPlaying ? 'bi-pause-fill' : 'bi-play-fill'}`} onClick={handlePlay}></i>
      </PlayerIcon>
      <PlayerTrackContainer>
        <PlayerTrack width={currentDuration}/>
      </PlayerTrackContainer>
    </PlayerContainer>
  )
}