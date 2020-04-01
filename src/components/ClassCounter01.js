import React, { Component } from 'react'

class ClassCounter01 extends Component {
    constructor(props) {
        super(props)
        this.state = {
             counter : 0
        }
    }
    
    incrementCounter = () => {
        // this.setState({
        //     counter : this.state.counter + 1
        // })
        this.setState((prevState) => {
            return { counter : prevState.counter + 1}
        })
    }

    render() {
        return (
            <div className="App">
                <p> Counter : {this.state.counter} </p>
                <button onClick = { this.incrementCounter } >Increase with Class</button>
            </div>
        )
    }
}

export default ClassCounter01;
