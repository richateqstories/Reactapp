import React,{Component} from "react";
import Lifecyclehook2 from "./Lifecyclehook2";

class Lifecyclehook1 extends Component{
    constructor(props){
        super(props)

        this.state={
            title:'Lifecycle Hooks',
            counter:0,
            transSummary:{
                transDate:'28/12/2021',
                amount:30000,
                id:'tr101'

            }

        }
        console.log('Lifecycle Constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle getDerivedStateFromProps',props,state)
        return null
    }
    componentDidMount(){
        console.log('Lifecycle componentDidMount')
    }
    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(props, state, snapshort){
        console.log('getSnapshotBeforeUpdate',props, state, snapshort)
        return state.counter
    }
    handleCounter =(val)=>{
        this.setState({counter:this.state.counter +val})
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    render(){
        console.log('Lifecycle render')
        return (
            <div>
                <h3>Lifecycle Hooks </h3>
                <p>Counter:{this.state.counter}</p>
                <button onClick={()=>this.handleCounter(1)}>Click</button>
                {this.state.counter<=2&&<Lifecyclehook2 title = {this.state.title}  transSummary={this.state.transSummary}/>}
            </div>
        )
    }
}

export default Lifecyclehook1