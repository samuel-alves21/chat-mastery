import { useEffect, useState } from "react"
import { PlayerContainer, PlayerIcon, PlayerTrack } from "./Styles"

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
  

  const handlePlay = () => {
    if (!isPlaying) {
      audio?.play()
      setIsPlaying(true)
    } else {
      audio?.pause()
      setIsPlaying(false)
    }
  }

  const changeSongTrack = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentDuration(Number(e.target.value))
    if (audio) {
      audio.currentTime = Number(e.target.value)
    }
  }

  const playOnChangeTrack = () => {
    if (isPlaying) {
      audio?.play()
    }
  }
  
  const pauseOnChangeTrack = () => {
    audio?.pause()
  }

  return (
    <PlayerContainer>
      <PlayerIcon>
        <i className={`bi ${isPlaying ? 'bi-pause-fill' : 'bi-play-fill'}`} onClick={handlePlay}></i>
      </PlayerIcon>
      <PlayerTrack 
      type="range"
      min={0} 
      max={totalDuration} 
      value={currentDuration} 
      step={0.01} 
      onChange={(e) => changeSongTrack(e)} 
      onMouseDown={pauseOnChangeTrack} 
      onMouseUp={playOnChangeTrack}
      />
    </PlayerContainer> 
  )
}