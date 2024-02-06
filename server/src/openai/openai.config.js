const OpenAI = require('openai')

const API_KEY = process.env.OPENAI_API_KEY

const openai = new OpenAI({
  apiKey: API_KEY
})

module.exports = {
  openai,
  API_KEY
}