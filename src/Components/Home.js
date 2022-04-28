import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

function NavLink({to,...rest}){
    return <Link to ={to} {...rest}/>
}

class Home extends Component {
    constructor(){
        super();
        this.state ={
            

    }
}
    render(){
        return(
            <div>
                <h2>Home</h2>
               <ul style={{background:'lightpink',padding:'20px 10px',  display:'flex',justifyContent:'space-evenly'}}>
               <NavLink to='/'><li>Grocery</li></NavLink>
               <NavLink to='/fashion'><li>Fashion</li></NavLink>
               <NavLink to='/electronics'><li>Electronics</li></NavLink>
               <NavLink to='/toys'><li>Toys</li></NavLink>
            </ul>
            <div>
                <Outlet/>
            </div>
            </div>
        )
    }
}
export default Home;