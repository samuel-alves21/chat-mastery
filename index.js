require('dotenv').config()

const path = require('path')
const fs = require('fs')

const OpenAI = require('openai')

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const conversation = [
  
]

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: 'You are a helpful assistant.' }],
    model: 'gpt-4',
  })

  const answer = completion.choices[0].message 

  const speechFile = path.resolve("./speech.mp3")

  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: answer.content,
  })
  const buffer = Buffer.from(await mp3.arrayBuffer())
  await fs.promises.writeFile(speechFile, buffer)
}

main()
