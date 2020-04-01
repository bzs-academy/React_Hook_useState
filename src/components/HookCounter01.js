import React, { useState } from 'react'



function HookCounter01() {

    const [ counter, setCounter ] = useState(0)
    const [ sehir, setSehir ] = useState('istanbul')


    const incrementCounter = () => {
        setCounter(counter + 1)
    }

    return (
        <div className="App">
            <p onClick = { () => setSehir('Izmir') } >{sehir}</p>
            <p> Counter : {counter} </p>
            <button onClick = { incrementCounter } >Increase with Hook</button>
        </div>
    )
}

export default HookCounter01

