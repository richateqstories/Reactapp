import React,{Component} from 'react';

class Home2 extends Component{
    constructor(){
        super();
        this.state = {
            product:[
                {title:'Mobile',id:'1001'},
                {title:'Tab',id:'1002'}
            ],
            flag:true,
            employee:{
            name:'Anuj',
            email:'anuj@gmail.com',
            phone:8767877678
            }
        }
    }
    handleAlert=()=>{
        alert('Hello')
    }
    render(){
        return(
            <div>
                <h2>Product Details</h2>
                <p>Title:{this.state.product[0].title}</p>
                <p>Title:{this.state.product[1].title}</p>
                {this.state.flag && <div>
                <p>{this.state.employee.name}</p>
                <p>{this.state.employee.email}</p>
                <p>{this.state.employee.phone}</p></div>}
                <button onClick={this.handleAlert}>Click</button>


            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        )
    }
}
export default Home2;