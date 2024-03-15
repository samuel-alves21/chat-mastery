import { Voices } from "../../utils/voice-options"
import { baseUrl } from "../../utils/api"

export const getFirstResponse = async (conversationContext: Array<object>, voice: Voices) => {
  try {
    const response = await fetch(`${baseUrl}/start-conversation`, {
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