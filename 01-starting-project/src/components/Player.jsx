
import React, {useState, useRef} from 'react'
// step 1 =>  import useRef
function Player() {
    const [enteredPlayerName, setEnterPlayerName] = useState('');
    // step 2 => declear useRef fun value
const playerName = useRef()
//  const [submitted, setSubmitted] = useState(false)

    function handleClick() {
        // setSubmitted(true);
        // step 4 => setPlayervalue => playername,current.value
        setEnterPlayerName(playerName.current.value)
    }
    return (
    <div>

        <h2>Welcome {enteredPlayerName ? enteredPlayerName : 'unknown entity'}</h2>
        {/* step 3 => define ref={value} */}
        <input type="text"  ref={playerName} />
        <button onClick={handleClick}>set Name</button>
    </div>
  )
}

export default Player