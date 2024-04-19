import { useState } from "react"
import React from 'react'

function StateLogin() {
    const [playerName, setPlayerName] = useState('')
    const [submitted, setSunmitted] = useState(false)
  
  function handleChange(event) {
setPlayerName(event.target.value)
console.log(playerName)
  }

  function handleSubmitted() {
setSunmitted(true)
  }
    return (
   <section>
    <h2>Welcome {submitted ? playerName : 'unknown enitiy'}</h2>
   <p>
    <input type="text" placeholder='enter name' onChange={handleChange} value={playerName} />
    <button onClick={handleSubmitted}>Set Name</button>
   </p>
   </section>
  )
}

export default StateLogin