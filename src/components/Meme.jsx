import React from 'react'
import { useState } from 'react'
import memesData from '../Data'


const Meme = () => {
  const [meme,setMeme] =useState({
    topText:"",
    bottomText:"",
    url: "images/space4.jpg"
  })
  const [allMemeImg,setAllMemeImg] = useState(memesData)

  const getImageMeme = () => {
    const memeArray = memesData
    const randomNumber = Math.floor(Math.random()*memeArray.length)
    const source = memesData[randomNumber].source
    setMeme(prevImg => ({...prevImg,url:source}))
  }

  return (
    <main>
        <div className='form'>
            <input 
                type="text" 
                className='form--input' 
                placeholder='Top text'/>
            <input 
                type="text" 
                className='form--input' 
                placeholder='Bottom text' />
            <button 
                className='form--button'
                onClick={getImageMeme}
                >Get a new meme image 🖼️
            </button>
        </div>
        <div className='meme--img'>
            <img src={meme.url} alt="" />
        </div>
    </main>
  )
}

export default Meme