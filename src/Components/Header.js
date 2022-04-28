import React from 'react';
import { Link } from 'react-router-dom';

function NavLink({to, ...rest}){
    return <Link to = {to} {...rest} />
}

function Header() {
    return (
        <div>
            <ul style={{backgroundColor:'lightpink',padding:'20px 10px',   display:'flex', justifyContent:'space-evenly'}}>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/about" ><li>About</li></NavLink>
                <NavLink to="/products"><li>Products</li></NavLink>
            </ul>

        </div>
    )
}

export default Header;