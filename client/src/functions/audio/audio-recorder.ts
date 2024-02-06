export const audioRecorder = async (stream: MediaStream) => {

  const getRecord = () => {
    return new Promise<Blob>((resolve) => {
      const recorder = new MediaRecorder(stream)
    
      let chunkArray: Array<Blob> = []

      recorder.start()

      console.log(document.querySelector('#chat-button'))
    
      // recorder.stop()

      recorder.ondataavailable = (e) => {
        chunkArray.push(e.data)
      }
    
      recorder.onstop = () => {
        const audioBlob = new Blob(chunkArray, { type: 'audio/mpeg' })
    
        chunkArray = []
        console.log('resolved')
        resolve(audioBlob)
      }
    })
  }

  const audioBlob = await getRecord()
  
  return audioBlob
}