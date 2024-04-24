import React, { useState } from 'react'

function TimerChallenge({title, targetTime}) {
    const [timerStarted, setTimerStared] = useState(false);
const [timerExpired, setTimerExpired] = useState(false);
    function handleStart(){
        setTimeout(() => {
            setTimerExpired(true);
}, targetTime * 1000);
  
setTimerStared(true);
}



    return (
    <section className='challenge'>
        <h2>{title}</h2>
        {timerExpired && <p>You Lost</p>}
        <p className='challenge-time'>
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
        <button onClick={handleStart}>
            {/* start challenge or stop challenge (useState => 1) */}
            {/* Start Chalenge */}
           {timerStarted ? 'Stop' : 'Start'} Challenge
            </button>
        </p>
        <p className=''>
            {/* className="active"   or className="" */}
            Time is running  / Time inactive
        </p>
        
    </section>
  )
}

export default TimerChallenge