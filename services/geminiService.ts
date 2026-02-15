import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getBeautyAdvice = async (
  prompt: string, 
  imageBase64?: string
): Promise<string> => {
  try {
    const modelId = imageBase64 ? 'gemini-2.5-flash-image' : 'gemini-3-flash-preview';
    
    const parts: any[] = [];
    
    if (imageBase64) {
      parts.push({
        inlineData: {
          mimeType: 'image/jpeg', // Assuming jpeg for simplicity, or could detect
          data: imageBase64
        }
      });
    }
    
    parts.push({
      text: `You are Janiz's AI Assistant, a professional makeup artist consultant. 
      User Query: "${prompt}"
      
      Provide a concise, professional, and friendly recommendation. 
      Focus on color theory, skin tone matching, and modern trends. 
      Keep the tone elegant and encouraging.
      If an image is provided, analyze the person's features or the outfit to give specific advice.`
    });

    const response = await ai.models.generateContent({
      model: modelId,
      contents: { parts },
      config: {
        systemInstruction: "You are an expert makeup artist assistant for Glamour by JANIZ.",
        temperature: 0.7,
      }
    });

    return response.text || "I apologize, I couldn't generate a recommendation at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong. Please check your API key or try again later.";
  }
};
