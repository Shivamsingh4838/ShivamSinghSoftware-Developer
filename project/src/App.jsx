import { useState } from 'react'
import reactLogo from './assets/react.svg'


import './App.css'
import Random from './components/Random'
import Tag from './components/Tag'


function App() {


  return (
    <>
      <div>
        <h1 >Random Gifs</h1>
        <div className='flex flex-col'>
          <Random/>
          <Tag/>
        </div>
      </div>
    </>
  )
}

export default App
