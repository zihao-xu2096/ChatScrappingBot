import React, { useState, useEffect} from 'react';
import TwitchInput from './User-Input/TwitchInput';


function TwitchLoggedOut(){
    const [data, setData] = useState([{}])

    useEffect(() => { // Called when useState is called
        fetch("/members").then(
            res => res.json()
        ).then(
            data => {
                setData(data) // <data> the parameter in const, the data from fetch().json()
                console.log(data)
            }
        )
    }, []) // [] suggests that useEffect is only repeated once instead of an infinite loop
    // The bracket is a dependency

    return (

        <div>

            <TwitchInput></TwitchInput>
            <p>
                I am logged out of twitch.
            </p>

        </div>
    )
}
export default TwitchLoggedOut