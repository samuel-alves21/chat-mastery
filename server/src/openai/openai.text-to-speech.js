const path = require('path')
const fs = require('fs')

const { openai } = require('./openai.config')

const filePath = path.join(__dirname, 'audio_temp', 'server_audio.mp3')

const TextToSpeech = async (text, voiceModel) => {
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: voiceModel,
    input: text,
  })
  
  const buffer = Buffer.from(await mp3.arrayBuffer())
  await fs.promises.writeFile(filePath, buffer)

  return filePath
}

module.exports = {
  TextToSpeech
}
