import { OpenAI } from "openai";
import Data from "../src/assets/DashboardData.json";

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

const responseAI = async (message) => {
    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are an AI assistant",
          },
          {
            role: "user",
            content: JSON.stringify(Data),
          },
          {
            role: "assistant",
            content: "You are an AI assistant",
          },
          {
            role: "user",
            content: `
            use this message as given by user -> " ${message} "
            if message have just words like or similar to "Hi", "Hello", "Hey" and do not ask any quetions 
            then respond with "Hello! How can I help you today?"
            if message have words "Brokers", "GWP","Market","Class" "Business", "PREMIUM" 
            then Based on the dataset provided above give the answer of text in minimum words 
            and do not include sentences like "Based on the dataset provided above" , "in minimum words" in the response just give the only answer.
            if message have words "Thank you", "Thanks", "Thankful" then respond with "You're welcome! Have a great day!"
            if message have words "Bye", "Goodbye", "See you" then respond with "Goodbye! Have a great day!"
            if message have words "How are you", "How's it going" then respond with "I'm doing great, thanks for asking!"
            if message have words "What's your name", "Who are you" then respond with "I'm an AI assistant, here to help you with any questions you have."
            if message is other than above condtion then respond with "I'm sorry, I can not answer this Question."`,
          },
        ],
      });
        return chatCompletion.choices[0].message.content;
};

export default responseAI;