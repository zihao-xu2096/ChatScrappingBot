import React from 'react'
import videoBg from '../assets/twitchchat.mp4'

export default function MainVideo() {
    return (
    <div className='mainvideo'>
        <video className='twitchvid' src={videoBg} autoPlay loop muted playsInline></video>
        <h2 className='hero'> Get chat informatics from vods, clips on  <span class='auto-type'></span></h2>
        
    </div>
  )
  

}
