
import { GoogleGenAI } from "@google/genai";

/**
 * Generates an image based on a text prompt using the Imagen model.
 * @param prompt The text description for the image to be generated.
 * @returns A base64 encoded string of the generated JPEG image, or null if generation fails.
 */
export const generateImageFromPrompt = async (prompt: string): Promise<string | null> => {
  // Ensure the API key is available from environment variables before making a call
  if (!process.env.API_KEY) {
    throw new Error("API_KEY is not configured. Please set it up in your environment variables.");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateImages({
      model: 'imagen-4.0-generate-001',
      prompt: prompt,
      config: {
        numberOfImages: 1,
        outputMimeType: 'image/jpeg',
        aspectRatio: '1:1', // Default to square, can be made dynamic
      },
    });

    if (response.generatedImages && response.generatedImages.length > 0) {
      const image = response.generatedImages[0];
      return image.image.imageBytes;
    }
    
    return null;
  } catch (error) {
    console.error("Error generating image with Gemini:", error);
    // Re-throw the original error to provide more specific details in the UI
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("An unknown error occurred during image generation.");
  }
};
