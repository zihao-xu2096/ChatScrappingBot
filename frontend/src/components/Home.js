import React from 'react';
import videoBg from '../assets/twitchchat.mp4'
import Typed from 'typed.js'
export default function Home() {
  return (
    <body>
        <div className='mainvideo'>
            <video className='twitchvid' src={videoBg} autoPlay loop muted playsInline></video>
        </div>
        <h2 className='hero'> Get chat informatics from vods, clips on  <span class='auto-type'></span></h2>
        <div className='About-Section'>
            <h3> How does it work?</h3>
        </div>
    </body>
  )
}
