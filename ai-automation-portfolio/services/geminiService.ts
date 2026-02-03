import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from '../constants';

const apiKey = process.env.API_KEY || '';

// Safely initialize the client only if needed.
// In a real app, we would handle missing keys more gracefully in the UI.
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
): Promise<string> => {
  if (!ai) {
    return "API Key is missing. Please configure the environment variable.";
  }

  try {
    const model = ai.models;
    
    // We construct the chat history for context
    const chatContents = [
      {
        role: 'user',
        parts: [{ text: SYSTEM_PROMPT }] // Inject system prompt as first user message or separate config if supported better by specific endpoint, but this works well for generic context.
      },
      {
        role: 'model',
        parts: [{ text: "Understood. I am ready to answer questions about the portfolio projects." }]
      },
      ...history
    ];

    // Add current message
    chatContents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    const response = await model.generateContent({
      model: 'gemini-3-flash-preview',
      contents: chatContents,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Speed over deep reasoning for simple chat
      }
    });

    return response.text || "I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error connecting to the AI service.";
  }
};