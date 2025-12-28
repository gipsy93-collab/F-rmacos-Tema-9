import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const chatWithTutor = async (history: {role: string, parts: {text: string}[]}[], message: string) => {
  try {
    const model = 'gemini-3-flash-preview';
    
    // Construct the chat including system instruction implicitly via context or specific parameter if available in this SDK version helper
    // For this specific SDK version pattern:
    const chat = ai.chats.create({
      model: model,
      history: history,
      config: {
        systemInstruction: `Eres un experto profesor de farmacología cardiovascular, amigable y dinámico. 
        Tu objetivo es ayudar a los estudiantes a comprender temas complejos como insuficiencia cardíaca, inotrópicos, diuréticos, IECA, ARA-II, etc.
        Usa analogías sencillas. Responde de manera concisa pero profunda. 
        Si el usuario pregunta por un fármaco específico, menciona brevemente su clase y su principal indicación, además de su mecanismo de acción y efectos adversos importantes (ej: intoxicación digitálica).
        Mantén un tono motivador y divertido.`,
      }
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return "Lo siento, tuve un problema conectando con mi cerebro digital. Intenta de nuevo.";
  }
};

export const generateQuizExplanation = async (question: string, answer: string) => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: `Explica brevemente por qué "${answer}" es la respuesta correcta o incorrecta para la pregunta: "${question}". Enfócate en farmacología cardiovascular.`,
        });
        return response.text;
    } catch (error) {
        return "No pude generar la explicación en este momento.";
    }
}