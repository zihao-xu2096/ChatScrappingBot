import React, { useState } from 'react'
export default function TwitchInput() {
    const [formdata, setFormData] = useState({
        twitchlink: ""
    });

    const json = JSON.stringify(formdata);

    const handleInput = (event) => {
        //setFormData({...formdata, [event.target.name]: event.target.value }); --Behind by 1 character all the time... why?
        const newFormData={...formdata}
        newFormData[event.target.id] = event.target.value // Keeps same formdata but adds name + value
        setFormData(newFormData);
        const json = JSON.stringify({...newFormData})
        console.log(newFormData)
        console.log(json)
        try {
            JSON.parse(json);
            console.log("Data is valid JSON Object")
        } catch (event) {
            console.log("Data is NOT a valid JSON Object")
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default action from occurs --> Let's me handle the input

        //axios.post('http://127.0.0.1:5000/twitchlink', JSON.stringify({
        //    input: formdata
        //}), {
        //    headers: { 'Content-Type': 'application/json' }
        //}, ).then((response) => {
        //    console.log(response.data);
        //  });
        //};
        try{
            JSON.parse(JSON.stringify({formdata}))
            console.log("Valid")
        }
        catch (e) {
            console.log("Invalid")
        }
        
        fetch('http://127.0.0.1:5000/twitchlink', { 
            mode: 'no-cors',
            method: 'POST',
            body: JSON.stringify({formdata}),
            headers: {'Content-Type':'application/json'}
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        });
    }
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Twitch Vod/Clip Link
            </label>
            <br></br>
            <input type="text" name="twitchlink" placeholder="link goes here" onChange={handleInput} id="twitchlink" value={formdata.twitchlink}></input>


            <button> Submit </button>

        </form>
    </div>
  )
}
