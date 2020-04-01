import React, {useState} from 'react'



function HookArray04() {

    const initialArray = [ 5, 6, 11]

    const [ numbers, setNumbers ] = useState(initialArray);


    const addNumber = () => {
        setNumbers([ ...numbers, Math.floor(Math.random() * 10 +1 )])
    }

    return (
        <div>
            <button onClick= {addNumber} > Add a Number</button>
            <ul>
                { 
                    numbers.map( (item, index) => <li key={index}>{item}</li> )
                }
            </ul>
            
        </div>
    )
}



export default HookArray04
