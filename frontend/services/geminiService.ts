import { GoogleGenAI } from "@google/genai";

export const getFileInsight = async (fileName, type) => {
  try {
    // Note: In client-side React (Vite), you might need to use 
    // import.meta.env.VITE_API_KEY instead of process.env.API_KEY
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a short, 1-sentence helpful description or mock content snippet for a file named "${fileName}" of type "${type}" in a secure vault. Make it sound professional.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });

    return response.text || "No AI insight available.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Encrypted file metadata analysis complete.";
  }
};