import React, { Component} from 'react'
 
export class Sample extends Component{
    constructor(props){
        super(props)

         this.state={
             transDate : '28/12/2021',
             amount :30000,
             _id:'tr101'
         }
    }
    updatedata = ()=>{
        this.setState({
            amount:35000
        })
    }
   
    render(){
        const {transDate,amount} = this.state;
        return(
             <div>
                 <h3>Sample Class Based Component</h3>
                 <p>Transaction Date : {transDate},Amount:{amount}</p>
                 <button onClick={this.updatedata}>Update</button>
             </div>
        )
    }
    
}

export default Sample;