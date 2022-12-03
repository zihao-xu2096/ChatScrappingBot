import React, {useState, useEffect} from 'react';
// Usestate create state variable containing data retrived from the backend
// useEffect fetches backend api on first render
function App() {
  
  const [data, setData] = useState([{}]) // Data is actual variable, setData is a function that manipulates Data variable
  
  useEffect(() => {
    fetch("/members").then(
      response => response.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, []);

  return(
    <div>
        {(data.members)}
    </div>

  )}

export default App