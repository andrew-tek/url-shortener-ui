import React, { useState } from 'react';

interface UrlShortenerFormProps {
  onSubmit: (longUrl: string) => void;
}

const UrlShortenerForm: React.FC<UrlShortenerFormProps> = ({ onSubmit }) => {
  const [longUrl, setLongUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(longUrl);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input
        type="url"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        placeholder="Enter a long URL"
        className="p-2 border rounded mb-2"
        required
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Shorten URL
      </button>
    </form>
  );
};

export default UrlShortenerForm;