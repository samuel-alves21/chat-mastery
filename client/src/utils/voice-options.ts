export type Voices = 'alloy' | 'echo' | 'fable' | 'nova' | 'onix' | 'shimmer'

type VoiceOptions = {
  voiceName: Voices;
  path: string;
}[] 

export const voiceOptions: VoiceOptions = [
  {
    voiceName: 'alloy',
    path: '/songs/voice-alloy.wav'
  },
  {
    voiceName: 'echo',
    path: '/songs/voice-echo.wav'
  },
  {
    voiceName: 'fable',
    path: '/songs/voice-fable.wav'
  },
  {
    voiceName: 'nova',
    path: '/songs/voice-nova.wav'
  },
  {
    voiceName: 'onix',
    path: '/songs/voice-onix.wav'
  },
  {
    voiceName: 'shimmer',
    path: '/songs/voice-shimmer.wav'
  },
]