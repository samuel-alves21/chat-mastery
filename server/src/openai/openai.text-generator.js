const { openai } = require('./openai.config')

const textGenenation = async (context, text) => {
  const updatedContext = [...context]
  
  updatedContext.push({role: 'user', content: text})

  const completion = await openai.chat.completions.create({
    messages: updatedContext,
    model: 'gpt-4',
  })
  
  const response = completion.choices[0].message.content
  
  updatedContext.push({role: 'assistant', content: response})
  console.log(updatedContext)
  
  return { response, updatedContext }
}

module.exports = {
  textGenenation
}