
'use server';
/**
 * @fileOverview A Genkit flow to generate an image for an article based on its title.
 *
 * - generateArticleImage - A function that generates an image.
 * - GenerateArticleImageInput - The input type for the generateArticleImage function.
 * - GenerateArticleImageOutput - The return type for the generateArticleImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateArticleImageInputSchema = z.object({
  title: z.string().describe('The title of the article for which to generate an image.'),
});
export type GenerateArticleImageInput = z.infer<typeof GenerateArticleImageInputSchema>;

const GenerateArticleImageOutputSchema = z.object({
  imageDataUri: z.string().describe("The generated image as a data URI. Expected format: 'data:image/png;base64,<encoded_data>'."),
});
export type GenerateArticleImageOutput = z.infer<typeof GenerateArticleImageOutputSchema>;

export async function generateArticleImage(input: GenerateArticleImageInput): Promise<GenerateArticleImageOutput> {
  return generateArticleImageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateArticleImagePrompt',
  input: {schema: GenerateArticleImageInputSchema},
  output: {schema: GenerateArticleImageOutputSchema},
  prompt: `Generate an image for a blog post titled "{{title}}".
The style should be abstract, modern, and minimalist.
The aspect ratio should be 2:1, suitable for a header image of approximately 200x100 pixels.
Do not include any text in the image.
The image should be visually appealing and relevant to the concept of the title.`,
  config: {
    // IMPORTANT: ONLY the googleai/gemini-2.0-flash-exp model is able to generate images.
    model: 'googleai/gemini-2.0-flash-exp', 
    responseModalities: ['TEXT', 'IMAGE'], // MUST provide both TEXT and IMAGE
  },
});

const generateArticleImageFlow = ai.defineFlow(
  {
    name: 'generateArticleImageFlow',
    inputSchema: GenerateArticleImageInputSchema,
    outputSchema: GenerateArticleImageOutputSchema,
  },
  async (input: GenerateArticleImageInput) => {
    const {media} = await prompt(input);
    if (!media || !media.url) {
      throw new Error('Image generation failed or did not return a media URL.');
    }
    return { imageDataUri: media.url };
  }
);
