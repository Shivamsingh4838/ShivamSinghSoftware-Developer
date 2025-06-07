import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Tag.css';

const API_KEY = import.meta.env.VITE_APP_GIPHY_API_KEY;

function Tag() {
  const [tag, setTag] = useState('');
  const [memeUrl, setMemeUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchMeme = async () => {
    setLoading(true);
    setError('');
    try {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${encodeURIComponent(tag)}`;
      const { data } = await axios.get(url);
      if (data && data.data && data.data.images && data.data.images.downsized_large.url) {
        setMemeUrl(data.data.images.downsized_large.url);
      } else {
        setError('No meme found for this tag.');
        setMemeUrl('');
      }
    } catch (err) {
      console.error('Error fetching meme:', err);
      setError('Error fetching meme. Try again later.');
      setMemeUrl('');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeme();
  }, []);

  const handleClick = () => {
    if (!tag.trim()) return;
    fetchMeme();
  };

  const handleChange = (e) => {
    setTag(e.target.value);
  };

  return (
    <div className="tag-container">
      <h2 className="tag-title">🎯 Generate Meme by Tag (Subreddit)</h2>

      <div className="tag-image-wrapper">
        {loading ? (
          <div className="spinner-wrapper">
            <div className="spinner"></div>
          </div>
        ) : memeUrl ? (
          <img
            src={memeUrl}
            alt={`Meme from ${tag || 'memes'}`}
            className="tag-image"
            loading="lazy"
          />
        ) : (
          <p className="tag-no-meme">{error || 'No meme to display'}</p>
        )}
      </div>

      <div className="tag-input-group">
        <input
          type="text"
          value={tag}
          onChange={handleChange}
          placeholder="Enter a subreddit tag (e.g. dankmemes, wholesome, funny)"
          className="tag-input"
        />
        <button onClick={handleClick} className="tag-button">
          🔁 Generate
        </button>
      </div>

      <p className="tag-hint">
        Try tags like: <em>dankmemes, wholesome, funny, memes</em>
      </p>
    </div>
  );
}

export default Tag;
