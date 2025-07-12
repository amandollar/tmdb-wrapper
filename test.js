const axios = require('axios');

async function fetchMovie(title) {
  try {
    const response = await axios.get('https://tmdb-wrapper-xi.vercel.app/api/tmdb-proxy', {
      params: {
        path: '/search/movie',
        query: title
      }
    });

    console.log('Search results:', response.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

fetchMovie('Interstellar');
