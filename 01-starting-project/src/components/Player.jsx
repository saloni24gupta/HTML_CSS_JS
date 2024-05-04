import React, {useState} from 'react'

function Player() {
    const [enteredPlayerName, setEnterPlayerName] = useState('');
 const [submitted, setSubmitted] = useState(false)
 function handleChange(e) {
    setSubmitted(false);
    setEnterPlayerName(e.target.value);
    console.log(enteredPlayerName)
    }
    function handleClick() {
        setSubmitted(true);
    }
    return (
    <div>

        <h2>Welcome {submitted ? enteredPlayerName : 'unknown entity'}</h2>
        <input type="text" placeholder='Enter Name'  onChange={handleChange} value={enteredPlayerName}/>
        <button onClick={handleClick}>set Name</button>
    </div>
  )
}

export default Player