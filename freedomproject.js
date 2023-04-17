import { config } from "dotenv"
config()
import { Configuration, OpenAIApi } from "openai"
import readline from "readline"

const openAi = new OpenAIApi(
  new Configuration({
    apiKey: "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",
  })
)

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

userInterface.prompt()
userInterface.on("line", async input => {
  const response = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: input }],
  })
  console.log(response.data.choices[0].message.content)
  userInterface.prompt()
})

// const openai = new OpenAIApi(configuration)
// console.log("Hello, my name is LuLu. I am an AI that's programmed using OpenAI GPT-3, and I am here to help boost your mood. So talk to me!")

// async function start(){
//   const response = await openai.createCompletion({
//     model: "text-davinci-003",
//     messages=[
//       {"role": "system", "content": "You are helpful in boosting their mood"},
//     ]
//     prompt: "\n\nLuLu: How was your day?",
//     // prompt: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\nHuman: I'd like to cancel my subscription.\nAI:",
//     temperature: 0,
//     max_tokens: 100
//   })

//   console.log(response.data.choices[0].text)
// }
// start()

// messages=[
//   {"role": "system", "content": "You are helpful in boosting their mood"},
// ]

  console.log(response.data.choices[0].text)
}
start()