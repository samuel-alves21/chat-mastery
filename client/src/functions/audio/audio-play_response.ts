export const playResponse = async (arrayBuffer: ArrayBuffer) => {
  const play = () => {

    return new Promise<boolean>((resolve) => {
      const blob = new Blob([arrayBuffer], { type: 'audio/mpeg' });
    
      const audioUrl = URL.createObjectURL(blob);
    
      const audioObj = new Audio(audioUrl)
      audioObj.play()
    
      audioObj.onended = () => {
        console.log('audio ended')
        resolve(true)
      }
    })
  }

  await play()
}