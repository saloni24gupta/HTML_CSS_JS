import React, { useState } from 'react'

function UserInput() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

function handleChange(inputIdentifier, newValue) {
setUserInput((prevUserInput) => {
    return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
    };
});
console.log(UserInput)
}

    return (
        <section>
            <div>
                <p>
                    <label htmlFor="">Initial Investment</label>
                    <input type="number" required
                   value={UserInput.initialInvestment}
                   onChange={(e) => {
                        handleChange('initialInvestment', e.target.value)
                    }}
                    />

                </p>

                <p>
                    <label htmlFor="">Annual Investment</label>
                    
                    <input type="number" required
                    value={UserInput.annualInvestment}
                    onChange={(e) => {
                        handleChange('annualInvestment', e.target.value);
                    }}
                    />

                </p>
            </div>

            <div>
                <p>
                    <label htmlFor="">Expected Return</label>
                    <input type="number" required 
                    value={userInput.expectedReturn}
                    onChange={(e) => {'expectedReturn', e.target.value}}
                    />

                </p>

                <p>
                    <label htmlFor="">Duration</label>
                    <input type="number" required 
                    value={UserInput.duration} 
                    onChange={(e) => {
'duration', e.target.value
                    }}
                    />

                </p>
            </div>
        </section>
    )
}

export default UserInput