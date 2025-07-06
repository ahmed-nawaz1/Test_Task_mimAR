const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash-002:generateContent?key=${API_KEY}`;

const callGeminiAPI = async (prompt) => {
  try {
    if (!prompt || typeof prompt !== 'string') {
      throw new Error('Prompt must be a non-empty string');
    }

    const payload = {
      contents: [
        {
          parts: [{ text: prompt }]
        }
      ]
    };

    const response = await axios.post(API_URL, payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const textResponse = response?.data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!textResponse) {
      throw new Error('No text response received from Gemini API');
    }

    return textResponse.trim();
  } catch (err) {
    console.error('Gemini API Error:', err.response?.data || err.message);
    throw new Error('Failed to fetch response from Gemini API');
  }
};

module.exports = { callGeminiAPI };
