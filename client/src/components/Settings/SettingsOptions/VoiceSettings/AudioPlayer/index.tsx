import { PlayerContainer, PlayerIcon, PlayerTrack } from "./Styles"

import { useSettingsAudio } from "../../../../../hooks/useSettingsAudio"

type AudioPlayerProps = {
  src: string
}

export const AudioPlayer = ({ src}: AudioPlayerProps) => {

  const { isPlaying, audio, totalDuration, currentDuration, setIsPlaying, setCurrentDuration } = useSettingsAudio(src)

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