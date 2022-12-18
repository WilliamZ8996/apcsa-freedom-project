# Entry 2: Learning the OpenAI
##### 12/12/2022

It has been a month since I decided to use [OpenAI GPT-3](https://openai.com/api/) as my freedom project tool. I had been tinkering with OpenAI GPT-3 for the past month by using the built-in sandbox for OpenAI. I was able to try different projects that had been made by others using this program which was interesting since I can see the different capabilities of this program. OpenAI GPT-3 can translate the user's input, and return an output of the translation version. It is also a bit more adventurous by adding its ideas, for example creating a slogan by using only a few words from the user's input. After trying others' projects, I decided to take a deeper dive into the coding aspect of OpenAI GPT-3.

I started by watching a [YouTube tutorial](https://youtu.be/Zb5Nylziu6E) about how to get started with coding using CodeAI. From the video, I started by learning the basics and the vocabulary for this program. One of the basics of OpenAI GPT-3 that I learned about is called "temperature." A temperature is a tool that controls the output of the program when it comes to taking the risk. The range is from 0 to 1, so 0 would mean that the program will output something that is closely related to the input, while 1 would be taking the risk to return a more diverse answer.

Example:
(Temperature: 0)
Suggest a name for a superhero animal:
Input: Horse
Output: Super Stallion

(Temperature: 1)
Suggest a name for a superhero animal:
Input: Horse
Output: Thunderbolt Crusader

There are different models of OpenAI GPT-3 which have different results in the output of the program. Some models will produce outputs fast, but they tend to be short. The model that I will be using for my program will be the "text-davinci-003" because it is more up-to-date and is known to provide longer and better results. It will be more helpful in creating more accurate responses to the user and also create a better conversation.

```
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "How are you?",
  temperature: 0,
  max_tokens: 100,
});
```
The following code above is a basic setup for creating a program response that has a prompt asking the user about how they are feeling. Since the temperature is 0, it will return an answer that is directly close to the input of the user. The max token means the total amount of tokens that the program will be able to take in. Tokens are interesting because they don't count by each word that is being used. Each token is counted when there is an appearance of a common word.

For example:
I think your codebase is exceedingly overpythonized

The following sentence above has a total of 51 characters, but there are a total of 10 tokens. The word "codebase" is 8 characters, but it is only considered as two tokens, "code" and "base." Tokens become helpful in this program because it allows the programs to check for word patterns and recognize what kinds of words to use again or search for. It is much easier for this program to search by token instead of character by character.

So back to the code mentioned before, the program will start by asking the user about their day. Then the user would be able to input their sentence relating to the prompt, and the program will search the input for the different tokens to create a good and similar answer as an output.

During the winter break, my goals will be to explore the ways the program looks for keywords and see if I can choose specifically the words to be used for certain responses. I would need to look more at how the program recognizes word patterns, and how the program chooses to respond to each input. I will finish watching the tutorial on OpenAI GPT-3, and start watching this [video](https://www.youtube.com/watch?v=MQnJZuBGmSQ) to learn about how this program works in more depth, and also this [video](https://www.youtube.com/watch?v=UUPwrYklYI8) to learn more about artificial intelligence and machine learning.

The step for the [Engineering Design Process](https://hstatsep.github.io/students/#edp) that I am currently working on is researching the problem. The problem that I want to solve in this project is [mental health](https://www.mentalhealth.gov/basics/what-is-mental-health). Most people that tend to need mental support would turn to having some to talk to or to share how they feel, so within my research I found out that it would be really helpful when people have someone or somewhere safe to share their feelings. I think the best solution is to create an interactive AI that talks to the user, and make the user feel that they are heard. AI might not have the ability to feel how we feel or relate to us, but it is definitely good at patiently listening to all our thoughts. A good listening ear is what we need most of the time when we are feeling down. The next step within the engineering design process is to make a list of all the possible things to include within the interactive AI.

One skill that I have been working on is how to read. One of the most important things to do when starting to code with a new tool is reading the documentation about it. The documentation talks about what the tool is capable of doing, and also talks about how to get started with this tool. This is really important because you need to know how to import the tool, and understand the basics of it. Without this skill, it is really hard to get started with a new tool since I won't know where to get started. Another skill that I have been working on is time management. As a senior, there have been a lot of work that I need to focus on, so sometimes I would find it difficult to manage the time. I found it really helpful, and important to set aside time each day to work on different things, which allows me to make progress in all the things that I would need to get done.

[Previous](entry01.md) | [Next](entry03.md)

[Home](../README.md)
