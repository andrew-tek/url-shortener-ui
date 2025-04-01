import React, { useState } from 'react';
import UrlShortenerForm from '../components/UrlShortenerForm';

const Home: React.FC = () => {
  const [shortUrl, setShortUrl] = useState<string | null>(null);

  const handleUrlSubmit = async (longUrl: string) => {
    // Call your backend API to shorten the URL
    const response = await fetch('/api/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ longUrl }),
    });
    const data = await response.json();
    setShortUrl(data.shortUrl);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">URL Shortener</h1>
      <UrlShortenerForm onSubmit={handleUrlSubmit} />
      {shortUrl && (
        <div className="mt-4">
          <p>Short URL:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default Home;