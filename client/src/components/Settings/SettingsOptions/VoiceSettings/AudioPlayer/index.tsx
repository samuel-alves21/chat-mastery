import { useEffect, useState } from "react"
import { PlayerContainer, PlayerIcon, PlayerTrackContainer } from "./Styles"

type AudioPlayerProps = {
  src: string
}

export const AudioPlayer = ({ src }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement>()

  useEffect(() => {
    const audioObj = new Audio(src)

    audioObj.onended = () => {
      setIsPlaying(false)
    }

    audioObj.onplaying = (e) => {
      console.log(e)
    }

    setAudio(audioObj)
  }, [setAudio, src])
  

  const handlePlay = () => {
    if (!isPlaying) {
      audio?.play()
      setIsPlaying(true)
    } else {
      audio?.pause()
      setIsPlaying(false)
    }
  }

  //bi-play-fill playing
  //bi-pause-fill pause

  return (
    <PlayerContainer>
      <PlayerIcon>
        <i className={`bi ${isPlaying ? 'bi-pause-fill' : 'bi-play-fill'}`} onClick={handlePlay}></i>
      </PlayerIcon>
      <PlayerTrackContainer>

      </PlayerTrackContainer>
    </PlayerContainer>
  )
}