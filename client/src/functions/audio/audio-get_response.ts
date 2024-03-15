import { Voices } from "../../utils/voice-options"
import { baseUrl } from "../../utils/api"

export const getResponse = async (base64AudioData: string, conversationContext: Array<object>, voice: Voices) => {
  try {
    const response = await fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify({
        encodedAudio: base64AudioData,
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