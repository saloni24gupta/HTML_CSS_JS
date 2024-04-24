import { useState, useRef } from "react";

export default function Player() {
  const [enteredPlayerName, setEnterPlayerName] = useState('')
const playerName = useRef();
  function handleChange() {
    setEnterPlayerName(playerName.current.value)
    playerName.current.value = '';
  } 
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text"
        />
        <button onClick={handleChange}>Set Name</button>
      </p>
    </section>
  );
}
