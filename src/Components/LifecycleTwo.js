import React,{ Component }from "react";

class LifecycleTwo extends Component{
    constructor(props){
        super(props)

        this.state = {
            title:'Lifecycle Hooks'
        }
        console.log('Lifecycle Constructor - child')
    }
    static getDerivedStateFromProps(props, state){
        console.log('Lifecycle getDerivedStateFromProps -child',props, state)
        if(props.counter ===5){
            return {
                title:`${props.title} - child`
            }
        }
    }
    componentDidMount(){
        console.log('Lifecycle componentDidMount - child')
    }
    render(){
        console.log('Lifecycle render - child')
        return (
            <div>
               <h3>{this.state.title}</h3>
            </div>
        )
    }
}
export default LifecycleTwo