require('dotenv').config()

const fs = require('fs') 

const express = require('express')
const cors = require('cors')

const { firstTextGenerator } = require('./openai/openai.first-text-generator')
const { textGenenation } = require('./openai/openai.text-generator')
const { SpeechToText } = require('./openai/openai.speech-to-text')
const { TextToSpeech } = require('./openai/openai.text-to-speech')

const app = express()

app.use(cors({
  origin: ['https://samuel-alves21.github.io', 'http://localhost:5173'],
}))

app.use(express.json({ limit: '20mb' }))

app.post('/conversation', async (req, res) => {
  console.log(req.method, req.url)

  const { encodedAudio, context, voiceModel } = req.body
  const audioBuffer = Buffer.from(encodedAudio, 'base64')
  
  const clientText = await SpeechToText(audioBuffer)
  const { response, updatedContext } = await textGenenation(context, clientText)
  const audioPath = await TextToSpeech(response, voiceModel)

  const data = await fs.promises.readFile(audioPath)
  const base64AudioData = Buffer.from(data).toString('base64')

  res.json({
    audio: base64AudioData,
    updatedContext,
  })
})

app.post('/start-conversation', async (req, res) => {
  console.log(req.method, req.url)

  const { context, voiceModel } = req.body

  const { response, updatedContext } = await firstTextGenerator(context)
  const audioPath = await TextToSpeech(response, voiceModel)

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
