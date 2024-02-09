require('dotenv').config()

const express = require('express')
const cors = require('cors')

const { textGenenation } = require('./openai/openai.text-generator')
const { SpeechToText } = require('./openai/openai.speech-to-text')
const { TextToSpeech } = require('./openai/openai.text-to-speech')

const app = express()

app.use(express.raw({ type: 'audio/mpeg', limit: '25mb' }))

app.use(cors())

app.post('/conversation', async (req, res) => {
  const clientSpeech = req.body

  const clientText = await SpeechToText(clientSpeech)
  const answer = await textGenenation(clientText)
  const audioPath = await TextToSpeech(answer)

  res.sendFile(audioPath)
})

module.exports = {
  app
} 