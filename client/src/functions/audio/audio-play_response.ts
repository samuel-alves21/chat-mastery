export const playResponse = async (arrayBuffer: Uint8Array) => {
  const play = () => {
    return new Promise<boolean>((resolve) => {
      const blob = new Blob([arrayBuffer], { type: 'audio/mpeg' });

      console.log(blob)
    
      const audioUrl = URL.createObjectURL(blob);
    
      const audioObj = new Audio()
      audioObj.src = audioUrl

      console.log(audioUrl)

      audioObj.play()
    
      audioObj.onended = () => {
        console.log('audio ended')
        resolve(true)
      }
    })
  }

  await play()
}