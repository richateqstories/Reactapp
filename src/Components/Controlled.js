import React, { Component } from "react";

export class Controlled extends Component{
    constructor(props){
        super(props)

        this.state={
            username:' ',
            password:' '
        }
    }
    
    changeHandler = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        },()=>console.log(this.state))
    }

    submitHandler =(event)=>{
        event.preventDefault()
        console.log(this.state)
    }


    render(){
        const {username, password} =this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    Username: <input type ='text'name='username' value={username} onChange={this.changeHandler}/><br/>
                    Password: <input type ='password' name='password' value={password} onChange={this.changeHandler}/><br/>
                    <button type='submit'>Submit</button>

                </form>
            </div>
        )
    }
}
export default Controlled