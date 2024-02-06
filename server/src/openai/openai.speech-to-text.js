const path = require('path')
const fs = require('fs')

const { openai } = require('./openai.config')

const SpeechToText = async (buffer) => {

  const filePath = path.join(__dirname, 'audio_temp', 'client_audio.mp3')
  await fs.promises.writeFile(filePath, buffer)

  const transcription = await openai.audio.translations.create({
    file: fs.createReadStream(filePath),
    model: "whisper-1",
  })

  return transcription.text
}

module.exports = {
  SpeechToText
}

