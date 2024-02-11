export const getResponse = async (base64AudioData: string, conversationContext: Array<object>) => {
  try {
    const response = await fetch('http://localhost:8000/conversation', {
      method: 'POST',
      body: JSON.stringify({
        encodedAudio: base64AudioData,
        context: conversationContext
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()

    return data
    
  } catch (error) {
    console.log(error)
  }
}