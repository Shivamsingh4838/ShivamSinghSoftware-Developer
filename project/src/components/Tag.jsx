import React, { useEffect, useState } from 'react'
const API_KEY= import.meta.env.VITE_APP_GIPHY_API_KEY;
import axios from 'axios';
import Spinner from './Spinner';

function Tag() {
  const [tag,setTag]= useState('')
    const [gif,setGif] = useState('');
    const [loading, setLoading] = useState(false);
   
    async function fetchData() {
      setLoading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
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
    function changeHandler(event){
      setTag(event.target.value);
    }
  return (
    <div className='bg-orange-500 rounded-lg border-black mx-auto'>
        <h1>Random Gif</h1>
        {
          loading ? (<Spinner/>) : (<img src={gif}/>)
        }
        <input 
        onChange={changeHandler} 
        value={tag}/>
        
        <button onClick={clickHandler }>
            Generate
        </button>
      
    </div>
  )
}

export default Tag
