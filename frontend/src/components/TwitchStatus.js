import React from 'react';
import TwitchLoggedIn from './TwitchLoggedIn';
import TwitchLoggedOut from './TwitchLoggedOut';

function TwitchStatus(){
    const isLoggedIn = false;
    
    return (
        <div className="Twitch-Page">
            {isLoggedIn ? (<TwitchLoggedIn/>): (<TwitchLoggedOut />)}
        </div>

    )
}
export default TwitchStatus