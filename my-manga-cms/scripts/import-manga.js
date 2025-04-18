const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Configuration
const API_URL = 'http://localhost:1400/api';
const API_TOKEN = '59bc1ac8deef938bf08d4d6f6951889a7810d0d562852320cb6090bf845a935126bd919373d17a876d6f025e6445d14486d80fce263160fccd51a75f4e30ab02a0c813249babcf3035117d9bff099bd4c7ed6028c0e6836fa068c40840603820ff7c6943842937d513d1c8a4933e35ad17a34202a76de9ee6b68265fb0212bab';
const MANGA_DATA_FOLDER = path.resolve(__dirname, '../../my-manga-crawl/yaoi_manga_data');
const UPLOAD_FOLDER = path.resolve(__dirname, '../public/uploads/manga');

// Ensure upload directories exist
if (!fs.existsSync(UPLOAD_FOLDER)) {
  fs.mkdirSync(UPLOAD_FOLDER, { recursive: true });
}

// Add authentication headers to all requests
axios.defaults.headers.common['Authorization'] = `Bearer ${API_TOKEN}`;

// async function checkAndCreateContentType() { /* removed for Strapi v4 */ }

/**
 * Get all manga directories from the data folder
 */
async function getMangaDirectories() {
  try {
    const dirs = fs.readdirSync(MANGA_DATA_FOLDER);
    return dirs.filter(dir => {
      const stat = fs.statSync(path.join(MANGA_DATA_FOLDER, dir));
      return stat.isDirectory();
    });
  } catch (error) {
    console.error('Error reading manga directories:', error);
    return [];
  }
}

/**
 * Parse manga metadata from JSON file
 */
function parseMangaMetadata(mangaDir) {
  try {
    const metadataPath = path.join(MANGA_DATA_FOLDER, mangaDir, 'metadata.json');
    if (fs.existsSync(metadataPath)) {
      const data = fs.readFileSync(metadataPath, 'utf8');
      return JSON.parse(data);
    }
    return null;
  } catch (error) {
    console.error(`Error parsing metadata for ${mangaDir}:`, error);
    return null;
  }
}

/**
 * Copy cover image to uploads folder
 */
function copyCoverImage(mangaDir, mangaId) {
  try {
    // Find the first image file in the directory
    const files = fs.readdirSync(path.join(MANGA_DATA_FOLDER, mangaDir))
      .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
    
    if (files.length > 0) {
      const coverImagePath = path.join(MANGA_DATA_FOLDER, mangaDir, files[0]);
      const destPath = path.join(UPLOAD_FOLDER, `${mangaId}_cover${path.extname(files[0])}`);
      
      fs.copyFileSync(coverImagePath, destPath);
      return `/uploads/manga/${path.basename(destPath)}`;
    }
    return null;
  } catch (error) {
    console.error(`Error copying cover image for ${mangaDir}:`, error);
    return null;
  }
}

/**
 * Check if manga has specific tag (case-insensitive)
 */
function hasTag(metadata, tagToFind) {
  if (!metadata || !metadata.tag || !Array.isArray(metadata.tag)) {
    return false;
  }
  return metadata.tag.some(tag => tag.toLowerCase() === tagToFind.toLowerCase());
}

/**
 * Import manga into Strapi CMS
 */
async function importManga(mangaDir, metadata) {
  try {
    // Generate a slugified title for URLs
    const slug = metadata.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    // Create a unique ID for the manga
    const mangaId = metadata.URL ? 
      metadata.URL.split('/').pop() : 
      `manga-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    
    // Copy cover image
    const coverImagePath = copyCoverImage(mangaDir, mangaId);

    // Prepare data for Strapi
    const strapiData = {
      data: {
        title: metadata.title || 'Unknown Title',
        slug: slug,
        favorite_count: metadata.favorite_counts || 0,
        upload_date: metadata.upload_date || new Date().toISOString(),
        tags: Array.isArray(metadata.tag) ? metadata.tag.join(',') : '',
        artist: Array.isArray(metadata.artist) ? metadata.artist.join(',') : '',
        group: Array.isArray(metadata.group) ? metadata.group.join(',') : '',
        parody: Array.isArray(metadata.parody) ? metadata.parody.join(',') : '',
        characters: Array.isArray(metadata.character) ? metadata.character.join(',') : '',
        language: Array.isArray(metadata.language) ? metadata.language.join(',') : '',
        categories: Array.isArray(metadata.category) ? metadata.category.join(',') : '',
        pages: metadata.Pages || 0,
        source_url: metadata.URL || '',
        cover_image: coverImagePath,
        is_yaoi: hasTag(metadata, 'yaoi'),
        folder_path: mangaDir
      }
    };

    console.log('Attempting to import manga with data:', JSON.stringify(strapiData, null, 2));

    // Create manga entry in Strapi
    const response = await axios.post(`${API_URL}/mangas`, strapiData);

    console.log(`Successfully imported: ${metadata.title}`);
    return response.data;
  } catch (error) {
    console.error(`Error importing ${mangaDir}:`);
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error('Response data:', JSON.stringify(error.response.data, null, 2));
      console.error('Response status:', error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Connection error - no response received');
      console.error('Request details:', error.request._currentUrl);
    } else {
      // Something happened in setting up the request
      console.error('Error details:', error.message);
    }
    return null;
  }
}

/**
 * Main function to import all manga
 */
async function importAllManga() {
  try {
    console.log('Starting manga import process...');
    
    // await checkAndCreateContentType(); // skip content-type check on Strapi v4
    
    // Get all manga directories
    const mangaDirs = await getMangaDirectories();
    console.log(`Found ${mangaDirs.length} manga directories`);
    
    // Filter and import yaoi manga
    let importedCount = 0;
    let yaoiCount = 0;
    
    for (const mangaDir of mangaDirs) {
      const metadata = parseMangaMetadata(mangaDir);
      
      if (!metadata) {
        console.log(`Skipping ${mangaDir}: No metadata found`);
        continue;
      }
      
      const isYaoi = hasTag(metadata, 'yaoi');
      if (isYaoi) {
        yaoiCount++;
        console.log(`Processing yaoi manga: ${metadata.title}`);
      } else {
        console.log(`Processing manga: ${metadata.title}`);
      }
      
      const result = await importManga(mangaDir, metadata);
      
      if (result) {
        importedCount++;
      }
    }
    
    console.log(`Import completed. Successfully imported ${importedCount} manga.`);
    console.log(`Found ${yaoiCount} manga with yaoi tag.`);
  } catch (error) {
    console.error('Import process failed:', error);
  }
}

// Run the import function
importAllManga();