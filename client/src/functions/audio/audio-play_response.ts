export const playResponse = async (audioUrl: string) => {
  const play = () => {
    return new Promise<boolean>((resolve) => {
      const audioObj = new Audio()
      audioObj.src = audioUrl

      audioObj.play()
    
      audioObj.onended = () => {
        resolve(true)
      }
    })
  }

  await play()
}