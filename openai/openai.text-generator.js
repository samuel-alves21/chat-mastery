const { openai } = require('./openai.config')

const conversation = [
  {role: 'system', content: 'You are a helpful assistant.'},
]

const getAnswer = async (userInput) => {
  conversation.push({role: 'user', content: userInput})

  console.log(conversation)

  const completion = await openai.chat.completions.create({
    messages: conversation,
    model: 'gpt-4',
  })

  const answer = completion.choices[0].message.content

  conversation.push({role: 'assistant', content: answer})

  return answer
}

module.exports = {
  getAnswer
}