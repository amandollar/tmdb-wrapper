const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

module.exports = async (req, res) => {
  // ✅ CORS HEADERS
  res.setHeader('Access-Control-Allow-Origin', '*'); // Or use specific origin in prod
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // ✅ Handle preflight (OPTIONS)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const apiKey = process.env.TMDB_API_KEY;
  const { path, ...params } = req.query;

  if (!path) {
    return res.status(400).json({ error: 'Missing TMDB path parameter. Example: /movie/19995' });
  }

  try {
    const tmdbResponse = await axios.get(`https://api.themoviedb.org/3${path}`, {
      params: {
        api_key: apiKey,
        ...params,
      },
    });

    res.status(200).json(tmdbResponse.data);
  } catch (error) {
    console.error('TMDB Proxy Error:', error.message);
    const status = error.response?.status || 500;
    const message = error.response?.data || { error: 'Failed to proxy TMDB request' };
    res.status(status).json(message);
  }
};
