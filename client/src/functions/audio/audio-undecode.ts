export const undecode = (base64audio: string) => {
  const binaryString = atob(base64audio)
        
  const uint8Array = new Uint8Array(binaryString.length)

  for (let i = 0; i < binaryString.length; i++) {
    uint8Array[i] = binaryString.charCodeAt(i)
  }

  const blob = new Blob([uint8Array], { type: 'audio/mpeg' })
    
  const audioUrl = URL.createObjectURL(blob)

  return audioUrl
}