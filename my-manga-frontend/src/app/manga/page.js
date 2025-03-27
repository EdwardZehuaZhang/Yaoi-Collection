// src/app/manga/page.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import MangaCard from '../../components/MangaCard';

export default function MangaCollection() {
  const [mangaList, setMangaList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/api/mangas')
      .then(response => {
        setMangaList(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching manga data:', error);
      });
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Manga Collection</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mangaList.map((manga) => (
          <MangaCard key={manga.id} manga={manga} />
        ))}
      </div>
      {/* Pagination component or link to next page can go here */}
    </main>
  );
}
