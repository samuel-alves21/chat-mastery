require('dotenv').config()

const fs = require('fs') 

const express = require('express')
const cors = require('cors')

const { textGenenation } = require('./openai/openai.text-generator')
const { SpeechToText } = require('./openai/openai.speech-to-text')
const { TextToSpeech } = require('./openai/openai.text-to-speech')

const app = express()

app.use(express.json({ limit: '10mb' }))

app.use(cors())

app.post('/conversation', async (req, res) => {
  console.log(req.method, req.url)

  const { encodedAudio, context } = req.body
  const audioBuffer = Buffer.from(encodedAudio, 'base64')
  

  const clientText = await SpeechToText(audioBuffer)
  const { response, updatedContext } = await textGenenation(clientText, context)
  const audioPath = await TextToSpeech(response)

  const data = await fs.promises.readFile(audioPath)
  const base64AudioData = Buffer.from(data).toString('base64')

  res.json({
    audio: base64AudioData,
    updatedContext,
  })
})

module.exports = {
  app
} 
