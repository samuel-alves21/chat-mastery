const { openai } = require('./openai.config')

const textGenenation = async (text, context) => {
  const updatedContext = [...context]
  updatedContext.push({role: 'user', content: text})

  const completion = await openai.chat.completions.create({
    messages: updatedContext,
    model: 'gpt-4',
  })

  const response = completion.choices[0].message.content

  updatedContext.push({role: 'assistant', content: response})

  return { response, updatedContext }
}

module.exports = {
  textGenenation
}