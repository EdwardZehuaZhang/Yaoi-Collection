import axios from 'axios';

const API_URL = 'http://localhost:1337/api';

/**
 * Get popular manga (those with the yaoi tag)
 * @param {number} limit - Number of manga to fetch
 * @returns {Promise<Array>} - Array of manga data
 */
export async function getPopularManga(limit = 6) {
  try {
    // In a real implementation, we would use the Strapi filters to get manga with yaoi tag
    // and sort by popularity (favorite_counts), but for now we'll just get the latest
    const response = await axios.get(`${API_URL}/mangas`, {
      params: {
        'pagination[limit]': limit,
        'sort': 'createdAt:desc',
        'populate': '*'
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching popular manga:', error);
    return { data: [] };
  }
}

/**
 * Get newly uploaded manga
 * @param {number} limit - Number of manga to fetch per page
 * @param {number} page - Page number to fetch
 * @returns {Promise<Array>} - Array of manga data
 */
export async function getNewManga(limit = 6, page = 1) {
  try {
    const response = await axios.get(`${API_URL}/mangas`, {
      params: {
        'pagination[page]': page,
        'pagination[pageSize]': limit,
        'sort': 'createdAt:desc',
        'populate': '*'
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching new manga:', error);
    return { data: [] };
  }
}

/**
 * Get manga by ID
 * @param {string} id - Manga ID
 * @returns {Promise<Object>} - Manga data
 */
export async function getMangaById(id) {
  try {
    const response = await axios.get(`${API_URL}/mangas/${id}?populate=*`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching manga ${id}:`, error);
    return null;
  }
}

/**
 * Search manga by query
 * @param {string} query - Search query
 * @returns {Promise<Array>} - Array of manga data
 */
export async function searchManga(query) {
  try {
    // In a full implementation, we would use more sophisticated search
    const response = await axios.get(`${API_URL}/mangas`, {
      params: {
        'filters[title][$containsi]': query,
        'populate': '*'
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error searching manga:', error);
    return { data: [] };
  }
}