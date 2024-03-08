import { PlayerContainer, PlayerIcon, PlayerTrack } from "./Styles"

import { useSettingsAudio } from "../../../../../hooks/useSettingsAudio"

type AudioPlayerProps = {
  src: string
  id: number
  playAudio: null | number
  setPlayAudio: (value: null | number) => void
}

export const AudioPlayer = ({ src, id, playAudio, setPlayAudio }: AudioPlayerProps) => {

  const { isPlaying, audio, totalDuration, currentDuration, setCurrentDuration } = useSettingsAudio(src, playAudio, id, setPlayAudio)

  const handlePlay = () => {
    if (!isPlaying) {
      setPlayAudio(id)
    } else {
      setPlayAudio(null)
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
    <PlayerContainer className={isPlaying ? 'playing' : ''}>
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