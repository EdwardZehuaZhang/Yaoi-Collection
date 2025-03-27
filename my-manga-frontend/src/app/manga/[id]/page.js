// src/app/manga/[id]/page.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function MangaDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [manga, setManga] = useState(null);

  useEffect(() => {
    if (!id) return;
    axios.get(`http://localhost:1337/api/mangas/${id}`)
      .then(response => {
        setManga(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching manga detail:', error);
      });
  }, [id]);

  if (!manga) return <div>Loading...</div>;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">{manga.attributes.title}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={manga.attributes.coverImage || '/placeholder.jpg'}
          alt={manga.attributes.title}
          className="w-full md:w-1/3 rounded"
        />
        <div>
          <p><strong>Artist:</strong> {manga.attributes.artist}</p>
          <p><strong>Group:</strong> {manga.attributes.group}</p>
          <p><strong>Language:</strong> {manga.attributes.language}</p>
          <p><strong>Categories:</strong> {manga.attributes.categories}</p>
          <p><strong>Pages:</strong> {manga.attributes.pages.length}</p>
          <p><strong>Uploaded:</strong> {manga.attributes.uploadedTime}</p>
        </div>
      </div>
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Manga Pages</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {manga.attributes.pages.map((pageUrl, idx) => (
            <img key={idx} src={pageUrl} alt={`Page ${idx + 1}`} className="w-full rounded" />
          ))}
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">More Like This</h2>
        {/* Render similar manga entries */}
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Comments</h2>
        {/* Comments section */}
      </section>
    </main>
  );
}
