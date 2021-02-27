require('dotenv').config();
const fetch = require('node-fetch').default;

exports.handler = async (event) => {

  try {
    const { wordLabel } = event.queryStringParameters;
    const { API_KEY } = process.env;
    const API_BASE = `https://wordsapiv1.p.rapidapi.com/words/${wordLabel}`;

    const response = await fetch(API_BASE, { headers: {
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key": API_KEY
    }});
    if (!response.ok) {
      return { statusCode: response.status, body: response.statusText };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.log("invocation error:", err);
    return {
      statusCode: 500,
      body: err.message
    };
  }
};