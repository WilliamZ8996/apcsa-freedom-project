# Entry 3: Using OpenAI GPT-3
##### 2/6/2023

After a couple of months of learning about how [OpenAI GPT-3](https://openai.com/api/) works, and its basic functionalities of it, it was time to put my hands on this project. Especially after watching many different tutorials over the winter break and the past month, gave me a good sense of the capabilities of machine learning. So through all the tinkering, I was able to get a good sense of how things like temperature, models, tokens, and prompts work. They will become really important to implement into my project for things to work the right way, or at least the way I want them to.

During the past month, I have been adding to what I had from the last blog which was:
```
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "How are you?",
  temperature: 0,
  max_tokens: 100,
});
```
It was a good basic setup, but I felt that it was missing interactiveness. So I started to work on allowing the user to enter their information like their name, to make it more user-friendly.
```
    var userName = prompt: "What is your name?";
```
By saving the user's input for that prompt, I would be able to use it within the responses by doing this:
```
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: userName + ", how are you doing today?",
  temperature: 0,
  max_tokens: 100,
});
```
This would allow the users to feel that the AI is talking to them only, and feel more connected. It is similar to a get-to-know-you, or icebreaker type of style. In addition to this, I thought it would be helpful if I included a brief introduction about what OpenAI is for the user to read, and get to know better.
```
    prompt: "Hi, I am your neighbor-friendly chatting AI. I am programmed by using OpenAI, and my purpose is to talk to you. If you have anything on your mind, you can also feel free to tell me about it. Of course, it will only be between you and me :)";
```

The next step of learning and using my tool will be understanding how much can I control the responses of the AI. There are times that I would like the AI to respond to certain things in a certain way, or have a certain choice of words that might contain positivity. I would like to look into how can OpenAI select certain words when it comes to responses, and also look into how to make its responses sound more natural for the user. After researching how these things work, I would like to implement them into my program, so the AI would focus on being positive and also friendly in the responses to the user.

The step for the [Engineering Design Process] (https://hstatsep.github.io/students/#edp) that I am currently working on is both brainstorming the possible solutions while planning the solution. As I continue to learn about the possibilities of OpenAI, I am also putting a plan in place about how my project will look and do. In each tutorial that I was able to watch, there was something new that I was able to learn. From each new thing that I was able to learn, I also thought about how I could try to include it in my project. Since there were a lot of different concepts and possibilities, it might be too hard to include all of them but I would try to include as much as I can along the way. At the moment I find it more helpful to get a rough working project down, that was able to do the things that I am looking for. Soon, after I get that down, there will be something that I can build on top of to make it better. The next step of the Engineering Design Process would be creating and testing the prototype. I believe that by the next blog comes along, I would be able to get the rough working piece down. So I can just focus on adding more features and just running different tests on it.

One skill that I have been working on is problem decomposition. One of the biggest difficulties I have when starting to code a project is not knowing where to start. Unlike coding activities, there are steps that we can follow to meet the result. Unfortunately, since this is a freedom project there was no such thing as a given step. So I had to break the problem or the code into different sections or parts. For example, I started the coding by warming up and letting myself ease in. I would give myself a simple task like just giving it a certain response and a prompt. Although it might not seem like a big deal, starting things slowly like that allow me to slowly remember the things that I saw in those tutorials. As I continued coding it, things just slowly fell into place. Another skill that I was able to work on was a growth mindset. Since it was hard to learn a new concept like machine learning, there were a lot of times when I would struggle or get stuck. For example, sometimes I would not be able to get the kind of response that I would want from the AI. It was frustrating at first since I wasn't able to code the AI to respond exactly how I want it to, but I start to play around with the settings like temperatures, and tokens to see if it changes anything. In the end, the patience that I had with changing the settings did help me get the results that I was looking for.


[Previous](entry02.md) | [Next](entry04.md)

[Home](../README.md)
