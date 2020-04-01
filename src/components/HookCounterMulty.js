import React, { useState } from 'react'



function HookCounterMulty() {

    const [ counter, setCounter ] = useState(0)
    
    const incrementCounter = () => {
        setCounter( x => x + 1 )
    }

    const decrementCounter = () => {
        setCounter(prevCounter => prevCounter - 1)
    }
    
    const resetCounter = () => {
        setCounter(0)
    }
    const incrementCounterFive = () => {
        //setCounter(counter + 5)

        // for(let i = 0; i<5; i++) {
        //     setCounter( counter + 1 );
        // }
        
        // DOGRU YAZILIM
        //setCounter( prevCounter => prevCounter + 5 )

        for(let i = 0; i<5; i++) {
            setCounter( prevCounter => prevCounter + 1 );
        }
    }
    
    

    return (
        <div className="App">
            <p> Counter : {counter} </p>
            <button onClick = { incrementCounter } >Increase with Hook</button>
            <button onClick = { decrementCounter } >Decrease with Hook</button>
            <button onClick = { resetCounter } >Reset with Hook</button>
            <button onClick = { incrementCounterFive } >Increase 5 with Hook</button>
            
        </div>
    )
}

export default HookCounterMulty