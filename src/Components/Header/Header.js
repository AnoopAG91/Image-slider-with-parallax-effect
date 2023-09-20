import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='header'>
        <div className='header-left'>
            <h3>LOGO</h3>
        </div>
        <div className='header-right'>
            <span>Home</span>
            <span>About</span>
            <span>Gallery</span>
            <span>Contact</span>
        </div>
    </div>
  )
}

export default Header