import React,{Component} from "react";
import LifecycleTwo from "./LifecycleTwo";

class LifecycleOne extends Component{
    constructor(props){
        super(props)

        this.state={
            title:'Lifecycle Hooks',
            counter:0

        }
        console.log('Lifecycle Constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle getDerivedStateFromProps',props,state)
    }
    componentDidMount(){
        console.log('Lifecycle componentDidMount')
    }
    handleCounter =(val)=>{
        this.setState({counter:this.state.counter +val})
    }


    render(){
        console.log('Lifecycle render')
        return (
            <div>
                <h3>Lifecycle Hooks </h3>
                <p>Counter:{this.state.counter}</p>
                <button onClick={()=>this.handleCounter(1)}>Click</button>
                <LifecycleTwo title = {this.state.title} counter={this.state.counter}/>
            </div>
        )
    }
}

export default LifecycleOne