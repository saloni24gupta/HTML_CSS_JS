import React, { useState } from 'react'

function UserInput() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });
    // pass 2 argument => old Value and newValue
    function handleChange(inputIdentifier, newValue) {
    // step2 => prevUserInput (snapshot)
        setUserInput((prevUserInput)=> {
return {
    // step 3 =>  ...prevUserInput (previous data)
    ...prevUserInput, 
    [inputIdentifier]: newValue,
}
      })
    }
return (
<section id="user-input">
    <div className="user-group">
        <p>
            <label >Initial-Investment</label>
            <input type="number" required value={userInput. initialInvestment} onChange={(e) => handleChange(' initialInvestment', e.target.value)}/>
        </p>

        <p>
            <label>Annual Investment</label>
            <input type="number" required  value={userInput.annualInvestment} onChange={(e) => handleChange('annualInvestment', e.target.value)}/>
        </p>
</div>
<div className='input-group'> 
        <p>
            <label>Expected Return</label>
            <input type="number" required value={userInput.expectedReturn} onChange={(e) => handleChange('expectedReturn', e.target.value)}/>
        </p>
        <p>
            <label htmlFor="">Duration</label>
            <input type="number" required value={userInput.duration} onChange={(e) => handleChange('duration', e.target.value)}/>
        </p>
    </div>
    </section>   
  )
}

export default UserInput