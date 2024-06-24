import dotenv from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

// Access your API key as an environment variable.
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function chat(prompt: string, text: string) {
    // Choose a model that's appropriate for your use case.
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const formatPrompt = `Sos un asistente virtual. Al final te voy a dar un input que envio el usuario.
    \n\n` + prompt + `\n\nEl input del usuario es el siguiente: ` + text;

    const result = await model.generateContent(formatPrompt);
    const response = result.response;
    const answ = response.text();
    return answ
}