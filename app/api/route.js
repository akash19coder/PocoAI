import { NextResponse } from "next/server";
import dbconnect from "../../lib/mongodb.js";
import { currentUser } from "@clerk/nextjs/server";
import User from "../models/user.model.js";

export async function POST(request) {
  const res = await request.json();
  // const user = await currentUser();
  // console.log(user);
  // console.log(res);
  // const email = user.emailAddresses[0].emailAddress;
  // console.log(email);
  // const existingUser = await User.findOne({ email: email });
  // console.log(existingUser);
  // if (existingUser == null) {
  //   // Save the flashcard to MongoDB
  //   const newUser = new User({ email: email });
  //   await newUser.save();
  // }

  const { GoogleGenerativeAI } = require("@google/generative-ai");
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `You are an expert flashcard generator. Your goal is to create educational flashcards based on the keyword: **${res.text}**.

  **Instructions:**
  
  1. Generate 10 high-quality question-answer flashcards related to **${res.text}** in the following JSON format:
     
     [
       { 
         "id": "1",
         "title": " Approriate Title",
         "question": "Sample question about the topic?",
         "answer": "Concise yet informative answer introducing the topic and providing additional context."
       },
       { 
         "id": "2",
         "title": " Approriate Title",
         "question": "Another sample question related to the topic?",
         "answer": "Detailed answer with an introduction followed by extra information or insights."
       }
     ]
  
  2. The answer section should start with a brief introductory sentence or paragraph followed by more detailed information.
  
  3. Ensure the answers are accurate, educational, and engaging. Include relevant context, examples, or interesting facts where applicable.
  
  Generate the output in the specified format.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  return NextResponse.json(text);
}
