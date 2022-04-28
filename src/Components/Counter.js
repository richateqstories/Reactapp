import React,{Component} from "react";

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            counter:0

        }
    }

    incrementHandler = () => {
        this.setState({counter: this.state.counter + 1})

    }

    decrementHandler = () =>{
        this.setState({counter: this.state.counter - 1})

    }
    render(){
        return(
            <div>
            <p>Counter:{this.state.counter} </p>
            <button onClick={this.incrementHandler}>Increment</button>
            <button onClick={this.decrementHandler}>Decrement</button>
            </div>
        )
    }

}
export default Counter;