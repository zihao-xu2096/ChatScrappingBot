import React from 'react'
import videoBg from '../assets/twitchchat.mp4'
import Typed from 'typed.js'

export default function MainVideo() {

    return (
    
    <div className='mainvideo'>
        <video className='twitchvid' src={videoBg} autoPlay loop muted playsInline></video>
        
    </div>
  )
  

}
