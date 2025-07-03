import { GoogleGenAI  } from '@google/genai'

const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_TOKEN})

export const promptGemini = async (prompt: string): Promise<string> => {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt
    })

    return response.text ?? "";
}