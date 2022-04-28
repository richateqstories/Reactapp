import React,{Component} from 'react';

class Home1 extends Component{
    constructor(){
        super();
        this.state = {
            name:'Anuj',
            email:'anuj@gmail.com',
            phone:8767877678
        }
    }
    render(){
        return(
            <div>
                <p>{'4+4 ='+(4+4)}</p>
                <p>{this.state.name}</p>
                <p>{this.state.email}</p>
                <p>{this.state.phone}</p>


            </div>
           
        )
    }
}
export default Home1;