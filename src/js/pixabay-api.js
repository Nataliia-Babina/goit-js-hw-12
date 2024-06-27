import axios from 'axios';

const API_KEY = '44448499-e9e25ac25e8b747c6a75d5b6f'; 
const BASE_URL = 'https://pixabay.com/api/';

export async function findImages(query, page, perPage) {
   const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    page: page,
    per_page: perPage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
    
    const url = `${BASE_URL}?${params}`;
  
  try {
    const response = await axios.get(url, {params});
    const data = response.data;

    if (data.hits.length === 0) {
      throw new Error('Failed to obtain images!');
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};