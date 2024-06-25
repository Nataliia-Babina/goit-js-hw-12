const API_KEY = '44448499-e9e25ac25e8b747c6a75d5b6f'; 

export async function findImages(query) {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.hits;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}