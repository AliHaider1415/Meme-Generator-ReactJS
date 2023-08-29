import React from 'react'
import './Navbar.css'
import meme_guy from './meme-guy.png'
export default function Navbar() {
  return (
    <nav className='navbar'>
        <img src={meme_guy} alt="face_img" />
        <h2>Meme Generator</h2>
    </nav>
  )
}
