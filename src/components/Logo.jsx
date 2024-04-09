import React from 'react'
import logo from '../assets/images/pc-icon.png';

const Logo = () => {
  return (
    <div className='Logo h-8 w-8'>
       <a href="/" className="flex items-center space-x-2">
      <img src={logo} className="cursor-pointer rounded-full" alt="logo" />
      <span className="font-semibold font-great-vibes">FrontendFLow</span>
    </a>
    </div>
  )
}

export default Logo;