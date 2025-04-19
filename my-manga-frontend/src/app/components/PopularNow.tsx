"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getPopularManga } from '@/lib/apiService';

export default function PopularNow({ limit = 6 }) {
  const [mangaList, setMangaList] = useState([]);

  useEffect(() => {
    getPopularManga(limit)
      .then(res => {
        console.log('PopularNow fetch response:', res);
        setMangaList(res.data || []);
      })
      .catch(err => {
        console.error('PopularNow fetch error:', err);
      });
  }, [limit]);

  if (mangaList.length === 0) {
    return <div>Loading popular manga...</div>;
  }

  return (
    <div className="flex items-center justify-between w-full">
      {mangaList.map(manga => {
        // Safely get cover_image, fallback to placeholder
        const coverField = manga.attributes?.cover_image || manga.attributes?.coverImage;
        const imgPath = coverField || '/placeholder.jpg';
        // Determine image source URL:
        let src;
        if (imgPath === '/placeholder.jpg') {
          // local placeholder asset
          src = imgPath;
        } else if (imgPath.startsWith('/uploads')) {
          // prefix Strapi uploads
          src = `http://localhost:1400${imgPath}`;
        } else if (imgPath.startsWith('http')) {
          // full URL from API
          src = imgPath;
        } else {
          // all other: use placeholder
          src = '/placeholder.jpg';
        }
        const mangaTitle = manga.attributes?.title || manga.attributes?.Title || 'Untitled';
        return (
          <Link
            href={`/manga/${manga.id}`}
            key={manga.id}
            className="w-[196.62px] bg-content-alpha-20 rounded border-[0.84px] border-solid border-contentreversed p-0"
          >
            <div className="flex flex-col items-center gap-[4.07px] p-0">
              <div className="w-full h-[284.96px] relative">
                <Image
                  src={src}
                  alt={mangaTitle}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-[4.22px]"
                />
              </div>
              <div className="flex items-start w-full px-0.5 py-0">
                <div className="font-label-300 !text-content-reversed text-[12.7px] text-center tracking-[0] leading-[16.9px] flex-1 pl-1">
                  {mangaTitle}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}