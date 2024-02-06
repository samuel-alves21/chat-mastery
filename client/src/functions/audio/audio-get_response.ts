export const getResponse = async (audioBlob: Blob) => {
  try {
    const response = await fetch('http://localhost:8000/conversation', {
      method: 'POST',
      body: audioBlob,
      headers: {
        'Content-Type': 'audio/mpeg'
      }
    })

    const audioArrayBuffer = await response.arrayBuffer()

    return audioArrayBuffer
    
  } catch (error) {
    console.log(error)
  }
}