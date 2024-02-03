const path = require('path')
const fs = require('fs')

const { openai } = require('./openai.config')

const speechFile = path.resolve("./speech.mp3")

const getSpeech = async () => {
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: answer.content,
  })
  const buffer = Buffer.from(await mp3.arrayBuffer())
  await fs.promises.writeFile(speechFile, buffer)
}






