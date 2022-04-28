import React,{ Component }from "react";

class Lifecyclehook2 extends Component{
    constructor(props){
        super(props)

        this.state = {
            title:'Lifecycle Hook - child',
            data:{}
        }
        console.log('Lifecycle Constructor - child')
    }
    static getDerivedStateFromProps(props, state){
        console.log('Lifecycle getDerivedStateFromProps -child',props, state)
       
        if(props.transSummary){
            return{
                data:{
                    ...props.transSummary
                }

            }
        }
        return state;
    }
    componentDidMount(){
        console.log('Lifecycle componentDidMount - child')
    }
    shouldComponentUpdate(props, state){
        if(!props.counter){
            return false
        }
        return true
    }
    
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    render(){
        console.log('Lifecycle render - child')
        return (
            <div>
               <h3>{this.state.title}</h3>
               {this.state.data.transDate &&<p>Transaction Date: {this.state.data.transDate},Amount:{this.state.data.amount}</p>}
            </div>
        )
    }
}
export default Lifecyclehook2