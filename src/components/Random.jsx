import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import './Random.css';  // Import separate CSS

function Random() {
  const [memeUrl, setMemeUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const url = 'https://meme-api.com/gimme';
      const { data } = await axios.get(url);
      setMemeUrl(data.url);
    } catch (error) {
      console.error('Error fetching meme:', error);
      alert('Oops! Could not fetch meme. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="random-container">
      <h1 className="random-title">🎲 Random Meme Generator</h1>

      <div className="random-image-wrapper">
        {loading ? (
          <div className="spinner-wrapper">
            <Spinner />
          </div>
        ) : memeUrl ? (
          <img
            src={memeUrl}
            alt="Random Meme"
            className="random-image"
            loading="lazy"
          />
        ) : (
          <p className="random-no-meme">No meme to display</p>
        )}
      </div>

      <button className="random-button" onClick={fetchData}>
        🔁 Generate New Meme
      </button>
    </div>
  );
}

export default Random;
