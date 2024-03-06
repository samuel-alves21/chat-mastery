import { Voices } from "../../utils/voice-options"

export const getFirstResponse = async (conversationContext: Array<object>, voice: Voices) => {
  try {
    const response = await fetch('http://localhost:8000/start-conversation', {
      method: 'POST',
      body: JSON.stringify({
        context: conversationContext,
        voiceModel: voice
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