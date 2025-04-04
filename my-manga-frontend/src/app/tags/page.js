// src/app/tags/page.js
import Link from 'next/link';

export default function TagsPage() {
  const tags = ['Action', 'Drama', 'Romance', 'Comedy', 'Fantasy']; // Or fetch from your API

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Tags</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tags.map((tag, index) => (
          <Link
            key={index}
            href={`/?tag=${encodeURIComponent(tag)}`}
            className="border p-4 rounded text-center hover:bg-gray-100">
            {tag}
          </Link>
        ))}
      </div>
      {/* Add pagination or alphabetical organization if needed */}
    </main>
  );
}
