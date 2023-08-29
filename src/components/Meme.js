import React, { useState } from 'react'
import './Meme.css'
import memesData from './MemesData'
export default function Meme() {

  const [memeImg, setmemeImg] = useState({
    topText: "",
    bottomText: "",
    randomImg: "https://i.imgflip.com/1g8my4.jpg"
  })

  const [allMemeImages, setallMemeImages] = useState(memesData)
    const getMeme = () => {
        const memesArr = memesData.data.memes
        const id = Math.floor(Math.random() * memesArr.length)
        const url = memesArr[id].url
        setmemeImg(prevMeme => ({
          ...prevMeme,
          randomImg: url
        }))
        
    }

    const handleChange = (e) => {
      const {name, value} = e.target
      setmemeImg((prevMeme =>({
        ...prevMeme,
        [name]: value
      })))
    }
  return (
    <>
    <div className="meme_container">
        <div className="inputs_container">
            <input type="text" name = 'topText' value={memeImg.topText} onChange={handleChange} placeholder='Upper Line'/>
            <input type="text" name = 'bottomText' value={memeImg.bottomText} onChange={handleChange} placeholder='Lower Line'/>
        </div>
        <button className='meme_btn' onClick={getMeme}>Get a new meme image</button>
    </div>
    <p className='line_text1'>{memeImg.topText}</p>
    <p className='line_text2'>{memeImg.bottomText}</p>
     <img className='meme_img' src={memeImg.randomImg} alt = "meme image"/>
     </>
  )
}
