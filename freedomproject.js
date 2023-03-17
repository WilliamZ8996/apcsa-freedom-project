const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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"
})

const openai = new OpenAIApi(configuration)

async function start(){
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "How is your day?",
    temperature: 0,
    max_tokens: 100
  })

  console.log(response.data.choices[0].text)
}
start()