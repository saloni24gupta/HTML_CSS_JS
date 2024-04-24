import { useState, useRef } from "react"
import React from 'react'

function StateLogin() {
    
const playerName = useRef();
const [enterPlayerName, setEnterPlayerName] = useState('Max')
  
 

  function handleSubmitted() {
setEnterPlayerName(playerName.current.value);
console.log(enterPlayerName)
  }
    return (
   <section>
    <h2>Welcome {enterPlayerName? enterPlayerName : 'unknown enitiy'}</h2>
   <p>
    <input ref={playerName} type="text" placeholder='enter name' />
    <button onClick={handleSubmitted}>Set Name</button>
   </p>
   </section>
  )
}

export default StateLogin