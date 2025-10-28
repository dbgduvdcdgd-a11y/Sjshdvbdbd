
import { GoogleGenAI } from "@google/genai";

// Ensure the API key is available from environment variables
if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates an image based on a text prompt using the Imagen model.
 * @param prompt The text description for the image to be generated.
 * @returns A base64 encoded string of the generated JPEG image, or null if generation fails.
 */
export const generateImageFromPrompt = async (prompt: string): Promise<string | null> => {
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
    throw new Error("Failed to generate image. Please check your prompt or API key.");
  }
};
