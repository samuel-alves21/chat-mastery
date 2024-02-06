require('dotenv').config()

const path = require('path')

const express = require('express')
const cors = require('cors')

const { getAnswer } = require('./openai/openai.text-generator')
const { SpeechToText } = require('./openai/openai.speech-to-text')
const { TextToSpeech } = require('./openai/openai.text-to-speech')

const app = express()

app.use(express.raw({ type: 'audio/mpeg', limit: '25mb' }))

app.use(cors())

app.get('/', (req, res) => {
  const audioPath = path.join(__dirname, 'openai', 'audio_temp', 'server_audio.mp3') 
  res.sendFile(audioPath)
})

app.post('/conversation', async (req, res) => {
  const clientSpeech = req.body

  const clientText = await SpeechToText(clientSpeech)
  const answer = await getAnswer(clientText)
  const audioPath = await TextToSpeech(answer)

  res.sendFile(audioPath)
})

module.exports = {
  app
} 