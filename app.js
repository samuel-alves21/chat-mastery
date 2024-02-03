require('dotenv').config()

const path = require('path')

const express = require('express')
const cors = require('cors')

const { getAnswer } = require('./openai/openai.text-generator')

const app = express()

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
  const audioPath = path.join(__dirname, 'speech.mp3') 
  res.sendFile(audioPath)
})

app.post('/conversation', async (req, res) => {
  console.log(req.body.message)
  const answer = await getAnswer(req.body.message)
  res.send(answer)
})

module.exports = {
  app
} 