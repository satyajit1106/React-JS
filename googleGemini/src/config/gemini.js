import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyAHaVnFujCKLjk3UzAkLKafHXAn7EMEfz8"; // Directly assigning the API key
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      // safetySettings: Adjust safety settings
      // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);

    // Log the entire result object to inspect its structure
    console.log('API response:', result);

    // Adjust based on the actual structure of the result object
    if (result && result.response) {
      const responseText = result.response.content || result.response.text || 'No content available';
      console.log(responseText);
      return responseText;
    } else {
      console.error('Invalid response structure:', result);
    }
  } catch (error) {
    // Log any errors that occur during the API call
    console.error('Error during API call:', error);
  }
}

export default run;
