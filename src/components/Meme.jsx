import React from 'react'
import { useState } from 'react'
import meme from '../Data'


const Meme = () => {
  const [allMemeImg,setAllMemeImg] = useState(meme)

  const getImageMeme = () => {
    const memeArray = meme
    const randomNumber = Math.floor(Math.random()*memeArray.length)
    const source = meme[randomNumber].source
    setAllMemeImg(source)
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
            <img src={allMemeImg} alt="" />
        </div>
    </main>
  )
}

export default Meme