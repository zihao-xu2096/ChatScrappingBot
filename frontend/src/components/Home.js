import React from 'react';
import videoBg from '../assets/twitchchat.mp4'
import Typed from 'typed.js'
import About from './About'
export default function Home() {

    const el = React.useRef(null);
    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: [
                'Youtube',
                'Twitch',
                'Facebook Gaming'
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            showCursor: false,
            smartBackspace: true
        };
    

    typed.current = new Typed(el.current, options);

    return () => {
        typed.current.destroy();
    }
    }, [])
    return (
    <body>
        <div className='mainvideo'>
            <video className='twitchvid' src={videoBg} autoPlay loop muted playsInline></video>
        </div>
        <h2 className='hero'> Get live chat informatics from vods and clips from:  <span ref={el}></span> </h2>
        <About></About>
    </body>
    )
}
