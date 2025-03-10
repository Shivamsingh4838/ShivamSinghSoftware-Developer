import React, { useEffect, useState } from 'react'
const API_KEY= import.meta.env.VITE_APP_GIPHY_API_KEY;
import axios from 'axios';
import Spinner from './Spinner';

function Random() {
    const [gif,setGif] = useState('');
    const [loading, setLoading] = useState(false);
   
    async function fetchData() {
      setLoading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const {data} = await axios.get(url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false);

      
    }
    useEffect( () => {
      fetchData();
    },[])
    function clickHandler(){
      fetchData();
        
    }
  return (
    <div className='bg-green-500 rounded-lg border-black '>
        <h1>Random Gif</h1>
        {
          loading ? (<Spinner/>) : (<img src={gif} className='mx-auto'/>)
        }
        
        <button onClick={clickHandler}>
            Generate
        </button>
      
    </div>
  )
}

export default Random
